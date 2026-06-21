import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      // Theme
      theme: 'dark',
      toggleTheme: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark'
        set({ theme: next })
        document.documentElement.classList.toggle('dark', next === 'dark')
      },

      // Progress per course/lesson
      progress: {}, // { 'symfony-routing-0': true, ... }
      markDone: (key) => set(s => ({ progress: { ...s.progress, [key]: true } })),
      getProgress: (courseId, totalLessons) => {
        const p = get().progress
        const done = Array.from({ length: totalLessons }, (_, i) =>
          p[`${courseId}-${i}`] ? 1 : 0
        ).reduce((a, b) => a + b, 0)
        return Math.round((done / totalLessons) * 100)
      },

      // Quiz scores
      scores: {},
      saveScore: (key, score, total) =>
        set(s => ({ scores: { ...s.scores, [key]: { score, total, date: Date.now() } } })),

      // Sidebar collapsed on mobile
      sidebarOpen: false,
      setSidebarOpen: (v) => set({ sidebarOpen: v }),

      // Search
      search: '',
      setSearch: (v) => set({ search: v }),
    }),
    { name: 'learnhub-store', partialize: (s) => ({ theme: s.theme, progress: s.progress, scores: s.scores }) }
  )
)
