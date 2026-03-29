"use client"

import { useState, useEffect, useCallback } from "react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Logo } from "@/shared/components/shared/logo/logo"
import { ThemeToggle } from "@/shared/components/shared/ThemeToggle/ThemeToggle"
import { LanguageSwitcher } from "@/shared/components/shared/LanguageSwitcher/LanguageSwitcher"
import { MobileMenu } from "../MobileMenu/MobileMenu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/shared/config/navigation"

export function Header() {
  const locale = useLocale()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const handleOpenMenu = useCallback(() => {
    setIsMobileMenuOpen(true)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation - use lg breakpoint since we have 7 links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((item) => (
                <Link
                  key={item.key}
                  href={getHref(item.key)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    "hover:bg-accent/50",
                    isActive(item.key)
                      ? "text-emerald-500 bg-emerald-500/10"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {getLabel(item.key)}
                </Link>
              ))}
            </nav>

            {/* Actions - fixed spacing for mobile */}
            <div className="flex items-center gap-1 shrink-0">
              <LanguageSwitcher />
              <ThemeToggle />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-9 w-9 shrink-0"
                onClick={handleOpenMenu}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
    </>
  )
}