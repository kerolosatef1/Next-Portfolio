"use client"

import { useState, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/shared/components/shared/logo/logo"
import { ThemeToggle } from "@/shared/components/shared/ThemeToggle/ThemeToggle"
import { LanguageSwitcher } from "@/shared/components/shared/LanguageSwitcher/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/shared/config/navigation"

export function Header() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Safe translation with fallback
  const getNavLabel = (key: string): string => {
    try {
      const result = t(key)
      return typeof result === "string" ? result : key
    } catch {
      const fallbacks: Record<string, string> = {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        certificates: "Certificates",
        contact: "Contact",
      }
      return fallbacks[key] || key
    }
  }

  // Check if current page is active
  const isActive = (key: string): boolean => {
    if (key === "home") {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(`/${locale}/${key}`)
  }

  // Get href for navigation link
  const getHref = (key: string): string => {
    if (key === "home") {
      return `/${locale}`
    }
    return `/${locale}/${key}`
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationLinks.map((item) => (
              <Link
                key={item.key}
                href={getHref(item.key)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  "hover:bg-accent/50",
                  isActive(item.key)
                    ? "text-emerald-500 bg-emerald-500/10"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {getNavLabel(item.key)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 bg-background/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col gap-1">
              {navigationLinks.map((item) => (
                <Link
                  key={item.key}
                  href={getHref(item.key)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all",
                    "hover:bg-accent/50",
                    isActive(item.key)
                      ? "text-emerald-500 bg-emerald-500/10"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getNavLabel(item.key)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}