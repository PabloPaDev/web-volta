'use client'

import { About } from "@/components/about"
import { ChatBotButton } from "@/components/chatbot-button"
import { Community } from "@/components/community"
import { CookieButton } from "@/components/cookie-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OrderInfo } from "@/components/order-info"
import { Products } from "@/components/products"

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
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
