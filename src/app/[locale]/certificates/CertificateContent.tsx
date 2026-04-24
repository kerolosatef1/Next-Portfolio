"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { certificates, getLocalizedCertificate } from "@/data/certificates"
import {
  Award,
  ExternalLink,
  Calendar,
  BadgeCheck,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface CertificatesContentProps {
  locale: string
}

export function CertificatesContent({ locale }: CertificatesContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return

          const directions = [
            { x: -80, y: 40 },
            { x: 80, y: -40 },
            { x: 0, y: 80 },
            { x: -60, y: -60 },
            { x: 60, y: 60 },
          ]
          const dir = directions[index % directions.length]

          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: dir.x,
              y: dir.y,
              scale: 0.85,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          )

          // Badge pop-in
          const badge = card.querySelector("[data-cert-badge]")
          if (badge) {
            gsap.fromTo(
              badge,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                delay: 0.3,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                },
              }
            )
          }

          // Skill tags stagger
          const skills = card.querySelectorAll("[data-skill-tag]")
          if (skills.length > 0) {
            gsap.fromTo(
              skills,
              { opacity: 0, scale: 0, y: 20 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                },
              }
            )
          }

          // Shimmer effect
          const shimmer = card.querySelector("[data-shimmer]")
          if (shimmer) {
            gsap.fromTo(
              shimmer,
              { x: "-100%" },
              {
                x: "200%",
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
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
      en: "CERTIFICATES",
      ar: "الشهادات",
      de: "ZERTIFIKATE",
      fr: "CERTIFICATS",
    },
    subtitle: {
      en: "My professional certifications and completed courses",
      ar: "شهاداتي المهنية والدورات التي أكملتها",
      de: "Meine Berufszertifikate und abgeschlossenen Kurse",
      fr: "Mes certifications professionnelles et cours terminés",
    },
    viewCert: {
      en: "View Certificate",
      ar: "عرض الشهادة",
      de: "Zertifikat anzeigen",
      fr: "Voir le certificat",
    },
    certificates: {
      en: "Certificates",
      ar: "شهادة",
      de: "Zertifikate",
      fr: "Certificats",
    },
    skillsCovered: {
      en: "Skills Covered",
      ar: "مهارة",
      de: "Abgedeckte Fähigkeiten",
      fr: "Compétences couvertes",
    },
    issuers: {
      en: "Issuers",
      ar: "جهة معتمدة",
      de: "Aussteller",
      fr: "Émetteurs",
    },
    yearsLearning: {
      en: "Years Learning",
      ar: "سنوات تعلم",
      de: "Jahre des Lernens",
      fr: "Années d'apprentissage",
    },
  }

  const t = (key: keyof typeof labels) =>
    labels[key][locale as keyof typeof labels.title] || labels[key].en

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[index] = el
  }

  return (
    <PageLayout>
      <div ref={containerRef}>
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          locale={locale}
        />

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const localizedCert = getLocalizedCertificate(cert, locale)

            return (
              <div
                key={cert.id}
                ref={setCardRef(index)}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-gradient-to-br from-emerald-500/30 to-emerald-400/10" />

                <div className="relative bg-card rounded-2xl overflow-hidden border border-border group-hover:border-emerald-500/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-emerald-500/10">
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 overflow-hidden">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={localizedCert.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={60}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Award className="w-20 h-20 text-emerald-500/30" />
                      </div>
                    )}

                    {/* Shimmer Effect */}
                    <div
                      data-shimmer
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                        transform: "translateX(-100%)",
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge */}
                    <div
                      data-cert-badge
                      className="absolute top-4 right-4 p-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"
                    >
                      <BadgeCheck className="w-5 h-5 text-white" />
                    </div>

                    {/* Issuer */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                        <Award className="w-4 h-4" />
                        {localizedCert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-emerald-500 transition-colors">
                      {localizedCert.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{cert.date}</span>
                      {cert.credentialId && (
                        <>
                          <span className="text-border">|</span>
                          <span className="font-mono text-xs">
                            {cert.credentialId}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          data-skill-tag
                          className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 px-4 py-2 rounded-xl",
                          "bg-emerald-500/10 text-emerald-500",
                          "hover:bg-emerald-500 hover:text-white",
                          "transition-all duration-300",
                          "text-sm font-medium"
                        )}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t("viewCert")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              value: certificates.length,
              label: t("certificates"),
              icon: Award,
            },
            {
              value: [...new Set(certificates.flatMap((c) => c.skills))].length,
              label: t("skillsCovered"),
              icon: Sparkles,
            },
            {
              value: [...new Set(certificates.map((c) => c.issuer))].length,
              label: t("issuers"),
              icon: BadgeCheck,
            },
            {
              value: new Date().getFullYear() - 2022,
              label: t("yearsLearning"),
              icon: Calendar,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}+
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}