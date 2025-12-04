"use client"

import { useState } from "react"
import { adventDays } from "@/data/days"
import { usePersistence } from "@/hooks/use-persistence"
import type { AdventDay } from "@/types/advent"
import CalendarHeader from "./calendar-header"
import DayCard from "./day-card"
import CouponModal from "./coupon-modal"
import Snowfall from "./snowfall"
import OpenedCouponsGallery from "./opened-coupons-gallery"

export default function AdventCalendar() {
  const [selectedDay, setSelectedDay] = useState<AdventDay | null>(null)
  const { openedDays, markAsOpened } = usePersistence()

  const handleOpenDay = (day: AdventDay) => {
    markAsOpened(day.id)
    setSelectedDay(day)
  }

  const handleCloseModal = () => {
    setSelectedDay(null)
  }

  const openedDaysList = adventDays.filter((day) => openedDays[day.id])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <Snowfall />

      <div className="relative z-10">
        <CalendarHeader />

        <main className="container mx-auto px-4 pb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {adventDays.map((day) => (
              <DayCard key={day.id} day={day} isOpened={openedDays[day.id] || false} onOpen={handleOpenDay} />
            ))}
          </div>

          {openedDaysList.length > 0 && <OpenedCouponsGallery openedDays={openedDaysList} />}
        </main>
      </div>

      <CouponModal day={selectedDay} onClose={handleCloseModal} />
    </div>
  )
}
