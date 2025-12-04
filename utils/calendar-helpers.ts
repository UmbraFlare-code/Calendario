import type { DayStatus } from "@/types/advent"

const sizes = [
  "w-28 h-32 md:w-32 md:h-36",
  "w-32 h-36 md:w-36 md:h-40",
  "w-28 h-36 md:w-32 md:h-40",
  "w-32 h-32 md:w-36 md:h-36",
  "w-30 h-38 md:w-34 md:h-42",
]

export function getDayStatus(dayId: number): DayStatus {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()

  // Solo aplica en diciembre (mes 11)
  if (currentMonth !== 11) {
    return "future"
  }

  if (currentDay === dayId) {
    return "today"
  }

  if (currentDay > dayId) {
    return "today"
  }

  return "future"
}

export function getRandomSize(dayId: number): string {
  return sizes[dayId % sizes.length]
}

export function isDecember(): boolean {
  return new Date().getMonth() === 11
}
