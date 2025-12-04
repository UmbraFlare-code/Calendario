"use client"
import { getDayStatus, getRandomSize } from "@/utils/calendar-helpers"
import type { AdventDay } from "@/types/advent"
import GiftBoxSvg from "./gift-box-svg"

interface DayCardProps {
  day: AdventDay
  isOpened: boolean
  onOpen: (day: AdventDay) => void
}

export default function DayCard({ day, isOpened, onOpen }: DayCardProps) {
  const status = getDayStatus(day.id)
  const sizeClass = getRandomSize(day.id)

  const handleClick = () => {
    if (status === "today" && !isOpened) {
      onOpen(day)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`
        relative transition-all duration-300 
        ${sizeClass}
        ${status === "today" && !isOpened ? "hover:scale-105 cursor-pointer" : ""}
        ${status === "future" ? "cursor-not-allowed" : ""}
        ${status === "past" && !isOpened ? "cursor-not-allowed opacity-60" : ""}
        ${isOpened ? "cursor-default" : ""}
      `}
    >
      <GiftBoxSvg status={status} isOpened={isOpened} day={day} />
    </div>
  )
}
