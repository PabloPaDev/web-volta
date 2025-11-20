"use client"

import Image from "next/image"
import { useRef, useState } from "react"

type Message = {
    id: string
    sender: "bot" | "user"
    text: string
}

const WELCOME_MESSAGE: Message = {
    id: "m0",
    sender: "bot",
    text: "Hola, soy Volti la cafetera virtual.",
}

const DEMO_QUESTIONS = [
    {
        id: "q1",
        question: "¿Cuál es el café más popular?",
        answer:
            "VOLTĀ Piendame es el café que más gusta por su sabor a caramelo",
    },
    {
        id: "q2",
        question: "¿Cuándo recibiré mi pedido?",
        answer: "24-48 horas",
    },
    {
        id: "q3",
        question: "¿Puedo hacer un pedido via whatsapp?",
        answer:
            "¡Claro! Puedes hacer un pedido via whatsapp y nosotros te lo llevamos a tu casa. Al numero +34 645498729",
    },
    {
        id: "q4",
        question: "¿Que es el club VOLTĀ?",
        answer:
            "Una Comunidad donde publicamos eventos, entrenamientos y novedades de la marca.",
    },
]

export function ChatBotButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
    const messageCounter = useRef(1)

    const handleToggle = () => {
        if (isOpen) {
            setMessages([WELCOME_MESSAGE])
            messageCounter.current = 1
        }
        setIsOpen((prev) => !prev)
    }

    const handleSelectQuestion = (questionId: string) => {
        const item = DEMO_QUESTIONS.find((q) => q.id === questionId)
        if (!item) {
            return
        }

        setMessages((prev) => [
            ...prev,
            {
                id: `m${messageCounter.current++}`,
                sender: "user",
                text: item.question,
            },
            {
                id: `m${messageCounter.current++}`,
                sender: "bot",
                text: item.answer,
            },
        ])
    }

    return (
        <>
            {isOpen && (
                <section
                    className="fixed right-2 bottom-24 sm:right-4 sm:bottom-28 z-40 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-[#5A3825]/50 bg-[#E9DCC4] backdrop-blur-md p-4 text-sm text-[#2A1A12] shadow-2xl shadow-[#2A1A12]/20 animate-in slide-in-from-bottom-4 fade-in duration-300"
                    aria-label="Demostración del chat-bot de Voltà"
                    role="dialog"
                >
                    <header className="mb-3 flex items-center justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-[#DFAE67]">Volti</p>
                            <h3 className="text-base font-semibold text-[#2A1A12]">Cafetera Virtual</h3>
                        </div>
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="rounded-full border border-transparent p-2 text-xs font-semibold text-[#2A1A12] transition-all duration-250 hover:border-[#DFAE67] hover:scale-110 active:scale-95"
                        >
                            Cerrar
                        </button>
                    </header>

                    <div className="mb-3 max-h-64 space-y-2 overflow-y-auto pr-1">
                        {messages.map((message, index) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-2`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <p
                                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed transition-all duration-250 ${message.sender === "bot"
                                        ? "rounded-bl-sm bg-[#DFAE67]/30 text-[#2A1A12]"
                                        : "rounded-br-sm bg-[#5A3825] text-[#F7EFE5]"
                                        }`}
                                >
                                    {message.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#DFAE67]">
                            Preguntas rápidas
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {DEMO_QUESTIONS.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleSelectQuestion(item.id)}
                                    className="rounded-full border border-[#5A3825]/60 px-3 py-1 text-xs font-medium text-[#2A1A12] transition-all duration-250 hover:bg-[#DFAE67] hover:text-[#2A1A12] hover:scale-105 active:scale-95"
                                >
                                    {item.question}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <button
                type="button"
                onClick={handleToggle}
                className="fixed right-2 bottom-2 sm:right-4 sm:bottom-4 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-[#5A3825]/50 bg-[#E9DCC4] p-1 shadow-lg shadow-[#2A1A12]/20 backdrop-blur-sm transition-all duration-250 hover:bg-[#DFAE67] hover:border-[#DFAE67] hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAE67]"
                aria-label="Abrir chat de demostración"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
            >
                <Image
                    src="/images/chafetera.png"
                    alt="Icono del chat-bot"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:rotate-12"
                    priority
                />
            </button>
        </>
    )
}

