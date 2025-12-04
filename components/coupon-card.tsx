import type { AdventDay } from "@/types/advent"

interface CouponCardProps {
  day: AdventDay
}

export default function CouponCard({ day }: CouponCardProps) {
  const Icon = day.icon

  return (
    <div className="w-[400px] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 border-2 border-rose-500/40 shadow-2xl">
      {/* Header decorativo */}
      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 200 40" className="w-48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <path d="M0,20 Q50,0 100,20 T200,20" fill="none" stroke="url(#headerGrad)" strokeWidth="3" opacity="0.5" />
          <text x="100" y="30" textAnchor="middle" fill="#f43f5e" fontSize="14" fontWeight="bold">
            Cupón de Amor
          </text>
        </svg>
      </div>

      {/* Icono principal */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/30 border-4 border-rose-400/30">
          <Icon className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Contenido */}
      <div className="text-center mb-6">
        <p className="text-rose-400 text-sm mb-2 font-medium">Día {day.id} de Diciembre</p>
        <h2 className="text-3xl font-bold text-white mb-4">{day.title}</h2>
        <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
          <p className="text-slate-200 leading-relaxed">{day.desc}</p>
        </div>
      </div>

      {/* Footer decorativo */}
      <div className="flex justify-center">
        <svg viewBox="0 0 150 50" className="w-36" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {/* Corazones decorativos */}
          <path
            d="M30,25 C30,15 20,10 15,18 C10,10 0,15 0,25 C0,35 15,45 15,45 C15,45 30,35 30,25"
            fill="url(#heartGrad)"
            transform="translate(10, 0) scale(0.8)"
            opacity="0.7"
          />
          <path
            d="M30,25 C30,15 20,10 15,18 C10,10 0,15 0,25 C0,35 15,45 15,45 C15,45 30,35 30,25"
            fill="url(#heartGrad)"
            transform="translate(60, -5) scale(1)"
          />
          <path
            d="M30,25 C30,15 20,10 15,18 C10,10 0,15 0,25 C0,35 15,45 15,45 C15,45 30,35 30,25"
            fill="url(#heartGrad)"
            transform="translate(110, 0) scale(0.8)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Marca de agua */}
      <p className="text-center text-slate-500 text-xs mt-4">Calendario de Adviento del Amor</p>
    </div>
  )
}
