"use client"

import { useEffect, useCallback } from "react"
import Image, { StaticImageData } from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageLightboxProps {
  images: (string | StaticImageData)[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  alt?: string
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  alt = "Image",
}: ImageLightboxProps) {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    },
    [isOpen, onClose, onNext, onPrevious]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    
    // Prevent body scroll when lightbox is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown, isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrevious()
          }}
          className={cn(
            "absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10",
            "p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all",
            "hover:scale-110 active:scale-95"
          )}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className={cn(
            "absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10",
            "p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all",
            "hover:scale-110 active:scale-95"
          )}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </button>
      )}

      {/* Main image */}
      <div
        className="relative w-[90vw] h-[80vh] sm:w-[85vw] sm:h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-[90vw]">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                // Set current index directly
                const diff = index - currentIndex
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext()
                } else {
                  for (let i = 0; i < Math.abs(diff); i++) onPrevious()
                }
              }}
              className={cn(
                "relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all",
                index === currentIndex
                  ? "ring-2 ring-emerald-500 opacity-100"
                  : "opacity-50 hover:opacity-80"
              )}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}