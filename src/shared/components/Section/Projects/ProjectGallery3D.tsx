"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import Image, { StaticImageData } from "next/image"
import { Project } from "@/data/projects"

interface ProjectGallery3DProps {
  activeProject: Project | null
  allProjects: Project[]
}

export function ProjectGallery3D({ activeProject, allProjects }: ProjectGallery3DProps) {
  const cubeRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)
  const [cubeSize, setCubeSize] = useState({ face: 400, translate: 200 })

  // Responsive cube size
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      if (width < 480) {
        setCubeSize({ face: 220, translate: 110 })
      } else if (width < 640) {
        setCubeSize({ face: 260, translate: 130 })
      } else if (width < 768) {
        setCubeSize({ face: 300, translate: 150 })
      } else if (width < 1024) {
        setCubeSize({ face: 340, translate: 170 })
      } else {
        setCubeSize({ face: 400, translate: 200 })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Animation
  useEffect(() => {
    if (!cubeRef.current) return

    let animationId: number

    const animate = () => {
      timeRef.current += 0.008

      const rotateY = timeRef.current * 50
      const rotateX = Math.sin(timeRef.current * 0.8) * 35 - 5
      const rotateZ = Math.sin(timeRef.current * 0.5) * 8

      if (cubeRef.current) {
        cubeRef.current.style.transform = `
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          rotateZ(${rotateZ}deg)
        `
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  // Create shuffled images array with project info - memoized to keep consistent
  const shuffledImages = useMemo(() => {
    const allImages: { image: string | StaticImageData; projectId: string }[] = []
    
    // Collect all images with their project IDs
    allProjects.forEach((project) => {
      project.images.forEach((img) => {
        allImages.push({
          image: img,
          projectId: project.id,
        })
      })
    })

    // Shuffle the array using Fisher-Yates algorithm with a seed for consistency
    const shuffled = [...allImages]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor((Math.sin(i * 9999) + 1) / 2 * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // Ensure we have exactly 54 images (6 faces * 9 images)
    const result: { image: string | StaticImageData; projectId: string }[] = []
    for (let i = 0; i < 54; i++) {
      result.push(shuffled[i % shuffled.length])
    }

    return result
  }, [allProjects])

  // Render a single face with 3x3 grid
  const renderFace = (faceIndex: number, transform: string) => {
    const startIndex = faceIndex * 9
    const faceImages = shuffledImages.slice(startIndex, startIndex + 9)

    return (
      <div
        key={faceIndex}
        style={{
          position: "absolute",
          width: `${cubeSize.face}px`,
          height: `${cubeSize.face}px`,
          transform,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    width: "100%",
    height: "100%",
    gap: "4px",
    padding: "4px",
    backgroundColor: "hsl(var(--card))", 
    borderRadius: "8px",
    border: "1px solid hsl(var(--border))",  
  }}
>
          {faceImages.map((item, imgIndex) => {
            const isActiveProjectImage = activeProject && item.projectId === activeProject.id
            const hasActiveProject = activeProject !== null

            return (
              <div
                key={imgIndex}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px",
                  transition: "all 0.5s ease",
                  opacity: hasActiveProject ? (isActiveProjectImage ? 1 : 0.15) : 1,
                  transform: hasActiveProject && isActiveProjectImage ? "scale(1.02)" : "scale(1)",
                  filter: hasActiveProject && !isActiveProjectImage ? "grayscale(50%)" : "none",
                  boxShadow: isActiveProjectImage ? "0 0 20px rgba(16, 185, 129, 0.3)" : "none",
                }}
              >
                <Image
                  src={item.image}
                  alt={`Project ${startIndex + imgIndex + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 60px, (max-width: 1024px) 100px, 130px"
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // 6 faces transforms
  const faces = [
    { transform: `translateZ(${cubeSize.translate}px)` },
    { transform: `rotateY(180deg) translateZ(${cubeSize.translate}px)` },
    { transform: `rotateY(-90deg) translateZ(${cubeSize.translate}px)` },
    { transform: `rotateY(90deg) translateZ(${cubeSize.translate}px)` },
    { transform: `rotateX(90deg) translateZ(${cubeSize.translate}px)` },
    { transform: `rotateX(-90deg) translateZ(${cubeSize.translate}px)` },
  ]

  // Floating images positions
  // في ProjectGallery3D.tsx - غير الجزء ده:

// Move floatingPositions OUTSIDE the component (it's static data)
const FLOATING_POSITIONS = [
  { left: "5%", top: "10%", rotate: -15, size: 80, delay: 0 },
  { left: "85%", top: "15%", rotate: 12, size: 100, delay: 0.5 },
  { left: "10%", top: "70%", rotate: -8, size: 90, delay: 1 },
  { left: "80%", top: "65%", rotate: 20, size: 70, delay: 1.5 },
  { left: "2%", top: "40%", rotate: -25, size: 60, delay: 2 },
  { left: "90%", top: "40%", rotate: 15, size: 85, delay: 2.5 },
  { left: "15%", top: "85%", rotate: 5, size: 75, delay: 3 },
  { left: "75%", top: "80%", rotate: -10, size: 65, delay: 3.5 },
  { left: "25%", top: "5%", rotate: 8, size: 55, delay: 4 },
  { left: "65%", top: "8%", rotate: -5, size: 70, delay: 4.5 },
  { left: "0%", top: "25%", rotate: 18, size: 50, delay: 5 },
  { left: "95%", top: "55%", rotate: -12, size: 60, delay: 5.5 },
] as const

// Then inside the component, fix the useMemo:
const floatingImages = useMemo(() => {
  return FLOATING_POSITIONS.map((pos, index) => ({
    ...pos,
    ...shuffledImages[index % shuffledImages.length],
  }))
}, [shuffledImages])

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
      className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
    >
      {/* Floating Background Images */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {floatingImages.map((item, index) => {
          const isActiveProjectImage = activeProject && item.projectId === activeProject.id
          const hasActiveProject = activeProject !== null

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: item.left,
                top: item.top,
                width: `${item.size}px`,
                height: `${item.size}px`,
                transform: `rotate(${item.rotate}deg)`,
                animation: `float ${8 + index}s ease-in-out infinite`,
                animationDelay: `${item.delay}s`,
                opacity: hasActiveProject ? (isActiveProjectImage ? 0.6 : 0.1) : 0.3,
                filter: hasActiveProject && !isActiveProjectImage ? "grayscale(50%) blur(1px)" : "none",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: isActiveProjectImage
                  ? "0 25px 50px -12px rgba(16, 185, 129, 0.4)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: "all 0.5s ease",
              }}
            >
              <Image
                src={item.image}
                alt={`Background ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="100px"
              />
            </div>
          )
        })}
      </div>

      {/* V Lines Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <svg
          style={{
            position: "absolute",
            left: "-80px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "800px",
            opacity: 0.3,
          }}
          viewBox="0 0 200 300"
          fill="none"
        >
          <path
            d="M0 0 L50 0 L100 240 L150 0 L200 0 L115 300 L85 300 Z"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
          />
        </svg>

        <svg
          style={{
            position: "absolute",
            left: "96px",
            top: "55%",
            transform: "translateY(-50%)",
            width: "400px",
            height: "600px",
            opacity: 0.2,
          }}
          viewBox="0 0 200 300"
          fill="none"
        >
          <path
            d="M0 0 L50 0 L100 240 L150 0 L200 0 L115 300 L85 300 Z"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* 3D Cube */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          perspective: cubeSize.face * 3.5,
          perspectiveOrigin: "center center",
        }}
      >
        <div
          ref={cubeRef}
          style={{
            position: "relative",
            width: `${cubeSize.face}px`,
            height: `${cubeSize.face}px`,
            transformStyle: "preserve-3d",
            transform: "rotateX(-15deg) rotateY(-30deg)",
          }}
        >
          {faces.map((face, index) => renderFace(index, face.transform))}
        </div>
      </div>

      {/* Project Info */}
      {activeProject && (
  <div
    style={{
      position: "absolute",
      bottom: "64px",
      left: "64px",
      zIndex: 20,
    }}
    className="bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16"
  >
    <p className="text-muted-foreground text-sm">
      N{activeProject.id.padStart(3, "0")} / Coll. {activeProject.year}
    </p>
    <p className="text-muted-foreground/50 text-xs mt-1">
      DI-{activeProject.year}
      {(new Date().getMonth() + 1).toString().padStart(2, "0")}
      {new Date().getDate().toString().padStart(2, "0")}-R
      {activeProject.id.padStart(2, "0")}
    </p>
  </div>
)}
    </div>
  )
}