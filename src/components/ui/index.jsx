import clsx from 'clsx'

export function ProgressBar({ value, className, color = 'emerald' }) {
  const colors = {
    emerald: 'bg-emerald-500', violet: 'bg-violet-500',
    blue: 'bg-blue-500', orange: 'bg-orange-500',
  }
  return (
    <div className={clsx('h-1.5 bg-gray-800 rounded-full overflow-hidden', className)}>
      <div
        className={clsx('h-full rounded-full progress-bar', colors[color] || colors.emerald)}
        style={{ width: `${Math.min(100, value)}%` }}
      />
    </div>
  )
}

export function Badge({ children, color = 'gray', size = 'sm' }) {
  const colors = {
    gray:    'bg-gray-800 text-gray-400',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    violet:  'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    blue:    'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    orange:  'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    red:     'bg-red-500/10 text-red-400 border border-red-500/20',
    green:   'bg-green-500/10 text-green-400 border border-green-500/20',
  }
  const sizes = { xs: 'text-[10px] px-1.5 py-0.5', sm: 'text-xs px-2 py-0.5', md: 'text-sm px-2.5 py-1' }
  return (
    <span className={clsx('inline-flex items-center rounded-md font-medium', colors[color], sizes[size])}>
      {children}
    </span>
  )
}

export function Chip({ children, className }) {
  return (
    <span className={clsx('inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-400', className)}>
      {children}
    </span>
  )
}

export function Card({ children, className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-gray-900 border border-gray-800 rounded-xl p-5',
        onClick && 'cursor-pointer hover:border-gray-700 transition-colors',
        className
      )}
    >
      {children}
    </div>
  )
}

export function Btn({ children, onClick, variant = 'primary', size = 'md', className, disabled, type = 'button' }) {
  const variants = {
    primary: 'bg-emerald-500 text-gray-950 hover:bg-emerald-400 font-semibold',
    secondary: 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700',
    ghost: 'text-gray-400 hover:text-gray-200 hover:bg-gray-800',
    danger: 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20',
  }
  const sizes = { sm: 'text-xs px-3 py-1.5', md: 'text-sm px-4 py-2', lg: 'text-base px-5 py-2.5' }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center gap-2 rounded-lg transition-all',
        variants[variant], sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}

export function TipBox({ tips }) {
  if (!tips?.length) return null
  return (
    <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4 my-4">
      <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-3">💡 Points clés</div>
      <ul className="space-y-1.5">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-emerald-500 mt-0.5 flex-shrink-0">›</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function NoteBox({ note }) {
  if (!note) return null
  return (
    <div className="border-l-2 border-blue-500 bg-blue-500/5 rounded-r-xl px-4 py-3 my-4">
      <pre className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">{note}</pre>
    </div>
  )
}
