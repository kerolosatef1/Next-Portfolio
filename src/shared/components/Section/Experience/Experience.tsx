"use client"

import { useRef } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Building2, Calendar } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
import { PageHeader } from "../../shared/PageHeader/PageHeader"
import { useGsapAnimation } from "@/shared/hooks/useGsap"

const experienceData = [
  {
    id: "1",
    // ✅ Fixed: "Saudi Arabia" proper name
    company: "Beetleware Company in Saudi Arabia",
    companyAr: "شركة Beetleware في السعودية",
    position: "Junior Frontend Developer Internship",
    positionAr: "تدريب واجهات أمامية",
    startDate: "2025",
    endDate: "24/3/2026",
    description: [
      "Part of the frontend development team of 3 developers",
      "Implemented new features using React and Next.js",
      "Improved application performance by 40%",
    ],
    descriptionAr: [
      "جزء من فريق تطوير الواجهات الأمامية المكون من 5 مطورين",
      "تنفيذ ميزات جديدة باستخدام React و Next.js",
      "تحسين أداء التطبيق بنسبة 40%",
    ],
    // ✅ Fixed: "Zustand" not "noval state"
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Shadcn/UI",
      "NextAuth",
      "Chart.js",
    ],
  },
  {
    id: "2",
    company: "Digital Agency for Freelancing",
    companyAr: "وكالة رقمية للأعمال الحرة",
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
      "التعامل مع الواجهات الخلفية وال API",
    ],
    // ✅ Fixed: "Material UI" not "Metrial/UI"
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Sass",
      "Material UI",
      "Shadcn/UI",
      "Chart.js",
      "NextAuth",
      "ISR, SSG, SSR",
    ],
  },
]

export function Experience() {
  const t = useTranslations("experience")
  const locale = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isArabic = locale === "ar"

  useGsapAnimation(
    sectionRef,
    [
      // Timeline line draws top to bottom
      {
        target: "[data-timeline-line]",
        from: { scaleY: 0, transformOrigin: "top" },
        to: { scaleY: 1, duration: 1.5, ease: "power2.out" },
        scrollTrigger: {
          trigger: "[data-timeline-line]",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
      // Timeline dots pop in
      {
        target: "[data-timeline-dot]",
        from: { scale: 0, opacity: 0 },
        to: {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: "back.out(2)",
        },
        scrollTrigger: {
          trigger: "[data-experience-list]",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
      // Experience cards
      {
        target: "[data-experience]",
        from: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.25,
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: "[data-experience-list]",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
      // Header slide-in
      {
        target: "[data-exp-header]",
        from: { opacity: 0, x: isArabic ? 30 : -30 },
        to: {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3,
        },
        scrollTrigger: {
          trigger: "[data-experience-list]",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
      // Bullets stagger
      {
        target: "[data-exp-bullet]",
        from: { opacity: 0, x: isArabic ? 20 : -20 },
        to: {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.5,
        },
        scrollTrigger: {
          trigger: "[data-experience-list]",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
      // Tech badges pop
      {
        target: "[data-exp-tech]",
        from: { opacity: 0, scale: 0.5, y: 10 },
        to: {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "back.out(1.7)",
          delay: 0.7,
        },
        scrollTrigger: {
          trigger: "[data-experience-list]",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    ],
    [isArabic]
  )

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30 overflow-hidden"
    >
      <Container>
        <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

        <div data-experience-list className="relative max-w-3xl mx-auto">
          {/* Timeline line - thinner padding on mobile */}
          <div
            data-timeline-line
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent md:-translate-x-1/2"
          />

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              data-experience
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot - smaller and aligned on mobile */}
              <div
                data-timeline-dot
                className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10 shadow-lg shadow-emerald-500/50"
                style={{ top: "1.5rem" }}
              />

              {/* Card - reduced left padding on mobile */}
              <div
                className={`flex-1 pl-10 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="p-4 md:p-6 bg-card rounded-2xl border border-border hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                  {/* Header stacks on mobile */}
                  <div
                    data-exp-header
                    className="flex flex-col md:flex-wrap md:flex-row md:items-center gap-2 md:gap-3 mb-3 md:mb-4"
                  >
                    <div className="flex items-center gap-2 text-emerald-500">
                      <Building2 className="h-4 w-4 shrink-0" />
                      <span className="font-medium text-sm md:text-base">
                        {isArabic ? exp.companyAr : exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>
                        {exp.startDate} - {exp.endDate || t("present")}
                      </span>
                    </div>
                  </div>

                  <h3
                    data-exp-header
                    className="text-lg md:text-xl font-semibold text-foreground mb-3"
                  >
                    {isArabic ? exp.positionAr : exp.position}
                  </h3>

                  <ul className="space-y-2 mb-4">
                    {(isArabic ? exp.descriptionAr : exp.description).map(
                      (item, i) => (
                        <li
                          key={i}
                          data-exp-bullet
                          className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 mt-1.5 md:mt-2 bg-emerald-500 rounded-full shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        data-exp-tech
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded hover:bg-emerald-500/20 hover:text-emerald-500 transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}