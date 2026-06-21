import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FLASHCARDS } from '@/data/flashcards'
import { COURSES, getCourse } from '@/data'
import { Badge, Btn } from '@/components/ui'
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, ArrowLeft, Layers } from 'lucide-react'
import clsx from 'clsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Module selection screen ─────────────────────────────────────
function ModuleSelector({ course, onSelectModule, onSelectAll }) {
  // Count cards per module for this course
  const counts = {}
  FLASHCARDS.filter(c => c.course === course.id).forEach(c => {
    counts[c.module] = (counts[c.module] || 0) + 1
  })

  const modulesWithCards = course.modules.filter(m => counts[m.id] > 0)
  const totalCards = Object.values(counts).reduce((s, n) => s + n, 0)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl">{course.icon}</span> Flashcards {course.title}
        </h1>
        <p className="text-sm text-gray-500">Choisis un module pour commencer à réviser</p>
      </div>

      {/* All cards option */}
      <button
        onClick={onSelectAll}
        className="w-full flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-emerald-600/50 rounded-xl p-4 transition-all group text-left"
      >
        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
          <Layers size={18} className="text-emerald-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-sm">Tous les modules</h3>
          <p className="text-xs text-gray-500">{totalCards} cartes — révision complète</p>
        </div>
        <ChevronRight size={16} className="text-gray-600 group-hover:text-emerald-400 flex-shrink-0" />
      </button>

      {/* Module grid */}
      <div className="grid sm:grid-cols-2 gap-3">
        {modulesWithCards.map((mod, i) => (
          <motion.button
            key={mod.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => onSelectModule(mod.id)}
            className="flex items-center gap-3 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all group text-left"
          >
            <div className="text-xl flex-shrink-0">{mod.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-white text-sm truncate">{mod.title}</h3>
              <p className="text-xs text-gray-500">{counts[mod.id]} cartes</p>
            </div>
            <ChevronRight size={14} className="text-gray-600 group-hover:text-gray-400 flex-shrink-0" />
          </motion.button>
        ))}
      </div>

      {modulesWithCards.length === 0 && (
        <div className="text-center py-12 text-gray-500 text-sm">
          Aucune flashcard disponible pour ce cours pour le moment.
        </div>
      )}
    </div>
  )
}

// ── Course selection screen (when no courseId in URL) ──────────
function CourseSelector({ onSelectCourse }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white">Flashcards</h1>
        <p className="text-sm text-gray-500">Choisis un cours pour réviser</p>
      </div>
      <div className="space-y-3">
        {COURSES.map((c, i) => {
          const count = FLASHCARDS.filter(f => f.course === c.id).length
          return (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => onSelectCourse(c.id)}
              className="w-full flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all group text-left"
            >
              <span className="text-2xl flex-shrink-0">{c.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-sm">{c.title}</h3>
                <p className="text-xs text-gray-500">{count} cartes disponibles</p>
              </div>
              <ChevronRight size={16} className="text-gray-600 group-hover:text-gray-400 flex-shrink-0" />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// ── Main page ────────────────────────────────────────────────────
export default function FlashcardsPage() {
  const { courseId: urlCourseId } = useParams()
  const navigate = useNavigate()

  const [selectedCourse, setSelectedCourse] = useState(urlCourseId || null)
  const [selectedModule, setSelectedModule] = useState(null) // null = not entered yet, 'all' = all modules
  const [cards, setCards] = useState([])
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(new Set())

  // ── Step 1: no course selected yet ──
  if (!selectedCourse) {
    return <CourseSelector onSelectCourse={(id) => setSelectedCourse(id)} />
  }

  const course = getCourse(selectedCourse)
  if (!course) return <CourseSelector onSelectCourse={(id) => setSelectedCourse(id)} />

  // ── Step 2: course selected, no module entered yet ──
  if (!selectedModule) {
    return (
      <ModuleSelector
        course={course}
        onSelectModule={(modId) => {
          const moduleCards = FLASHCARDS.filter(c => c.course === selectedCourse && c.module === modId)
          setCards(moduleCards)
          setSelectedModule(modId)
          setIdx(0); setFlipped(false); setKnown(new Set())
        }}
        onSelectAll={() => {
          const allCards = FLASHCARDS.filter(c => c.course === selectedCourse)
          setCards(allCards)
          setSelectedModule('all')
          setIdx(0); setFlipped(false); setKnown(new Set())
        }}
      />
    )
  }

  // ── Step 3: studying flashcards ──
  const card = cards[idx]
  const moduleInfo = selectedModule === 'all' ? null : course.modules.find(m => m.id === selectedModule)

  const next = () => { setIdx(i => Math.min(i + 1, cards.length - 1)); setFlipped(false) }
  const prev = () => { setIdx(i => Math.max(i - 1, 0)); setFlipped(false) }
  const markKnown = () => { setKnown(s => new Set([...s, idx])); next() }
  const resetProgress = () => { setIdx(0); setFlipped(false); setKnown(new Set()) }
  const doShuffle = () => { setCards(shuffle(cards)); setIdx(0); setFlipped(false) }
  const backToModules = () => { setSelectedModule(null); setCards([]); setIdx(0); setFlipped(false); setKnown(new Set()) }

  if (!cards.length) return (
    <div className="text-center py-20 text-gray-500">
      Aucune flashcard pour ce module.
      <div className="mt-4">
        <Btn variant="secondary" size="sm" onClick={backToModules}>← Retour aux modules</Btn>
      </div>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <button onClick={backToModules} className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors flex-shrink-0">
          <ArrowLeft size={14} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-bold text-white truncate">
            {moduleInfo ? `${moduleInfo.icon} ${moduleInfo.title}` : `${course.icon} Tous les modules — ${course.title}`}
          </h1>
          <p className="text-xs text-gray-500">{cards.length} cartes · {known.size} connues</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Btn variant="secondary" size="sm" onClick={doShuffle}><Shuffle size={13} /></Btn>
          <Btn variant="secondary" size="sm" onClick={resetProgress}><RotateCcw size={13} /></Btn>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 flex-wrap">
        {cards.map((_, i) => (
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
        <Btn variant="secondary" onClick={next} disabled={idx >= cards.length - 1}><ChevronRight size={14} /></Btn>
      </div>

      <p className="text-center text-xs text-gray-600">{idx + 1} / {cards.length}</p>
    </div>
  )
}