"use client"

import { Link } from "@/shared/lib/i18n/navigation"
import { Code2 } from "lucide-react"

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-emerald-500 transition-colors"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500 text-white">
        <Code2 className="h-5 w-5" />
      </div>
      <span className="hidden sm:inline-block">
        Ahmed<span className="text-emerald-500">.</span>
      </span>
    </Link>
  )
}