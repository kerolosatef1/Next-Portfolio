"use client"
import { socialLinks } from "@/shared/config/social"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="ghost"
          size="icon"
          asChild
          className="hover:text-emerald-500 hover:bg-emerald-500/10"
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}