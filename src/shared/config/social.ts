import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ahmed",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahmed",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ahmed",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:ahmed@example.com",
    icon: Mail,
  },
] as const

export type SocialLink = (typeof socialLinks)[number]