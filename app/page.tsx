'use client'

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { OrderInfo } from "@/components/order-info"
import { Footer } from "@/components/footer"
import { CookieButton } from "@/components/cookie-button"
import SplashCursor from "@/components/splash-cursor"

// Lazy load components below the fold
const About = dynamic(() => import("@/components/about").then(mod => ({ default: mod.About })), {
	loading: () => <div className="py-12 sm:py-16 md:py-20" />,
})

const Community = dynamic(() => import("@/components/community").then(mod => ({ default: mod.Community })), {
	loading: () => <div className="py-12 sm:py-16 md:py-20" />,
})

const ChatBotButton = dynamic(() => import("@/components/chatbot-button").then(mod => ({ default: mod.ChatBotButton })), {
	ssr: false,
})

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<SplashCursor />
			<Header />
			<Hero />
			<Products />
			<OrderInfo />
			<About />
			<Community />
			<Footer />
			<CookieButton />
			<ChatBotButton />
		</main>
	)
}

<section className="mt-20 px-6 max-w-3xl mx-auto text-neutral-300 leading-relaxed">
	<h2 className="text-2xl font-bold mb-4">
		Tienda online de café de especialidad en Gandia – Bienvenido a VOLTĀ
	</h2>

	<p>
		VOLTĀ es una tienda online especializada en <strong>café de especialidad en Gandia</strong>.
		Seleccionamos granos de origen único, tostados premium y cafés con perfiles
		sensoriales cuidados para ofrecer una experiencia real y honesta.
	</p>

	<br />

	<p>
		Todos nuestros cafés cuentan con trazabilidad completa y procesos de tostado
		artesanales. Nuestra misión es acercar el café de especialidad a quienes buscan
		calidad de verdad, sin complicaciones y con envío rápido disponible en Gandia
		y el resto de España.
	</p>

	<br />

	<p>
		Si buscas <strong>comprar café de especialidad en Gandia</strong>, VOLTĀ es tu sitio.
		Y si prefieres probarlo fuera de casa, también podrás disfrutarlo en cafeterías
		locales como <strong>TANO</strong>, donde servimos nuestra selección de cafés.
	</p>
</section>
