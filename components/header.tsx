"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY
          setIsScrolled(scrollPosition > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#5A3825]/30 bg-[#F7EFE5]/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center h-16 w-full">
        <div className="flex-shrink-0 pl-1 sm:pl-2 md:pl-0">
          <Link href="/" className="flex items-center group" aria-label="Inicio Voltà">
            <div className="relative h-12 w-28 sm:h-14 sm:w-36 md:h-16 md:w-40">
              <Image
                src="/images/logo_volta.png"
                alt="Voltà Café"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                className="object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(42,26,18,0.2)]"
                priority
                quality={90}
              />
            </div>
          </Link>
        </div>

        {!isScrolled && (
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-[0.18em] uppercase pr-2 sm:pr-3">
            <Link href="#about" className="text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-y-[-2px] relative group">
              <span className="relative z-10">¿Qué es Volta?</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DFAE67] transition-all duration-250 group-hover:w-full"></span>
            </Link>
            <Link href="#products" className="text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-y-[-2px] relative group">
              <span className="relative z-10">Productos</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DFAE67] transition-all duration-250 group-hover:w-full"></span>
            </Link>
            <Link href="#community" className="text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-y-[-2px] relative group">
              <span className="relative z-10">Comunidad Volta</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DFAE67] transition-all duration-250 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-y-[-2px] relative group">
              <span className="relative z-10"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DFAE67] transition-all duration-250 group-hover:w-full"></span>
            </Link>
          </nav>
        )}

        <button
          className={`rounded-full p-2 text-[#2A1A12] transition-all duration-250 hover:bg-[#E9DCC4] hover:scale-110 active:scale-95 mr-2 sm:mr-3 ${isScrolled ? "md:flex" : "md:hidden"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X size={24} className="transition-transform duration-250 rotate-90" /> : <Menu size={24} className="transition-transform duration-250" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="pb-4 space-y-2 rounded-xl bg-[#E9DCC4]/98 backdrop-blur-sm px-2 sm:px-3 shadow-xl border border-[#5A3825]/20 animate-in slide-in-from-top-2 duration-300">
          <Link
            href="#products"
            className="block py-2 text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-x-2 hover:pl-2 rounded-lg hover:bg-[#F7EFE5]"
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            href="#about"
            className="block py-2 text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-x-2 hover:pl-2 rounded-lg hover:bg-[#F7EFE5]"
            onClick={() => setIsMenuOpen(false)}
          >
            ¿Qué es Volta?
          </Link>
          <Link
            href="#community"
            className="block py-2 text-[#2A1A12] transition-all duration-250 hover:text-[#5A3825] hover:translate-x-2 hover:pl-2 rounded-lg hover:bg-[#F7EFE5]"
            onClick={() => setIsMenuOpen(false)}
          >
            Comunidad Volta
          </Link>
          <Link
            href="https://pastisseriatano.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-black transition-all duration-250 hover:text-[#5A3825] hover:translate-x-2 hover:pl-2 rounded-lg hover:bg-[#F7EFE5]"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-sm font-medium">VOLTĀ x</span>
            <div className="relative h-5 w-20 flex-shrink-0">
              <Image 
                src="/images/logo_Tano.png" 
                alt="Tano" 
                fill 
                className="object-contain" 
                sizes="80px"
                loading="lazy"
              />
            </div>
          </Link>
        </nav>
      )}
    </header>
  )
}

