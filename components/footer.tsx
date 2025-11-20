"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#5A3825] text-[#F7EFE5]">
      <div className="mx-auto w-full max-w-7xl px-0 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">VOLTĀ</h3>
            <p className="text-sm sm:text-base md:text-lg text-[#F7EFE5]/80 leading-relaxed">
              Café de especialidad para los que se mueven de verdad.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacidad" className="text-sm sm:text-base text-[#F7EFE5]/80 hover:text-[#DFAE67] transition-all duration-250 inline-block hover:translate-x-1">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm sm:text-base text-[#F7EFE5]/80 hover:text-[#DFAE67] transition-all duration-250 inline-block hover:translate-x-1">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="text-sm sm:text-base text-[#F7EFE5]/80 hover:text-[#DFAE67] transition-all duration-250 inline-block hover:translate-x-1">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contacto</h4>
            <ul className="space-y-3 text-[#F7EFE5]/80">
              <li className="flex items-center justify-center sm:justify-start gap-3 group">
                <MapPin size={18} className="flex-shrink-0 transition-transform duration-250 group-hover:scale-110" />
                <span className="text-sm sm:text-base">Avinguda de la medicina, 9, Gandia</span>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-3 group">
                <Instagram size={18} className="flex-shrink-0 transition-transform duration-250 group-hover:scale-110" />
                <Link
                  href="https://www.instagram.com/volta_athletics?igsh=MXhraWRmc2lndXYydg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-[#DFAE67] transition-all duration-250 hover:translate-x-1"
                >
                  volta_athletics
                </Link>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-3 group">
                <Mail size={18} className="flex-shrink-0 transition-transform duration-250 group-hover:scale-110" />
                <span className="text-sm sm:text-base break-all">info@volta_athletics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F7EFE5]/20 pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-[#F7EFE5]/80">
                © 2025 VOLTĀ. Todos los derechos reservados.
              </p>
            </div>
            <div className="text-center sm:text-left">
              {/* Espacio vacío para mantener el grid */}
            </div>
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <Link
                href="https://pablopadev.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-[#F7EFE5]/80 hover:text-[#DFAE67] transition-all duration-250 hover:translate-x-1 group"
              >
                <span>Hecho con mucho VOLTÀ por PabloPaDev</span>
                <div className="relative h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transition-transform duration-250 group-hover:scale-110 group-hover:rotate-6">
                  <Image src="/images/logo.png" alt="Logo PabloPaDev" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
