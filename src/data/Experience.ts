export interface Experience {
  id: string
  company: string
  companyAr: string
  companyDe: string
  companyFr: string
  logo?: string
  position: string
  positionAr: string
  positionDe: string
  positionFr: string
  location: string
  locationAr: string
  type: "full-time" | "part-time" | "contract" | "internship" | "freelance"
  startDate: string
  endDate: string | "Present"
  description: string[]
  descriptionAr: string[]
  descriptionDe: string[]
  descriptionFr: string[]
  technologies: string[]
  website?: string
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Beetleware Company in Sudi-Arabia",
    companyAr: "Beetleware Company in Sudi-Arabia",
    companyDe: "Beetleware Company in Saudi-Arabien",
    companyFr: "Entreprise Beetleware en Arabie Saoudite",
    position: "Frontend Developer",
    positionAr: "مطور واجهات أمامية",
    positionDe: "Frontend-Entwickler",
    positionFr: "Développeur Frontend",
    location: "Egypt - Remote",
    locationAr: "مصر - عن بعد",
    type: "internship",
    startDate: "2025",
    endDate: "23/3/2026",
    description: [
      "Developed and maintained multiple web applications using React and Next.js",
      "Collaborated with UI/UX designers to implement responsive and accessible interfaces",
      "Optimized application performance and improved load times by 40%",
      "Participated in code reviews and mentored junior developers",
      "Integrated RESTful APIs and managed state using TanStack Query",
    ],
    descriptionAr: [
      "تطوير وصيانة تطبيقات ويب متعددة باستخدام React و Next.js",
      "التعاون مع مصممي UI/UX لتنفيذ واجهات متجاوبة وسهلة الوصول",
      "تحسين أداء التطبيقات وتقليل وقت التحميل بنسبة 40%",
      "المشاركة في مراجعات الكود وتوجيه المطورين المبتدئين",
      "دمج RESTful APIs وإدارة الحالة باستخدام TanStack Query",
    ],
    descriptionDe: [
      "Entwicklung und Wartung mehrerer Webanwendungen mit React und Next.js",
      "Zusammenarbeit mit UI/UX-Designern zur Implementierung responsiver Schnittstellen",
      "Optimierung der Anwendungsleistung und Verbesserung der Ladezeiten um 40%",
    ],
    descriptionFr: [
      "Développement et maintenance de plusieurs applications web avec React et Next.js",
      "Collaboration avec les designers UI/UX pour implémenter des interfaces responsives",
      "Optimisation des performances et amélioration des temps de chargement de 40%",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "REST API","Redux","Server Actions","Custom Hook Form & Zod"],
    website: "https://beetleware.com",
  },
  {
    id: "2",
    company: "Freelance",
    companyAr: "عمل حر",
    companyDe: "Freiberuflich",
    companyFr: "Freelance",
    position: "Frontend Developer",
    positionAr: "مطور واجهات أمامية",
    positionDe: "Frontend-Entwickler",
    positionFr: "Développeur Frontend",
    location: "Remote",
    locationAr: "عن بعد",
    type: "freelance",
    startDate: "2025",
    endDate: "present",
    description: [
      "Built custom websites and web applications for various clients",
      "Worked directly with clients to understand requirements and deliver solutions",
      "Managed multiple projects simultaneously while meeting deadlines",
      "Created responsive designs that work across all devices",
      "I'm working with a team from backend node.jd , .net and UI Devoloper "
    ],
    descriptionAr: [
      "بناء مواقع وتطبيقات ويب مخصصة لعملاء مختلفين",
      "العمل مباشرة مع العملاء لفهم المتطلبات وتقديم الحلول",
      "إدارة مشاريع متعددة في وقت واحد مع الالتزام بالمواعيد",
      "إنشاء تصميمات متجاوبة تعمل على جميع الأجهزة",
      "backecd , ui لديا تيم كامل من "
    ],
    descriptionDe: [
      "Erstellung von benutzerdefinierten Websites für verschiedene Kunden",
      "Direkte Zusammenarbeit mit Kunden zur Anforderungsanalyse",
    ],
    descriptionFr: [
      "Création de sites web personnalisés pour divers clients",
      "Travail direct avec les clients pour comprendre les besoins",
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap", "jQuery"],
  },
]

export const getLocalizedExperience = (exp: Experience, locale: string) => {
  const isArabic = locale === "ar"
  const isGerman = locale === "de"
  const isFrench = locale === "fr"

  return {
    ...exp,
    company: isArabic
      ? exp.companyAr
      : isGerman
      ? exp.companyDe
      : isFrench
      ? exp.companyFr
      : exp.company,
    position: isArabic
      ? exp.positionAr
      : isGerman
      ? exp.positionDe
      : isFrench
      ? exp.positionFr
      : exp.position,
    location: isArabic ? exp.locationAr : exp.location,
    description: isArabic
      ? exp.descriptionAr
      : isGerman
      ? exp.descriptionDe
      : isFrench
      ? exp.descriptionFr
      : exp.description,
  }
}