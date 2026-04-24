"use client"

import { SiReact, SiGo, SiDocker } from "react-icons/si"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { skillCategories, getLocalizedCategory } from "@/data/skills"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SkillsContentProps {
  locale: string
}

export function SkillsContent({ locale }: SkillsContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        categoriesRef.current.forEach((category, index) => {
          if (!category) return

          gsap.fromTo(
            category,
            {
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: category,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          )

          const skillBars = category.querySelectorAll("[data-skill-bar]")
          if (skillBars.length > 0) {
            gsap.fromTo(
              skillBars,
              { width: "0%" },
              {
                width: (_i: number, el: Element) =>
                  el.getAttribute("data-level") + "%",
                duration: 1.5,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: category,
                  start: "top 70%",
                },
              }
            )
          }

          const skillIcons = category.querySelectorAll("[data-skill-icon]")
          if (skillIcons.length > 0) {
            gsap.fromTo(
              skillIcons,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: category,
                  start: "top 75%",
                },
              }
            )
          }
        })
      }, containerRef)

      return () => ctx.revert()
    })

    return () => cancelAnimationFrame(rafId)
  }, [isClient])

  const labels = {
    title: {
      en: "SKILLS",
      ar: "المهارات",
      de: "FÄHIGKEITEN",
      fr: "COMPÉTENCES",
    },
    subtitle: {
      en: "Technologies and tools I use to craft amazing digital experiences",
      ar: "التقنيات والأدوات التي أستخدمها لبناء تجارب رقمية مذهلة",
      de: "Technologien und Tools, die ich verwende",
      fr: "Technologies et outils que j'utilise",
    },
    skills: {
      en: "skills",
      ar: "مهارة",
      de: "Fähigkeiten",
      fr: "compétences",
    },
    learning: {
      en: "Always learning & evolving",
      ar: "دائما أتعلم وأطور",
      de: "Immer lernend & entwickelnd",
      fr: "Toujours en apprentissage",
    },
    coming: {
      en: "Coming",
      ar: "قريبا",
      de: "Bald",
      fr: "Bientôt",
    },
  }

  const t = (key: keyof typeof labels) =>
    labels[key][locale as keyof typeof labels.title] || labels[key].en

  return (
    <PageLayout>
      <div ref={containerRef}>
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          locale={locale}
        />

        <div className="space-y-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const categoryTitle = getLocalizedCategory(category, locale)

            return (
              <div
                key={category.id}
                ref={(el) => {
                  if (el) categoriesRef.current[index] = el
                }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500"
              >
                {/* Category Number */}
                <div
                  className="absolute -top-6 right-8 text-8xl font-black text-emerald-500/10 select-none"
                  style={{ fontFamily: "monospace" }}
                >
                  0{index + 1}
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5">
                    <Icon className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {categoryTitle}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {category.skills.length} {t("skills")}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon as React.ComponentType<{
                      className?: string
                      style?: React.CSSProperties
                    }>

                    return (
                      <div key={skillIndex} className="group relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            data-skill-icon
                            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform"
                          >
                            {SkillIcon && (
                              <SkillIcon
                                className="w-5 h-5"
                                style={{ color: skill.color }}
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium text-foreground group-hover:text-emerald-500 transition-colors">
                                {skill.name}
                              </span>
                              <span className="text-sm text-muted-foreground font-mono">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                data-skill-bar
                                data-level={skill.level}
                                className="h-full rounded-full"
                                style={{
                                  background:
                                    "linear-gradient(90deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)",
                                  width: "0%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
            <p className="text-xl text-foreground mb-4">{t("learning")}</p>
            <div className="flex gap-3 flex-wrap justify-center">
              {[
                { name: "React Native", icon: SiReact, color: "#61dafb" },
                { name: "Go", icon: SiGo, color: "#00add8" },
                { name: "Docker", icon: SiDocker, color: "#2496ed" },
              ].map((tech, i) => {
                const TechIcon = tech.icon
                return (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-500 text-sm font-medium animate-pulse flex items-center gap-2"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <TechIcon
                      className="w-4 h-4"
                      style={{ color: tech.color }}
                    />
                    {t("coming")}: {tech.name}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}