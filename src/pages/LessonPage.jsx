import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getCourse, getModule } from '@/data'
import { useStore } from '@/store'
import CodeBlock from '@/components/ui/CodeBlock'
import { TipBox, NoteBox, Btn, Badge } from '@/components/ui'
import Quiz from '@/components/quiz/Quiz'
import Exam from '@/components/exam/Exam'
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen, FlaskConical, ClipboardList } from 'lucide-react'
import clsx from 'clsx'

const TABS = [
  { id: 'lessons', label: 'Leçons', icon: BookOpen },
  { id: 'quiz',    label: 'Quiz',   icon: FlaskConical },
  { id: 'exam',    label: 'Examen', icon: ClipboardList },
]

export default function LessonPage() {
  const { courseId, moduleId } = useParams()

  // ✅ ALL hooks MUST be called before any conditional return
  const [tab, setTab] = useState('lessons')
  const [lessonIdx, setLessonIdx] = useState(0)
  const { markDone, progress } = useStore()

  const course = getCourse(courseId)
  const mod    = getModule(courseId, moduleId)

  // ✅ Conditional return AFTER all hooks
  if (!course || !mod) return <Navigate to="/" />

  const lesson    = mod.lessons[lessonIdx]
  const lessonKey = `${courseId}-${moduleId}-${lessonIdx}`
  const isDone    = !!progress[lessonKey]

  const markComplete = () => markDone(lessonKey)

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-gray-300 transition-colors">Accueil</Link>
        <ChevronRight size={14} />
        <Link to={`/course/${courseId}`} className="hover:text-gray-300 transition-colors">{course.title}</Link>
        <ChevronRight size={14} />
        <span className="text-gray-300">{mod.title}</span>
      </div>

      {/* Module header */}
      <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 mb-4">
        <span className="text-2xl">{mod.icon}</span>
        <div className="flex-1">
          <h1 className="font-bold text-white">{mod.title}</h1>
          <p className="text-xs text-gray-500">
            {mod.lessons.length} leçons · {mod.quiz.length} quiz
            {mod.exam?.length ? ` · ${mod.exam.length} examen` : ''}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1 mb-5 w-fit">
        {TABS.filter(t => t.id !== 'exam' || mod.exam?.length).map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm transition-all',
              tab === t.id
                ? 'bg-gray-800 text-white font-medium shadow'
                : 'text-gray-500 hover:text-gray-300'
            )}
          >
            <t.icon size={13} />
            {t.label}
            {t.id === 'quiz' && (
              <span className="ml-1 text-[10px] bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded-md">
                {mod.quiz.length}
              </span>
            )}
            {t.id === 'exam' && mod.exam?.length && (
              <span className="ml-1 text-[10px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded-md">
                {mod.exam.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {tab === 'lessons' && (
            <div className="grid lg:grid-cols-[200px_1fr] gap-5">
              {/* Lesson nav */}
              <div className="space-y-1">
                {mod.lessons.map((l, i) => {
                  const done = !!progress[`${courseId}-${moduleId}-${i}`]
                  return (
                    <button
                      key={i}
                      onClick={() => setLessonIdx(i)}
                      className={clsx(
                        'w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all',
                        lessonIdx === i
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800'
                      )}
                    >
                      <span className={clsx(
                        'w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 border',
                        done
                          ? 'bg-emerald-500 border-emerald-500 text-gray-950'
                          : lessonIdx === i
                          ? 'border-emerald-500 text-emerald-400'
                          : 'border-gray-700 text-gray-600'
                      )}>
                        {done ? '✓' : i + 1}
                      </span>
                      <span className="leading-snug">{l.title}</span>
                    </button>
                  )
                })}
              </div>

              {/* Lesson content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lessonIdx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5"
                >
                  {/* Title + done badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h2 className="text-lg font-bold text-white leading-snug">
                      {lesson.title}
                    </h2>
                    {isDone && (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
                        <CheckCircle2 size={10} /> Fait
                      </span>
                    )}
                  </div>

                  {/* Body HTML */}
                  {lesson.body && (
                    <div
                      className="prose-content mb-4"
                      dangerouslySetInnerHTML={{ __html: lesson.body }}
                    />
                  )}

                  {/* Tips */}
                  <TipBox tips={lesson.tips} />

                  {/* Code block */}
                  {lesson.code && (
                    <CodeBlock
                      code={lesson.code}
                      language={lesson.language || 'java'}
                    />
                  )}

                  {/* Note */}
                  <NoteBox note={lesson.note} />

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                    <Btn
                      variant="secondary"
                      onClick={() => setLessonIdx(i => i - 1)}
                      disabled={lessonIdx === 0}
                    >
                      <ChevronLeft size={14} /> Précédent
                    </Btn>

                    <Btn
                      variant={isDone ? 'secondary' : 'primary'}
                      onClick={markComplete}
                      disabled={isDone}
                    >
                      {isDone ? '✓ Terminé' : 'Marquer comme fait'}
                    </Btn>

                    {lessonIdx < mod.lessons.length - 1 ? (
                      <Btn onClick={() => setLessonIdx(i => i + 1)}>
                        Suivant <ChevronRight size={14} />
                      </Btn>
                    ) : (
                      <Btn onClick={() => setTab('quiz')}>
                        Faire le quiz <ChevronRight size={14} />
                      </Btn>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {tab === 'quiz' && (
            <Quiz
              questions={mod.quiz}
              moduleKey={`${courseId}-${moduleId}-quiz`}
            />
          )}

          {tab === 'exam' && mod.exam?.length > 0 && (
            <Exam
              questions={mod.exam}
              title={`Examen — ${mod.title}`}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
