import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronDown } from 'lucide-react'
import { Btn, Badge } from '@/components/ui'
import clsx from 'clsx'

export default function Exam({ questions, title }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const resultsRef = useRef(null)

  const save = (idx, val) => setAnswers(p => ({ ...p, [idx]: val }))

  const toggleCB = (idx, optIdx, checked) => {
    const cur = answers[idx] || []
    const next = checked ? [...cur, optIdx] : cur.filter(x => x !== optIdx)
    save(idx, next)
  }

  const submit = () => {
    setSubmitted(true)
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  if (submitted) return <Results questions={questions} answers={answers} onReset={() => { setAnswers({}); setSubmitted(false) }} ref={resultsRef} />

  const sections = [...new Set(questions.map(q => q.section || 'Général'))]

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-500">{questions.length} questions · Répondez à toutes puis soumettez</p>
        </div>
        <Badge color="emerald" className="ml-auto">{questions.length} Q</Badge>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => (
          <ExamQuestion key={idx} q={q} idx={idx} answers={answers} save={save} toggleCB={toggleCB} />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Btn onClick={submit} size="lg">✅ Soumettre et voir la correction</Btn>
      </div>
    </div>
  )
}

function ExamQuestion({ q, idx, answers, save, toggleCB }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      {q.type === 'open' && (
        <>
          <p className="text-sm font-medium text-white mb-3 leading-relaxed">{q.q}</p>
          <textarea
            rows={4}
            value={answers[idx] || ''}
            onChange={e => save(idx, e.target.value)}
            placeholder="Votre réponse..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 resize-y leading-relaxed"
          />
        </>
      )}

      {q.type === 'dropdown' && (
        <>
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="text-sm font-medium text-white leading-relaxed">{q.q}</p>
            <Badge color="violet" size="xs">Dropdown</Badge>
          </div>
          <div className="relative w-48">
            <select
              value={answers[idx] !== undefined ? answers[idx] : -1}
              onChange={e => save(idx, parseInt(e.target.value))}
              className="w-full appearance-none bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 pr-8 text-sm text-gray-200 focus:outline-none focus:border-emerald-500/50"
            >
              <option value={-1}>Sélectionner...</option>
              {q.opts.map((o, i) => <option key={i} value={i}>{o}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </>
      )}

      {q.type === 'checkbox' && (
        <>
          <p className="text-sm font-medium text-white mb-3 leading-relaxed">{q.q}</p>
          <div className="space-y-2">
            {q.opts.map((o, i) => {
              const cur = answers[idx] || []
              return (
                <label key={i} className="flex items-center gap-3 cursor-pointer p-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={cur.includes(i)}
                    onChange={e => toggleCB(idx, i, e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded"
                  />
                  <span className="text-sm text-gray-300">{o}</span>
                </label>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function Results({ questions, answers, onReset }) {
  let scored = 0
  const results = questions.map((q, idx) => {
    const ua = answers[idx]
    let ok = false, userDisplay = '', correctDisplay = ''

    if (q.type === 'open') {
      ok = ua && ua.trim().length > 5
      userDisplay = ua || ''
      correctDisplay = q.ans
    } else if (q.type === 'dropdown') {
      ok = ua === q.ans
      userDisplay = ua !== undefined && ua >= 0 ? q.opts[ua] : '(pas de réponse)'
      correctDisplay = q.opts[q.ans]
    } else if (q.type === 'checkbox') {
      const a = ua || []
      ok = JSON.stringify([...a].sort()) === JSON.stringify([...q.ans].sort())
      userDisplay = a.length ? a.map(i => q.opts[i]).join(', ') : '(pas de réponse)'
      correctDisplay = q.ans.map(i => q.opts[i]).join(', ')
    }

    if (ok) scored++
    return { q, ok, userDisplay, correctDisplay }
  })

  const pct = Math.round((scored / questions.length) * 100)

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
      {/* Score */}
      <div className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
        <Trophy size={40} className={clsx('mx-auto mb-3', pct >= 75 ? 'text-yellow-400' : 'text-gray-500')} />
        <div className={clsx('text-5xl font-bold font-mono mb-1', pct >= 75 ? 'text-emerald-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400')}>
          {pct}%
        </div>
        <p className="text-gray-300 font-medium">{scored}/{questions.length} questions réussies</p>
        <p className="text-gray-500 text-sm mt-1 mb-4">
          {pct >= 75 ? '🎉 Excellent ! Vous maîtrisez ce module.' : pct >= 50 ? '📚 Bon travail, continuez à réviser !' : '💪 Relisez les leçons et réessayez !'}
        </p>
        <Btn onClick={onReset} variant="secondary"><RotateCcw size={14} /> Recommencer</Btn>
      </div>

      {/* Detailed corrections */}
      <div className="space-y-3">
        {results.map(({ q, ok, userDisplay, correctDisplay }, i) => (
          <div key={i} className={clsx('rounded-xl p-4 border', ok ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5')}>
            <div className="flex items-start gap-2 mb-3">
              {ok ? <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" /> : <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />}
              <p className="text-sm font-medium text-white leading-relaxed">{q.q}</p>
            </div>

            {q.type === 'open' ? (
              <>
                <div className="mb-2">
                  <p className="text-[10px] text-gray-500 mb-1 uppercase">Votre réponse :</p>
                  <div className="bg-gray-900 rounded-lg px-3 py-2 text-sm text-gray-400 whitespace-pre-wrap leading-relaxed min-h-8">
                    {userDisplay || <em className="text-gray-600">Pas de réponse</em>}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-emerald-500 mb-1 uppercase">✅ Correction :</p>
                  <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-lg px-3 py-2 text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                    {correctDisplay}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-wrap gap-4 text-sm mt-1">
                <div><span className="text-gray-500">Votre réponse : </span><span className={ok ? 'text-emerald-400' : 'text-red-400'}>{userDisplay}</span></div>
                {!ok && <div><span className="text-gray-500">Bonne réponse : </span><span className="text-emerald-400">{correctDisplay}</span></div>}
              </div>
            )}

            {q.hint && (
              <p className="text-[11px] text-gray-600 mt-2 italic">💡 {q.hint}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
