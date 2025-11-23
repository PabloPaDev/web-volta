import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Tienda Online de Café de Especialidad en Gandia | VOLTĀ – Café Premium de Origen",
  description:
    "VOLTĀ es la tienda online de café de especialidad en Gandia. Granos de origen único, tostados premium y envíos a toda España. Compra tu café de especialidad de forma rápida y segura.",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Tienda Online de Café de Especialidad en Gandia | VOLTĀ",
    description:
      "Compra café de especialidad desde Gandia con VOLTĀ: café de origen único, tostado premium y envío en 24-48h.",
    locale: "es_ES",
    siteName: "VOLTĀ Café de Especialidad",
    url: "https://www.voltaathletics.es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Online de Café de Especialidad | VOLTĀ",
    description:
      "Café de especialidad en Gandia, disponible para compra online con envío rápido.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* SEO JSON-LD para Google (OnlineStore) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OnlineStore",
              "name": "VOLTĀ – Tienda Online de Café de Especialidad",
              "image": "https://www.voltaathletics.es/logo_volta.png",
              "url": "https://www.voltaathletics.es/",
              "description":
                "Tienda online de café de especialidad en Gandia. Café premium, tostados de origen único y envío a toda España.",
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Gandia"
              },
              "sameAs": [
                "https://www.instagram.com/volta.cafe"
              ],
              "brand": {
                "@type": "Brand",
                "name": "VOLTĀ"
              }
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
