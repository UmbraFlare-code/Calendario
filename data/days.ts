import {
  Heart,
  Video,
  Gamepad2,
  Moon,
  Camera,
  Mic,
  Music,
  Clock,
  Tv,
  Coffee,
  MessageCircle,
  Send,
  Star,
  Smile,
  ImageIcon,
  Scissors,
  Sparkles,
} from "lucide-react"
import type { AdventDay } from "@/types/advent"

export const adventDays: AdventDay[] = [
  { id: 6, icon: Video, title: "Videocita Especial", desc: "Una videollamada romántica solo para nosotros. Prepara algo bonito para vernos."},
  { id: 7, icon: Gamepad2, title: "Juego en Línea", desc: "Elige un juego y jugamos juntos online. ¡Tú mandas!" },
  { id: 8, icon: Moon, title: "Buenas Noches VIP", desc: "Una nota de voz especial de buenas noches, con todo mi amor." },
  { id: 9, icon: Camera, title: "Fotos Exclusivas", desc: "Te envío fotos especiales que solo tú verás." },
  { id: 10, icon: Mic, title: "Nota de Voz", desc: "Un mensaje de voz diciéndote todo lo que siento por ti." },
  { id: 11, icon: Clock, title: "Control Total (1h)", desc: "Durante una hora, tú decides qué hacemos. ¡Lo que quieras!"},
  { id: 12, icon: Tv, title: "Película a Distancia", desc: "Vemos una película juntos por videollamada." },
  { id: 13, icon: Coffee, title: "Desayuno Virtual", desc: "Desayunamos juntos por videollamada este fin de semana." },

  { id: 15, icon: MessageCircle, title: "Preguntas Traviesas", desc: "Un juego de preguntas picantes entre nosotros." },
  { id: 16, icon: Send, title: "Cartita Digital", desc: "Una carta escrita con todo mi corazón para ti." },
  { id: 17, icon: Heart, title: "Te Echo de Menos", desc: "Un mensaje especial recordándote cuánto te extraño." },
  { id: 18, icon: Star, title: "Cumplido Intenso", desc: "Los cumplidos más bonitos que se me ocurran, solo para ti." },
  { id: 19, icon: Smile, title: "Mini Reto", desc: "Un reto divertido para hacer juntos." },
  { id: 20, icon: ImageIcon, title: "Tardecita de Fotos", desc: "Sesión de fotos bonitas que nos tomamos juntos." },
  { id: 21, icon: Scissors, title: "Manualidad Digital", desc: "Hago algo creativo y digital solo para ti." },
  { id: 22, icon: Clock, title: "Tiempo Exclusivo", desc: "Dos horas de atención completa, sin distracciones." },
  { id: 23, icon: Sparkles, title: "Elige mi Outfit", desc: "Tú decides qué me pongo hoy. ¡Sé creativo/a!" },

  { id: 26, icon: Heart, title: "Plan de Futuro", desc: "Planeamos juntos algo bonito para cuando nos veamos." },
  { id: 27, icon: Music, title: "Karaoke Virtual", desc: "Cantamos juntos por videollamada. ¡Sin vergüenza!" },
  { id: 29, icon: Moon, title: "Noche de Relax", desc: "Una noche tranquila juntos, solo hablando y disfrutando." },
  { id: 30, icon: Star, title: "Propósitos Juntos", desc: "Escribimos nuestros propósitos de año nuevo juntos." },

]
