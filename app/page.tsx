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
