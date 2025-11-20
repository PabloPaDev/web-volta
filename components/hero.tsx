"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { ScrollReveal } from "@/components/scroll-reveal"
const BANNERS = [
  {
    src: "/images/banner_1.jpg",
    alt: "Clientes conversando dentro de Volta Café",
  },
  {
    src: "/images/banner_2.jpg",
    alt: "Bolsas de café Volta en barra de exhibición",
  },
  {
    src: "/images/banner_3.jpg",
    alt: "Barista de Volta Café preparando bebidas",
  },
]

export function Hero() {
  const [activeBanner, setActiveBanner] = useState(0)
  const HEADLINE = "Café de Especialidad para los que se mueven de verdad."
  const HIGHLIGHT_START = "Café de Especialidad para "
  const TYPING_SPEED = 140
  const CARET_SPEED = 650

  const [typedText, setTypedText] = useState("")
  const [showCaret, setShowCaret] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((current) => (current + 1) % BANNERS.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(HEADLINE.slice(0, index + 1))
      index += 1
      if (index === HEADLINE.length) {
        clearInterval(interval)
      }
    }, TYPING_SPEED)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev)
    }, CARET_SPEED)

    return () => clearInterval(caretInterval)
  }, [])

  const primaryText = typedText.slice(0, Math.min(typedText.length, HIGHLIGHT_START.length))
  const secondaryText = typedText.length > HIGHLIGHT_START.length ? typedText.slice(HIGHLIGHT_START.length) : ""
  const typingComplete = typedText.length === HEADLINE.length

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeBanner ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              sizes="100vw"
              className="object-cover w-full h-full transition-transform duration-[6000ms] ease-out"
              style={{
                transform: index === activeBanner ? "scale(1.05)" : "scale(1)",
              }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-transparent" />
          </div>
        ))}
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-0">
        <ScrollReveal className="max-w-3xl mx-auto space-y-6">
          <ScrollReveal className="relative inline-flex items-center justify-center" delay={100}>
            <span className="absolute inset-0 blur-3xl bg-[#5A3825]/40 animate-pulse" />
            <p className="relative text-5xl md:text-6xl font-semibold tracking-[0.85em] text-transparent bg-clip-text bg-gradient-to-r from-[#DFAE67] via-[#5A3825] to-[#DFAE67] uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)] animate-[float_6s_ease-in-out_infinite]">
              VOLTĀ
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex items-center justify-center" delay={220}>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <span className="text-white">{primaryText}</span>
              <span className="text-[#DFAE67]">{secondaryText}</span>
            </h1>
            <span
              className={`ml-3 h-7 md:h-9 w-[3px] rounded bg-[#DFAE67] transition-opacity duration-300 ${typingComplete && showCaret ? "opacity-0" : "opacity-100"}`}
            />
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <p className="text-lg md:text-xl text-white/90 tracking-[0.4em] uppercase">
              Ritual · Energía · Comunidad
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  )
}
