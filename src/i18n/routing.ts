import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "ar", "de", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
})

export const locales = routing.locales
export type Locale = (typeof routing.locales)[number]
export const defaultLocale = routing.defaultLocale as Locale

export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value)
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  fr: "Français",
}