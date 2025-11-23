export const metadata = {
    title: "Roadmap Volta – Tienda Online + Punto Oficial en TANO",
    description:
        "Descubre el camino de VOLTĀ: compra café de especialidad en nuestra tienda online o disfrútalo en Pastisseria TANO, nuestro punto colaborador oficial en Gandia.",
}

export default function RoadmapPage() {
    return (
        <main className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-white">
                Tu camino con VOLTĀ
            </h1>

            <p className="text-neutral-400 max-w-2xl mb-12">
                VOLTĀ nace como una tienda online de café de especialidad en Gandia,
                dedicada a ofrecer granos de origen único, tostados premium y
                experiencias pensadas para los amantes del café.
                Aquí tienes dos formas de vivir la experiencia Volta.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

                {/* --- RUTA 1: COMPRA TU VOLTA ONLINE --- */}
                <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition duration-300">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        1. Compra tu Volta online
                    </h2>

                    <p className="text-neutral-400 mb-6">
                        En nuestra tienda online encontrarás café de especialidad seleccionado,
                        tostado de forma artesanal y listo para enviarse directamente a tu casa.
                        Compra fácil, rápido y con la calidad que define a VOLTĀ.
                    </p>

                    <a
                        href="/"
                        className="inline-block bg-amber-600 hover:bg-amber-700 transition text-white font-medium px-5 py-3 rounded-xl"
                    >
                        Ir a la tienda online
                    </a>
                </div>

                {/* --- RUTA 2: TÓMATE TU VOLTA EN TANO --- */}
                <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition duration-300">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        2. Tómate tu Volta en TANO
                    </h2>

                    <p className="text-neutral-400 mb-6">
                        Si prefieres probar el sabor de VOLTĀ preparado por profesionales,
                        puedes disfrutarlo en nuestra cafetería colaboradora:
                        <strong> Pastisseria TANO</strong>, un referente local en Gandia.
                    </p>

                    <a
                        href="https://pastisseriatano.es/"
                        target="_blank"
                        className="inline-block bg-pink-600 hover:bg-pink-700 transition text-white font-medium px-5 py-3 rounded-xl"
                    >
                        Ir a TANO
                    </a>
                </div>

            </div>
        </main>
    )
}
