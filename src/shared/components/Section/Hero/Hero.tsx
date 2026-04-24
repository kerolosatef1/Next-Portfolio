"use client"

import { useRef } from "react"
import { useTranslations } from "next-intl"
import { ArrowDown, Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/shared/components/shared/Container/Container"
import { SocialLinks } from "@/shared/components/shared/SocialLinks/SocialLinks"
import { siteConfig } from "@/shared/config/site"
import { useGsapTimeline } from "@/shared/hooks/useGsap"

export function Hero() {
  const t = useTranslations("hero")
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useGsapTimeline(containerRef, (tl) => {
    tl.to(".hero-greeting", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        titleRef.current!,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        ".hero-title-role",
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .to(
        subtitleRef.current!,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        ctaRef.current!,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        ".hero-social",
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      )
      .to(
        scrollRef.current!,
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      )
  })

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <span className="hero-greeting inline-block px-4 py-2 mb-6 text-sm font-medium text-emerald-500 bg-emerald-500/10 rounded-full border border-emerald-500/20 opacity-0 translate-y-[30px]">
            {t("greeting")}
          </span>

          {/* Name */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 translate-y-[50px]"
          >
            {t("name")}
            <span className="text-emerald-500">.</span>
          </h1>

          {/* Role */}
          <h2 className="hero-title-role text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 opacity-0 translate-y-[30px]">
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 px-4 opacity-0 translate-y-[30px]"
          >
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0 translate-y-[30px]"
          >
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                {t("cta.projects")}
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#contact">
                {t("cta.contact")}
                <Send className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="gap-2" asChild>
              <a href={siteConfig.links.cv} download>
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="hero-social opacity-0 -translate-x-5">
            <SocialLinks />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-0 -translate-y-5"
      >
        <span className="text-sm">{t("scroll")}</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}