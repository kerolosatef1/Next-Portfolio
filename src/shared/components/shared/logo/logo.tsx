"use client"

import { useLocale } from "next-intl"
import Link from "next/link"

export function Logo() {
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}`}
      className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-emerald-500 transition-colors"
    >
      <span className="text-emerald-500">&lt;</span>
      <span>Kerollos</span>
      <span className="text-emerald-500">/&gt;</span>
    </Link>
  )
}