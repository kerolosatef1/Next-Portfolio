export interface Project {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  level: number // 1-100
  category: "frontend" | "backend" | "tools" | "other"
}

export interface Experience {
  id: string
  company: string
  companyAr: string
  position: string
  positionAr: string
  startDate: string
  endDate: string | null 
  description: string[]
  descriptionAr: string[]
  technologies: string[]
}

export interface NavLink {
  key: string
  href: string
}