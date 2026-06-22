import { symfony } from './courses/symfony'
import { spring } from './courses/spring'
import { dotnet } from './courses/dotnet'
import { iaM } from './courses/iaM'

// ─── ADD NEW COURSES HERE ───────────────────────────────────
// import { react } from './react'
// import { docker } from './docker'
// import { typescript } from './typescript'

export const COURSES = [symfony, spring, dotnet, iaM]

export const getCourse = (id) => COURSES.find(c => c.id === id)
export const getModule = (courseId, moduleId) => {
  const course = getCourse(courseId)
  return course?.modules.find(m => m.id === moduleId)
}

// Flashcards déplacées dans src/data/flashcards.js (par module, par cours)
// Ré-exportées ici pour compatibilité avec le code existant qui importe
// `FLASHCARDS` depuis '@/data'.
export { FLASHCARDS } from './flashcards'