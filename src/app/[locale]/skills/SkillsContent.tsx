"use client"
import {
  SiReact,
  SiGo,
  SiDocker,
 
} from "react-icons/si"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { skillCategories, getLocalizedCategory } from "@/data/skills"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface SkillsContentProps {
  locale: string
}

export function SkillsContent({ locale }: SkillsContentProps) {
  const categoriesRef = useRef<HTMLDivElement[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const ctx = gsap.context(() => {
      categoriesRef.current.forEach((category, index) => {
        if (!category) return

        gsap.fromTo(
          category,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotateY: index % 2 === 0 ? -15 : 15,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: category,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        )

        const skillBars = category.querySelectorAll(".skill-bar-fill")
        gsap.fromTo(
          skillBars,
          { width: "0%" },
          {
            width: (_i: number, el: Element) => el.getAttribute("data-level") + "%",
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: category,
              start: "top 70%",
            },
          }
        )

        const skillIcons = category.querySelectorAll(".skill-icon")
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
      })
    })

    return () => ctx.revert()
  }, [isClient])

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId)
    gsap.to(`#category-${categoryId}`, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleCategoryLeave = (categoryId: string) => {
    setActiveCategory(null)
    gsap.to(`#category-${categoryId}`, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }

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
      de: "Technologien und Tools, die ich verwende, um erstaunliche digitale Erlebnisse zu schaffen",
      fr: "Technologies et outils que j'utilise pour créer des expériences numériques incroyables",
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
      fr: "Toujours en apprentissage et en évolution",
    },
    coming: {
      en: "Coming",
      ar: "قريبا",
      de: "Bald",
      fr: "Bientôt",
    },
  }

  const t = (key: keyof typeof labels) => labels[key][locale as keyof typeof labels.title] || labels[key].en

  return (
    <PageLayout>
      <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

      {/* Skills Categories */}
      <div className="space-y-12">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          const categoryTitle = getLocalizedCategory(category, locale)
          const isActive = activeCategory === category.id

          return (
            <div
              key={category.id}
              id={`category-${category.id}`}
              ref={(el) => {
                if (el) categoriesRef.current[index] = el
              }}
              className={cn(
                "relative p-8 rounded-3xl transition-all duration-500",
                "bg-gradient-to-br from-card/80 to-card/40",
                "border border-border/50",
                "backdrop-blur-sm",
                isActive && "border-emerald-500/50 shadow-2xl shadow-emerald-500/10"
              )}
              style={{ perspective: "1000px" }}
              onMouseEnter={() => handleCategoryHover(category.id)}
              onMouseLeave={() => handleCategoryLeave(category.id)}
            >
              {/* Category Number */}
              <div
                className="absolute -top-6 right-8 text-8xl font-black text-emerald-500/10 select-none"
                style={{ fontFamily: "monospace" }}
              >
                0{index + 1}
              </div>

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={cn(
                    "skill-icon p-4 rounded-2xl transition-all duration-300",
                    "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5",
                    isActive && "from-emerald-500/30 to-emerald-500/10 shadow-lg shadow-emerald-500/20"
                  )}
                >
                  <Icon className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{categoryTitle}</h2>
                  <p className="text-sm text-muted-foreground">
                    {category.skills.length} {t("skills")}
                  </p>
                </div>
              </div>

             {/* Skills Grid */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {category.skills.map((skill, skillIndex) => {
    const SkillIcon = skill.icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>
    
    return (
      <div key={skillIndex} className="group relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="skill-icon w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
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
              <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="skill-bar-fill h-full rounded-full"
                data-level={skill.level}
                style={{
                  background: `linear-gradient(90deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)`,
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
            <TechIcon className="w-4 h-4" style={{ color: tech.color }} />
            {t("coming")}: {tech.name}
          </span>
        )
      })}
    </div>
  </div>
</div>
    </PageLayout>
  )
}