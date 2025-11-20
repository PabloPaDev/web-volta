"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

const COMMUNITY_IMAGES = [
  "c1.jpg",
  "c2.jpg",
  "c3.jpg",
  "c4.jpg",
  "c5.jpg",
  "c6.jpg",
  "c7.jpg",
  "c8.jpg",
  "c9.jpg",
  "c10.jpg",
]

export function Community() {
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  const slides = useMemo(
    () =>
      COMMUNITY_IMAGES.map((image, index) => ({
        src: `/images/Volta%20Comunidad/${image}`,
        alt: `Momentos de la comunidad Voltà ${index + 1}`,
      })),
    [],
  )

  useEffect(() => {
    const api = carouselApi
    if (!api) return

    const startAutoplay = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
      autoplayRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0)
        }
      }, 3000)
    }

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }

    startAutoplay()

    const pointerDownHandler = () => stopAutoplay()
    const pointerUpHandler = () => {
      setTimeout(() => startAutoplay(), 1000)
    }

    api.on("pointerDown", pointerDownHandler)
    api.on("pointerUp", pointerUpHandler)
    api.on("destroy", stopAutoplay)

    return () => {
      stopAutoplay()
      api.off("pointerDown", pointerDownHandler)
      api.off("pointerUp", pointerUpHandler)
      api.off("destroy", stopAutoplay)
    }
  }, [carouselApi])

  return (
    <section id="community" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <ScrollReveal className="relative order-2 md:order-1" delay={80}>
            <Carousel
              className="w-full"
              setApi={setCarouselApi}
              opts={{
                align: "start",
                loop: true,
                duration: 20,
              }}
            >
              <CarouselContent className="-ml-0">
                {slides.map((slide, index) => {
                  const isC10 = slide.src.includes("c10.jpg")
                  return (
                    <CarouselItem key={slide.src} className="pl-0 md:basis-full">
                      <div className="relative h-[32rem] rounded-xl overflow-hidden shadow-2xl shadow-black/30 group">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${isC10 ? "object-top" : ""}`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          quality={index === 0 ? 85 : 75}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2 space-y-4 sm:space-y-6 px-2 sm:px-0" delay={220}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Únete a la Comunidad <span className="text-[#5A3825]">VOLTĀ</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              En VOLTĀ, el café es un pretexto para conectar. Si te apasiona el café y el deporte no dudes en unirte a nuestra comunidad en Instagram.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Allí anunciamos los eventos, entrenamientos y novedades de la marca.
            </p>
            <Link
              href="https://www.instagram.com/volta_athletics?igsh=MXhraWRmc2lndXYydg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram de Voltà Athletics en una pestaña nueva"
            >
              <Button
                size="lg"
                className="w-full sm:w-fit rounded-full bg-[#DFAE67] px-6 sm:px-8 text-[#2A1A12] transition-all duration-250 hover:bg-[#C8964A] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Únete Ahora
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
