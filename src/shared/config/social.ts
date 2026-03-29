import { Github, Linkedin, Mail } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"

const whatsappMessage = encodeURIComponent(
`Hey Kerolos! 

I just visited your portfolio and I'm really impressed by your work! 

I'd love to discuss a potential project with you.

Looking forward to hearing from you! `
)

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kerolosatef1",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/faragello",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:atefkerolos25@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/201212092100?text=${whatsappMessage}`,
    icon: SiWhatsapp,
  },
] as const

export type SocialLink = (typeof socialLinks)[number]