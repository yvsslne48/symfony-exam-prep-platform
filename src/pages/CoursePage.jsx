import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCourse } from '@/data'
import { useStore } from '@/store'
import { Badge, ProgressBar } from '@/components/ui'
import { ChevronRight, Trophy } from 'lucide-react'

export default function CoursePage() {
  const { courseId } = useParams()
  // ✅ Hooks BEFORE any conditional return
  const { getProgress, scores } = useStore()

  const course = getCourse(courseId)
  if (!course) return <Navigate to="/" />

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{course.icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">{course.title}</h1>
              <Badge color={course.id === 'symfony' ? 'violet' : 'emerald'}>{course.version}</Badge>
            </div>
            <p className="text-gray-400 text-sm">{course.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>{course.modules.length} modules</span>
          <span>·</span>
          <span>{course.modules.reduce((s, m) => s + m.lessons.length, 0)} leçons</span>
          <span>·</span>
          <span>{course.modules.reduce((s, m) => s + m.quiz.length, 0)} questions quiz</span>
        </div>
      </motion.div>

      {/* Modules list */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Modules</h2>
        <div className="space-y-3">
          {course.modules.map((mod, i) => {
            const scoreKey = `${courseId}-${mod.id}-quiz`
            const score = scores[scoreKey]

            return (
              <motion.div key={mod.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link
                  to={`/course/${courseId}/module/${mod.id}`}
                  className="flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all group"
                >
                  <div className="text-2xl flex-shrink-0">{mod.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white text-sm">{mod.title}</h3>
                      {score && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${score.score / score.total >= 0.75 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'}`}>
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
          })}
        </div>
      </div>
    </div>
  )
}
