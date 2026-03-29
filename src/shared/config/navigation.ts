export const navigationLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "experience", href: "/experience" },
  { key: "certificates", href: "/certificates" },
  { key: "contact", href: "/contact" },
] as const

export type NavigationKey = (typeof navigationLinks)[number]["key"]