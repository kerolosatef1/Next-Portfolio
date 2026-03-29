"use client"

import { useEffect, useRef } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { X, Mail } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/shared/config/navigation"
import { Logo } from "@/shared/components/shared/logo/logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/shared/config/site"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const isArabic = locale === "ar"

  // Track if menu was opened by user (not on mount)
  const wasOpenRef = useRef(false)
  const prevPathnameRef = useRef(pathname)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.width = "100%"
    } else if (wasOpenRef.current) {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
      window.scrollTo(0, parseInt(scrollY || "0") * -1)
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  // Close ONLY on actual route change, not on mount
  useEffect(() => {
    if (prevPathnameRef.current !== pathname && wasOpenRef.current) {
      onClose()
    }
    prevPathnameRef.current = pathname
  }, [pathname, onClose])

  // Navigation labels
  const navLabels: Record<string, Record<string, string>> = {
    home: { en: "Home", ar: "الرئيسية", de: "Startseite", fr: "Accueil" },
    about: { en: "About", ar: "عني", de: "Über", fr: "À propos" },
    skills: { en: "Skills", ar: "المهارات", de: "Fähigkeiten", fr: "Compétences" },
    projects: { en: "Projects", ar: "المشاريع", de: "Projekte", fr: "Projets" },
    experience: { en: "Experience", ar: "الخبرات", de: "Erfahrung", fr: "Expérience" },
    certificates: { en: "Certificates", ar: "الشهادات", de: "Zertifikate", fr: "Certificats" },
    contact: { en: "Contact", ar: "تواصل", de: "Kontakt", fr: "Contact" },
  }

  const getLabel = (key: string) =>
    navLabels[key]?.[locale] || navLabels[key]?.en || key

  const getHref = (key: string): string => {
    if (key === "home") return `/${locale}`
    return `/${locale}/${key}`
  }

  const isActive = (key: string): boolean => {
    if (key === "home") {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(`/${locale}/${key}`)
  }

  const contactLabels = {
    getInTouch: {
      en: "Get in touch",
      ar: "تواصل معي",
      de: "Kontakt",
      fr: "Contactez-moi",
    },
  }

  const whatsappMessage = encodeURIComponent(
    "Hey Kerolos! 👋 I visited your portfolio and would love to connect!"
  )

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 z-50 h-[100dvh] w-[min(300px,85vw)] bg-background border-border shadow-2xl transition-transform duration-300 ease-out md:hidden",
          isArabic ? "left-0 border-r" : "right-0 border-l",
          isOpen
            ? "translate-x-0"
            : isArabic
              ? "-translate-x-full"
              : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-destructive/10 hover:text-destructive h-9 w-9"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto overscroll-contain p-4 -webkit-overflow-scrolling-touch">
            <ul className="space-y-1">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.key}
                  className="animate-in slide-in-from-right duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={getHref(link.key)}
                    onClick={onClose}
                    className={cn(
                      "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                      isActive(link.key)
                        ? "text-emerald-500 bg-emerald-500/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {getLabel(link.key)}
                    {isActive(link.key) && (
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full bg-emerald-500",
                          isArabic ? "mr-auto" : "ml-auto"
                        )}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="p-4 border-t border-border space-y-3 shrink-0">
            <p className="text-xs text-muted-foreground px-2">
              {contactLabels.getInTouch[
                locale as keyof typeof contactLabels.getInTouch
              ] || contactLabels.getInTouch.en}
            </p>

            <a
              href={`mailto:${siteConfig.creator.email}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50 hover:border-emerald-500/50 transition-all"
              onClick={onClose}
            >
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-sm text-foreground truncate">
                {siteConfig.creator.email}
              </span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.creator.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50 hover:border-emerald-500/50 transition-all"
              onClick={onClose}
            >
              <SiWhatsapp className="w-5 h-5 text-[#25d366] shrink-0" />
              <span className="text-sm text-foreground">
                {siteConfig.creator.phone}
              </span>
            </a>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border shrink-0">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} {siteConfig.creator.name}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}