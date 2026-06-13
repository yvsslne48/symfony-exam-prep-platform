import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FLASHCARDS, COURSES } from '@/data'
import { Badge, Btn } from '@/components/ui'
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from 'lucide-react'
import clsx from 'clsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FlashcardsPage() {
  const { courseId } = useParams()
  const [filter, setFilter] = useState(courseId || 'all')
  const [cards, setCards] = useState(FLASHCARDS)
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(new Set())

  const filtered = filter === 'all' ? cards : cards.filter(c => c.course === filter)
  const card = filtered[idx]

  const next = () => { setIdx(i => Math.min(i + 1, filtered.length - 1)); setFlipped(false) }
  const prev = () => { setIdx(i => Math.max(i - 1, 0)); setFlipped(false) }
  const markKnown = () => { setKnown(s => new Set([...s, idx])); next() }
  const reset = () => { setIdx(0); setFlipped(false); setKnown(new Set()) }
  const doShuffle = () => { setCards(shuffle(cards)); setIdx(0); setFlipped(false) }

  if (!filtered.length) return (
    <div className="text-center py-20 text-gray-500">Aucune flashcard pour ce cours.</div>
  )

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Flashcards</h1>
          <p className="text-sm text-gray-500">{filtered.length} cartes · {known.size} connues</p>
        </div>
        <div className="flex gap-2">
          <Btn variant="secondary" size="sm" onClick={doShuffle}><Shuffle size={13} /></Btn>
          <Btn variant="secondary" size="sm" onClick={reset}><RotateCcw size={13} /></Btn>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {[{ id: 'all', label: 'Tout' }, ...COURSES.map(c => ({ id: c.id, label: c.title }))].map(f => (
          <button
            key={f.id}
            onClick={() => { setFilter(f.id); setIdx(0); setFlipped(false) }}
            className={clsx(
              'px-3 py-1.5 rounded-lg text-sm transition-all',
              filter === f.id ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-gray-800 text-gray-400 hover:text-gray-200'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 flex-wrap">
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIdx(i); setFlipped(false) }}
            className={clsx(
              'w-2 h-2 rounded-full transition-all',
              i === idx ? 'bg-emerald-400 scale-125' : known.has(i) ? 'bg-emerald-800' : 'bg-gray-700'
            )}
          />
        ))}
      </div>

      {/* Card */}
      <div className="relative h-52 cursor-pointer" onClick={() => setFlipped(f => !f)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${idx}-${flipped}`}
            initial={{ opacity: 0, rotateY: flipped ? -90 : 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gray-900 border border-gray-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-4">
              {flipped ? 'Définition' : 'Terme'}
            </div>
            {flipped ? (
              <p className="text-base text-gray-200 leading-relaxed">{card.a}</p>
            ) : (
              <p className="text-xl font-mono font-bold text-emerald-400">{card.q}</p>
            )}
            <p className="text-xs text-gray-700 mt-6">
              {flipped ? 'Cliquer pour voir le terme' : 'Cliquer pour voir la définition'}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <Btn variant="secondary" onClick={prev} disabled={idx === 0}><ChevronLeft size={14} /></Btn>
        <div className="flex-1 flex gap-2">
          <Btn variant="danger" size="sm" className="flex-1" onClick={next}>À revoir</Btn>
          <Btn variant="primary" size="sm" className="flex-1" onClick={markKnown}>Je sais ✓</Btn>
        </div>
        <Btn variant="secondary" onClick={next} disabled={idx >= filtered.length - 1}><ChevronRight size={14} /></Btn>
      </div>

      <p className="text-center text-xs text-gray-600">{idx + 1} / {filtered.length}</p>
    </div>
  )
}
