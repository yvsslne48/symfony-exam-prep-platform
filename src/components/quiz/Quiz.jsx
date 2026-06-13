import { useState } from 'react'
import { RotateCcw, ChevronRight, Trophy } from 'lucide-react'
import clsx from 'clsx'

export default function Quiz({ questions, moduleKey }) {
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState({}) // { 0: 2, 1: 0, ... }
  const [done, setDone] = useState(false)

  const q = questions[idx]
  const answered = answers[idx] !== undefined
  const pct = Math.round(idx / questions.length * 100)

  const answer = (i) => {
    if (answered) return
    setAnswers(p => ({ ...p, [idx]: i }))
  }

  const next = () => {
    if (idx < questions.length - 1) setIdx(i => i + 1)
    else setDone(true)
  }

  const reset = () => {
    setIdx(0)
    setAnswers({})
    setDone(false)
  }

  // ── Results ──────────────────────────────────────────────────
  if (done) {
    const score = questions.filter((q, i) => answers[i] === q.ans).length
    const pctScore = Math.round(score / questions.length * 100)
    const clr = pctScore >= 80 ? '#2dd4a8' : pctScore >= 50 ? '#f5c842' : '#f06060'

    return (
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        {/* Score */}
        <div style={{ textAlign:'center', padding:'2rem 1rem', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, marginBottom:20 }}>
          <Trophy size={40} style={{ margin:'0 auto 12px', color: pctScore>=75?'#f5c842':'var(--text3)', display:'block' }} />
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'3.5rem', fontWeight:700, color:clr, marginBottom:4 }}>
            {pctScore}%
          </div>
          <div style={{ fontSize:15, fontWeight:500, marginBottom:4 }}>{score}/{questions.length} correctes</div>
          <div style={{ fontSize:13, color:'var(--text3)', marginBottom:20 }}>
            {pctScore>=80?'🎉 Excellent ! Vous maîtrisez ce module.':pctScore>=50?'📚 Bon ! Continuez à réviser.':'💪 Relisez les leçons et réessayez !'}
          </div>
          <div style={{ display:'flex', gap:8, justifyContent:'center' }}>
            <button onClick={reset}
              style={{ background:'var(--purple)', color:'white', border:'none', borderRadius:10, padding:'9px 20px', fontSize:13, fontWeight:500, cursor:'pointer', display:'flex', alignItems:'center', gap:6 }}>
              <RotateCcw size={13} /> Recommencer
            </button>
          </div>
        </div>

        {/* Review */}
        <div>
          {questions.map((q, i) => {
            const ok = answers[i] === q.ans
            return (
              <div key={i} style={{ background:'var(--surface)', border:`1px solid ${ok?'rgba(45,212,168,0.2)':'rgba(240,96,96,0.2)'}`, borderLeft:`3px solid ${ok?'#2dd4a8':'#f06060'}`, borderRadius:10, padding:'0.85rem 1rem', marginBottom:8 }}>
                <div style={{ fontSize:13, fontWeight:500, marginBottom:6 }}>{i+1}. {q.q}</div>
                <div style={{ fontSize:12.5, color:ok?'#2dd4a8':'#f06060' }}>
                  {ok?'✅':'❌'} {q.opts[q.ans]}
                  {!ok && answers[i]!==undefined && (
                    <span style={{ color:'var(--text3)', marginLeft:8 }}>· Votre réponse : {q.opts[answers[i]]??'—'}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // ── Question ──────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 600 }}>
      {/* Progress */}
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
        <span style={{ fontSize:12, color:'var(--text3)', fontFamily:'JetBrains Mono,monospace', flexShrink:0 }}>
          {idx+1}/{questions.length}
        </span>
        <div style={{ flex:1, height:5, background:'var(--bg4)', borderRadius:3, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,var(--purple),var(--teal))', transition:'width .4s', borderRadius:3 }} />
        </div>
      </div>

      {/* Question */}
      <div style={{ fontFamily:'Sora,sans-serif', fontSize:16, fontWeight:600, marginBottom:20, lineHeight:1.5, color:'var(--text)' }}>
        {q.q}
      </div>

      {/* Options */}
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
        {q.opts.map((opt, i) => {
          const isAns = i === q.ans
          const isSelected = answers[idx] === i
          const isWrong = isSelected && !isAns

          let bg = 'var(--bg3)', color = 'var(--text)', border = '1px solid var(--border)'
          let letterBg = 'var(--bg4)', letterColor = 'var(--text3)'

          if (answered && isAns) {
            bg='rgba(45,212,168,0.1)'; color='#2dd4a8'; border='1px solid rgba(45,212,168,0.4)'
            letterBg='#2dd4a8'; letterColor='#0d0f18'
          } else if (isWrong) {
            bg='rgba(240,96,96,0.1)'; color='#f06060'; border='1px solid rgba(240,96,96,0.4)'
            letterBg='#f06060'; letterColor='white'
          } else if (answered) {
            color='var(--text3)'
          }

          return (
            <button key={i} onClick={() => answer(i)} disabled={answered}
              style={{ background:bg, color, border, borderRadius:10, padding:'12px 16px', textAlign:'left', cursor:answered?'default':'pointer', display:'flex', alignItems:'center', gap:12, fontSize:14, transition:'all .15s', fontFamily:'DM Sans,sans-serif', width:'100%' }}>
              <span style={{ width:26, height:26, borderRadius:'50%', background:letterBg, color:letterColor, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, flexShrink:0, transition:'all .15s' }}>
                {answered && isAns ? '✓' : isWrong ? '✗' : String.fromCharCode(65+i)}
              </span>
              {opt}
            </button>
          )
        })}
      </div>

      {/* Next button */}
      {answered && (
        <div style={{ display:'flex', justifyContent:'flex-end' }}>
          <button onClick={next}
            style={{ background:'var(--purple)', color:'white', border:'none', borderRadius:10, padding:'9px 20px', fontSize:13, fontWeight:500, cursor:'pointer', display:'flex', alignItems:'center', gap:6 }}>
            {idx < questions.length-1 ? 'Question suivante' : 'Voir les résultats ✓'}
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  )
}
