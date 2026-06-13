import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { COURSES } from '@/data'
import { useStore } from '@/store'
import clsx from 'clsx'

const NAV_COLORS = {
  symfony: { active: 'bg-[rgba(124,110,247,0.12)] text-[#a597ff] border-[rgba(124,110,247,0.2)]', dot: 'bg-[#7c6ef7]' },
  spring:  { active: 'bg-[rgba(45,212,168,0.10)] text-[#2dd4a8] border-[rgba(45,212,168,0.2)]', dot: 'bg-[#2dd4a8]' },
}

export default function Layout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState({})
  const { sidebarOpen, setSidebarOpen } = useStore()

  const toggle = (id) => setExpanded(e => ({ ...e, [id]: !e[id] }))
  const isAt = (p) => location.pathname.startsWith(p)

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ background: 'rgba(0,0,0,0.55)' }} onClick={() => setOpen(false)} />
      )}

      {/* ── SIDEBAR ── */}
      <aside
        className={clsx(
          'fixed top-0 left-0 bottom-0 z-50 flex flex-col overflow-y-auto transition-transform duration-200',
          'lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ width: 260, background: 'var(--bg2)', borderRight: '1px solid var(--border)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
            style={{ background: 'rgba(124,110,247,0.15)', border: '1px solid rgba(124,110,247,0.3)' }}>
            ⚡
          </div>
          <div>
            <div className="font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif', color: 'var(--text)' }}>
              LearnWithLoutchee
            </div>
            <div className="text-[9px] font-semibold uppercase tracking-wider px-1 py-[1px] rounded mt-0.5 inline-block"
              style={{ background: 'rgba(124,110,247,0.12)', color: '#a597ff', border: '1px solid rgba(124,110,247,0.25)' }}>
              EHEIO 2026
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 pt-3">
          <SLabel>Navigation</SLabel>
          <SItem to="/" active={location.pathname === '/'} icon="🏠" onClick={() => setOpen(false)}>Accueil</SItem>

          <SLabel className="mt-3">Modules</SLabel>
          {COURSES.map(course => {
            const colors = NAV_COLORS[course.id] || NAV_COLORS.symfony
            const isActive = isAt(`/course/${course.id}`)
            const isExpanded = expanded[course.id]

            return (
              <div key={course.id}>
                <button
                  onClick={() => { toggle(course.id); navigate(`/course/${course.id}`) }}
                  className={clsx(
                    'w-full flex items-center gap-2.5 px-3 py-[0.52rem] rounded-xl text-sm mb-0.5 border transition-all',
                    isActive
                      ? colors.active
                      : 'border-transparent text-[var(--text2)] hover:bg-[var(--bg3)] hover:text-[var(--text)]'
                  )}
                >
                  <span className="text-base w-5 text-center flex-shrink-0">{course.icon}</span>
                  <span className="flex-1 text-left font-medium">{course.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'var(--bg4)', color: 'var(--text3)' }}>
                    {course.version}
                  </span>
                </button>

                {(isActive || isExpanded) && (
                  <div className="ml-5 pl-3 mb-1" style={{ borderLeft: '1px solid var(--border)' }}>
                    {course.modules.map(mod => {
                      const isModActive = location.pathname === `/course/${course.id}/module/${mod.id}`
                      return (
                        <Link key={mod.id} to={`/course/${course.id}/module/${mod.id}`}
                          onClick={() => setOpen(false)}
                          className={clsx(
                            'flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs mb-0.5 transition-all',
                            isModActive
                              ? colors.active
                              : 'text-[var(--text3)] hover:text-[var(--text2)] hover:bg-[var(--bg3)]'
                          )}
                        >
                          <span>{mod.icon}</span>
                          <span className="flex-1">{mod.title}</span>
                          <span className="text-[9px]" style={{ color: 'var(--text3)' }}>{mod.lessons.length}</span>
                        </Link>
                      )
                    })}
                    {/* Exam link per course */}
                    <Link to={`/exam/${course.id}`}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        'flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs mb-0.5 transition-all',
                        location.pathname === `/exam/${course.id}`
                          ? colors.active
                          : 'text-[var(--text3)] hover:text-[var(--text2)] hover:bg-[var(--bg3)]'
                      )}
                    >
                      <span>📋</span>
                      <span className="flex-1">Examen {course.title}</span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}

          <SLabel className="mt-3">Révision</SLabel>
          <SItem to="/flashcards" active={isAt('/flashcards')} icon="🃏" onClick={() => setOpen(false)}
            badge="36+">Flashcards</SItem>
        </nav>

        {/* Progress footer */}
        <div className="p-4" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text3)' }}>
            <span>Progression</span><span>0%</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg4)' }}>
            <div className="h-full rounded-full" style={{ width: '0%', background: 'linear-gradient(90deg, var(--purple), var(--teal))' }} />
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-[260px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center gap-3 px-5 py-3"
          style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
          <button onClick={() => setOpen(true)} className="lg:hidden text-[var(--text2)] hover:text-[var(--text)] p-1.5 rounded-lg border"
            style={{ border: '1px solid var(--border)' }}>☰</button>

          <div className="flex-1 max-w-xs relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--text3)' }}>🔍</span>
            <input type="text" placeholder="Rechercher un concept..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg text-sm"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link to="/flashcards"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:border-[var(--purple)]"
              style={{ border: '1px solid var(--border2)', color: 'var(--text2)' }}>
              🃏 Flashcards
            </Link>
            <Link to="/exam/symfony"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{ background: 'var(--purple)', color: 'white' }}>
              📋 Examen
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6 fade-in">{children}</main>
      </div>
    </div>
  )
}

function SLabel({ children, className = '' }) {
  return (
    <div className={clsx('px-2 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-widest', className)}
      style={{ color: 'var(--text3)' }}>{children}</div>
  )
}

function SItem({ to, active, icon, onClick, badge, children }) {
  return (
    <Link to={to} onClick={onClick}
      className={clsx(
        'flex items-center gap-2.5 px-3 py-[0.52rem] rounded-xl text-sm mb-0.5 border transition-all',
        active
          ? 'bg-[rgba(124,110,247,0.12)] text-[#a597ff] border-[rgba(124,110,247,0.2)]'
          : 'border-transparent text-[var(--text2)] hover:bg-[var(--bg3)] hover:text-[var(--text)]'
      )}>
      <span className="text-base w-5 text-center flex-shrink-0">{icon}</span>
      <span className="flex-1">{children}</span>
      {badge && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'var(--bg4)', color: 'var(--text2)' }}>{badge}</span>}
    </Link>
  )
}
