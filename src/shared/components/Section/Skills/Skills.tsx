"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { cn } from "@/lib/utils"

// React Icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiGithub,
  SiRedux,
  SiGraphql,
  SiAxios,
  SiReactquery,
  SiFramer,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiChartdotjs,
  SiGreensock,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiSwagger,
  SiPostman
} from "react-icons/si"
import {
  TbApi,
  TbDeviceMobile,
  TbBrandSpeedtest,
  TbBrowserCheck,
  TbSeo,
} from "react-icons/tb"
import type { IconType } from "react-icons"

interface Skill {
  name: string
  icon: IconType
  color: string
}

// Row 1 - Core Technologies
const skillsRow1: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React.js", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss, color: "#1572b6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Sass/SCSS", icon: SiSass, color: "#cc6699" },
]

// Row 2 - Libraries & Tools
const skillsRow2: Skill[] = [
  { name: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
  { name: "REST APIs", icon: TbApi, color: "#10b981" },
  { name: "GraphQL", icon: SiGraphql, color: "#e535ab" },
  { name: "Responsive Design", icon: TbDeviceMobile, color: "#06b6d4" },
  { name: "Web Performance", icon: TbBrandSpeedtest, color: "#f59e0b" },
  { name: "Cross-Browser", icon: TbBrowserCheck, color: "#4285f4" },
  { name: "Axios", icon: SiAxios, color: "#5a29e4" },
  { name: "TanStack Query", icon: SiReactquery, color: "#ff4154" },
  { name: "Framer Motion", icon: SiFramer, color: "#ff0055" },
  { name: "SEO", icon: TbSeo, color: "#4285f4" },
  { name: "Shadcn/ui", icon: SiShadcnui, color: "" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  { name: "Material UI", icon: SiMui, color: "#007fff" },
  { name: "GSAP", icon: SiGreensock, color: "#88ce02" },

]

// Row 3 - UI & More
const skillsRow3: Skill[] = [
  { name: "Chart.js", icon: SiChartdotjs, color: "#ff6384" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { name: "Vercel", icon: SiVercel, color: "" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "GitHub", icon: SiGithub, color: "" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Postman", icon: SiPostman, color: "#EF5B25" },
  { name: "Swagger", icon: SiSwagger, color: "#00FF00" },



]
interface SkillsProps {
  locale: string
}

export function Skills({ locale }: SkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const row3Ref = useRef<HTMLDivElement>(null)
  const tweensRef = useRef<gsap.core.Tween[]>([])
  const [isClient, setIsClient] = useState(false)

  const isArabic = locale === "ar"

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Seamless Marquee Setup
  const setupMarquee = useCallback(
    (
      element: HTMLDivElement | null,
      direction: "left" | "right",
      speed: number // pixels per second
    ): gsap.core.Tween | null => {
      if (!element) return null

      const content = element.querySelector(".marquee-content") as HTMLElement
      if (!content) return null

      // Get the width of ONE set of skills (we have 2 sets)
      const singleSetWidth = content.scrollWidth / 2

      const actualDirection = isArabic
        ? direction === "left"
          ? "right"
          : "left"
        : direction

      // Calculate duration based on speed
      const duration = singleSetWidth / speed

      // Kill any existing animation
      gsap.killTweensOf(content)

      if (actualDirection === "left") {
        // Moving left: start at 0, end at -singleSetWidth
        gsap.set(content, { x: 0 })

        const tween = gsap.to(content, {
          x: -singleSetWidth,
          duration: duration,
          ease: "none",
          repeat: -1,
          force3D: true,
          onRepeat: () => {
            // Reset to 0 instantly when reaching the end
            gsap.set(content, { x: 0 })
          },
        })

        // Hover events
        const pause = () => tween.pause()
        const resume = () => tween.resume()
        element.addEventListener("mouseenter", pause)
        element.addEventListener("mouseleave", resume)
        ;(tween as any)._cleanup = () => {
          element.removeEventListener("mouseenter", pause)
          element.removeEventListener("mouseleave", resume)
        }

        return tween
      } else {
        // Moving right: start at -singleSetWidth, end at 0
        gsap.set(content, { x: -singleSetWidth })

        const tween = gsap.to(content, {
          x: 0,
          duration: duration,
          ease: "none",
          repeat: -1,
          force3D: true,
          onRepeat: () => {
            // Reset to -singleSetWidth instantly when reaching 0
            gsap.set(content, { x: -singleSetWidth })
          },
        })

        // Hover events
        const pause = () => tween.pause()
        const resume = () => tween.resume()
        element.addEventListener("mouseenter", pause)
        element.addEventListener("mouseleave", resume)
        ;(tween as any)._cleanup = () => {
          element.removeEventListener("mouseenter", pause)
          element.removeEventListener("mouseleave", resume)
        }

        return tween
      }
    },
    [isArabic]
  )

  // Initial animations
  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )

      gsap.fromTo(
        ".skills-row",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.3 }
      )

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.8,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [isClient])

  // Marquee animations
  useEffect(() => {
    if (!isClient) return

    const timer = setTimeout(() => {
      // Cleanup old tweens
      tweensRef.current.forEach((tween) => {
        if (tween) {
          ;(tween as any)._cleanup?.()
          tween.kill()
        }
      })
      tweensRef.current = []

      // Setup new tweens with speed (pixels per second)
      const tween1 = setupMarquee(row1Ref.current, "right", 50)
      const tween2 = setupMarquee(row2Ref.current, "left", 40)
      const tween3 = setupMarquee(row3Ref.current, "right", 45)

      if (tween1) tweensRef.current.push(tween1)
      if (tween2) tweensRef.current.push(tween2)
      if (tween3) tweensRef.current.push(tween3)
    }, 200)

    return () => {
      clearTimeout(timer)
      tweensRef.current.forEach((tween) => {
        if (tween) {
          ;(tween as any)._cleanup?.()
          tween.kill()
        }
      })
      tweensRef.current = []
    }
  }, [isClient, setupMarquee])

  // Handle tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tweensRef.current.forEach((tween) => tween?.resume())
      } else {
        tweensRef.current.forEach((tween) => tween?.pause())
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  // Labels
  const labels = {
    title: {
      en: "MY SKILLS",
      ar: "مهاراتي",
      de: "MEINE FÄHIGKEITEN",
      fr: "MES COMPÉTENCES",
    },
    subtitle: {
      en: "Technologies and tools I use to bring ideas to life",
      ar: "التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع",
      de: "Technologien und Tools, die ich verwende, um Ideen zum Leben zu erwecken",
      fr: "Technologies et outils que j'utilise pour donner vie aux idées",
    },
    technologies: {
      en: "Technologies",
      ar: "تقنية",
      de: "Technologien",
      fr: "Technologies",
    },
    yearsExperience: {
      en: "Years Experience",
      ar: "سنوات خبرة",
      de: "Jahre Erfahrung",
      fr: "Années d'expérience",
    },
    projects: {
      en: "Projects",
      ar: "مشروع",
      de: "Projekte",
      fr: "Projets",
    },
    commitment: {
      en: "Commitment %",
      ar: "الالتزام %",
      de: "Engagement %",
      fr: "Engagement %",
    },
  }

  const t = (key: keyof typeof labels) =>
    labels[key][locale as keyof typeof labels.title] || labels[key].en

  const SkillBadge = ({ skill }: { skill: Skill }) => {
    const Icon = skill.icon
    return (
      <div
        className={cn(
          "flex items-center gap-3 px-5 py-3 rounded-full",
          "bg-card/80 backdrop-blur-sm",
          "border border-border/50 hover:border-emerald-500/50",
          "transition-all duration-300 hover:scale-105 hover:bg-card",
          "cursor-default select-none whitespace-nowrap flex-shrink-0",
          "shadow-sm hover:shadow-md hover:shadow-emerald-500/10"
        )}
      >
        <Icon className="w-5 h-5 flex-shrink-0" style={{ color: skill.color }} />
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
      </div>
    )
  }

  const MarqueeRow = ({
    skills,
    rowRef,
  }: {
    skills: Skill[]
    rowRef: React.RefObject<HTMLDivElement | null>
  }) => {
    // Duplicate TWICE for seamless loop
    const duplicatedSkills = [...skills, ...skills]

    return (
      <div ref={rowRef} className="skills-row relative overflow-hidden py-3">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-content flex gap-4 w-max will-change-transform">
          {duplicatedSkills.map((skill, index) => (
            <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    )
  }

  const totalSkills = skillsRow1.length + skillsRow2.length + skillsRow3.length

  const stats = [
    { value: totalSkills, label: t("technologies"), showPlus: true },
    { value: 3, label: t("yearsExperience"), showPlus: true },
    { value: 15, label: t("projects"), showPlus: true },
    { value: 100, label: t("commitment"), showPlus: false },
  ]

  return (
    <PageLayout>
      <div ref={containerRef} className="relative">
        <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

        <div className="space-y-4 md:space-y-6 -mx-4 md:-mx-8 lg:-mx-16">
          <MarqueeRow skills={skillsRow1} rowRef={row1Ref} />
          <MarqueeRow skills={skillsRow2} rowRef={row2Ref} />
          <MarqueeRow skills={skillsRow3} rowRef={row3Ref} />
        </div>
      </div>
    </PageLayout>
  )
}
