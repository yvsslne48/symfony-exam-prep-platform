import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

// ── Syntax highlighter ──────────────────────────────────────────
// Strategy: tokenize FIRST (on raw text), then HTML-escape each token's text.
// This prevents escaped entities from confusing regex patterns.

const ESC = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
const span = (cls, text) => `<span class="${cls}">${ESC(text)}</span>`

// ── Per-language tokenizers ─────────────────────────────────────

// Java / PHP / JS: char-by-char tokenizer
const KW = new Set(['public','private','protected','static','final','abstract','class',
  'interface','enum','extends','implements','new','return','if','else','elseif','for',
  'foreach','while','do','try','catch','finally','throw','throws','import','package',
  'void','int','long','double','float','boolean','String','null','true','false','this',
  'super','instanceof','var','record','sealed','const','let','function','async','await',
  'export','default','typeof','undefined','readonly','namespace','use','echo','print',
  'self','parent','never','string','bool','array'])

function tokenizeJava(code) {
  let out = '', i = 0, n = code.length
  while (i < n) {
    // Block comment /* */
    if (code[i]==='/' && code[i+1]==='*') {
      let e = code.indexOf('*/',i+2); e = e<0 ? n : e+2
      out += span('cmt', code.slice(i,e)); i=e; continue
    }
    // Line comment //
    if (code[i]==='/' && code[i+1]==='/') {
      let e = code.indexOf('\n',i); e = e<0?n:e
      out += span('cmt', code.slice(i,e)); i=e; continue
    }
    // PHP annotation #[Route...]
    if (code[i]==='#' && code[i+1]==='[') {
      let e = i+2
      while (e<n && code[e]!==']' && code[e]!=='\n') e++
      if (code[e]===']') e++
      out += span('attr', code.slice(i,e)); i=e; continue
    }
    // @ annotation
    if (code[i]==='@') {
      let e = i+1; while (e<n && /\w/.test(code[e])) e++
      out += span('attr', code.slice(i,e)); i=e; continue
    }
    // Double-quoted string
    if (code[i]==='"') {
      let e = i+1
      while (e<n && !(code[e]==='"' && code[e-1]!=='\\')) e++
      e = Math.min(e+1,n)
      out += span('str', code.slice(i,e)); i=e; continue
    }
    // Single-quoted string
    if (code[i]==="'") {
      let e = i+1
      while (e<n && !(code[e]==="'" && code[e-1]!=='\\')) e++
      e = Math.min(e+1,n)
      out += span('str', code.slice(i,e)); i=e; continue
    }
    // PHP variable $var
    if (code[i]==='$') {
      let e = i+1; while (e<n && /\w/.test(code[e])) e++
      out += span('var-c', code.slice(i,e)); i=e; continue
    }
    // Number
    if (/[0-9]/.test(code[i])) {
      let e = i+1; while (e<n && /[0-9._]/.test(code[e])) e++
      out += span('num', code.slice(i,e)); i=e; continue
    }
    // Word
    if (/[a-zA-Z_]/.test(code[i])) {
      let e = i+1; while (e<n && /\w/.test(code[e])) e++
      const w = code.slice(i,e)
      if (KW.has(w)) out += span('kw', w)
      else if (/^[A-Z]/.test(w)) out += span('cls', w)
      else out += ESC(w)
      i=e; continue
    }
    out += ESC(code[i]); i++
  }
  return out
}

function tokenizeBash(code) {
  // Line-by-line: find comments, commands, strings
  return code.split('\n').map(line => {
    // Comment lines
    if (/^\s*#/.test(line)) return span('cmt', line)
    let out = '', i = 0, n = line.length
    while (i < n) {
      // inline comment
      if (line[i]==='#' && (i===0||/\s/.test(line[i-1]))) {
        out += span('cmt', line.slice(i)); i=n; continue
      }
      // strings
      if (line[i]==='"') {
        let e=i+1; while(e<n&&!(line[e]==='"'&&line[e-1]!=='\\'))e++; e=Math.min(e+1,n)
        out += span('str', line.slice(i,e)); i=e; continue
      }
      if (line[i]==="'") {
        let e=i+1; while(e<n&&!(line[e]==="'"&&line[e-1]!=='\\'))e++; e=Math.min(e+1,n)
        out += span('str', line.slice(i,e)); i=e; continue
      }
      // numbers
      if (/[0-9]/.test(line[i])) {
        let e=i+1; while(e<n&&/[0-9.]/.test(line[e]))e++
        out += span('num', line.slice(i,e)); i=e; continue
      }
      // keywords/commands
      if (/[a-zA-Z_\/]/.test(line[i])) {
        let e=i+1; while(e<n&&/[a-zA-Z0-9_\/\-:]/.test(line[e]))e++
        const w=line.slice(i,e)
        const CMDS=['cd','ls','mkdir','cp','mv','rm','cat','echo','export','source','chmod',
          'sudo','apt','npm','php','git','zip','unzip','node','java','mvn','gradle',
          'bin/console','npx','yarn','python','python3','pip','composer','symfony']
        if (CMDS.some(cmd=>w===cmd||w.endsWith('/'+cmd))) out += span('kw', w)
        else out += ESC(w)
        i=e; continue
      }
      out += ESC(line[i]); i++
    }
    return out
  }).join('\n')
}

function tokenizeYaml(code) {
  return code.split('\n').map(line => {
    if (/^\s*#/.test(line)) return span('cmt', line)
    // key: value
    const m = line.match(/^(\s*)([\w\-\.]+)(:)(.*)$/)
    if (m) {
      const [,ws,key,colon,rest] = m
      let val = rest
      // value part: strings, booleans, numbers
      val = val.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, s => span('str', s))
      val = val.replace(/\b(true|false|null|yes|no)\b/g, s => span('kw', s))
      val = val.replace(/\b(\d+\.?\d*)\b/g, s => span('num', s))
      return ESC(ws) + span('cls', key) + span('kw', colon) + val
    }
    return ESC(line)
  }).join('\n')
}

function tokenizeSql(code) {
  const SQL_KW = new Set(['SELECT','FROM','WHERE','INSERT','INTO','VALUES','UPDATE','SET',
    'DELETE','CREATE','TABLE','INDEX','JOIN','LEFT','RIGHT','INNER','ON','AS','AND','OR',
    'NOT','NULL','IS','IN','LIKE','ORDER','BY','GROUP','HAVING','LIMIT','OFFSET','PRIMARY',
    'KEY','FOREIGN','REFERENCES','UNIQUE','CASCADE','DROP','ALTER','ADD','COLUMN'])
  return code.split('\n').map(line => {
    if (/^\s*--/.test(line)) return span('cmt', line)
    let out='',i=0,n=line.length
    while(i<n){
      if(line[i]==="'"){let e=i+1;while(e<n&&!(line[e]==="'"&&line[e-1]!=='\\'))e++;e=Math.min(e+1,n);out+=span('str',line.slice(i,e));i=e;continue}
      if(/[0-9]/.test(line[i])){let e=i+1;while(e<n&&/[0-9.]/.test(line[e]))e++;out+=span('num',line.slice(i,e));i=e;continue}
      if(/[a-zA-Z_]/.test(line[i])){let e=i+1;while(e<n&&/\w/.test(line[e]))e++;const w=line.slice(i,e);if(SQL_KW.has(w.toUpperCase()))out+=span('kw',w);else out+=ESC(w);i=e;continue}
      out+=ESC(line[i]);i++
    }
    return out
  }).join('\n')
}

function tokenizeTwig(code) {
  const TWIG_KW = new Set(['extends','block','endblock','if','else','elseif','endif','for',
    'endfor','in','not','and','or','set','include','import','from','with','only','is',
    'defined','null','true','false','url','asset','path','absolute_url','parent','app'])
  let out='',i=0,n=code.length
  while(i<n){
    // {# comment #}
    if(code.startsWith('{#',i)){let e=code.indexOf('#}',i+2);e=e<0?n-2:e+2;out+=span('cmt',code.slice(i,e));i=e;continue}
    // {{ or }} or {% or %}
    if(code.startsWith('{{',i)||code.startsWith('}}',i)||code.startsWith('{%',i)||code.startsWith('%}',i)){out+=span('op',code.slice(i,i+2));i+=2;continue}
    // strings
    if(code[i]==='"'){let e=i+1;while(e<n&&!(code[e]==='"'&&code[e-1]!=='\\'))e++;e=Math.min(e+1,n);out+=span('str',code.slice(i,e));i=e;continue}
    if(code[i]==="'"){let e=i+1;while(e<n&&!(code[e]==="'"&&code[e-1]!=='\\'))e++;e=Math.min(e+1,n);out+=span('str',code.slice(i,e));i=e;continue}
    // filter |word
    if(code[i]==='|'&&i+1<n&&/\w/.test(code[i+1])){let e=i+1;while(e<n&&/\w/.test(code[e]))e++;out+=ESC('|')+span('cls',code.slice(i+1,e));i=e;continue}
    // words
    if(/[a-zA-Z_]/.test(code[i])){let e=i+1;while(e<n&&/\w/.test(code[e]))e++;const w=code.slice(i,e);if(TWIG_KW.has(w))out+=span('kw',w);else out+=ESC(w);i=e;continue}
    // numbers
    if(/[0-9]/.test(code[i])){let e=i+1;while(e<n&&/[0-9.]/.test(code[e]))e++;out+=span('num',code.slice(i,e));i=e;continue}
    out+=ESC(code[i]);i++
  }
  return out
}

function tokenizeJson(code) {
  let out='',i=0,n=code.length
  while(i<n){
    if(code[i]==='"'){
      let e=i+1;while(e<n&&!(code[e]==='"'&&code[e-1]!=='\\'))e++;e=Math.min(e+1,n)
      const s=code.slice(i,e)
      // Check if it's a key (followed by :)
      let j=e;while(j<n&&/\s/.test(code[j]))j++
      if(code[j]===':') out+=span('cls',s); else out+=span('str',s)
      i=e;continue
    }
    if(/[0-9\-]/.test(code[i])){let e=i+1;while(e<n&&/[0-9.\-eE+]/.test(code[e]))e++;out+=span('num',code.slice(i,e));i=e;continue}
    if(code.startsWith('true',i)||code.startsWith('false',i)||code.startsWith('null',i)){
      const kw=code.startsWith('true',i)?'true':code.startsWith('false',i)?'false':'null'
      out+=span('kw',kw);i+=kw.length;continue
    }
    out+=ESC(code[i]);i++
  }
  return out
}

function highlight(code, language) {
  if (!code) return ''
  const lang = (language||'').toLowerCase()
  try {
    if (lang==='bash'||lang==='shell'||lang==='sh') return tokenizeBash(code)
    if (lang==='yaml'||lang==='yml') return tokenizeYaml(code)
    if (lang==='sql') return tokenizeSql(code)
    if (lang==='json') return tokenizeJson(code)
    if (lang==='twig') return tokenizeTwig(code)
    return tokenizeJava(code) // java, php, javascript, ts...
  } catch(e) {
    return ESC(code) // fallback: plain escaped text
  }
}

// ── Component ───────────────────────────────────────────────────
const LANG_LABELS = {
  java:'Java', php:'PHP', yaml:'YAML', bash:'Shell', sh:'Shell',
  sql:'SQL', json:'JSON', twig:'Twig', javascript:'JS', ts:'TS',
}

export default function CodeBlock({ code, language = 'java' }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code || '').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const html = highlight(code, language)

  return (
    <div style={{ borderRadius:12, overflow:'hidden', border:'1px solid var(--border)', background:'#0d0f18', margin:'1rem 0' }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 16px', background:'var(--bg3)', borderBottom:'1px solid var(--border)' }}>
        <span style={{ fontSize:11.5, fontFamily:'JetBrains Mono,monospace', color:'var(--text3)' }}>
          {LANG_LABELS[language] || language}
        </span>
        <button onClick={copy}
          style={{ display:'flex', alignItems:'center', gap:5, fontSize:11.5, color:'var(--text3)', background:'none', border:'none', cursor:'pointer', fontFamily:'DM Sans,sans-serif', padding:0 }}>
          {copied
            ? <><span style={{ color:'#2dd4a8' }}>✓</span> Copié !</>
            : <>📋 Copier</>
          }
        </button>
      </div>
      {/* Code */}
      <div style={{ overflowX:'auto' }}>
        <pre style={{ margin:0, padding:'1.2rem', fontSize:12.5, lineHeight:1.75, fontFamily:'JetBrains Mono,monospace', color:'#c8d0e8', background:'transparent' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
