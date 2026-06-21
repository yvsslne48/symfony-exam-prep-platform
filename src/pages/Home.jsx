import { Link } from 'react-router-dom'
import { COURSES, FLASHCARDS } from '@/data'
import { SYMFONY_QCM, SYMFONY_PDF, SYMFONY_REAL_2026 } from '@/data/exams'
import { SPRING_QCM } from '@/data/exams-spring'

const COLORS = {
  symfony: { bg:'rgba(124,110,247,0.12)', text:'#a597ff', border:'rgba(124,110,247,0.25)' },
  spring:  { bg:'rgba(45,212,168,0.10)',  text:'#2dd4a8', border:'rgba(45,212,168,0.25)' },
}

export default function Home() {
  const totalLessons = COURSES.reduce((s,c) => s + c.modules.reduce((ms,m) => ms + m.lessons.length, 0), 0)
  const totalQuiz = COURSES.reduce((s,c) => s + c.modules.reduce((ms,m) => ms + m.quiz.length, 0), 0)

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      {/* Hero */}
      <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:22, padding:'2.5rem 2rem', marginBottom:24, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-60, right:-60, width:220, height:220, background:'radial-gradient(circle,rgba(124,110,247,0.18),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-40, left:'30%', width:160, height:160, background:'radial-gradient(circle,rgba(45,212,168,0.1),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(124,110,247,0.12)', border:'1px solid rgba(124,110,247,0.25)', color:'#a597ff', borderRadius:20, padding:'4px 12px', fontSize:12, fontWeight:500, marginBottom:16 }}>
          ⚡ Préparez votre examen EHEIO 2026/2027
        </div>
        <h1 style={{ fontFamily:'Sora,sans-serif', fontSize:'1.9rem', fontWeight:700, lineHeight:1.2, marginBottom:12 }}>
          Apprenez{' '}
          <span style={{ background:'linear-gradient(135deg,#a597ff,#2dd4a8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            avec Loutchee
          </span>
        </h1>
        <p style={{ color:'var(--text2)', fontSize:14.5, maxWidth:500, marginBottom:20, lineHeight:1.7 }}>
          Plateforme d’apprentissage interactive proposant des leçons, des exemples de code, des quiz et des flashcards pour maîtriser votre module.
        </p>
        <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
          {[
            { n: COURSES.length, l: 'Cours' },
            { n: totalLessons, l: 'Leçons' },
            { n: totalQuiz + '+', l: 'Quiz' },
            { n: FLASHCARDS.length, l: 'Flashcards' },
            { n: SYMFONY_PDF.length + SYMFONY_REAL_2026.length, l: 'Questions examen' },
          ].map(({ n, l }) => (
            <div key={l}>
              <div style={{ fontFamily:'Sora,sans-serif', fontSize:'1.35rem', fontWeight:700 }}>{n}</div>
              <div style={{ fontSize:12, color:'var(--text3)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div style={{ fontSize:13, fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--text2)', marginBottom:12 }}>
        Modules de cours
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:12, marginBottom:24 }}>
        {COURSES.map(course => {
          const c = COLORS[course.id] || COLORS.symfony
          return (
            <Link key={course.id} to={`/course/${course.id}`}
              style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:'1.25rem', textDecoration:'none', display:'block', transition:'all .15s', position:'relative', overflow:'hidden' }}
              onMouseOver={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)' }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:10 }}>
                <div style={{ width:40, height:40, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:19, background:c.bg, flexShrink:0 }}>{course.icon}</div>
                <div>
                  <div style={{ fontFamily:'Sora,sans-serif', fontSize:14, fontWeight:600, marginBottom:3 }}>{course.title}</div>
                  <div style={{ fontSize:11.5, color:'var(--text3)' }}>{course.modules.length} modules · {course.modules.reduce((s,m)=>s+m.lessons.length,0)} leçons</div>
                </div>
              </div>
              <p style={{ fontSize:13, color:'var(--text2)', lineHeight:1.55, marginBottom:10 }}>{course.description}</p>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {course.modules.map(m => (
                  <span key={m.id} style={{ fontSize:11, padding:'3px 8px', borderRadius:6, background:c.bg, color:c.text }}>{m.icon} {m.title.split(' ')[0]}</span>
                ))}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick access */}
      <div style={{ fontSize:13, fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--text2)', marginBottom:12 }}>
        Révision rapide
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {[
          { to:'/flashcards', icon:'🃏', title:'Flashcards', sub:`${FLASHCARDS.length} cartes — termes et définitions clés` },
          { to:'/exam/symfony', icon:'📋', title:'Examen Symfony', sub:`${SYMFONY_QCM.length} QCM · ${SYMFONY_PDF.length} PDF · ${SYMFONY_REAL_2026.length} Réel 2026` },
        ].map(item => (
          <Link key={item.to} to={item.to}
            style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:'1.25rem', textDecoration:'none', display:'flex', alignItems:'center', gap:14, transition:'all .15s' }}
            onMouseOver={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.transform='translateY(-1px)' }}
            onMouseOut={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)' }}>
            <div style={{ fontSize:28 }}>{item.icon}</div>
            <div>
              <div style={{ fontFamily:'Sora,sans-serif', fontSize:14, fontWeight:600, marginBottom:2 }}>{item.title}</div>
              <div style={{ fontSize:12, color:'var(--text3)' }}>{item.sub}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
