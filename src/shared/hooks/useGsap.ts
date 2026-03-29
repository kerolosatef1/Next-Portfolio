"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationConfig = {
  /** CSS selector (scoped to container), Element, or NodeList */
  target: string | Element | Element[] | NodeListOf<Element> | null
  /** Properties to animate TO (initial state is set by CSS via data attributes) */
  to: gsap.TweenVars
  /** Optional: override the initial state (otherwise CSS handles it) */
  from?: gsap.TweenVars
  /** ScrollTrigger config */
  scrollTrigger?: ScrollTrigger.Vars
}

/**
 * Runs GSAP animations safely inside React / Next.js.
 *
 * HOW IT WORKS:
 * 1. CSS hides elements via data-gsap-* attributes (opacity:0, transform)
 * 2. This hook uses gsap.to() to reveal them
 * 3. hasAnimated ref prevents double-firing on HMR / strict mode
 * 4. requestAnimationFrame waits for DOM paint
 */
export function useGsapAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  animations: AnimationConfig[],
  deps: React.DependencyList = []
) {
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current) return
    if (hasAnimated.current) return
    hasAnimated.current = true

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        animations.forEach((anim) => {
          let targets: gsap.TweenTarget | null = null

          if (typeof anim.target === "string") {
            const found = containerRef.current?.querySelectorAll(anim.target)
            if (!found || found.length === 0) return
            targets = found
          } else if (anim.target) {
            targets = anim.target as gsap.TweenTarget
          } else {
            return
          }

          const toVars: gsap.TweenVars = { ...anim.to }

          if (anim.scrollTrigger) {
            toVars.scrollTrigger = {
              ...anim.scrollTrigger,
              // Use container as trigger if selector given
              trigger:
                typeof anim.scrollTrigger.trigger === "string"
                  ? containerRef.current?.querySelector(
                      anim.scrollTrigger.trigger as string
                    ) || containerRef.current
                  : anim.scrollTrigger.trigger || containerRef.current,
            }
          }

          if (anim.from) {
            gsap.fromTo(targets, anim.from, toVars)
          } else {
            gsap.to(targets, toVars)
          }
        })
      }, containerRef)

      ;(containerRef as any)._gsapCtx = ctx
    })

    return () => {
      cancelAnimationFrame(rafId)
      hasAnimated.current = false
      const ctx = (containerRef as any)?._gsapCtx
      if (ctx) {
        ctx.revert()
        ;(containerRef as any)._gsapCtx = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/**
 * Timeline animation (like Hero entrance).
 * Uses gsap.to() — CSS sets the initial hidden state.
 */
export function useGsapTimeline(
  containerRef: React.RefObject<HTMLElement | null>,
  buildTimeline: (tl: gsap.core.Timeline, container: HTMLElement) => void,
  deps: React.DependencyList = []
) {
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current) return
    if (hasAnimated.current) return
    hasAnimated.current = true

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        buildTimeline(tl, containerRef.current!)
      }, containerRef)

      ;(containerRef as any)._gsapCtx = ctx
    })

    return () => {
      cancelAnimationFrame(rafId)
      hasAnimated.current = false
      const ctx = (containerRef as any)?._gsapCtx
      if (ctx) {
        ctx.revert()
        ;(containerRef as any)._gsapCtx = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}