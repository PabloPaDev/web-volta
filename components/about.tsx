"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onVideoPlay = () => setIsPlaying(true)
    const onVideoPause = () => setIsPlaying(false)
    const onVideoEnded = () => setIsPlaying(false)

    // Asegurar que el video muestre el primer frame al cargar
    const showFirstFrame = () => {
      if (video.readyState >= 2) {
        video.currentTime = 0
      }
    }

    const onLoadedMetadata = () => {
      video.currentTime = 0
    }

    video.addEventListener('play', onVideoPlay)
    video.addEventListener('pause', onVideoPause)
    video.addEventListener('ended', onVideoEnded)
    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('canplay', showFirstFrame)

    // Forzar mostrar primer frame si ya está cargado
    if (video.readyState >= 2) {
      video.currentTime = 0
    }

    return () => {
      video.removeEventListener('play', onVideoPlay)
      video.removeEventListener('pause', onVideoPause)
      video.removeEventListener('ended', onVideoEnded)
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('canplay', showFirstFrame)
    }
  }, [])

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        void videoRef.current.play().catch(() => null)
      }
    }
  }

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <ScrollReveal className="space-y-4 sm:space-y-6 text-left" delay={120}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">¿De dónde nace VOLTĀ?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              VOLTĀ nace de la pasión por el café de especialidad y el compromiso con el rendimiento deportivo.
              Creemos que cada atleta merece un café que potencie su energía y enfoque.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Trabajamos directamente con fincas seleccionadas para garantizar la máxima calidad y trazabilidad de nuestros productos.
              Cada grano es cuidadosamente seleccionado y tostado para resaltar sus mejores características.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Nuestra misión es acompañarte en tu camino hacia el máximo rendimiento,
              ofreciéndote café premium que se adapte a tus necesidades y estilo de vida activo.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A3825] transition-all duration-250 group-hover:scale-110">100%</div>
                <div>
                  <p className="font-semibold text-foreground text-base sm:text-lg">Granos Especiales</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Seleccionados manualmente</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full" delay={260}>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/20 group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/quienes%20somos.mp4"
                loop
                playsInline
                preload="auto"
                muted={isMuted}
              />
              <button
                type="button"
                onClick={handleTogglePlay}
                className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-full bg-[#DFAE67] p-2 sm:p-2.5 text-[#2A1A12] transition-all duration-250 hover:scale-110 active:scale-95 shadow-lg"
                aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2A1A12]" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2A1A12]" />
                )}
              </button>
              {isPlaying && (
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 rounded-full bg-[#2A1A12]/80 backdrop-blur-sm p-2 sm:p-3 text-[#F7EFE5] transition-all duration-250 hover:bg-[#2A1A12] hover:scale-110 active:scale-95 shadow-lg"
                  aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
