"use client"

import { X, Heart, Send } from "lucide-react"
import { sendWhatsAppMessage } from "@/utils/whatsapp"
import type { AdventDay } from "@/types/advent"
import { Button } from "@/components/ui/button"

interface CouponModalProps {
  day: AdventDay | null
  onClose: () => void
}

export default function CouponModal({ day, onClose }: CouponModalProps) {
  if (!day) return null

  const Icon = day.icon

  const handleRedeem = () => {
    sendWhatsAppMessage(day.title, day.desc)
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-md w-full p-6 md:p-8 border border-rose-500/30 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Icono principal */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Contenido */}
        <div className="text-center mb-8">
          <p className="text-rose-400 text-sm mb-2">Día {day.id} de Diciembre</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{day.title}</h2>
          <p className="text-slate-300 leading-relaxed">{day.desc}</p>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleRedeem}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 text-lg rounded-xl"
          >
            <Send className="w-5 h-5 mr-2" />
            Canjear por WhatsApp
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 py-6 rounded-xl bg-transparent"
          >
            <Heart className="w-5 h-5 mr-2 text-rose-400" />
            Guardar para después
          </Button>
        </div>
      </div>
    </div>
  )
}
