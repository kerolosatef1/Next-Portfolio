"use client"

import { useEffect, useRef } from "react"
import { useTranslations, useLocale } from "next-intl"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Building2, Calendar } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"
import { PageHeader } from "../../shared/PageHeader/PageHeader"

gsap.registerPlugin(ScrollTrigger)

const experienceData = [
  {
    id: "1",
    company: "Beetleware Company in Saudi-Arabia",
    companyAr: " في السعودية beetleware شركة ",
    position: "Junior Frontend Developer InternShip",
    positionAr: "تدريب  واجهات أمامية ",
    startDate: "2025",
    endDate: "24/3/2026",
    description: [
      "part of the frontend development team of 3 developers",
      "Implemented new features using React and Next.js",
      "Improved application performance by 40%",
    ],
    descriptionAr: [
      "جزء فريق التطوير الواجهات الأمامية المكون من 5 مطورين",
      "تنفيذ ميزات جديدة باستخدام React و Next.js",
      "تحسين أداء التطبيق بنسبة 40%",
    ],
    technologies: ["React", "Next.js", "TypeScript","redux","noval state","Shadcn/UI","Next Auth","Chart.js"],
  },
  {
    id: "2",
    company: "Digital Agency for freelancing",
    companyAr: " وكالة رقميةللاعمال الحرة",
    position: "Frontend Developer",
    positionAr: "مطور واجهات أمامية",
    startDate: "2023",
    endDate: "present",
    description: [
      "Developed responsive web applications",
      "Collaborated with designers to implement UI/UX designs",
      "Maintained and improved existing codebases",
    ],
    descriptionAr: [
      "تطوير تطبيقات ويب متجاوبة",
      "التعاون مع المصممين لتنفيذ تصميمات UI/UX",
      "صيانة وتحسين قواعد الكود الحالية",
      " التعامل مع الواجهات الخلفية وال API "
    ],
    technologies: ["NEXT.JS","React","TypeScript" ,"JavaScript", "Tailwind css","Sass","Metrial/UI","Shadcn/UI","Chart.js","Next Auth" ,"ISR , SSG , SSR"],
  }
]

export function Experience() {
  const t = useTranslations("experience")
  const locale = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isArabic = locale === "ar"

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-item",
        { opacity: 0, x: isArabic ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isArabic])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <Container>
      <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />
        

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-px bg-border md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="p-6 bg-card rounded-2xl border border-border hover:border-emerald-500/50 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-emerald-500">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">
                        {isArabic ? exp.companyAr : exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {exp.startDate} - {exp.endDate || t("present")}
                      </span>
                    </div>
                  </div>

                  {/* Position */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {isArabic ? exp.positionAr : exp.position}
                  </h3>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {(isArabic ? exp.descriptionAr : exp.description).map(
                      (item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 mt-2 bg-emerald-500 rounded-full shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}