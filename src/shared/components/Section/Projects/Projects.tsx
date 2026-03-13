"use client"

import { useEffect, useRef } from "react"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    titleAr: "منصة تجارة إلكترونية",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    descriptionAr:
      "منصة تجارة إلكترونية متكاملة مع سلة التسوق والدفع الإلكتروني.",
    image: "/projects/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    titleAr: "تطبيق إدارة المهام",
    description:
      "A collaborative task management application with real-time updates.",
    descriptionAr: "تطبيق إدارة مهام تعاوني مع تحديثات في الوقت الفعلي.",
    image: "/projects/project-2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Website",
    titleAr: "موقع شخصي",
    description: "A modern portfolio website with animations and dark mode.",
    descriptionAr: "موقع شخصي حديث مع رسوم متحركة ووضع داكن.",
    image: "/projects/project-3.jpg",
    technologies: ["Next.js", "GSAP", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
]

export function Projects() {
  const t = useTranslations("projects")
  const locale = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isArabic = locale === "ar"

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="project-card group overflow-hidden border-border hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/10">
                  <span className="text-4xl font-bold text-emerald-500/20">
                    {project.id}
                  </span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={isArabic ? project.titleAr : project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">
                  {isArabic ? project.titleAr : project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {isArabic ? project.descriptionAr : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t("viewLive")}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="ghost" className="gap-2" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        {t("viewCode")}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}