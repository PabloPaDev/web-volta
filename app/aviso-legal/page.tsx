import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AvisoLegalPage() {
	return (
		<main className="min-h-screen bg-[#F7EFE5]">
			<Header />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="bg-[#E9DCC4] rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#5A3825]/20">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1A12] mb-6 sm:mb-8">
						Aviso Legal
					</h1>
					
					<div className="prose prose-lg max-w-none text-[#2A1A12] space-y-6">
						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">1. Datos Identificativos</h2>
							<p className="text-base leading-relaxed mb-4">
								En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la 
								Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
							</p>
							<ul className="list-none pl-0 space-y-2 text-base">
								<li><strong className="text-[#5A3825]">Denominación social:</strong> VOLTĀ</li>
								<li><strong className="text-[#5A3825]">Correo electrónico:</strong> info@volta.es</li>
								<li><strong className="text-[#5A3825]">Teléfono de contacto:</strong> +34 645 498 729</li>
								<li><strong className="text-[#5A3825]">Sitio web:</strong> www.volta.es</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">2. Objeto</h2>
							<p className="text-base leading-relaxed">
								El presente aviso legal regula el uso del sitio web www.volta.es (en adelante, el sitio web), del que es titular VOLTĀ. 
								La navegación por el sitio web de VOLTĀ atribuye la condición de usuario del mismo e implica la aceptación plena y sin 
								reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">3. Condiciones de Uso</h2>
							<p className="text-base leading-relaxed mb-4">
								El acceso y uso del sitio web se rige por la legalidad vigente y por el principio de buena fe comprometiéndose el usuario a 
								realizar un buen uso de la web. No se permite el uso del sitio web con fines ilícitos o lesivos, o que puedan causar cualquier 
								tipo de perjuicio o impedir el normal funcionamiento del sitio web.
							</p>
							<p className="text-base leading-relaxed">
								Queda prohibido:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base mt-4">
								<li>Reproducir, copiar, distribuir, comunicar públicamente, transformar o modificar los contenidos del sitio web sin autorización</li>
								<li>Utilizar los contenidos del sitio web para fines comerciales o publicitarios</li>
								<li>Realizar cualquier acción que pueda dañar, inutilizar o sobrecargar el sitio web</li>
								<li>Intentar acceder a áreas restringidas del sitio web o a otros sistemas o redes conectadas</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">4. Propiedad Intelectual e Industrial</h2>
							<p className="text-base leading-relaxed mb-4">
								VOLTĀ es titular de todos los derechos de propiedad intelectual e industrial de su sitio web, así como de los elementos 
								contenidos en el mismo (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones 
								de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso 
								y uso, etc.).
							</p>
							<p className="text-base leading-relaxed">
								Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a 
								disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por 
								cualquier medio técnico, sin la autorización de VOLTĀ.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
							<p className="text-base leading-relaxed mb-4">
								VOLTĀ no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que puedan deberse a:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web o de sus servicios y contenidos</li>
								<li>La existencia de virus, programas maliciosos o contenidos lesivos en los contenidos</li>
								<li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal</li>
								<li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a 
									disposición de los usuarios en el sitio web</li>
								<li>Los daños que puedan provenir del uso ilegítimo de este sitio web</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">6. Enlaces</h2>
							<p className="text-base leading-relaxed mb-4">
								El sitio web puede contener enlaces a otros sitios web de terceros. VOLTĀ no ejerce ningún control sobre dichos sitios y no se 
								hace responsable de sus contenidos ni de las condiciones de acceso a los mismos.
							</p>
							<p className="text-base leading-relaxed">
								La inclusión de enlaces a otros sitios web no implica la aprobación de sus contenidos por parte de VOLTĀ, ni la existencia de 
								ningún tipo de asociación entre VOLTĀ y sus titulares.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">7. Modificaciones</h2>
							<p className="text-base leading-relaxed">
								VOLTĀ se reserva el derecho de realizar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, 
								suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan 
								presentados o localizados en su portal.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">8. Legislación Aplicable y Jurisdicción</h2>
							<p className="text-base leading-relaxed">
								La relación entre VOLTĀ y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los 
								juzgados y tribunales de la ciudad donde tenga su domicilio social VOLTĀ, salvo que la ley establezca otra cosa.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">9. Contacto</h2>
							<p className="text-base leading-relaxed">
								Para cualquier consulta o comunicación relacionada con este Aviso Legal, puede contactarnos a través de:
							</p>
							<ul className="list-none pl-0 space-y-2 text-base mt-4">
								<li>Email: info@volta.es</li>
								<li>Teléfono: +34 645 498 729</li>
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

