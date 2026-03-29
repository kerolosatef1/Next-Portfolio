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
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
        }
      )

      // Floating Letters Animation
      gsap.to(".floating-letter", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.1,
          from: "random",
        },
      })
    }, headerRef)

    return () => ctx.revert()
  }, [isClient])

  if (!isClient) {
    return (
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
      </div>
    )
  }

  return (
    <div ref={headerRef} className="text-center mb-20">
      <div className="flex justify-center items-center gap-2 mb-6 flex-wrap">
        {title.split("").map((letter, index) => (
          <span
            key={index}
            className="floating-letter inline-block text-5xl md:text-7xl lg:text-8xl font-black text-transparent"
            style={{
              WebkitTextStroke: "2px #10b981",
              textShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
        <span className="floating-letter inline-block text-5xl md:text-7xl lg:text-8xl font-black text-emerald-500">
          .
        </span>
      </div>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  )
}