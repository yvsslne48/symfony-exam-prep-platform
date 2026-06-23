import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getCourse } from '@/data'
import { SYMFONY_QCM, SYMFONY_PDF, SYMFONY_REAL_2026, SYMFONY_PLUS } from '@/data/exams'
import { SPRING_QCM, SPRING_PDF, SPRING_REAL, SPRING_REAL_2027 } from '@/data/exams-spring'
import { DOTNET_QCM, DOTNET_PLUS, DOTNET_REAL_IMAGE } from '@/data/exams-dotnet'
import { IA_QCM, IA_REAL, IA_PLUS } from '@/data/exams-iaM'
import { X } from 'lucide-react'
import clsx from 'clsx'

// ── helpers ──────────────────────────────────────────────────────
function esc(s) {
  if (!s) return ''
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

const ST = { background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16 }
const BTN = {
  go:  { background:'var(--purple)', color:'white', border:'none', borderRadius:10, padding:'9px 20px', fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:'DM Sans,sans-serif' },
  sec: { background:'var(--bg4)', color:'var(--text2)', border:'1px solid var(--border)', borderRadius:10, padding:'8px 16px', fontSize:13, cursor:'pointer', fontFamily:'DM Sans,sans-serif' },
  coral:{ background:'var(--coral)', color:'white', border:'none', borderRadius:10, padding:'9px 20px', fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:'DM Sans,sans-serif' },
  teal: { background:'var(--teal)', color:'#0d0f18', border:'none', borderRadius:10, padding:'9px 20px', fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:'DM Sans,sans-serif' },
}

// ── Data registry ─────────────────────────────────────────────────
// `reel` = array of { label, questions } for text-based real exams (open/dropdown/checkbox)
// `realImage` = path to a scanned real-exam image instead (used when a UML diagram makes
//               text transcription unreliable — shown as a clickable full-screen image)
const EXAM_DATA = {
  symfony: {
    qcm:  SYMFONY_QCM,
    pdf:  SYMFONY_PDF,
    reel: [
      { label: 'Examen Réel 2026', questions: SYMFONY_REAL_2026 },
    ],
    plus: SYMFONY_PLUS,
    pdfFile: '/exams/symfony-examen-reel-2026.pdf',
  },
  spring: {
    qcm:  SPRING_QCM,
    pdf:  SPRING_PDF,
    reel: [
      { label: 'Examen Pour Révision ', questions: SPRING_REAL },
      { label: 'Examen Réel 2026 ', questions: SPRING_REAL_2027 },
    ],
    plus: [],
    pdfFile: '/exams/spring-examen-reel-2026-2027.pdf',
  },
  dotnet: {
    qcm:  DOTNET_QCM,
    pdf:  null,                       // pas de mode "Examen Blanc" pour .NET
    reel: [],                         // pas d'examen réel texte — utilise realImage à la place
    plus: DOTNET_PLUS,
    pdfFile: null,
    realImage: DOTNET_REAL_IMAGE,
    realImageLabel: 'Examen Réel — MANI Mohammed Adil',
  },
  ia: {
    qcm:  IA_QCM,
    pdf:  null,
    reel: [
      { label: 'Examen Réel — Mouhib Imad', questions: IA_REAL },
    ],
    plus: IA_PLUS,
    pdfFile: '/exams/examen-ia.pdf',
  }
}

// ── Real exam image modal ───────────────────────────────────────
function RealImageModal({ src, label, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] bg-gray-900 border border-gray-700 rounded-2xl flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800 flex-shrink-0">
          <div>
            <p className="text-sm font-semibold text-white">{label}</p>
            <p className="text-xs text-gray-500">Sujet original scanné</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-2 flex items-start justify-center">
          <img src={src} alt={label} className="max-w-full h-auto rounded-lg" />
        </div>
      </motion.div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────
export default function ExamPage() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  if (!course) return <Navigate to="/" />

  const data = EXAM_DATA[courseId] || EXAM_DATA.symfony

  const [mode, setMode] = useState(null)       // null=home, 'qcm','pdf','reel','plus', 'module-X'
  const [reelVersion, setReelVersion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showRealImage, setShowRealImage] = useState(false)
  // QCM state
  const [qIdx, setQIdx] = useState(0)
  const [qAns, setQAns] = useState([])
  const [qDone, setQDone] = useState(false)

  const reset = () => { setMode(null); setAnswers({}); setSubmitted(false); setQIdx(0); setQAns([]); setQDone(false) }
  const startMode = (m, opts={}) => { setMode(m); setAnswers({}); setSubmitted(false); setQIdx(0); setQAns([]); setQDone(false); if (opts.reelVersion!==undefined) setReelVersion(opts.reelVersion) }

  const accentColor = courseId === 'spring' ? 'var(--teal)' : courseId === 'dotnet' ? '#7c3aed' : courseId === 'ia' ? '#f06060' : 'var(--purple)'
  const accentLight = courseId === 'spring' ? '#2dd4a8' : courseId === 'dotnet' ? '#a78bfa' : courseId === 'ia' ? '#f59e8a' : '#a597ff'

  const hasReelText = data.reel && data.reel.length > 0
  const hasRealImage = !!data.realImage
  const hasPdfMode = !!data.pdf

  // Landing page
  if (!mode) {
    const mods = course.modules.filter(m => m.exam?.length > 0)
    const modeCount = 1 + (hasPdfMode ? 1 : 0) + (hasReelText ? data.reel.length : 0) + (hasRealImage ? 1 : 0) + (data.plus?.length > 0 ? 1 : 0)

    return (
      <div className="max-w-3xl mx-auto">
        {showRealImage && (
          <RealImageModal src={data.realImage} label={data.realImageLabel} onClose={() => setShowRealImage(false)} />
        )}

        <div className="text-center p-8 mb-6" style={{ ...ST }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
          <h1 style={{ fontFamily:'Sora,sans-serif', fontSize: 22, fontWeight:700, marginBottom:8 }}>
            Examen {course.title}
          </h1>
          <p style={{ color:'var(--text2)', fontSize:14, marginBottom:20 }}>
            {modeCount} mode{modeCount > 1 ? 's' : ''} d'entraînement — EHEIO 2026
          </p>

          {/* Mode grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, maxWidth:560, margin:'0 auto 20px' }}>
            <ModeCard icon="🎯" title="Mode QCM" desc={`${data.qcm.length} questions · Correction auto`} onClick={() => startMode('qcm')} accent={accentColor} />

            {hasPdfMode && (
              <ModeCard icon="📝" title="Examen Blanc" desc="Ouvert, dropdown, checkbox" badge="COMME LE VRAI" badgeColor="var(--purple)" onClick={() => startMode('pdf')} />
            )}

            {hasReelText && data.reel.map((r, i) => (
              <ModeCard key={i} icon="🎓" title={r.label} desc={`${r.questions.length} questions exactes EHEI`} badge="OFFICIEL" badgeColor="var(--coral)" onClick={() => startMode('reel', { reelVersion: i })} borderColor="var(--coral)" />
            ))}

            {hasRealImage && (
              <ModeCard icon="📄" title={data.realImageLabel} desc="Diagramme UML + exercices — sujet original" badge="OFFICIEL" badgeColor="var(--coral)" onClick={() => setShowRealImage(true)} borderColor="var(--coral)" />
            )}

            {data.pdfFile && (
              <ModeCard icon="📄" title="Version PDF" desc="Ouvrir le sujet original" badge="PDF" badgeColor="var(--purple)" onClick={() => window.open(data.pdfFile, '_blank')} />
            )}

            {data.plus?.length > 0 && (
              <ModeCard icon="✨" title="Nouvelles Questions" desc={`${data.plus.length} questions hors PDF`} badge="🚀 HORS PDF" badgeColor="var(--teal)" badgeTextColor="#0d0f18" onClick={() => startMode('plus')} borderColor="var(--teal)" />
            )}
          </div>

          {/* Stats */}
          <div style={{ display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap' }}>
            <Stat n={data.qcm.length} lbl="QCM" color={accentLight} />
            {hasPdfMode && <Stat n={data.pdf.length} lbl="Questions PDF" color="var(--purple-light)" />}
            {hasReelText && data.reel.map((r, i) => (
              <Stat key={i} n={r.questions.length} lbl={r.label} color="var(--coral)" />
            ))}
            {data.plus?.length > 0 && <Stat n={data.plus.length} lbl="Nouvelles Qs" color="var(--teal)" />}
          </div>
        </div>

        {/* Per-module exams */}
        {mods.length > 0 && (
          <div>
            <div style={{ fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--text3)', marginBottom:12 }}>
              Examens par module
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {mods.map(mod => (
                <button key={mod.id} onClick={() => startMode(`module-${mod.id}`)}
                  style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10, padding:'10px 16px', fontSize:13, color:'var(--text2)', cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}>
                  {mod.icon} {mod.title}
                  <span style={{ fontSize:10, background:'var(--bg4)', color:'var(--text3)', borderRadius:6, padding:'1px 6px' }}>{mod.exam.length}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Determine questions
  let questions = []
  let examTitle = ''
  let examColor = accentColor

  if (mode === 'qcm') { questions = data.qcm; examTitle = 'Mode QCM' }
  else if (mode === 'pdf') { questions = data.pdf; examTitle = `Examen Blanc ${course.title} — EHEIO 2026` }
  else if (mode === 'reel') {
    const r = data.reel[reelVersion] || data.reel[0]
    questions = r.questions
    examTitle = courseId === 'spring' ? `Examen Pratique — ${course.title} (${r.label})` : `${r.label} — ${course.title}`
    examColor = courseId === 'spring' ? 'var(--teal)' : 'var(--coral)'
  }
  else if (mode === 'plus') { questions = data.plus; examTitle = 'Nouvelles Questions — Hors PDF'; examColor = 'var(--teal)' }
  else if (mode.startsWith('module-')) {
    const modId = mode.replace('module-', '')
    const mod = course.modules.find(m => m.id === modId)
    if (mod?.exam) { questions = mod.exam; examTitle = `Examen — ${mod.title}` }
  }

  if (!questions.length) { reset(); return null }

  // QCM mode
  if (mode === 'qcm') {
    return (
      <QCMExam
        questions={questions}
        title={examTitle}
        qIdx={qIdx} setQIdx={setQIdx}
        qAns={qAns} setQAns={setQAns}
        qDone={qDone} setQDone={setQDone}
        onReset={reset}
        accentColor={accentColor}
        accentLight={accentLight}
      />
    )
  }

  // Open/mixed mode
  return (
    <OpenExam
      questions={questions}
      title={examTitle}
      examColor={examColor}
      answers={answers} setAnswers={setAnswers}
      submitted={submitted} setSubmitted={setSubmitted}
      onReset={reset}
    />
  )
}

// ── QCM EXAM ──────────────────────────────────────────────────────
function QCMExam({ questions, title, qIdx, setQIdx, qAns, setQAns, qDone, setQDone, onReset, accentColor, accentLight }) {
  const answer = (i) => {
    if (qAns[qIdx] !== undefined) return
    const next = [...qAns]
    next[qIdx] = i
    setQAns(next)
  }
  const nextQ = () => { if (qIdx < questions.length - 1) setQIdx(qIdx + 1); else setQDone(true) }

  if (qDone) {
    const score = qAns.filter((a, i) => a === questions[i]?.ans).length
    const pct = Math.round(score / questions.length * 100)
    const clr = pct >= 80 ? '#2dd4a8' : pct >= 50 ? '#f5c842' : '#f06060'
    return (
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign:'center', padding:'2rem 1rem', ...ST, marginBottom:24 }}>
          <div style={{ fontSize: '3.5rem', fontWeight:700, color:clr, fontFamily:'JetBrains Mono,monospace' }}>{pct}%</div>
          <div style={{ fontSize:16, fontWeight:500, marginBottom:4 }}>{score}/{questions.length} correctes</div>
          <div style={{ color:'var(--text3)', fontSize:13, marginBottom:20 }}>
            {pct>=80?'🎉 Excellent !':pct>=50?'📚 Continuez à réviser !':'💪 Relisez les leçons !'}
          </div>
          <div style={{ display:'flex', gap:8, justifyContent:'center' }}>
            <button style={BTN.go} onClick={() => { setQIdx(0); setQAns([]); setQDone(false) }}>Recommencer</button>
            <button style={BTN.sec} onClick={onReset}>Choisir le mode</button>
          </div>
        </div>
        {questions.map((q, i) => {
          const ok = qAns[i] === q.ans
          return (
            <div key={i} style={{ ...ST, padding:'1rem', marginBottom:8, borderLeft: `3px solid ${ok?'#2dd4a8':'#f06060'}` }}>
              <div style={{ fontSize:13, marginBottom:6 }}><strong>{i+1}. {q.q}</strong></div>
              <div style={{ color: ok?'#2dd4a8':'#f06060', fontSize:13 }}>
                {ok?'✅':'❌'} {q.opts[q.ans]}
                {!ok && qAns[i]!==undefined && <span style={{ color:'var(--text3)', fontSize:12 }}> · Votre réponse : {q.opts[qAns[i]]??'—'}</span>}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const q = questions[qIdx]
  const pct = Math.round(qIdx / questions.length * 100)
  const answered = qAns[qIdx] !== undefined

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
        <button style={BTN.sec} onClick={onReset}>← Retour</button>
        <div style={{ flex:1, height:5, background:'var(--bg4)', borderRadius:3, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${pct}%`, background:`linear-gradient(90deg, ${accentColor}, var(--teal))`, transition:'width .4s' }} />
        </div>
        <span style={{ fontSize:12, color:'var(--text3)', fontFamily:'JetBrains Mono,monospace' }}>{qIdx+1}/{questions.length}</span>
      </div>

      {q.section && <div style={{ fontSize:11, color:'var(--text3)', marginBottom:6 }}>{q.section}</div>}
      <div style={{ fontSize:16, fontWeight:600, marginBottom:20, lineHeight:1.5, fontFamily:'Sora,sans-serif' }}>{q.q}</div>

      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {q.opts.map((opt, i) => {
          const isAns = i === q.ans
          const isSelected = qAns[qIdx] === i
          const isWrong = isSelected && !isAns
          let bg = 'var(--bg3)', color = 'var(--text)', border = '1px solid var(--border)'
          if (answered && isAns) { bg='rgba(45,212,168,0.1)'; color='#2dd4a8'; border='1px solid rgba(45,212,168,0.4)' }
          if (isWrong) { bg='rgba(240,96,96,0.1)'; color='#f06060'; border='1px solid rgba(240,96,96,0.4)' }
          if (answered && !isAns && !isSelected) { color='var(--text3)' }
          return (
            <button key={i} disabled={answered} onClick={() => answer(i)}
              style={{ background:bg, color, border, borderRadius:10, padding:'12px 16px', textAlign:'left', cursor:answered?'default':'pointer', display:'flex', alignItems:'center', gap:12, fontSize:14, transition:'all .15s', fontFamily:'DM Sans,sans-serif' }}>
              <span style={{ width:26, height:26, borderRadius:'50%', background:'var(--bg4)', color:'var(--text3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, flexShrink:0, ...(answered&&isAns?{background:'#2dd4a8',color:'#0d0f18'}:{}), ...(isWrong?{background:'#f06060',color:'white'}:{}) }}>
                {answered && isAns ? '✓' : isWrong ? '✗' : String.fromCharCode(65+i)}
              </span>
              {opt}
            </button>
          )
        })}
      </div>

      {answered && (
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop:16 }}>
          <button style={BTN.go} onClick={nextQ}>
            {qIdx < questions.length-1 ? 'Question suivante →' : 'Voir les résultats ✓'}
          </button>
        </div>
      )}
    </div>
  )
}

// ── OPEN EXAM ─────────────────────────────────────────────────────
function OpenExam({ questions, title, examColor, answers, setAnswers, submitted, setSubmitted, onReset }) {
  const save = (idx, val) => setAnswers(p => ({ ...p, [idx]: val }))
  const toggleCB = (idx, i, checked) => {
    const cur = answers[idx] || []
    save(idx, checked ? [...cur, i] : cur.filter(x => x !== i))
  }

  if (submitted) return (
    <OpenResults questions={questions} answers={answers} examColor={examColor} onReset={onReset}
      onRetry={() => { setAnswers({}); setSubmitted(false) }} />
  )

  const sections = [...new Set(questions.map(q => q.section || 'Questions'))]

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
        <button style={BTN.sec} onClick={onReset}>← Retour</button>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:15 }}>{title}</div>
          <div style={{ fontSize:12, color:'var(--text3)' }}>
            {questions.length} questions — Répondez à toutes puis soumettez
          </div>
        </div>
        <div style={{ fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:6, background:`${examColor}22`, color:examColor, border:`1px solid ${examColor}44` }}>
          {questions.length} Q
        </div>
      </div>

      {sections.map(section => (
        <div key={section} style={{ marginBottom:32 }}>
          <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 12px', background:`${examColor}12`, border:`1px solid ${examColor}30`, borderRadius:10, marginBottom:12 }}>
            <span style={{ fontSize:13, fontWeight:600, color:examColor }}>{section}</span>
            <span style={{ fontSize:11, color:'var(--text3)' }}>
              {questions.filter(q => (q.section||'Questions') === section).length} questions
            </span>
          </div>
          {questions.filter(q => (q.section||'Questions') === section).map(q => {
            const idx = questions.indexOf(q)
            return <QuestionCard key={idx} q={q} idx={idx} answers={answers} save={save} toggleCB={toggleCB} examColor={examColor} />
          })}
        </div>
      ))}

      <div style={{ textAlign:'center', padding:'2rem 0' }}>
        <button style={{ ...BTN.go, background:examColor, fontSize:15, padding:'14px 44px' }}
          onClick={() => { setSubmitted(true); window.scrollTo(0,0) }}>
          ✅ Soumettre et voir la correction
        </button>
      </div>
    </div>
  )
}

function QuestionCard({ q, idx, answers, save, toggleCB, examColor }) {
  return (
    <div style={{ ...ST, padding:'1.25rem', marginBottom:10 }}>
      {q.type === 'open' && (
        <>
          <div style={{ fontSize:14, fontWeight:500, lineHeight:1.55, marginBottom:12, whiteSpace:'pre-wrap' }}>{q.q}</div>
          <textarea rows={4} value={answers[idx]||''} onChange={e => save(idx, e.target.value)}
            placeholder="Votre réponse..."
            style={{ width:'100%', background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:10, padding:'10px 12px', color:'var(--text)', fontSize:13, resize:'vertical', lineHeight:1.65, fontFamily:'DM Sans,sans-serif', outline:'none' }} />
        </>
      )}
      {q.type === 'dropdown' && (
        <>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12, marginBottom:12 }}>
            <div style={{ fontSize:14, fontWeight:500, lineHeight:1.55, flex:1 }}>{q.q}</div>
            <span style={{ fontSize:10, background:'var(--bg4)', color:'var(--text3)', padding:'3px 8px', borderRadius:6, whiteSpace:'nowrap', flexShrink:0 }}>⊙ Dropdown</span>
          </div>
          <select value={answers[idx]!==undefined?answers[idx]:-1} onChange={e => save(idx, parseInt(e.target.value))}
            style={{ background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:10, padding:'8px 12px', color:'var(--text)', fontSize:13, width:200, fontFamily:'DM Sans,sans-serif' }}>
            <option value={-1}>Sélectionner...</option>
            {q.opts.map((o,i) => <option key={i} value={i}>{o}</option>)}
          </select>
        </>
      )}
      {q.type === 'checkbox' && (
        <>
          <div style={{ fontSize:14, fontWeight:500, lineHeight:1.55, marginBottom:12 }}>{q.q}</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {q.opts.map((o,i) => {
              const cur = answers[idx]||[]
              return (
                <label key={i} style={{ display:'flex', alignItems:'center', gap:12, cursor:'pointer', padding:'9px 12px', background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:10, fontSize:13 }}>
                  <input type="checkbox" checked={cur.includes(i)} onChange={e => toggleCB(idx, i, e.target.checked)}
                    style={{ width:16, height:16, accentColor:examColor, cursor:'pointer' }} />
                  {o}
                </label>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function OpenResults({ questions, answers, examColor, onReset, onRetry }) {
  let scored = 0
  const results = questions.map((q, idx) => {
    const ua = answers[idx]
    let ok=false, ud='', cd=''
    if (q.type==='open') { ok=ua&&ua.trim().length>3; ud=ua||''; cd=q.ans }
    else if (q.type==='dropdown') { ok=ua===q.ans; ud=ua!==undefined&&ua>=0?q.opts[ua]:'—'; cd=q.opts[q.ans] }
    else if (q.type==='checkbox') {
      const a=ua||[]; ok=JSON.stringify([...a].sort())===JSON.stringify([...q.ans].sort())
      ud=a.length?a.map(i=>q.opts[i]).join(', '):'—'; cd=q.ans.map(i=>q.opts[i]).join(', ')
    }
    if(ok) scored++
    return { q, ok, ud, cd }
  })

  const pct = Math.round(scored/questions.length*100)
  const clr = pct>=75?'#2dd4a8':pct>=50?'#f5c842':'#f06060'
  const sections = [...new Set(questions.map(q => q.section||'Questions'))]

  return (
    <div style={{ maxWidth:720, margin:'0 auto' }}>
      <div style={{ textAlign:'center', padding:'1.5rem', ...ST, marginBottom:24 }}>
        <div style={{ fontSize:'2.5rem', fontWeight:700, color:clr, fontFamily:'JetBrains Mono,monospace', marginBottom:4 }}>{pct}%</div>
        <div style={{ fontSize:15, fontWeight:600, marginBottom:4 }}>{scored}/{questions.length} questions réussies</div>
        <div style={{ fontSize:13, color:'var(--text3)', marginBottom:16 }}>
          {pct>=75?'🎉 Excellent ! Vous êtes prêt pour l\'examen !':pct>=50?'📚 Bon travail, continuez !':'💪 Relisez les modules et réessayez !'}
        </div>
        <div style={{ display:'flex', gap:8, justifyContent:'center' }}>
          <button style={{ ...BTN.go, background:examColor }} onClick={onRetry}>Recommencer</button>
          <button style={BTN.sec} onClick={onReset}>Choisir le mode</button>
        </div>
      </div>

      {sections.map(section => (
        <div key={section} style={{ marginBottom:28 }}>
          <div style={{ fontSize:12, fontWeight:600, color:'var(--text3)', textTransform:'uppercase', letterSpacing:'.06em', padding:'.5rem 0', borderBottom:'1px solid var(--border)', marginBottom:12 }}>
            {section}
          </div>
          {results.filter(r => (r.q.section||'Questions')===section).map(({q,ok,ud,cd},i) => (
            <div key={i} style={{ ...ST, padding:'1rem', marginBottom:8, borderLeft:`3px solid ${ok?'#2dd4a8':'#f06060'}` }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:8, marginBottom:10 }}>
                <span style={{ flexShrink:0, marginTop:2 }}>{ok?'✅':'❌'}</span>
                <div style={{ fontSize:13, fontWeight:500, lineHeight:1.5, whiteSpace:'pre-wrap' }}>{q.q}</div>
              </div>
              {q.type==='open' ? (
                <>
                  <div style={{ fontSize:11, color:'var(--text3)', marginBottom:4 }}>Votre réponse :</div>
                  <div style={{ fontSize:12.5, background:'var(--bg3)', borderRadius:8, padding:'8px 10px', marginBottom:10, whiteSpace:'pre-wrap', lineHeight:1.65, color:'var(--text2)' }}>
                    {ud||<em style={{ color:'var(--text3)' }}>Pas de réponse</em>}
                  </div>
                  <div style={{ fontSize:11, color:'#2dd4a8', marginBottom:4 }}>✅ Bonne réponse :</div>
                  <div style={{ fontSize:12.5, background:'rgba(45,212,168,0.07)', border:'1px solid rgba(45,212,168,0.18)', borderRadius:8, padding:'8px 10px', whiteSpace:'pre-wrap', lineHeight:1.65, color:'var(--text)' }}>{cd}</div>
                </>
              ) : (
                <div style={{ display:'flex', flexWrap:'wrap', gap:16, fontSize:12.5 }}>
                  <span><span style={{ color:'var(--text3)' }}>Votre réponse : </span><span style={{ color:ok?'#2dd4a8':'#f06060' }}>{ud}</span></span>
                  {!ok&&<span><span style={{ color:'var(--text3)' }}>Bonne réponse : </span><span style={{ color:'#2dd4a8' }}>{cd}</span></span>}
                </div>
              )}
              {q.hint && <div style={{ fontSize:11, color:'var(--text3)', marginTop:8, fontStyle:'italic' }}>💡 {q.hint}</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// ── Misc sub-components ───────────────────────────────────────────
function ModeCard({ icon, title, desc, badge, badgeColor='var(--purple)', badgeTextColor='white', onClick, borderColor='var(--border)', accent }) {
  return (
    <button onClick={onClick} style={{ ...ST, padding:'1rem', cursor:'pointer', textAlign:'center', position:'relative', border:`1px solid ${borderColor}`, transition:'all .18s', display:'block', width:'100%' }}
      onMouseOver={e => e.currentTarget.style.borderColor=badgeColor||accent}
      onMouseOut={e => e.currentTarget.style.borderColor=borderColor}>
      {badge && (
        <div style={{ position:'absolute', top:-10, left:'50%', transform:'translateX(-50%)', background:badgeColor, color:badgeTextColor, fontSize:9, fontWeight:700, padding:'2px 9px', borderRadius:20, whiteSpace:'nowrap' }}>
          {badge}
        </div>
      )}
      <div style={{ fontSize:28, marginBottom:8 }}>{icon}</div>
      <div style={{ fontFamily:'Sora,sans-serif', fontSize:13, fontWeight:700, marginBottom:4 }}>{title}</div>
      <div style={{ fontSize:11.5, color:'var(--text3)' }}>{desc}</div>
    </button>
  )
}

function Stat({ n, lbl, color }) {
  return (
    <div style={{ textAlign:'center' }}>
      <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'1.5rem', fontWeight:700, color }}>{n}</div>
      <div style={{ fontSize:11, color:'var(--text3)' }}>{lbl}</div>
    </div>
  )
}