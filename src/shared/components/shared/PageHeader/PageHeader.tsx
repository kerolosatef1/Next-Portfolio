"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface PageHeaderProps {
  title: string
  subtitle: string
  locale: string
}

export function PageHeader({ title, subtitle, locale }: PageHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !headerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
      )

      // Subtle rotation only - no floating movement
      gsap.to(".floating-letter", {
        rotation: "random(-8, 8)",
        duration: "random(2.5, 4.5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.12, from: "random" },
      })
    }, headerRef)

    return () => ctx.revert()
  }, [isClient])

  if (!isClient) {
    return (
      <div className="text-center mb-20 w-full overflow-hidden">
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
      </div>
    )
  }

  return (
    <div
      ref={headerRef}
      className="text-center mb-20 w-full max-w-full overflow-hidden"
    >
      {/* Spacious wrapper - bigger area, more breathing room */}
      <div className="w-full overflow-hidden mb-6 px-4 md:px-8 py-10 md:py-14 lg:py-16">
        <div
          className="flex justify-center items-center whitespace-nowrap"
          style={{ gap: "clamp(0.15rem, 0.6vw, 0.6rem)" }}
        >
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className="floating-letter inline-block font-black text-transparent leading-none"
              style={{
                fontSize: "clamp(1.5rem, 7vw, 6rem)",
                WebkitTextStroke: "clamp(1.5px, 0.18vw, 2.5px) #10b981",
                textShadow: "0 0 50px rgba(16, 185, 129, 0.35)",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>

      <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
        {subtitle}
      </p>
    </div>
  )
}