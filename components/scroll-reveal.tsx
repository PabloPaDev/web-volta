"use client"

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

type ScrollRevealProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  offset?: string
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">

export function ScrollReveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
  offset = "0px 0px -10% 0px",
  ...props
}: ScrollRevealProps<T>) {
  const Component = (as ?? "div") as ElementType
  const elementRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: offset }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [offset, threshold])

  return (
    <Component
      ref={elementRef as never}
      className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms`, willChange: "transform, opacity" }}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </Component>
  )
}
