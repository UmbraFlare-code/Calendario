import { Gift } from "lucide-react"

export default function CalendarHeader() {
  return (
    <header className="py-8 md:py-12 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Gift className="w-10 h-10 md:w-12 md:h-12 text-rose-400 animate-bounce" />
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">
          Nuestro Calendario
        </h1>
        <Gift className="w-10 h-10 md:w-12 md:h-12 text-rose-400 animate-bounce" />
      </div>
      <p className="text-slate-400 text-lg">Del 5 al 31 de diciembre ✨</p>
    </header>
  )
}
