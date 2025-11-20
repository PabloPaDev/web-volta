"use client"

import { useEffect, useRef, useState } from "react"

import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      if (!isMuted) {
        void videoRef.current.play().catch(() => null)
      }
    }
  }, [isMuted])

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-6 text-left" delay={120}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">¿De donde nace VOLTĀ?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              VOLTĀ nace de la pasión por el café de especialidad y el compromiso con el rendimiento deportivo.
              Creemos que cada atleta merece un café que potencie su energía y enfoque.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Trabajamos directamente con fincas seleccionadas para garantizar la máxima calidad y trazabilidad de nuestros productos.
              Cada grano es cuidadosamente seleccionado y tostado para resaltar sus mejores características.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Nuestra misión es acompañarte en tu camino hacia el máximo rendimiento,
              ofreciéndote café premium que se adapte a tus necesidades y estilo de vida activo.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 group">
                <div className="text-3xl md:text-4xl font-bold text-[#5A3825] transition-all duration-250 group-hover:scale-110">100%</div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Granos Especiales</p>
                  <p className="text-muted-foreground">Seleccionados manualmente</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="relative h-96 md:h-full" delay={260}>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/20 group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/quienes%20somos.mp4"
                autoPlay
                loop
                playsInline
              />
              <button
                type="button"
                onClick={handleToggleMute}
                className="absolute bottom-4 right-4 rounded-full bg-[#2A1A12]/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#F7EFE5] transition-all duration-250 hover:bg-[#2A1A12] hover:scale-110 active:scale-95 shadow-lg"
              >
                {isMuted ? "Activar audio" : "Silenciar audio"}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
