import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCourse } from '@/data'
import { useStore } from '@/store'
import { Badge, ProgressBar } from '@/components/ui'
import { ChevronRight, Trophy, FileText, X, BookOpen, Layers } from 'lucide-react'

// ── A4 PDF Viewer Modal ─────────────────────────────────────
function A4Modal({ mod, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl h-[90vh] bg-gray-900 border border-gray-700 rounded-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xl">📄</span>
            <div>
              <p className="text-sm font-semibold text-white">{mod.title}</p>
              <p className="text-xs text-gray-500">Fiche autorisée à l'examen</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={mod.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
            >
              Ouvrir dans un nouvel onglet
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 min-h-0">
          <iframe
            src={mod.pdfPath}
            title={mod.title}
            className="w-full h-full border-0"
          />
        </div>
      </motion.div>
    </div>
  )
}

// ── Module Card ──────────────────────────────────────────────
function ModuleCard({ mod, courseId, index, onA4Click, scores }) {
  const scoreKey = `${courseId}-${mod.id}-quiz`
  const score = scores[scoreKey]

  // A4 card — special style
  if (mod.isA4) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <button
          onClick={() => onA4Click(mod)}
          className="w-full flex items-center gap-4 bg-amber-950/30 border border-amber-800/40 hover:border-amber-600/60 rounded-xl p-4 transition-all group text-left"
        >
          <div className="text-2xl flex-shrink-0">📄</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-amber-300 text-sm">{mod.title}</h3>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30 font-medium">
                ✅ Autorisée à l'examen
              </span>
            </div>
            <p className="text-xs text-amber-700/80">
              Cliquer pour afficher la fiche PDF
            </p>
          </div>
          <FileText size={16} className="text-amber-600 group-hover:text-amber-400 flex-shrink-0" />
        </button>
      </motion.div>
    )
  }

  // Regular module card
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/course/${courseId}/module/${mod.id}`}
        className="flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all group"
      >
        <div className="text-2xl flex-shrink-0">{mod.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-white text-sm">{mod.title}</h3>
            {score && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${
                score.score / score.total >= 0.75
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-orange-500/10 text-orange-400'
              }`}>
                <Trophy size={8} className="inline mr-0.5" />
                {Math.round(score.score / score.total * 100)}%
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">
            {mod.lessons.length} leçons · {mod.quiz.length} quiz
            {mod.exam?.length ? ` · ${mod.exam.length} examen` : ''}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {mod.lessons.map(l => (
              <span key={l.title} className="text-[10px] bg-gray-800 text-gray-600 px-1.5 py-0.5 rounded">
                {l.title}
              </span>
            ))}
          </div>
        </div>
        <ChevronRight size={16} className="text-gray-600 group-hover:text-gray-400 flex-shrink-0" />
      </Link>
    </motion.div>
  )
}

// ── Semester Section ─────────────────────────────────────────
function SemesterSection({ label, modules, courseId, onA4Click, scores, startIndex }) {
  const colors = {
    S1: { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', dot: 'bg-blue-500' },
    S2: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', dot: 'bg-emerald-500' },
  }
  const c = colors[label] || colors.S1
  const normalMods = modules.filter(m => !m.isA4)
  const a4Mods = modules.filter(m => m.isA4)

  return (
    <div className="space-y-3">
      {/* Semester label */}
      <div className="flex items-center gap-3">
        <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
          {label === 'S1' ? 'Semestre 1' : 'Semestre 2'}
        </span>
        <div className="flex-1 h-px bg-gray-800" />
        <span className="text-xs text-gray-600">{normalMods.length} modules</span>
      </div>

      {/* Module cards */}
      {modules.map((mod, i) => (
        <ModuleCard
          key={mod.id}
          mod={mod}
          courseId={courseId}
          index={startIndex + i}
          onA4Click={onA4Click}
          scores={scores}
        />
      ))}
    </div>
  )
}

// ── Main CoursePage ──────────────────────────────────────────
export default function CoursePage() {
  const { courseId } = useParams()
  // ✅ Hooks BEFORE any conditional return
  const { getProgress, scores } = useStore()
  const [a4Modal, setA4Modal] = useState(null)

  const course = getCourse(courseId)
  if (!course) return <Navigate to="/" />

  const hasSemesters = !!course.semesters

  // Group modules by semester if needed
  const s1Modules = hasSemesters ? course.modules.filter(m => m.semester === 'S1') : []
  const s2Modules = hasSemesters ? course.modules.filter(m => m.semester === 'S2') : []

  // Stats (exclude A4 from counts)
  const contentModules = course.modules.filter(m => !m.isA4)
  const totalLessons = contentModules.reduce((s, m) => s + m.lessons.length, 0)
  const totalQuiz = contentModules.reduce((s, m) => s + m.quiz.length, 0)

  // Badge color
  const badgeColor =
    courseId === 'symfony' ? 'violet' :
    courseId === 'dotnet'  ? 'purple' :
    'emerald'

  return (
    <>
      {/* A4 PDF Modal */}
      {a4Modal && (
        <A4Modal mod={a4Modal} onClose={() => setA4Modal(null)} />
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{course.icon}</span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-white">{course.title}</h1>
                <Badge color={badgeColor}>{course.version}</Badge>
              </div>
              <p className="text-gray-400 text-sm">{course.description}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {hasSemesters ? (
              <>
                <span className="flex items-center gap-1.5">
                  <Layers size={13} className="text-blue-500" />
                  {s1Modules.filter(m => !m.isA4).length} modules S1
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Layers size={13} className="text-emerald-500" />
                  {s2Modules.filter(m => !m.isA4).length} modules S2
                </span>
                <span>·</span>
              </>
            ) : (
              <>
                <span>{contentModules.length} modules</span>
                <span>·</span>
              </>
            )}
            <span className="flex items-center gap-1.5">
              <BookOpen size={13} />
              {totalLessons} leçons
            </span>
            <span>·</span>
            <span>{totalQuiz} questions quiz</span>
            {hasSemesters && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <FileText size={13} className="text-amber-500" />
                  2 fiches A4 autorisées
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Modules */}
        {hasSemesters ? (
          /* ── Semesterized layout (dotnet) ── */
          <div className="space-y-8">
            <SemesterSection
              label="S1"
              modules={s1Modules}
              courseId={courseId}
              onA4Click={setA4Modal}
              scores={scores}
              startIndex={0}
            />
            <SemesterSection
              label="S2"
              modules={s2Modules}
              courseId={courseId}
              onA4Click={setA4Modal}
              scores={scores}
              startIndex={s1Modules.length}
            />
          </div>
        ) : (
          /* ── Standard layout (symfony / spring) ── */
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Modules
            </h2>
            <div className="space-y-3">
              {course.modules.map((mod, i) => (
                <ModuleCard
                  key={mod.id}
                  mod={mod}
                  courseId={courseId}
                  index={i}
                  onA4Click={setA4Modal}
                  scores={scores}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}