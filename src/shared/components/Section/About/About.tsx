"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, FolderGit2, Users } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"
import { siteConfig } from "@/shared/config/site"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    key: "experience",
    value: siteConfig.creator.yearsOfExperience,
    suffix: "+",
    icon: Briefcase,
  },
  {
    key: "projects",
    value: 15,
    suffix: "+",
    icon: FolderGit2,
  },
  
]

export function About() {
  const t = useTranslations("about")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="about-content space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("description", { years: siteConfig.creator.yearsOfExperience })}
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="stats-container grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="stat-card group p-6 bg-card rounded-2xl border border-border hover:border-emerald-500/50 transition-colors text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}