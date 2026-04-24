"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { projects, getLocalizedProject } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  ArrowRight,
  Layers,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProjectsContentProps {
  locale: string
}

const PROJECTS_PER_PAGE = 6
const MAIN_TECHNOLOGIES = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
]

export function ProjectsContent({ locale }: ProjectsContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTech, setSelectedTech] = useState<string>("all")

  const filteredProjects = useMemo(() => {
    if (selectedTech === "all") return projects
    return projects.filter((p) =>
      p.technologies.some((tech) =>
        tech.toLowerCase().includes(selectedTech.toLowerCase())
      )
    )
  }, [selectedTech])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE)
  }, [filteredProjects, currentPage])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTech])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Filter buttons
        const filterBtns =
          containerRef.current?.querySelectorAll("[data-filter-btn]")
        if (filterBtns && filterBtns.length > 0) {
          gsap.fromTo(
            filterBtns,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
            }
          )
        }

        // Project cards
        const cards =
          containerRef.current?.querySelectorAll("[data-project-card]")
        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 80, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: "[data-projects-grid]",
                start: "top 85%",
              },
            }
          )
        }
      }, containerRef)

      return () => ctx.revert()
    })

    return () => cancelAnimationFrame(rafId)
  }, [isClient, currentPage, selectedTech])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    document
      .querySelector("[data-projects-grid]")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const labels = {
    title: { en: "PROJECTS", ar: "المشاريع", de: "PROJEKTE", fr: "PROJETS" },
    subtitle: {
      en: "A showcase of my recent work and creative projects",
      ar: "عرض لأحدث أعمالي ومشاريعي الإبداعية",
      de: "Eine Präsentation meiner neuesten Arbeiten",
      fr: "Une vitrine de mes travaux récents",
    },
    viewProject: { en: "View Project", ar: "عرض المشروع", de: "Projekt ansehen", fr: "Voir le projet" },
    liveDemo: { en: "Live Demo", ar: "معاينة مباشرة", de: "Live-Demo", fr: "Démo en direct" },
    sourceCode: { en: "Source Code", ar: "الكود المصدري", de: "Quellcode", fr: "Code source" },
    all: { en: "All", ar: "الكل", de: "Alle", fr: "Tous" },
    showing: { en: "Showing", ar: "عرض", de: "Zeige", fr: "Affichage" },
    of: { en: "of", ar: "من", de: "von", fr: "sur" },
    projectsLabel: { en: "projects", ar: "مشروع", de: "Projekte", fr: "projets" },
    featured: { en: "Featured", ar: "مميز", de: "Empfohlen", fr: "En vedette" },
  }

  const t = (key: keyof typeof labels) =>
    labels[key][locale as keyof typeof labels.title] || labels[key].en

  const getTechCount = (tech: string) => {
    if (tech === "all") return projects.length
    return projects.filter((p) =>
      p.technologies.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
    ).length
  }

  return (
    <PageLayout>
      <div ref={containerRef} className="relative">
        <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            data-filter-btn
            onClick={() => setSelectedTech("all")}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2",
              selectedTech === "all"
                ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/25"
                : "bg-transparent text-foreground/70 border-border hover:border-emerald-500/50 hover:text-emerald-500"
            )}
          >
            {t("all")} ({getTechCount("all")})
          </button>
          {MAIN_TECHNOLOGIES.map((tech) => (
            <button
              key={tech}
              data-filter-btn
              onClick={() => setSelectedTech(tech)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2",
                selectedTech === tech
                  ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/25"
                  : "bg-transparent text-foreground/70 border-border hover:border-emerald-500/50 hover:text-emerald-500"
              )}
            >
              {tech} ({getTechCount(tech)})
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="text-center mb-8 text-muted-foreground">
          {t("showing")} {paginatedProjects.length} {t("of")}{" "}
          {filteredProjects.length} {t("projectsLabel")}
        </div>

        {/* Grid */}
        <div data-projects-grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => {
            const localized = getLocalizedProject(project, locale)

            return (
              <div key={project.id} data-project-card className="group relative">
                <div className="absolute -inset-0.5 rounded-3xl opacity-0 blur-xl transition-all duration-500 bg-gradient-to-br from-emerald-500/40 via-emerald-400/20 to-emerald-600/40 group-hover:opacity-100" />

                <div className="relative bg-card rounded-2xl overflow-hidden border-2 border-border group-hover:border-emerald-500/50 transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={localized.title}
                      fill
                      className="object-cover transition-all duration-700 scale-100 group-hover:scale-110 group-hover:blur-sm"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={60}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-medium text-foreground">{project.year}</span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-medium">
                        {t("featured")}
                      </div>
                    )}

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg" title={t("liveDemo")}>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors shadow-lg" title={t("sourceCode")}>
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <Link href={`/${locale}/projects/${project.slug}`} className="p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors shadow-lg" title={t("viewProject")}>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">
                        {localized.category}
                      </span>
                    </div>

                    <Link href={`/${locale}/projects/${project.slug}`}>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors line-clamp-1">
                        {localized.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {localized.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            "px-2.5 py-1 rounded-lg text-xs font-medium",
                            selectedTech.toLowerCase() === tech.toLowerCase()
                              ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                              : "bg-secondary text-foreground/80"
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom border animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {paginatedProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              {locale === "ar" ? "لا توجد مشاريع بهذه التقنية" : "No projects found with this technology"}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "p-3 rounded-xl border-2 transition-all duration-300",
                currentPage === 1
                  ? "border-border text-muted-foreground cursor-not-allowed opacity-50"
                  : "border-border text-foreground hover:border-emerald-500 hover:text-emerald-500"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "w-12 h-12 rounded-xl font-medium transition-all duration-300 border-2",
                    currentPage === page
                      ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/25"
                      : "bg-transparent text-foreground border-border hover:border-emerald-500/50 hover:text-emerald-500"
                  )}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "p-3 rounded-xl border-2 transition-all duration-300",
                currentPage === totalPages
                  ? "border-border text-muted-foreground cursor-not-allowed opacity-50"
                  : "border-border text-foreground hover:border-emerald-500 hover:text-emerald-500"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: projects.length, label: locale === "ar" ? "مشروع" : "Projects" },
            { value: projects.filter((p) => p.featured).length, label: locale === "ar" ? "مميز" : "Featured" },
            { value: [...new Set(projects.flatMap((p) => p.technologies))].length, label: locale === "ar" ? "تقنية" : "Technologies" },
            { value: new Date().getFullYear() - 2022, label: locale === "ar" ? "سنوات" : "Years" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-emerald-500 mb-2">{stat.value}+</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}