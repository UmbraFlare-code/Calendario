"use client"

import { Lock, Mail, Gift, Sparkles } from "lucide-react"
import type { AdventDay, DayStatus } from "@/types/advent"

interface GiftBoxSvgProps {
  status: DayStatus
  isOpened: boolean
  day: AdventDay
}

export default function GiftBoxSvg({ status, isOpened, day }: GiftBoxSvgProps) {
  const colors = getColors(status, isOpened)

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 120 140" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradientes */}
          <linearGradient id={`boxGrad-${day.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.boxLight} />
            <stop offset="100%" stopColor={colors.boxDark} />
          </linearGradient>
          <linearGradient id={`lidGrad-${day.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.lidLight} />
            <stop offset="100%" stopColor={colors.lidDark} />
          </linearGradient>
          <linearGradient id={`ribbonGrad-${day.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.ribbonLight} />
            <stop offset="50%" stopColor={colors.ribbonDark} />
            <stop offset="100%" stopColor={colors.ribbonLight} />
          </linearGradient>
          {/* Sombra */}
          <filter id={`shadow-${day.id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Caja base */}
        <rect
          x="10"
          y="50"
          width="100"
          height="80"
          rx="8"
          fill={`url(#boxGrad-${day.id})`}
          filter={`url(#shadow-${day.id})`}
        />

        {/* Cinta vertical */}
        <rect x="52" y="50" width="16" height="80" fill={`url(#ribbonGrad-${day.id})`} />

        {/* Tapa */}
        <rect
          x="5"
          y="35"
          width="110"
          height="20"
          rx="6"
          fill={`url(#lidGrad-${day.id})`}
          filter={`url(#shadow-${day.id})`}
          className={isOpened ? "translate-y-[-8px] rotate-[-5deg] origin-left transition-transform" : ""}
        />

        {/* Cinta horizontal en tapa */}
        <rect x="5" y="42" width="110" height="8" fill={`url(#ribbonGrad-${day.id})`} rx="2" />

        {/* Moño */}
        <g transform="translate(60, 25)">
          {/* Lazos del moño */}
          <ellipse cx="-12" cy="5" rx="12" ry="8" fill={colors.ribbonDark} />
          <ellipse cx="12" cy="5" rx="12" ry="8" fill={colors.ribbonDark} />
          {/* Centro del moño */}
          <circle cx="0" cy="5" r="6" fill={colors.ribbonLight} />
          {/* Cintas colgantes */}
          <path d={`M-4,10 Q-8,25 -12,30`} stroke={colors.ribbonDark} strokeWidth="4" fill="none" />
          <path d={`M4,10 Q8,25 12,30`} stroke={colors.ribbonDark} strokeWidth="4" fill="none" />
        </g>

        {/* Patrón decorativo en la caja */}
        <g opacity="0.15">
          <circle cx="30" cy="75" r="3" fill="white" />
          <circle cx="90" cy="85" r="2" fill="white" />
          <circle cx="25" cy="110" r="2.5" fill="white" />
          <circle cx="95" cy="105" r="3" fill="white" />
          <circle cx="35" cy="95" r="1.5" fill="white" />
          <circle cx="85" cy="70" r="2" fill="white" />
        </g>
      </svg>

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
        <ContentOverlay status={status} isOpened={isOpened} day={day} />
      </div>

      {/* Efecto de brillo para hoy */}
      {status === "today" && !isOpened && (
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-2 right-2 w-5 h-5 text-yellow-300 animate-ping" />
          <Sparkles className="absolute bottom-8 left-3 w-4 h-4 text-yellow-200 animate-pulse" />
        </div>
      )}
    </div>
  )
}

function ContentOverlay({
  status,
  isOpened,
  day,
}: {
  status: DayStatus
  isOpened: boolean
  day: AdventDay
}) {
  if (isOpened) {
    return (
      <div className="flex flex-col items-center mt-4">
        <Mail className="w-8 h-8 text-emerald-300 mb-1" />
        <span className="text-emerald-200 text-xs font-medium">Abierto</span>
        <span className="text-white/80 text-sm font-bold">{day.id}</span>
      </div>
    )
  }

  if (status === "past") {
    return (
      <div className="flex flex-col items-center mt-4">
        <Mail className="w-8 h-8 text-slate-400 mb-1" />
        <span className="text-slate-300 text-xs">Expirado</span>
        <span className="text-slate-400 text-sm font-bold">{day.id}</span>
      </div>
    )
  }

  if (status === "future") {
    return (
      <div className="flex flex-col items-center mt-4">
        <Lock className="w-8 h-8 text-slate-400 mb-1" />
        <span className="text-slate-300 text-lg font-bold">{day.id}</span>
        <span className="text-slate-400 text-xs">Dic</span>
      </div>
    )
  }

  // Hoy
  return (
    <div className="flex flex-col items-center mt-4">
      <Gift className="w-8 h-8 text-white mb-1 animate-bounce" />
      <span className="text-white font-bold text-sm">¡Ábrelo!</span>
      <span className="text-rose-200 text-xs">Día {day.id}</span>
    </div>
  )
}

function getColors(status: DayStatus, isOpened: boolean) {
  if (isOpened) {
    return {
      boxLight: "#059669",
      boxDark: "#064e3b",
      lidLight: "#10b981",
      lidDark: "#047857",
      ribbonLight: "#fcd34d",
      ribbonDark: "#f59e0b",
    }
  }

  switch (status) {
    case "today":
      return {
        boxLight: "#f43f5e",
        boxDark: "#9f1239",
        lidLight: "#fb7185",
        lidDark: "#e11d48",
        ribbonLight: "#fcd34d",
        ribbonDark: "#f59e0b",
      }
    case "past":
      return {
        boxLight: "#64748b",
        boxDark: "#334155",
        lidLight: "#94a3b8",
        lidDark: "#475569",
        ribbonLight: "#cbd5e1",
        ribbonDark: "#94a3b8",
      }
    case "future":
    default:
      return {
        boxLight: "#475569",
        boxDark: "#1e293b",
        lidLight: "#64748b",
        lidDark: "#334155",
        ribbonLight: "#94a3b8",
        ribbonDark: "#64748b",
      }
  }
}
