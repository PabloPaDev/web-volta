"use client"

import Image from "next/image"
import { MessageCircle, Store, Gift } from "lucide-react"
import Link from "next/link"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

export function OrderInfo() {
    return (
        <section className="pt-2 sm:pt-3 md:pt-4 pb-8 sm:pb-10 md:pb-12 bg-[#F7EFE5]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    <ScrollReveal delay={100}>
                        <div className="rounded-xl border border-[#5A3825]/20 bg-[#E9DCC4] p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-250 h-full flex flex-col">
                            <div className="flex items-center gap-1 mb-1">
                                <div className="rounded-full bg-[#DFAE67]/15 p-1">
                                    <MessageCircle className="text-[#5A3825] w-4 h-4" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-[#2A1A12]">Pedidos por WhatsApp</h3>
                            </div>
                            <p className="text-sm text-[#5A3825] mb-2 leading-relaxed flex-grow">
                                Inicia tu pedido directamente por WhatsApp. Te lo llevamos a tu casa con la máxima comodidad y rapidez.
                            </p>
                            <Link
                                href="https://wa.me/34645498729"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="sm" className="w-full bg-[#DFAE67] text-[#2A1A12] hover:bg-[#C8964A] transition-all duration-250 hover:scale-105 active:scale-95 text-xs">
                                    Hacer pedido
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="rounded-xl border border-[#5A3825]/20 bg-[#E9DCC4] p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-250 h-full flex flex-col">
                            <div className="flex items-center gap-1 mb-1">
                                <div className="rounded-full bg-[#DFAE67]/15 p-1">
                                    <Store className="text-[#5A3825] w-4 h-4" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-[#2A1A12]">VOLTĀ en tu cafetería</h3>
                            </div>
                            <p className="text-sm text-[#5A3825] mb-2 leading-relaxed flex-grow">
                                Lleva VOLTĀ a tu cafetería y ofrece café de especialidad premium a tus clientes. Calidad excepcional para tu negocio.
                            </p>
                            <Link
                                href="https://wa.me/34645498729?text=Quiero%20tener%20VOLT%C4%80%20en%20mi%20cafeter%C3%ADa%2C%20%C2%BFpodr%C3%ADas%20informarme%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="sm" className="w-full bg-[#DFAE67] text-[#2A1A12] hover:bg-[#C8964A] transition-all duration-250 hover:scale-105 active:scale-95 text-xs">
                                    Solicitar Información
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="rounded-xl border border-[#5A3825]/20 bg-[#E9DCC4] p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-250 h-full flex flex-col">
                            <div className="flex items-center gap-1 mb-1">
                                <div className="rounded-full bg-[#DFAE67]/15 p-1">
                                    <div className="relative h-4 w-12">
                                        <Image 
                                            src="/images/logo_Tano.png" 
                                            alt="Tano" 
                                            fill 
                                            className="object-contain" 
                                            sizes="48px"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-[#2A1A12]">x VOLTĀ</h3>
                            </div>
                            <p className="text-sm text-[#5A3825] mb-2 leading-relaxed flex-grow">
                                Si no puedes esperar para tomar una taza VOLTĀ, ven a Tano y disfruta de tu café.
                            </p>
                            <Link
                                href="https://pastisseriatano.es/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="sm" className="w-full bg-[#DFAE67] text-[#2A1A12] hover:bg-[#C8964A] transition-all duration-250 hover:scale-105 active:scale-95 text-xs">
                                    Tomar café en Tano
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="rounded-xl border border-[#5A3825]/20 bg-[#E9DCC4] p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-250 h-full flex flex-col">
                            <div className="flex items-center gap-1 mb-1">
                                <div className="rounded-full bg-[#DFAE67]/15 p-1">
                                    <Gift className="text-[#5A3825] w-4 h-4" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-[#2A1A12]">Merchandising VOLTĀ</h3>
                            </div>
                            <p className="text-sm text-[#5A3825] mb-2 leading-relaxed flex-grow">
                                Descubre nuestra colección de productos VOLTĀ. Artículos exclusivos para los amantes del café de especialidad.
                            </p>
                            <Link
                                href="https://apurando.com/volta"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="sm" className="w-full bg-[#DFAE67] text-[#2A1A12] hover:bg-[#C8964A] transition-all duration-250 hover:scale-105 active:scale-95 text-xs">
                                    Ver productos
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

