import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStore } from '@/store'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import CoursePage from '@/pages/CoursePage'
import LessonPage from '@/pages/LessonPage'
import FlashcardsPage from '@/pages/FlashcardsPage'
import ExamPage from '@/pages/ExamPage'

export default function App() {
  const theme = useStore(s => s.theme)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/module/:moduleId" element={<LessonPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/flashcards/:courseId" element={<FlashcardsPage />} />
        <Route path="/exam/:courseId" element={<ExamPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}
