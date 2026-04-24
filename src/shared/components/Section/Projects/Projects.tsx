"use client"

import { useState, useCallback } from "react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { projects, Project } from "@/data/projects"
import { ProjectList } from "./ProjectList"
import { PageHeader } from "../../shared/PageHeader/PageHeader"
import { Container } from "../../shared/Container/Container"

// Lazy load the heavy 3D gallery - this is the single biggest performance win
// It removes ~2-4MB of static image imports from the initial bundle
const ProjectGallery3D = dynamic(
  () =>
    import("./ProjectGallery3D").then((mod) => ({
      default: mod.ProjectGallery3D,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading 3D Gallery...
          </p>
        </div>
      </div>
    ),
  }
)

export function Projects() {
  const t = useTranslations("projects")
  const locale = useLocale()
  const router = useRouter()
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleProjectHover = useCallback((project: Project | null) => {
    setActiveProject(project)
  }, [])

  const handleProjectClick = useCallback(
    (project: Project) => {
      router.push(`/${locale}/projects/${project.slug}`)
    },
    [locale, router]
  )

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      <Container>
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          locale={locale}
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 max-w-[1400px] mx-auto w-full">
            {/* 3D Cube - now lazy loaded */}
            <div className="flex-1 w-full flex items-center justify-center">
              <ProjectGallery3D
                activeProject={activeProject}
                allProjects={projects}
              />
            </div>

            {/* Project List */}
            <div className="w-full lg:w-[280px] flex-shrink-0">
              <ProjectList
                projects={projects}
                activeProject={activeProject}
                onProjectHover={handleProjectHover}
                onProjectClick={handleProjectClick}
              />
            </div>
          </div>
        </div>

        {/* Mobile Active Project Indicator */}
        {activeProject && (
          <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border p-4 z-30 lg:hidden">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className="text-foreground font-medium text-sm">
                  {locale === "ar"
                    ? activeProject.titleAr
                    : activeProject.title}
                </p>
                <p className="text-muted-foreground text-xs">
                  {locale === "ar"
                    ? activeProject.categoryAr
                    : activeProject.category}{" "}
                  • {activeProject.year}
                </p>
              </div>
              <button
                onClick={() => handleProjectClick(activeProject)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                {locale === "ar" ? "عرض" : "View"}
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}