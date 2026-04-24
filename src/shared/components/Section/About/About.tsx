"use client"

import { useRef } from "react"
import { useLocale, useTranslations } from "next-intl"
import { Briefcase, FolderGit2 } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
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

  useGsapAnimation(
    sectionRef,
    [
      {
        target: "[data-about-description]",
        from: { opacity: 0, y: 40, filter: "blur(8px)" },
        to: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: "[data-about-description]",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
      {
        target: "[data-tech-badge]",
        from: { opacity: 0, scale: 0.5, y: 20 },
        to: {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        scrollTrigger: {
          trigger: "[data-tech-badges]",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
      {
        target: "[data-stat]",
        from: { opacity: 0, y: 60, scale: 0.8 },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: "[data-stats]",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
      {
        target: "[data-stat-number]",
        from: { textContent: 0, opacity: 0 },
        to: {
          textContent: (i: number, el: Element) =>
            el.getAttribute("data-value") || "0",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.15,
          delay: 0.3,
        },
        scrollTrigger: {
          trigger: "[data-stats]",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
      {
        target: "[data-stat-icon]",
        from: { scale: 0, rotate: -180 },
        to: {
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(2)",
          delay: 0.2,
        },
        scrollTrigger: {
          trigger: "[data-stats]",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    ],
    [isArabic]
  )

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 overflow-hidden"
    >
      <Container>
        <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <p
              data-about-description
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("description", {
                years: siteConfig.creator.yearsOfExperience,
              })}
            </p>

            <div data-tech-badges className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"].map(
                (tech) => (
                  <span
                    key={tech}
                    data-tech-badge
                    className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 hover:scale-105 transition-all duration-300 cursor-default"
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
                className="group p-6 bg-card rounded-2xl border border-border hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 text-center hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div
                  data-stat-icon
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 group-hover:rotate-12 transition-all duration-300"
                >
                  <stat.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 flex items-center justify-center">
                  <span data-stat-number data-value={stat.value}>
                    0
                  </span>
                  <span className="text-emerald-500">{stat.suffix}</span>
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