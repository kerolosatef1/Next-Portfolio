"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { routing, localeNames, type Locale } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Check } from "lucide-react"

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: Locale) => {
    // Get the path without the current locale
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 text-sm font-medium cursor-pointer hover:bg-accent h-9 px-3"
        >
          <span className="hidden sm:inline">{localeNames[locale]}</span>
          <span className="sm:hidden">{locale.toUpperCase()}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc as Locale)}
            className="cursor-pointer flex items-center justify-between"
          >
            <span>{localeNames[loc as Locale]}</span>
            {locale === loc && <Check className="h-4 w-4 text-emerald-500" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}