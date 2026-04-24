"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import {
  aboutData,
  getLocalizedBio,
  getLocalizedHighlight,
} from "@/data/about"
import { siteConfig } from "@/shared/config/site"
import {
  Briefcase,
  FolderGit2,
  Users,
  Cpu,
  Quote,
  MapPin,
  Mail,
  Check,
} from "lucide-react"
import { cn } from "@/lib/utils"
import profileImage from "@/shared/components/shared/Images/profile.jpg"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AboutContentProps {
  locale: string
}

export function AboutContent({ locale }: AboutContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement[]>([])
  const highlightsRef = useRef<HTMLDivElement[]>([])
  const [isClient, setIsClient] = useState(false)

  const isArabic = locale === "ar"

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Image animation
        if (imageRef.current) {
          gsap.fromTo(
            imageRef.current,
            {
              opacity: 0,
              scale: 0.8,
              x: isArabic ? 80 : -80,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 85%",
              },
            }
          )
        }

        // Bio animation
        if (bioRef.current) {
          gsap.fromTo(
            bioRef.current,
            { opacity: 0, x: isArabic ? -80 : 80 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bioRef.current,
                start: "top 80%",
              },
            }
          )

          const quoteIcon = bioRef.current.querySelector("[data-quote-icon]")
          if (quoteIcon) {
            gsap.fromTo(
              quoteIcon,
              { scale: 0, rotation: -45 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                  trigger: bioRef.current,
                  start: "top 80%",
                },
              }
            )
          }
        }

        // Stats counter
        statsRef.current.forEach((stat, index) => {
          if (!stat) return

          gsap.fromTo(
            stat,
            { opacity: 0, y: 60, scale: 0.6 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
              },
            }
          )

          const numberEl = stat.querySelector("[data-stat-number]") as HTMLElement
          if (numberEl) {
            const finalValue = parseInt(
              numberEl.getAttribute("data-value") || "0"
            )
            const counter = { val: 0 }

            gsap.to(counter, {
              val: finalValue,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
              },
              onUpdate: () => {
                numberEl.textContent = Math.floor(counter.val) + "+"
              },
            })
          }
        })

        // Highlights
        highlightsRef.current.forEach((highlight, index) => {
          if (!highlight) return

          gsap.fromTo(
            highlight,
            { opacity: 0, y: 40, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: highlight,
                start: "top 90%",
              },
            }
          )

          const checkIcon = highlight.querySelector("[data-check-icon]")
          if (checkIcon) {
            gsap.fromTo(
              checkIcon,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: index * 0.1 + 0.3,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: highlight,
                  start: "top 90%",
                },
              }
            )
          }
        })

        // Info items
        const infoItems = containerRef.current?.querySelectorAll("[data-info-item]")
        if (infoItems && infoItems.length > 0) {
          gsap.fromTo(
            infoItems,
            { opacity: 0, x: isArabic ? 30 : -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: infoItems[0],
                start: "top 85%",
              },
            }
          )
        }
      }, containerRef)

      return () => ctx.revert()
    })

    return () => cancelAnimationFrame(rafId)
  }, [isClient, isArabic])

  const labels = {
    title: isArabic ? "نبذة عني" : "ABOUT ME",
    subtitle: isArabic
      ? "تعرف علي أكثر ورحلتي في عالم البرمجة"
      : "Get to know me and my journey in the world of programming",
    quickInfo: isArabic ? "معلومات سريعة" : "Quick Info",
    name: isArabic ? "الاسم" : "Name",
    title2: isArabic ? "المسمى" : "Title",
    location: isArabic ? "الموقع" : "Location",
    email: isArabic ? "البريد" : "Email",
    status: isArabic ? "الحالة" : "Status",
    available: isArabic ? "متاح للعمل" : "Available for work",
    notAvailable: isArabic ? "غير متاح" : "Not available",
    highlights: isArabic ? "ما يميزني" : "What Makes Me Different",
  }

  const bio = getLocalizedBio(locale)
  const stats = aboutData.stats

  const statItems = [
    { icon: Briefcase, value: stats.yearsExperience, label: isArabic ? "سنوات الخبرة" : "Years Experience" },
    { icon: FolderGit2, value: stats.projectsCompleted, label: isArabic ? "مشروع مكتمل" : "Projects Completed" },
    { icon: Users, value: stats.happyClients, label: isArabic ? "عميل سعيد" : "Happy Clients" },
    { icon: Cpu, value: stats.technologies, label: isArabic ? "تقنية" : "Technologies" },
  ]

  const setStatRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) statsRef.current[index] = el
  }

  const setHighlightRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) highlightsRef.current[index] = el
  }

  return (
    <PageLayout>
      <div ref={containerRef}>
        <PageHeader title={labels.title} subtitle={labels.subtitle} locale={locale} />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Image & Info */}
          <div className="space-y-8">
            <div ref={imageRef} className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-emerald-500/50 to-transparent rounded-3xl opacity-70" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-background">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5" />
                <Image
                  src={profileImage}
                  alt={siteConfig.creator.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={75}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
                  <p className="text-white font-semibold">
                    {isArabic ? siteConfig.creator.nameAr : siteConfig.creator.name}
                  </p>
                  <p className="text-emerald-400 text-sm">
                    {isArabic ? siteConfig.creator.titleAr : siteConfig.creator.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-emerald-500 rounded-full" />
                {labels.quickInfo}
              </h3>
              <ul className="space-y-4">
                <li data-info-item className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <span className="text-emerald-500 font-medium min-w-[80px]">{labels.name}:</span>
                  <span className="text-foreground">{isArabic ? siteConfig.creator.nameAr : siteConfig.creator.name}</span>
                </li>
                <li data-info-item className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <span className="text-emerald-500 font-medium min-w-[80px]">{labels.title2}:</span>
                  <span className="text-foreground">{isArabic ? siteConfig.creator.titleAr : siteConfig.creator.title}</span>
                </li>
                <li data-info-item className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-emerald-500 font-medium min-w-[60px]">{labels.location}:</span>
                  <span className="text-foreground">{isArabic ? siteConfig.creator.locationAr : siteConfig.creator.location}</span>
                </li>
                <li data-info-item className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-emerald-500 font-medium min-w-[60px]">{labels.email}:</span>
                  <span className="text-foreground break-all">{siteConfig.creator.email}</span>
                </li>
                <li data-info-item className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <span className="text-emerald-500 font-medium min-w-[80px]">{labels.status}:</span>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2",
                    siteConfig.creator.availableForWork ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-500"
                  )}>
                    {siteConfig.creator.availableForWork && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    )}
                    {siteConfig.creator.availableForWork ? labels.available : labels.notAvailable}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Bio & Highlights */}
          <div className="space-y-8">
            <div ref={bioRef} className="relative">
              <Quote
                data-quote-icon
                className={cn(
                  "absolute -top-6 w-16 h-16 text-emerald-500/20",
                  isArabic ? "-right-2" : "-left-2"
                )}
              />
              <div className={cn(
                "text-lg text-muted-foreground leading-relaxed whitespace-pre-line",
                isArabic ? "pr-6 border-r-2 border-emerald-500/30" : "pl-6 border-l-2 border-emerald-500/30"
              )}>
                {bio}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-emerald-500 rounded-full" />
                {labels.highlights}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {aboutData.highlights.map((highlight, index) => {
                  const localized = getLocalizedHighlight(highlight, locale)
                  return (
                    <div
                      key={index}
                      ref={setHighlightRef(index)}
                      className="group p-5 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                    >
                      <div className="flex items-start gap-3">
                        <div data-check-icon className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                          <Check className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-emerald-500 transition-colors">
                            {localized.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{localized.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <div
              key={index}
              ref={setStatRef(index)}
              className="group text-center p-8 rounded-3xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="relative inline-flex mb-4">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl group-hover:bg-emerald-500/30 transition-colors" />
                <div className="relative p-4 rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <div data-stat-number data-value={stat.value} className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                0+
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}