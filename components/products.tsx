"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

type Product = {
  id: number
  name: string
  description: string
  image: string
  alt: string
  rating: number
  reviews: number
  price: string
  sca: number
  details: { label: string; value: string }[]
  link: string
}

const products: Product[] = [
  {
    id: 1,
    name: "VOLTĀ Piendamó",
    description: "Café premium con notas que recuerdan a frutas cítricas, florales y un dulzor equilibrado.",
    image: "/images/volta_blanco.png",
    alt: "Bolsa de café Voltà Piendamó",
    rating: 4.8,
    reviews: 18,
    price: "Desde 14,50 €",
    sca: 86,
    details: [
      { label: "Origen", value: "Cauca" },
      { label: "Variedad", value: "Caturra" },
      { label: "Notas de cata", value: "Melocotón, caramelo, moras.\nAcidez cítrica." },
      { label: "Altura", value: "1.790 m s. n. m." },
      { label: "Puntuación SCA", value: "86" },
    ],
    link: "https://bccoffee.es/cafe/colombia-piendamo-2/",
  },
  {
    id: 2,
    name: "VOLTĀ El Tambo",
    description:
      "Café premium con notas de frutos rojos, miel y un toque floral. Acidez viva y cuerpo jugoso.",
    image: "/images/volta_negro.png",
    alt: "Bolsa de café Voltà El Tambo",
    rating: 4.9,
    reviews: 22,
    price: "Desde 16,00 €",
    sca: 88,
    details: [
      { label: "Origen", value: "Cauca" },
      { label: "Variedad", value: "Caturra" },
      { label: "Notas de cata", value: "Melocotón, caramelo, moras.\nAcidez cítrica." },
      { label: "Altura", value: "1.790 m s. n. m." },
      { label: "Puntuación SCA", value: "86" },
    ],
    link: "https://bccoffee.es/cafe/colombia-eltambo/",
  },
]


type ProductCardProps = {
  product: Product
  isOpen: boolean
  onToggle: () => void
}

function ProductCard({ product, isOpen, onToggle }: ProductCardProps) {
  const roundedRating = Math.round(product.rating)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-[#5A3825]/40 bg-[#E9DCC4] p-5 shadow-[0_8px_16px_rgba(90,56,37,0.15)] md:max-w-xs transition-all duration-250 hover:shadow-[0_12px_24px_rgba(90,56,37,0.25)] hover:-translate-y-1 hover:border-[#5A3825]/60 group">
      <div>
        <h3 className="text-base md:text-lg font-semibold uppercase tracking-[0.18em] text-[#2A1A12] transition-colors duration-250 group-hover:text-[#5A3825]">
          {product.name}
        </h3>
        <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#5A3825]">{product.description}</p>
      </div>

      <div className="relative h-40 w-full bg-[#F7EFE5] rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width:768px) 18vw, 70vw"
          priority={product.id === 1}
        />
      </div>

      <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#2A1A12]">
        <div className="flex items-center gap-1 text-[#DFAE67]">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} aria-hidden className="transition-transform duration-250 hover:scale-125">
              {index < roundedRating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <span>{product.rating.toFixed(1)}</span>
        <span className="text-[#5A3825]/70">• {product.reviews} reseñas</span>
      </div>

      {isOpen && (
        <div className="space-y-3 rounded-xl border border-[#5A3825]/30 bg-[#F7EFE5] p-4 font-mono text-xs tracking-[0.08em] text-[#2A1A12] animate-in fade-in slide-in-from-top-2 duration-300">
          {product.details.map((detail, index) => (
            <div key={detail.label} className="space-y-1">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[#5A3825] font-semibold">{detail.label}:</span>
                <span className="text-right text-[#2A1A12] whitespace-pre-line">
                  {detail.value}
                </span>
              </div>
              {index !== product.details.length - 1 && <div className="h-px bg-[#5A3825]/20" />}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-start text-[#2A1A12]">
        <span className="text-sm md:text-base font-bold">{product.price}</span>
      </div>

      <div className="flex items-center justify-between gap-3 pt-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-12 rounded-lg border border-[#5A3825]/40 text-lg text-[#2A1A12] transition-all duration-250 hover:bg-[#F7EFE5] hover:scale-110 active:scale-95"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {isOpen ? "−" : "+"}
        </Button>
        <Button asChild className="h-8 flex-1 rounded-xl bg-[#DFAE67] px-3 text-[#2A1A12] transition-all duration-250 hover:bg-[#C8964A] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full flex-col items-center justify-center gap-0.5 text-center leading-tight"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">Comprar</span>
            <span className="text-[8px] uppercase tracking-[0.18em] text-[#2A1A12]/70">
              Compra gestionada por bccoffee.es
            </span>
          </a>
        </Button>
      </div>
    </div>
  )
}

export function Products() {
  const [openCardIds, setOpenCardIds] = useState<Set<number>>(new Set())

  const toggleCard = (id: number) => {
    setOpenCardIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section id="products" className="py-16 md:py-20 bg-[#F7EFE5]">
      <div className="max-w-5xl mx-auto px-0">
        <ScrollReveal className="mb-12 text-center" delay={100}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2A1A12] mb-4 leading-tight">Nuestros Cafés</h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-[#5A3825]">
            En grano o molido, listo para cualquier cafetera.
          </p>
        </ScrollReveal>

        <div className="grid gap-y-12 gap-x-8 place-items-center md:grid-cols-2">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} className="flex w-full justify-center" delay={160 + index * 140}>
              <ProductCard
                product={product}
                isOpen={openCardIds.has(product.id)}
                onToggle={() => toggleCard(product.id)}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
