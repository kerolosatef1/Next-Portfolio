"use client"

import { useEffect, useRef } from "react"
import { useLocale } from "next-intl"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectListProps {
  projects: Project[]
  activeProject: Project | null
  onProjectHover: (project: Project | null) => void
  onProjectClick: (project: Project) => void
}

export function ProjectList({
  projects,
  activeProject,
  onProjectHover,
  onProjectClick,
}: ProjectListProps) {
  const locale = useLocale()
  const isArabic = locale === "ar"
  const listRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const scrollPosRef = useRef<number>(0)
  const isPausedRef = useRef<boolean>(false)

  useEffect(() => {
    if (!listRef.current) return

    const scroll = () => {
      if (!isPausedRef.current && listRef.current) {
        scrollPosRef.current += 0.5

        const listHeight = listRef.current.scrollHeight / 3
        if (scrollPosRef.current >= listHeight) {
          scrollPosRef.current = 0
        }

        listRef.current.style.transform = `translateY(-${scrollPosRef.current}px)`
      }
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    isPausedRef.current = true
  }

  const handleMouseLeave = () => {
    isPausedRef.current = false
    onProjectHover(null)
  }

  const handleTouchStart = () => {
    isPausedRef.current = true
  }

  const tripleProjects = [...projects, ...projects, ...projects]

  return (
    <div
      className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling list */}
      <div ref={listRef} className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32">
        {tripleProjects.map((project, index) => (
          <button
            key={`${project.id}-${index}`}
            className={cn(
              "block w-full text-right py-1.5 sm:py-2 px-2 sm:px-4 transition-all duration-300",
              "hover:text-emerald-500 active:text-emerald-400",
              activeProject?.id === project.id
                ? "text-emerald-500 font-medium"
                : "text-muted-foreground"
            )}
            onMouseEnter={() => onProjectHover(project)}
            onTouchStart={() => onProjectHover(project)}
            onClick={() => onProjectClick(project)}
          >
            <span className="text-sm sm:text-base md:text-lg tracking-wide line-clamp-1">
              {isArabic ? project.titleAr : project.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}