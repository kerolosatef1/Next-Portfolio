"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { cn } from "@/lib/utils"

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
  SiPostman,
} from "react-icons/si"
import {
  TbApi,
  TbDeviceMobile,
  TbBrandSpeedtest,
  TbBrowserCheck,
  TbSeo,
} from "react-icons/tb"
import type { IconType } from "react-icons"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Skill {
  name: string
  icon: IconType
  color: string
}

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

  const setupMarquee = useCallback(
    (
      element: HTMLDivElement | null,
      direction: "left" | "right",
      speed: number,
      copies: number = 4
    ): gsap.core.Tween | null => {
      if (!element) return null

      const content = element.querySelector(".marquee-content") as HTMLElement
      if (!content) return null

      const totalWidth = content.scrollWidth
      const singleSetWidth = totalWidth / copies

      if (singleSetWidth <= 0) return null

      const finalDirection = isArabic
        ? direction === "left"
          ? "right"
          : "left"
        : direction

      const duration = singleSetWidth / speed

      gsap.killTweensOf(content)
      gsap.set(content, { x: 0 })

      let wrap: (n: number) => number
      let xTarget: string

      if (finalDirection === "left") {
        wrap = gsap.utils.wrap(-singleSetWidth, 0)
        xTarget = `-=${singleSetWidth}`
      } else {
        gsap.set(content, { x: -singleSetWidth })
        wrap = gsap.utils.wrap(-singleSetWidth, 0)
        xTarget = `+=${singleSetWidth}`
      }

      const tween = gsap.to(content, {
        x: xTarget,
        duration: duration,
        ease: "none",
        repeat: -1,
        force3D: true,
        modifiers: {
          x: (x) => `${wrap(parseFloat(x))}px`,
        },
      })

      const pause = () =>
        gsap.to(tween, { timeScale: 0, duration: 0.4, ease: "power2.out" })
      const resume = () =>
        gsap.to(tween, { timeScale: 1, duration: 0.4, ease: "power2.out" })

      element.addEventListener("mouseenter", pause)
      element.addEventListener("mouseleave", resume)
      ;(tween as any)._cleanup = () => {
        element.removeEventListener("mouseenter", pause)
        element.removeEventListener("mouseleave", resume)
      }

      return tween
    },
    [isArabic]
  )

  // Rich scroll-triggered entrance animations
  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Each row slides in from alternating directions with blur
        gsap.utils
          .toArray<HTMLElement>("[data-skill-row]")
          .forEach((row, i) => {
            const direction = i % 2 === 0 ? -100 : 100

            gsap.fromTo(
              row,
              {
                opacity: 0,
                x: direction,
                filter: "blur(15px)",
                scale: 0.95,
              },
              {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            )
          })
      }, containerRef)

      return () => ctx.revert()
    })

    return () => cancelAnimationFrame(rafId)
  }, [isClient])

  // Marquee setup
  useEffect(() => {
    if (!isClient) return

    let timer: NodeJS.Timeout
    let resizeTimer: NodeJS.Timeout

    const initMarquees = () => {
      tweensRef.current.forEach((tween) => {
        if (tween) {
          ;(tween as any)._cleanup?.()
          tween.kill()
        }
      })
      tweensRef.current = []

      const tween1 = setupMarquee(row1Ref.current, "right", 50, 4)
      const tween2 = setupMarquee(row2Ref.current, "left", 40, 4)
      const tween3 = setupMarquee(row3Ref.current, "right", 45, 4)

      if (tween1) tweensRef.current.push(tween1)
      if (tween2) tweensRef.current.push(tween2)
      if (tween3) tweensRef.current.push(tween3)
    }

    const waitForReady = async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready
      }
      timer = setTimeout(initMarquees, 200)
    }

    waitForReady()

    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(initMarquees, 250)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timer)
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", handleResize)
      tweensRef.current.forEach((tween) => {
        if (tween) {
          ;(tween as any)._cleanup?.()
          tween.kill()
        }
      })
      tweensRef.current = []
    }
  }, [isClient, setupMarquee])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tweensRef.current.forEach((tween) => tween?.resume())
      } else {
        tweensRef.current.forEach((tween) => tween?.pause())
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

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
          "transition-all duration-300 hover:scale-110 hover:bg-card hover:-translate-y-1",
          "cursor-default select-none whitespace-nowrap flex-shrink-0",
          "shadow-sm hover:shadow-lg hover:shadow-emerald-500/20"
        )}
      >
        <Icon
          className="w-5 h-5 flex-shrink-0"
          style={{ color: skill.color || undefined }}
        />
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
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
    const repeatedSkills = [...skills, ...skills, ...skills, ...skills]

    return (
      <div
        ref={rowRef}
        data-skill-row
        dir="ltr"
        className="relative overflow-hidden py-3"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-content flex gap-4 w-max will-change-transform">
          {repeatedSkills.map((skill, index) => (
            <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <PageLayout>
      <div ref={containerRef} className="relative">
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          locale={locale}
        />

        <div className="space-y-4 md:space-y-6 -mx-4 md:-mx-8 lg:-mx-16">
          <MarqueeRow skills={skillsRow1} rowRef={row1Ref} />
          <MarqueeRow skills={skillsRow2} rowRef={row2Ref} />
          <MarqueeRow skills={skillsRow3} rowRef={row3Ref} />
        </div>
      </div>
    </PageLayout>
  )
}