"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"

gsap.registerPlugin(ScrollTrigger)

const skillsData = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GSAP", level: 85 },
    { name: "Framer Motion", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Docker", level: 60 },
  ],
}

export function Skills() {
  const t = useTranslations("skills")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-category",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        ".skill-bar-fill",
        { width: "0%" },
        {
          width: (i, el) => el.getAttribute("data-level") + "%",
          duration: 1,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const categories = [
    { key: "frontend", skills: skillsData.frontend },
    { key: "backend", skills: skillsData.backend },
    { key: "tools", skills: skillsData.tools },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.key}
              className="skill-category p-6 bg-card rounded-2xl border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                {t(`categories.${category.key}`)}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}