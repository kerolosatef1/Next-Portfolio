"use client"

import { useRef } from "react"
import { useLocale, useTranslations } from "next-intl"
import { Briefcase, FolderGit2 } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"
import { siteConfig } from "@/shared/config/site"
import { useGsapAnimation } from "@/shared/hooks/useGsap"
import { PageHeader } from "../../shared/PageHeader/PageHeader"

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
const locale = useLocale()
  const isArabic = locale === "ar"

useGsapAnimation(sectionRef, [
    {
      target: "[data-gsap-fade-up]",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0, duration: 0.8 },
      scrollTrigger: {
        trigger: "[data-gsap-fade-up]",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
    {
      target: "[data-stat]",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
      scrollTrigger: {
        trigger: "[data-stats]",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  ])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <Container>
        <PageHeader
                  title={t("title")}
                  subtitle={t("subtitle")}
                  locale={locale}
                />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-gsap-fade-up className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("description", {
                years: siteConfig.creator.yearsOfExperience,
              })}
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

          <div data-stats className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.key}
                data-stat
                data-gsap-fade-up
                className="group p-6 bg-card rounded-2xl border border-border hover:border-emerald-500/50 transition-colors text-center"
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