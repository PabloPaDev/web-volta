import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CookiesPage() {
	return (
		<main className="min-h-screen bg-[#F7EFE5]">
			<Header />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="bg-[#E9DCC4] rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#5A3825]/20">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1A12] mb-6 sm:mb-8">
						Política de Cookies
					</h1>
					
					<div className="prose prose-lg max-w-none text-[#2A1A12] space-y-6">
						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">1. ¿Qué son las cookies?</h2>
							<p className="text-base leading-relaxed">
								Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. 
								Estos archivos permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que 
								volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">2. ¿Qué tipos de cookies utilizamos?</h2>
							<p className="text-base leading-relaxed mb-4">
								En VOLTĀ utilizamos los siguientes tipos de cookies:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li>
									<strong className="text-[#5A3825]">Cookies técnicas:</strong> Son necesarias para el funcionamiento del sitio web y no pueden 
									desactivarse. Permiten funciones básicas como la navegación y el acceso a áreas seguras del sitio web.
								</li>
								<li>
									<strong className="text-[#5A3825]">Cookies de preferencias:</strong> Permiten que el sitio web recuerde información que cambia 
									la forma en que el sitio se comporta o se ve, como su idioma preferido o la región en la que se encuentra.
								</li>
								<li>
									<strong className="text-[#5A3825]">Cookies de análisis:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro 
									sitio web, proporcionándonos información sobre las áreas visitadas, el tiempo de permanencia y cualquier problema encontrado.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">3. Finalidad del uso de cookies</h2>
							<p className="text-base leading-relaxed mb-4">
								Utilizamos cookies para:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li>Garantizar el correcto funcionamiento del sitio web</li>
								<li>Mejorar la experiencia de usuario</li>
								<li>Analizar el uso del sitio web para optimizar su contenido</li>
								<li>Recordar sus preferencias y configuraciones</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">4. Cookies de terceros</h2>
							<p className="text-base leading-relaxed">
								Algunas cookies pueden ser establecidas por servicios externos que aparecen en nuestras páginas. Estos servicios pueden establecer 
								sus propias cookies para personalizar anuncios y realizar análisis. No tenemos control sobre estas cookies establecidas por terceros.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">5. Gestión de cookies</h2>
							<p className="text-base leading-relaxed mb-4">
								Puede gestionar o eliminar las cookies según sus preferencias. Puede eliminar todas las cookies que ya están en su ordenador y puede 
								configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar 
								manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
							</p>
							<p className="text-base leading-relaxed">
								Puede configurar su navegador para que rechace las cookies o le avise cuando un sitio web intente colocar una cookie. Las instrucciones 
								para hacerlo varían según el navegador:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base mt-4">
								<li><strong className="text-[#5A3825]">Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
								<li><strong className="text-[#5A3825]">Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
								<li><strong className="text-[#5A3825]">Safari:</strong> Preferencias → Privacidad → Cookies</li>
								<li><strong className="text-[#5A3825]">Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">6. Consentimiento</h2>
							<p className="text-base leading-relaxed">
								Al utilizar nuestro sitio web, usted consiente el uso de cookies de acuerdo con esta Política de Cookies. Si no está de acuerdo con 
								el uso de cookies, puede configurar su navegador para rechazarlas o puede abandonar el sitio web.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">7. Actualización de la Política de Cookies</h2>
							<p className="text-base leading-relaxed">
								Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en nuestras prácticas o por otras razones operativas, 
								legales o regulatorias. Le recomendamos que revise esta página periódicamente para estar informado sobre nuestro uso de cookies.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">8. Contacto</h2>
							<p className="text-base leading-relaxed">
								Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos a través de:
							</p>
							<ul className="list-none pl-0 space-y-2 text-base mt-4">
								<li>Email: info@volta.es</li>
								<li>WhatsApp: +34 645 498 729</li>
							</ul>
						</section>

						<div className="mt-10 pt-6 border-t border-[#5A3825]/30">
							<p className="text-sm text-[#5A3825]">
								Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
							</p>
						</div>
					</div>

					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link 
							href="/" 
							className="inline-block px-6 py-3 bg-[#DFAE67] text-[#2A1A12] font-semibold rounded-lg hover:bg-[#C8964A] transition-all duration-250 text-center"
						>
							Volver al inicio
						</Link>
						<Link 
							href="/privacidad" 
							className="inline-block px-6 py-3 border-2 border-[#5A3825] text-[#5A3825] font-semibold rounded-lg hover:bg-[#5A3825] hover:text-[#F7EFE5] transition-all duration-250 text-center"
						>
							Política de Privacidad
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}

