"use client"

import { useState, useEffect } from "react"
import type { OpenedDays } from "@/types/advent"

const STORAGE_KEY = "advent-calendar-opened"

export function usePersistence() {
  const [openedDays, setOpenedDays] = useState<OpenedDays>({})
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar estado al montar
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setOpenedDays(JSON.parse(stored))
      } catch {
        setOpenedDays({})
      }
    }
    setIsLoaded(true)
  }, [])

  // Guardar estado cuando cambia
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(openedDays))
    }
  }, [openedDays, isLoaded])

  const markAsOpened = (dayId: number) => {
    setOpenedDays((prev) => ({
      ...prev,
      [dayId]: true,
    }))
  }

  const isOpened = (dayId: number): boolean => {
    return openedDays[dayId] || false
  }

  return {
    openedDays,
    markAsOpened,
    isOpened,
    isLoaded,
  }
}
