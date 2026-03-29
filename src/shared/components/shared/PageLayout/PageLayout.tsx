"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const ctx = gsap.context(() => {
      // Parallax background elements
      gsap.to(".parallax-circle", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isClient])

  return (
    <main
      ref={containerRef}
      className="min-h-screen pt-20 bg-background overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="parallax-circle absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
          }}
        />
        <div
          className="parallax-circle absolute top-1/2 -left-20 w-60 h-60 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
          }}
        />
        <div
          className="parallax-circle absolute -bottom-20 right-1/4 w-40 h-40 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">{children}</div>
    </main>
  )
}