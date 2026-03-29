import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Palette,
  Globe
} from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiMui,
  SiShadcnui,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiDocker,
  SiGitlab,
  SiVercel,
  SiDotnet,
} from "react-icons/si"
import { TbApi, TbWorld } from "react-icons/tb"
import type { IconType } from "react-icons"
import type { LucideIcon } from "lucide-react"
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
export interface Skill {
  name: string
  level: number
  icon: IconType | LucideIcon
  color: string
}

export interface SkillCategory {
  id: string
  title: string
  titleAr: string
  titleDe: string
  titleFr: string
  icon: LucideIcon
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    titleAr: "تطوير الواجهات الأمامية",
    titleDe: "Frontend-Entwicklung",
    titleFr: "Développement Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: 95, icon: SiReact, color: "#61dafb" },
      { name: "Next.js", level: 90, icon: SiNextdotjs, color: "" },
      { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", level: 95, icon: SiJavascript, color: "#f7df1e" },
      { name: "HTML5", level: 95, icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", level: 90, icon: SiCss, color: "#1572b6" },
    ],
  },
  {
    id: "styling",
    title: "Styling & UI",
    titleAr: "التصميم والواجهات",
    titleDe: "Styling & UI",
    titleFr: "Style & UI",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "#06b6d4" },
      { name: "SASS/SCSS", level: 85, icon: SiSass, color: "#cc6699" },
      { name: "Material UI", level: 80, icon: SiMui, color: "#007fff" },
      { name: "Shadcn/UI", level: 90, icon: SiShadcnui, color: "" },
      { name: "Framer Motion", level: 75, icon: SiFramer, color: "#ff0055" },
      { name: "GSAP", level: 70, icon: SiGreensock, color: "#88ce02" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    titleAr: "تطوير الخلفية",
    titleDe: "Backend-Entwicklung",
    titleFr: "Développement Backend",
    icon: Server,
    skills: [
      { name: "C#", level: 75, icon:  TbBrandCSharp, color: "#512bd4" },
      { name: ".NET", level: 75, icon: SiDotnet, color: "#512bd4" },
      { name: "Node.js", level: 60, icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", level: 65, icon: SiExpress, color: "" },
      { name: "REST API", level: 70, icon: TbApi, color: "#10b981" },
      { name: "Prisma", level: 70, icon: SiPrisma, color: "#2d3748" },
      { name: "JWT Auth", level: 80, icon: SiJsonwebtokens, color: "#fb015b" },
    ],
  },
  {
    id: "database",
    title: "Databases",
    titleAr: "قواعد البيانات",
    titleDe: "Datenbanken",
    titleFr: "Bases de données",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", level: 65, icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    titleAr: "الأدوات والمزيد",
    titleDe: "Tools & Andere",
    titleFr: "Outils & Autres",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90, icon: SiGit, color: "#f05032" },
      { name: "GitHub", level: 95, icon: SiGithub, color: "" },
      { name: "GitLab", level: 85, icon: SiGitlab, color: "" },
      { name: "VS Code", level: 95, icon: DiVisualstudio, color: "#007acc" },
      { name: "Postman", level: 85, icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", level: 75, icon: SiFigma, color: "#f24e1e" },
      { name: "Vercel", level: 85, icon: SiVercel, color: "" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    titleAr: "اللغات",
    titleDe: "Sprachen",
    titleFr: "Langues",
    icon: Globe,
    skills: [
      { name: "Arabic (Native)", level: 100, icon: TbWorld, color: "#10b981" },
      { name: "English", level: 80, icon: TbWorld, color: "#3b82f6" },
    ],
  },
]

export const getLocalizedCategory = (category: SkillCategory, locale: string) => {
  const titles: Record<string, string> = {
    en: category.title,
    ar: category.titleAr,
    de: category.titleDe,
    fr: category.titleFr,
  }
  return titles[locale] || category.title
}