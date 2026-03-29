import { StaticImageData } from "next/image"
import RouteAcademy from "@/shared/components/shared/Images/Route.png"
import ITI from "@/shared/components/shared/Images/ITI.jpg"
import IBM from "@/shared/components/shared/Images/IBM_page-0001.jpg"
import Innovia from "@/shared/components/shared/Images/INNOVEGYPT_page-0001.jpg"
import CISCO from "@/shared/components/shared/Images/cisco.webp"
import Innov from "@/shared/components/shared/Images/Udemy_page-0001.jpg"
import Innovi from "@/shared/components/shared/Images/_page-0001.webp"

export interface Certificate {
  id: string
  title: string
  titleAr: string
  titleDe?: string
  titleFr?: string
  issuer: string
  issuerAr: string
  issuerDe?: string
  issuerFr?: string
  date: string
  credentialId?: string
  credentialUrl?: string
  image: string | StaticImageData
  skills: string[]
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Front-End Diploma in Route Academy",
    titleAr: "دبلومة واجهات امامية في اكاديمية روت",
    titleDe: "Front-End-Diplom in der Route Academy",
    titleFr: "Diplôme en développement front-end à la Route Academy",
    issuer: "Route Academy",
    issuerAr: "روت اكاديمي",
    issuerDe: "Route Academy",
    issuerFr: "Route Academy",
    date: "2022",
    image: RouteAcademy,
    skills: ["Next.js", "React", "JavaScript ES6", "TypeScript", "TanStack Query", "Redux", "Scss", "Tailwind CSS", "Bootstrap", "HTML5", "CSS"],
  },
  {
    id: "2",
    title: "Backend .NET in ITI Academy",
    titleAr: "تصميم الواجهات الخلفية في مركز التكنولوجيا والمعلومات",
    titleDe: "Backend .NET in der ITI Academy",
    titleFr: "Backend .NET à l'Académie ITI",
    issuer: "ITI",
    issuerAr: "مركز التكنولوجيا والمعلومات",
    issuerDe: "ITI",
    issuerFr: "ITI",
    date: "2024",
    image: ITI,
    skills: ["SQL", "ASP.NET", "OOP", "MVC", "C#"],
  },
  {
    id: "3",
    title: "Web Development in EFE with IBM",
    titleAr: "تطوير صفحات الويب في منصة EFE",
    titleDe: "Webentwicklung in EFE mit IBM",
    titleFr: "Développement Web dans EFE avec IBM",
    issuer: "IBM",
    issuerAr: "IBM",
    issuerDe: "IBM",
    issuerFr: "IBM",
    date: "2023",
    credentialUrl: "https://www.credly.com/badges/cfb7d63e-73ca-4a59-abd3-ce6907babe1a",
    image: IBM,
    skills: ["Front-End Basics"],
  },
  {
    id: "4",
    title: "InnovEgypt Program",
    titleAr: "برنامج InnovEgypt",
    titleDe: "InnovEgypt Programm",
    titleFr: "Programme InnovEgypt",
    issuer: "TIEC",
    issuerAr: "مركز الإبداع التكنولوجي",
    issuerDe: "TIEC",
    issuerFr: "TIEC",
    date: "2024",
    image: Innovia,
    skills: ["Innovation", "Entrepreneurship", "Technology"],
  },
  {
    id: "5",
    title: "CISCO Networking Essentials",
    titleAr: "أساسيات الشبكات من سيسكو",
    titleDe: "CISCO Netzwerk-Grundlagen",
    titleFr: "Fondamentaux des réseaux CISCO",
    issuer: "CISCO",
    issuerAr: "سيسكو",
    issuerDe: "CISCO",
    issuerFr: "CISCO",
    date: "2024",
    image: CISCO,
    skills: ["Networking", "CISCO", "IT Fundamentals"],
  },
  {
    id: "6",
    title: "Web Development Bootcamp",
    titleAr: "معسكر تطوير الويب",
    titleDe: "Web-Entwicklung Bootcamp",
    titleFr: "Bootcamp de développement Web",
    issuer: "Udemy",
    issuerAr: "يوديمي",
    issuerDe: "Udemy",
    issuerFr: "Udemy",
    date: "2023",
    image: Innov,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "7",
    title: "Advanced Frontend Development",
    titleAr: "تطوير الواجهات الأمامية المتقدم",
    titleDe: "Fortgeschrittene Frontend-Entwicklung",
    titleFr: "Développement Frontend Avancé",
    issuer: "Online Course",
    issuerAr: "دورة أونلاين",
    issuerDe: "Online-Kurs",
    issuerFr: "Cours en ligne",
    date: "2023",
    image: Innovi,
    skills: ["React", "Next.js", "TypeScript", "Performance"],
  }
]

export const getLocalizedCertificate = (cert: Certificate, locale: string) => {
  const isArabic = locale === "ar"
  const isGerman = locale === "de"
  const isFrench = locale === "fr"

  return {
    ...cert,
    title: isArabic
      ? cert.titleAr
      : isGerman
      ? cert.titleDe || cert.title
      : isFrench
      ? cert.titleFr || cert.title
      : cert.title,
    issuer: isArabic
      ? cert.issuerAr
      : isGerman
      ? cert.issuerDe || cert.issuer
      : isFrench
      ? cert.issuerFr || cert.issuer
      : cert.issuer,
  }
}