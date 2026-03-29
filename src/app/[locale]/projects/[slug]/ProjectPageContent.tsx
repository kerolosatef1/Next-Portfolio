"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, ZoomIn } from "lucide-react"
import { Project, getLocalizedProject } from "@/data/projects"
import { Container } from "@/shared/components/shared/Container/Container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageLightbox } from "@/shared/components/ImageLightbox/ImageLightbox"

interface ProjectPageContentProps {
  project: Project
  locale: string
}

export function ProjectPageContent({ project, locale }: ProjectPageContentProps) {
  const localizedProject = getLocalizedProject(project, locale)

  const pageRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Translations object
  const labels: Record<string, Record<string, string>> = {
    en: {
      backToProjects: "Back to Projects",
      technologies: "Technologies",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      aboutProject: "About the Project",
      techUsed: "Technologies Used",
      viewAllProjects: "View All Projects",
    },
    ar: {
      backToProjects: "العودة للمشاريع",
      technologies: "تقنيات",
      liveDemo: "معاينة مباشرة",
      sourceCode: "الكود المصدري",
      aboutProject: "عن المشروع",
      techUsed: "التقنيات المستخدمة",
      viewAllProjects: "عرض كل المشاريع",
    },
    de: {
      backToProjects: "Zurück zu Projekten",
      technologies: "Technologien",
      liveDemo: "Live-Demo",
      sourceCode: "Quellcode",
      aboutProject: "Über das Projekt",
      techUsed: "Verwendete Technologien",
      viewAllProjects: "Alle Projekte ansehen",
    },
    fr: {
      backToProjects: "Retour aux projets",
      technologies: "Technologies",
      liveDemo: "Démo en direct",
      sourceCode: "Code source",
      aboutProject: "À propos du projet",
      techUsed: "Technologies utilisées",
      viewAllProjects: "Voir tous les projets",
    },
  }

  const t = labels[locale] || labels.en

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  const previousImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)

  // Set isClient to true after mount
  useEffect(() => {
    setIsClient(true)
  }, [])

  // GSAP Animation
  useEffect(() => {
    if (!isClient) return

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } })

        // Set initial states
        gsap.set([headerRef.current, titleRef.current, descriptionRef.current, buttonsRef.current], {
          opacity: 0,
          y: 30,
        })

        if (galleryRef.current?.children) {
          gsap.set(galleryRef.current.children, { opacity: 0, y: 50, scale: 0.95 })
        }

        gsap.set(contentRef.current, { opacity: 0, y: 40 })

        // Animation timeline
        tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.6 })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
          .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
          .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")

        if (galleryRef.current?.children) {
          tl.to(galleryRef.current.children, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 }, "-=0.3")
        }

        tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
      }, pageRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [isClient])

  // Technology colors
  const techColors = [
    "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
    "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
    "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30",
    "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30",
    "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/30",
    "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30",
  ]

  return (
    <div ref={pageRef} className="min-h-screen bg-background overflow-hidden pt-20">
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-emerald-500/5 pointer-events-none" />

      <main className="relative py-12 md:py-20">
        <Container>
          {/* Back button */}
          <div ref={headerRef}>
            <Link
              href={`/${locale}/#projects`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-all duration-300 mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{t.backToProjects}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="outline" className="text-emerald-500 border-emerald-500/50 bg-emerald-500/10">
                {localizedProject.category}
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Layers className="h-4 w-4" />
                <span>{project.technologies.length} {t.technologies}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            {localizedProject.title}
            <span className="text-emerald-500">.</span>
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed"
          >
            {localizedProject.description}
          </p>

          {/* Action buttons */}
          <div ref={buttonsRef} className="flex flex-wrap gap-4 mb-16">
            {project.liveUrl && (
              <Button
                size="lg"
                className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t.liveDemo}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all hover:-translate-y-0.5"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  {t.sourceCode}
                </a>
              </Button>
            )}
          </div>

          {/* Images gallery */}
          <div ref={galleryRef} className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-16">
            {project.images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-video bg-muted rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in"
              >
                <Image
                  src={image}
                  alt={`${localizedProject.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  placeholder={typeof image !== "string" ? "blur" : "empty"}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/70">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          {/* About section */}
          <div ref={contentRef} className="max-w-4xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-emerald-500 rounded-full" />
              {t.aboutProject}
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
              {localizedProject.longDescription}
            </div>
          </div>

          {/* Technologies with varied colors */}
          {isClient && project.technologies && project.technologies.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 rounded-full" />
                {t.techUsed}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies
                  .filter((tech) => tech && tech.trim() !== "")
                  .map((tech, index) => {
                    const colorClass = techColors[index % techColors.length]
                    return (
                      <Badge
                        key={`${tech}-${index}`}
                        className={`tech-badge px-4 py-2 text-sm border font-medium transition-all duration-300 cursor-default ${colorClass}`}
                      >
                        {tech}
                      </Badge>
                    )
                  })}
              </div>
            </div>
          )}
          <div className="mt-20 pt-10 border-t border-border/50">
            <Link
              href={`/${locale}/#projects`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-all duration-300 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{t.viewAllProjects}</span>
            </Link>
          </div>
        </Container>
      </main>

      {/* Image Lightbox */}
      <ImageLightbox
        images={project.images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        alt={localizedProject.title}
      />
    </div>
  )
}