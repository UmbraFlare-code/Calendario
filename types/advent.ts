import type { LucideIcon } from "lucide-react"

export interface AdventDay {
  id: number
  icon: LucideIcon
  title: string
  desc: string
}

export type DayStatus = "future" | "today" | "past"

export interface OpenedDays {
  [key: number]: boolean
}
