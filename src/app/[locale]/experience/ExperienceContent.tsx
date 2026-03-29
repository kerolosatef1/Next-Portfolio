"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { experiences, getLocalizedExperience } from "@/data/Experience"
import { MapPin, Calendar, ExternalLink, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface ExperienceContentProps {
  locale: string
}

export function ExperienceContent({ locale }: ExperienceContentProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !timelineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
        }
      )

      experiencesRef.current.forEach((exp, index) => {
        if (!exp) return

        gsap.fromTo(
          exp,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: exp,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )

        const dot = exp.querySelector(".timeline-dot")
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: exp,
              start: "top 80%",
            },
          }
        )

        const techs = exp.querySelectorAll(".tech-badge")
        gsap.fromTo(
          techs,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: exp,
              start: "top 70%",
            },
          }
        )
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [isClient])

  const labels = {
    title: {
      en: "EXPERIENCE",
      ar: "الخبرات",
      de: "ERFAHRUNG",
      fr: "EXPÉRIENCE",
    },
    subtitle: {
      en: "My professional journey and the companies I've worked with",
      ar: "رحلتي المهنية والشركات التي عملت معها",
      de: "Meine berufliche Reise und die Unternehmen, mit denen ich gearbeitet habe",
      fr: "Mon parcours professionnel et les entreprises avec lesquelles j'ai travaillé",
    },
    present: {
      en: "Present",
      ar: "حتى الآن",
      de: "Heute",
      fr: "Présent",
    },
    viewWebsite: {
      en: "Visit Website",
      ar: "زيارة الموقع",
      de: "Website besuchen",
      fr: "Visiter le site",
    },
  }

  const typeLabels: Record<string, Record<string, string>> = {
    "full-time": { en: "Full-time", ar: "دوام كامل", de: "Vollzeit", fr: "Temps plein" },
    "part-time": { en: "Part-time", ar: "دوام جزئي", de: "Teilzeit", fr: "Temps partiel" },
    contract: { en: "Contract", ar: "عقد", de: "Vertrag", fr: "Contrat" },
    internship: { en: "Internship", ar: "تدريب", de: "Praktikum", fr: "Stage" },
    freelance: { en: "Freelance", ar: "عمل حر", de: "Freiberuflich", fr: "Freelance" },
  }

  const t = (key: keyof typeof labels) => labels[key][locale as keyof typeof labels.title] || labels[key].en

  return (
    <PageLayout>
      <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        <div
          className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent origin-top"
          style={{ transform: "translateX(-50%)" }}
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const localized = getLocalizedExperience(exp, locale)
            const isLeft = index % 2 === 0

            return (
              <div
                key={exp.id}
                ref={(el) => {
                  if (el) experiencesRef.current[index] = el
                }}
                className={cn("relative flex items-start gap-8", "md:justify-center")}
              >
                <div
                  className={cn(
                    "timeline-dot absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background z-10",
                    "shadow-lg shadow-emerald-500/50"
                  )}
                  style={{ transform: "translateX(-50%)" }}
                />

                <div
                  className={cn(
                    "ml-16 md:ml-0 md:w-[calc(50%-40px)]",
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  )}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-emerald-500/10">
                          <Building2 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{localized.company}</h3>
                          <p className="text-emerald-500 font-medium">{localized.position}</p>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium",
                          exp.endDate === "Present"
                            ? "bg-emerald-500/20 text-emerald-500"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {typeLabels[exp.type][locale] || typeLabels[exp.type].en}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate === "Present" ? t("present") : exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{localized.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {localized.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-badge px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t("viewWebsite")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}