"use client"

import { useState, useRef } from "react"
import { ImageIcon, X, Send} from "lucide-react"
import type { AdventDay } from "@/types/advent"
import { Button } from "@/components/ui/button"
import CouponCard from "./coupon-card"
import { sendWhatsAppMessage } from "@/utils/whatsapp"

interface OpenedCouponsGalleryProps {
  openedDays: AdventDay[]
}

export default function OpenedCouponsGallery({ openedDays }: OpenedCouponsGalleryProps) {
  const [selectedCoupon, setSelectedCoupon] = useState<AdventDay | null>(null)
  const couponRef = useRef<HTMLDivElement>(null)
  /* =====================================================
   * 🔥 Nuevo método para canjear por WhatsApp
   * =====================================================*/
  const handleRedeem = (day: AdventDay) => {
    if (!day) return
    sendWhatsAppMessage(day.title, day.desc)
  }

  return (
    <section className="mt-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <ImageIcon className="w-6 h-6 text-rose-400" />
        <h2 className="text-2xl font-bold text-white">Cupones Abiertos</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {openedDays.map((day) => (
          <div
            key={day.id}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700 hover:border-rose-500/50 transition-all"
          >
            {/* Header del cupón */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <day.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-rose-400 text-xs">Día {day.id}</p>
                <p className="text-white font-medium text-sm">{day.title}</p>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-2">
              {/* 🔥 Nuevo botón de canjear por WhatsApp */}
              <Button
                onClick={() => handleRedeem(day)}
                size="sm"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Canjear por WhatsApp
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Cupón oculto para renderizado y descarga */}
      {selectedCoupon && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedCoupon(null)}
              className="absolute -top-10 right-0 text-white hover:text-rose-400"
            >
              <X className="w-6 h-6" />
            </button>

            <div ref={couponRef}>
              <CouponCard day={selectedCoupon} />
            </div>

            <p className="text-center text-slate-400 mt-4 text-sm">Generando imagen...</p>
          </div>
        </div>
      )}
    </section>
  )
}
