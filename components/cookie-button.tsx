"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

const STORAGE_KEY = "cookieConsentAccepted"

export function CookieButton() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const hasAccepted = window.localStorage.getItem(STORAGE_KEY) === "true"
		if (!hasAccepted) {
			setIsVisible(true)
		}
	}, [])

	const handleAccept = () => {
		window.localStorage.setItem(STORAGE_KEY, "true")
		setIsVisible(false)
	}

	if (!isVisible) {
		return null
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 bg-[#5A3825]/98 backdrop-blur-sm border-t border-[#F7EFE5]/20 shadow-[0_-4px_20px_rgba(42,26,18,0.3)] animate-in slide-in-from-bottom duration-500">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div className="flex-1">
						<p className="text-sm sm:text-base text-[#F7EFE5] leading-relaxed">
							Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra{" "}
							<Link
								href="/cookies"
								className="text-[#DFAE67] hover:text-[#E9DCC4] underline underline-offset-2 transition-colors duration-200"
							>
								Política de Cookies
							</Link>
							{", "}
							<Link
								href="/privacidad"
								className="text-[#DFAE67] hover:text-[#E9DCC4] underline underline-offset-2 transition-colors duration-200"
							>
								Política de Privacidad
							</Link>
							{" y "}
							<Link
								href="/aviso-legal"
								className="text-[#DFAE67] hover:text-[#E9DCC4] underline underline-offset-2 transition-colors duration-200"
							>
								Aviso Legal
							</Link>
							.
						</p>
					</div>
					<div className="flex items-center gap-3 sm:flex-shrink-0">
						<button
							type="button"
							onClick={handleAccept}
							className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#DFAE67] text-[#2A1A12] font-semibold text-sm sm:text-base rounded-lg hover:bg-[#C8964A] transition-all duration-250 shadow-md hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAE67]"
						>
							Aceptar
						</button>
						<button
							type="button"
							onClick={handleAccept}
							className="p-2 text-[#F7EFE5] hover:text-[#DFAE67] hover:bg-[#5A3825]/50 rounded-lg transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAE67]"
							aria-label="Cerrar aviso de cookies"
						>
							<X size={20} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}




