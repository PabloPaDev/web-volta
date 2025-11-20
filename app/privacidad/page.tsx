import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacidadPage() {
	return (
		<main className="min-h-screen bg-[#F7EFE5]">
			<Header />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="bg-[#E9DCC4] rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#5A3825]/20">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1A12] mb-6 sm:mb-8">
						Política de Privacidad
					</h1>
					
					<div className="prose prose-lg max-w-none text-[#2A1A12] space-y-6">
						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">1. Información General</h2>
							<p className="text-base leading-relaxed">
								En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 
								relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación 
								de estos datos (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos 
								digitales (LOPDGDD), le informamos sobre el tratamiento de sus datos personales.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">2. Responsable del Tratamiento</h2>
							<p className="text-base leading-relaxed mb-4">
								Los datos personales que nos proporcione serán tratados por:
							</p>
							<ul className="list-none pl-0 space-y-2 text-base">
								<li><strong className="text-[#5A3825]">Denominación:</strong> VOLTĀ</li>
								<li><strong className="text-[#5A3825]">Contacto:</strong> info@volta.es</li>
								<li><strong className="text-[#5A3825]">Teléfono:</strong> +34 645 498 729</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">3. Datos que Recopilamos</h2>
							<p className="text-base leading-relaxed mb-4">
								Podemos recopilar y procesar los siguientes tipos de datos personales:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li><strong className="text-[#5A3825]">Datos de identificación:</strong> nombre, apellidos, dirección de correo electrónico, número de teléfono</li>
								<li><strong className="text-[#5A3825]">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia</li>
								<li><strong className="text-[#5A3825]">Datos de comunicación:</strong> mensajes enviados a través de formularios de contacto o WhatsApp</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">4. Finalidad del Tratamiento</h2>
							<p className="text-base leading-relaxed mb-4">
								Utilizamos sus datos personales para las siguientes finalidades:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li>Gestionar y responder a sus consultas y solicitudes de información</li>
								<li>Proporcionar información sobre nuestros productos y servicios</li>
								<li>Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web</li>
								<li>Cumplir con obligaciones legales y regulatorias</li>
								<li>Gestionar pedidos y comunicaciones comerciales (con su consentimiento)</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">5. Base Legal</h2>
							<p className="text-base leading-relaxed mb-4">
								El tratamiento de sus datos personales se basa en:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li><strong className="text-[#5A3825]">Consentimiento:</strong> Cuando nos ha dado su consentimiento explícito para el tratamiento de sus datos</li>
								<li><strong className="text-[#5A3825]">Ejecución de contrato:</strong> Cuando el tratamiento es necesario para la ejecución de un contrato</li>
								<li><strong className="text-[#5A3825]">Interés legítimo:</strong> Para mejorar nuestros servicios y la experiencia del usuario</li>
								<li><strong className="text-[#5A3825]">Obligación legal:</strong> Cuando el tratamiento es necesario para cumplir con una obligación legal</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">6. Conservación de los Datos</h2>
							<p className="text-base leading-relaxed">
								Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, 
								y en cualquier caso, durante los plazos establecidos por la legislación aplicable. Una vez cumplidos estos plazos, los datos serán 
								eliminados de forma segura.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">7. Compartir Datos con Terceros</h2>
							<p className="text-base leading-relaxed">
								No compartimos sus datos personales con terceros, excepto en los siguientes casos:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base mt-4">
								<li>Cuando sea necesario para la prestación de nuestros servicios</li>
								<li>Cuando tengamos su consentimiento explícito</li>
								<li>Cuando sea requerido por ley o por orden judicial</li>
								<li>Con proveedores de servicios que actúan como encargados del tratamiento bajo nuestras instrucciones</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">8. Seguridad de los Datos</h2>
							<p className="text-base leading-relaxed">
								Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, 
								la alteración, divulgación o destrucción. Estas medidas incluyen cifrado, controles de acceso y revisiones regulares de seguridad.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">9. Sus Derechos</h2>
							<p className="text-base leading-relaxed mb-4">
								Usted tiene derecho a:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-base">
								<li><strong className="text-[#5A3825]">Acceso:</strong> Obtener información sobre sus datos personales que tratamos</li>
								<li><strong className="text-[#5A3825]">Rectificación:</strong> Corregir datos inexactos o incompletos</li>
								<li><strong className="text-[#5A3825]">Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
								<li><strong className="text-[#5A3825]">Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
								<li><strong className="text-[#5A3825]">Limitación:</strong> Solicitar la limitación del tratamiento de sus datos</li>
								<li><strong className="text-[#5A3825]">Portabilidad:</strong> Recibir sus datos en un formato estructurado y de uso común</li>
								<li><strong className="text-[#5A3825]">Retirar el consentimiento:</strong> En cualquier momento, cuando el tratamiento se base en el consentimiento</li>
							</ul>
							<p className="text-base leading-relaxed mt-4">
								Para ejercer estos derechos, puede contactarnos en: info@volta.es o +34 645 498 729
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">10. Reclamaciones</h2>
							<p className="text-base leading-relaxed">
								Si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, puede presentar una reclamación ante 
								la Agencia Española de Protección de Datos (AEPD) a través de su sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#DFAE67] hover:underline">www.aepd.es</a>
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-[#5A3825] mt-8 mb-4">11. Modificaciones</h2>
							<p className="text-base leading-relaxed">
								Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigor desde 
								su publicación en esta página. Le recomendamos que revise periódicamente esta política para estar informado sobre cómo protegemos sus datos.
							</p>
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
							href="/cookies" 
							className="inline-block px-6 py-3 border-2 border-[#5A3825] text-[#5A3825] font-semibold rounded-lg hover:bg-[#5A3825] hover:text-[#F7EFE5] transition-all duration-250 text-center"
						>
							Política de Cookies
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}

