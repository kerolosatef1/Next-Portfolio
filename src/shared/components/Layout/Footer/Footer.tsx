"use client"

import { useTranslations } from "next-intl"
import { Heart } from "lucide-react"
import { Logo } from "@/shared/components/shared/logo/logo"
import { SocialLinks } from "@/shared/components/shared/SocialLinks/SocialLinks"

export function Footer() {
  const t = useTranslations("footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Logo />

          {/* Social Links */}
          <SocialLinks />

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>
              © {currentYear} Kerolos Atef. {t("copyright")}
            </p>
            <p className="flex items-center gap-1">
              {t("madeWith")}{" "}
              <Heart className="h-4 w-4 text-emerald-500 fill-emerald-500" />{" "}
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}