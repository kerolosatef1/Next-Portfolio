"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { experiences, getLocalizedExperience } from "@/data/Experience"
import { MapPin, Calendar, ExternalLink, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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

        const isMobile = window.innerWidth < 768

        gsap.fromTo(
          exp,
          {
            opacity: 0,
            x: isMobile ? 0 : index % 2 === 0 ? -100 : 100,
            y: isMobile ? 50 : 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
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
        if (dot) {
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
        }

        const techs = exp.querySelectorAll(".tech-badge")
        if (techs.length > 0) {
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
        }
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

  const t = (key: keyof typeof labels) =>
    labels[key][locale as keyof typeof labels.title] || labels[key].en

  return (
    <PageLayout>
      <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* Timeline line - thinner on mobile, positioned closer to edge */}
        <div
          className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent origin-top md:-translate-x-1/2"
        />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => {
            const localized = getLocalizedExperience(exp, locale)
            const isLeft = index % 2 === 0

            return (
              <div
                key={exp.id}
                ref={(el) => {
                  if (el) experiencesRef.current[index] = el
                }}
                className="relative md:flex md:justify-center"
              >
                {/* Timeline Dot - smaller on mobile, positioned at line */}
                <div
                  className="timeline-dot absolute left-4 md:left-1/2 top-6 md:top-8 w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-500 border-2 md:border-4 border-background z-10 -translate-x-1/2 shadow-lg shadow-emerald-500/50"
                />

                {/* Card wrapper - full width on mobile minus the line space */}
                <div
                  className={cn(
                    "pl-10 md:pl-0",
                    "md:w-[calc(50%-32px)]",
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  )}
                >
                  <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
                    {/* Header: stack on mobile, side-by-side on larger screens */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className="p-2 md:p-3 rounded-xl bg-emerald-500/10 shrink-0">
                          <Building2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base md:text-xl font-bold text-foreground leading-tight break-words">
                            {localized.company}
                          </h3>
                          <p className="text-sm md:text-base text-emerald-500 font-medium mt-1 break-words">
                            {localized.position}
                          </p>
                        </div>
                      </div>

                      {/* Badge - smaller and self-positioned on mobile */}
                      <span
                        className={cn(
                          "self-start sm:self-auto px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap shrink-0",
                          exp.endDate === "Present"
                            ? "bg-emerald-500/20 text-emerald-500"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {typeLabels[exp.type][locale] || typeLabels[exp.type].en}
                      </span>
                    </div>

                    {/* Meta info - wraps nicely */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                        <span>
                          {exp.startDate} -{" "}
                          {exp.endDate === "Present" ? t("present") : exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                        <span>{localized.location}</span>
                      </div>
                    </div>

                    {/* Description list */}
                    <ul className="space-y-2 mb-4">
                      {localized.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-emerald-500 mt-0.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-badge px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Website link */}
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
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