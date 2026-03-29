import { StaticImageData } from "next/image"
import ecommerce1 from "@/shared/components/shared/Images/e-commerce1.jpeg"
import ecommerce2 from "@/shared/components/shared/Images/e-commerce2.jpeg"
import ecommerce3 from "@/shared/components/shared/Images/e-commerce3.jpeg"
import ecommerce4 from "@/shared/components/shared/Images/e-commerce4.jpeg"
import nextAdvisory1 from "@/shared/components/shared/Images/nextadvisory1.jpeg"
import nextAdvisory2 from "@/shared/components/shared/Images/nextadvisory2.jpeg"
import nextAdvisory3 from "@/shared/components/shared/Images/nextadvisory3.jpeg"
import nextAdvisory4 from "@/shared/components/shared/Images/nextadvisory4.jpeg"
import nextAdvisory5 from "@/shared/components/shared/Images/nextadvisory5.jpeg"
import nextAdvisory6 from "@/shared/components/shared/Images/nextadvisory6.jpeg"
import nextAdvisory7 from "@/shared/components/shared/Images/nextadvisory7.jpeg"
import nextAdvisory8 from "@/shared/components/shared/Images/nextadvisory8.jpeg"
import nextAdvisory9 from "@/shared/components/shared/Images/nextadvisory9.jpeg"
import nextAdvisory10 from "@/shared/components/shared/Images/nextadvisory10.jpeg"
import nextAdvisory11 from "@/shared/components/shared/Images/nextadvisory11.jpeg"
import nextAdvisory12 from "@/shared/components/shared/Images/nextadvisory12.jpeg"
import nextAdvisory13 from "@/shared/components/shared/Images/nextadvisory13.jpeg"
import nextAdvisory14 from "@/shared/components/shared/Images/nextadvisory14.jpeg"
import nextAdvisory15 from "@/shared/components/shared/Images/nextadvisory15.jpeg"
import nextAdvisory16 from "@/shared/components/shared/Images/nextadvisory16.jpeg"
import nextAdvisory17 from "@/shared/components/shared/Images/nextadvisory17.jpeg"
import nextAdvisory18 from "@/shared/components/shared/Images/Nextadvisory18.jpeg"
import nextAdvisory19 from "@/shared/components/shared/Images/nextadvisory19.jpeg"
import nextAdvisory20 from "@/shared/components/shared/Images/nextadvisory20.JPG.png"
import nextAdvisory21 from "@/shared/components/shared/Images/nextadvisory21.JPG.png"
import finance1 from "@/shared/components/shared/Images/finbiz1.jpeg"
import finance2 from "@/shared/components/shared/Images/finbiz2.jpeg"
import finance3 from "@/shared/components/shared/Images/finbiz3.jpeg"
import finance4 from "@/shared/components/shared/Images/finbiz4.jpeg"
import sayil1 from "@/shared/components/shared/Images/sail1.jpeg"
import sayil2 from "@/shared/components/shared/Images/sail2.jpeg"
import sayil3 from "@/shared/components/shared/Images/sail3.jpeg"
import sayil4 from "@/shared/components/shared/Images/sail4.jpeg"
import qa1 from "@/shared/components/shared/Images/Q&A.jpeg"
import qa2 from "@/shared/components/shared/Images/Q&A2.png"
import qa3 from "@/shared/components/shared/Images/Q&A3.jpeg"
import tanstack1 from "@/shared/components/shared/Images/tanstacktask1.png"
import tanstack2 from "@/shared/components/shared/Images/tanstacktask2.png"
import Menu1 from "@/shared/components/shared/Images/MENU1.png"
import Menu2 from "@/shared/components/shared/Images/MENU2.png"
import Menuac1 from "@/shared/components/shared/Images/MENUac1.png"
import Menuac2 from "@/shared/components/shared/Images/MENUac2.png"
import Menuac3 from "@/shared/components/shared/Images/MENUac3.png"
import Menuac4 from "@/shared/components/shared/Images/MENUac4.png"
import Menuac5 from "@/shared/components/shared/Images/MENUac5.png"
import Menuac6 from "@/shared/components/shared/Images/MENUac6.png"
import Menuac7 from "@/shared/components/shared/Images/MENUac7.png"
import wheather from "@/shared/components/shared/Images/wheather.jpeg"
import holly from "@/shared/components/shared/Images/holly.png"
import holly1 from "@/shared/components/shared/Images/holly1.jpg"
import holly2 from "@/shared/components/shared/Images/holly2.jpg"
import holly3 from "@/shared/components/shared/Images/holly3.jpg"
import holly4 from "@/shared/components/shared/Images/holly4.jpg"
import alarm1 from "@/shared/components/shared/Images/alarm1.jpeg"
import alarm2 from "@/shared/components/shared/Images/alarm2.jpeg"
import alarm4 from "@/shared/components/shared/Images/alarm4.jpeg"
import clacketnext1 from "@/shared/components/shared/Images/clacketnext.jpeg"
import clacketnext2 from "@/shared/components/shared/Images/clacketnext2.jpeg"
import clacketnext3 from "@/shared/components/shared/Images/clacketnext3.jpeg"
import clacketnext4 from "@/shared/components/shared/Images/clacketnext4.jpeg"
import bookmarker from "@/shared/components/shared/Images/book-marker.jpg"



export interface Project {
  id: string
  slug: string
  title: string
  titleAr: string
  titleDe?: string
  titleFr?: string
  category: string
  categoryAr: string
  categoryDe?: string
  categoryFr?: string
  year: string
  description: string
  descriptionAr: string
  descriptionDe?: string
  descriptionFr?: string
  longDescription: string
  longDescriptionAr: string
  longDescriptionDe?: string
  longDescriptionFr?: string
  images: (string | StaticImageData)[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

// Helper function to get localized content


export const projects: Project[] = [
  {
    id: "1",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    titleAr: "منصة تجارة إلكترونية",
    category: "Web Development",
    categoryAr: "تطوير ويب",
    year: "2024",
    description: "Full-featured e-commerce platform with modern UI",
    descriptionAr: "منصة تجارة إلكترونية متكاملة بواجهة حديثة",
    longDescription: "A comprehensive e-commerce solution built with Next.js and TypeScript. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard.",
    longDescriptionAr: "حل تجارة إلكترونية شامل مبني بـ Next.js و TypeScript. يتضمن مصادقة المستخدم، كتالوج المنتجات، سلة التسوق، تكامل الدفع مع Stripe، إدارة الطلبات، ولوحة تحكم المسؤول.",
    images: [
      ecommerce1,
      ecommerce2,
      ecommerce3,
      ecommerce4
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS","Use Formik","Yub","TanStack Query",""],
    liveUrl: "https://e-commerce-black-delta.vercel.app/login",
    githubUrl: "https://github.com/kerolosatef1/E-commerce",
    featured: true,
  },
  {
    id: "2",
    slug: "LandTech",
    title: "LandTech Admin Dashboard InternShip in BeetleWare Company",
    titleAr: " السعودية Beetleware لوحة تحكم سيل الإدارية تدريب في شركة ",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2026",
    description: "LandTech Admin Dashboard is a comprehensive real estate management platform built with Next.js 14, designed for administrators to manage land listings, users, roles and permissions, and platform settings. The dashboard features a bilingual interface supporting Arabic and English with full RTL support, real-time analytics with interactive charts, and a modern responsive design that works seamlessly across desktop and mobile devices.",
    descriptionAr: "لوحة تحكم سيل الإدارية هي منصة شاملة لإدارة العقارات مبنية باستخدام Next.js 14، مصممة للمسؤولين لإدارة عروض الأراضي والمستخدمين والأدوار والصلاحيات وإعدادات المنصة. تتميز اللوحة بواجهة ثنائية اللغة تدعم العربية والإنجليزية مع دعم كامل لاتجاه الكتابة من اليمين لليسار، وتحليلات فورية مع رسوم بيانية تفاعلية، وتصميم حديث متجاوب يعمل بسلاسة على أجهزة الكمبيوتر والهواتف المحمولة.",
    longDescription: `LandTech Admin Dashboard is a full-featured real estate administration platform built with Next.js 14 App Router, TypeScript, and Tailwind CSS. The platform empowers administrators to efficiently manage every aspect of a land listing marketplace through an intuitive, modern interface.
The dashboard provides real-time analytics through interactive Chart.js visualizations including bar charts for listings and commissions by location, and donut charts for listing status distribution. KPI cards display key metrics such as total listings, pending approvals, total users, properties sold, and total commissions with month-over-month comparisons.
User management supports two categories — internal users (admins and super admins) and external users — with full CRUD operations, role assignment, status toggling with confirmation dialogs, paginated listings, and search functionality. The roles and permissions system allows granular access control with a visual permissions picker organized by feature pages and claim types.
Platform settings include land classification management with drag-and-drop FAQ ordering, commission and offer configuration, and communications settings for WhatsApp, email, and business hours. All settings feature inline editing with real-time validation.
The application implements a robust architecture with Server Actions for secure API mutations, TanStack Query for intelligent data caching and prefetching, React Hook Form with Zod validation for type-safe forms, and a dual data-fetching strategy combining Axios for most API calls with a custom Fetch API wrapper supporting ISR (Incremental Static Regeneration) for optimized performance.
The entire interface is fully bilingual with Arabic and English support powered by next-intl, complete RTL layout adaptation, and locale-aware number formatting to prevent hydration mismatches. The responsive design ensures a seamless experience from large desktop screens down to mobile devices with adaptive chart sizing, collapsible navigation, and mobile-optimized card layouts.`,
    longDescriptionAr: `لوحة تحكم سيل الإدارية هي منصة إدارة عقارات متكاملة مبنية باستخدام Next.js 14 App Router وTypeScript وTailwind CSS. تمكّن المنصة المسؤولين من إدارة جميع جوانب سوق عروض الأراضي بكفاءة من خلال واجهة حديثة وسهلة الاستخدام.
توفر اللوحة تحليلات فورية من خلال رسوم بيانية تفاعلية باستخدام Chart.js تشمل أعمدة بيانية للعروض والعمولات حسب الموقع، ورسوم دائرية لتوزيع حالات العروض. تعرض بطاقات مؤشرات الأداء الرئيسية مقاييس مهمة مثل إجمالي العروض والموافقات المعلقة وإجمالي المستخدمين والعقارات المباعة وإجمالي العمولات مع مقارنات شهرية.
تدعم إدارة المستخدمين فئتين — المستخدمين الداخليين (المسؤولين والمسؤولين الرئيسيين) والمستخدمين الخارجيين — مع عمليات إنشاء وقراءة وتحديث وحذف كاملة، وتعيين الأدوار، وتبديل الحالة مع مربعات حوار للتأكيد، وقوائم مقسمة لصفحات، ووظيفة البحث. يتيح نظام الأدوار والصلاحيات تحكماً دقيقاً في الوصول مع منتقي صلاحيات مرئي منظم حسب صفحات الميزات وأنواع المطالبات.
تشمل إعدادات المنصة إدارة تصنيفات الأراضي مع ترتيب الأسئلة الشائعة بالسحب والإفلات، وتكوين العمولات والعروض، وإعدادات الاتصالات للواتساب والبريد الإلكتروني وساعات العمل. جميع الإعدادات تدعم التعديل المباشر مع التحقق الفوري.
يطبّق التطبيق بنية قوية تعتمد على Server Actions لعمليات الـ API الآمنة، وTanStack Query للتخزين المؤقت الذكي للبيانات والجلب المسبق، وReact Hook Form مع Zod للتحقق من النماذج بأمان الأنواع، واستراتيجية مزدوجة لجلب البيانات تجمع بين Axios لمعظم استدعاءات الـ API مع غلاف Fetch API مخصص يدعم التجديد الثابت التدريجي (ISR) لتحسين الأداء.
الواجهة بالكامل ثنائية اللغة مع دعم العربية والإنجليزية بواسطة next-intl، مع تكيّف كامل لتخطيط اتجاه الكتابة من اليمين لليسار، وتنسيق الأرقام حسب اللغة لمنع أخطاء التزامن. يضمن التصميم المتجاوب تجربة سلسة من شاشات الكمبيوتر الكبيرة وصولاً إلى الهواتف المحمولة مع أحجام رسوم بيانية متكيفة وشريط تنقل قابل للطي وتخطيطات بطاقات محسنة للهواتف.`,
        images: [
      sayil1,
      sayil2,
      sayil3,
      sayil4
    ],
    technologies: ["Next15.5","TypeScript","Tailwind CSS","Shadcn/UI","Lucide React","Tanstack query","Server Actions","Axios","React Hook Form","Zod","Next Auth","next-intl","Chart.js","react toastify"],
    liveUrl: "https://landtech-admin-dashboard.vercel.app",
    githubUrl: "https://github.com/kerolosatef1/sayil-dashboard",
    featured: true,
  },
  {
    id: "3",
    slug: "next-advisory",
    title: "AI-NEXT ADVISORY - University Timetable Generator",
    titleAr: "AI-NEXT ADVISORY - مولد جداول جامعية بالذكاء الاصطناعي",
    titleDe: "AI-NEXT ADVISORY - KI-gestützter Stundenplangenerator",
    titleFr: "AI-NEXT ADVISORY - Générateur d'emplois du temps universitaire",
    
    category: "AI / Scheduling System",
    categoryAr: "ذكاء اصطناعي / نظام جدولة",
    categoryDe: "KI / Planungssystem",
    categoryFr: "IA / Système de planification",
    year: "2025",    
    description: "AI-powered university timetable generation platform that automates course scheduling, professor assignments, and classroom management using advanced optimization algorithms.",
    descriptionAr: "منصة توليد جداول جامعية بالذكاء الاصطناعي تعمل على أتمتة جدولة المواد وتوزيع الأساتذة وإدارة القاعات باستخدام خوارزميات متقدمة.",
    descriptionDe: "KI-gestützte Plattform zur Erstellung von Universitätsstundenplänen, die Kursplanung, Dozentenzuweisung und Raumverwaltung automatisiert.",
    descriptionFr: "Plateforme de génération d'emplois du temps universitaires alimentée par l'IA, automatisant la planification des cours et la gestion des salles.",
    
    longDescription: `NEXT ADVISORY is an advanced AI-powered university timetable generation platform built with React 19 and modern web technologies. It solves the complex challenge of academic scheduling by automating course assignments to professors, teaching assistants, classrooms, and time slots while respecting all constraints.

Key Features:
- Intelligent AI-powered schedule generation with conflict detection
- Drag-and-drop interface for manual schedule adjustments
- Multi-year academic management with configurable course sections
- Real-time conflict detection preventing double-booking and overlaps
- Professor and teaching assistant assignment tracking
- Visual timetable displays with color-coded cards and interactive filtering
- Bilingual interface (Arabic/English) with full RTL support
- Export capabilities to PDF, Excel, and Word formats
- Secure JWT-based authentication system

The platform significantly reduces scheduling time while improving resource utilization and schedule quality. Built with TanStack Query for efficient data management, Formik with Yup for form validation, and a responsive design using Tailwind CSS and Material Tailwind.`,

    longDescriptionAr: `NEXT ADVISORY هي منصة متقدمة لتوليد جداول الجامعات بالذكاء الاصطناعي مبنية باستخدام React 19 وتقنيات الويب الحديثة. تحل التحدي المعقد للجدولة الأكاديمية من خلال أتمتة توزيع المواد على الأساتذة والمعيدين والقاعات والمواعيد.

الميزات الرئيسية:
- توليد جداول ذكية بالذكاء الاصطناعي مع اكتشاف التعارضات
- واجهة سحب وإفلات للتعديلات اليدوية
- إدارة سنوات دراسية متعددة مع أقسام مواد قابلة للتكوين
- اكتشاف التعارضات الفوري لمنع الحجز المزدوج والتداخلات
- تتبع تعيينات الأساتذة والمعيدين
- عرض مرئي للجداول مع بطاقات ملونة وتصفية تفاعلية
- واجهة ثنائية اللغة (عربي/إنجليزي) مع دعم كامل RTL
- إمكانية التصدير لصيغ PDF و Excel و Word
- نظام مصادقة آمن قائم على JWT

تقلل المنصة بشكل كبير من وقت الجدولة مع تحسين استخدام الموارد وجودة الجداول. مبنية باستخدام TanStack Query لإدارة البيانات، Formik مع Yup للتحقق من النماذج، وتصميم متجاوب باستخدام Tailwind CSS و Material Tailwind.`,

    longDescriptionDe: `NEXT ADVISORY ist eine fortschrittliche KI-gestützte Plattform zur Erstellung von Universitätsstundenplänen, entwickelt mit React 19 und modernen Webtechnologien. Sie löst die komplexe Herausforderung der akademischen Planung durch Automatisierung der Kurszuweisungen.

Hauptfunktionen:
- Intelligente KI-gestützte Stundenplanerstellung mit Konflikterkennug
- Drag-and-Drop-Oberfläche für manuelle Anpassungen
- Mehrjährige akademische Verwaltung mit konfigurierbaren Kursabschnitten
- Echtzeit-Konflikterkennung zur Vermeidung von Doppelbuchungen
- Verfolgung von Dozenten- und Assistentenzuweisungen
- Visuelle Stundenplananzeige mit farbcodierten Karten
- Zweisprachige Oberfläche (Arabisch/Englisch) mit RTL-Unterstützung
- Exportmöglichkeiten in PDF, Excel und Word
- Sicheres JWT-basiertes Authentifizierungssystem

Die Plattform reduziert die Planungszeit erheblich und verbessert die Ressourcennutzung.`,

    longDescriptionFr: `NEXT ADVISORY est une plateforme avancée de génération d'emplois du temps universitaires alimentée par l'IA, construite avec React 19 et des technologies web modernes. Elle résout le défi complexe de la planification académique en automatisant l'attribution des cours.

Fonctionnalités principales:
- Génération intelligente d'emplois du temps avec détection des conflits
- Interface glisser-déposer pour les ajustements manuels
- Gestion académique multi-années avec sections de cours configurables
- Détection des conflits en temps réel évitant les doubles réservations
- Suivi des affectations des professeurs et assistants
- Affichage visuel des emplois du temps avec cartes colorées
- Interface bilingue (Arabe/Anglais) avec support RTL complet
- Capacités d'exportation vers PDF, Excel et Word
- Système d'authentification sécurisé basé sur JWT

La plateforme réduit considérablement le temps de planification tout en améliorant l'utilisation des ressources.`,
    
    images: [
        nextAdvisory1,
        nextAdvisory2,
        nextAdvisory3,
        nextAdvisory4,
        nextAdvisory5,
        nextAdvisory6,
        nextAdvisory7,
        nextAdvisory8,
        nextAdvisory9,
        nextAdvisory10,
        nextAdvisory11
    ],
    
    technologies: [
        "React 19",
        "JavaScript",
        "Tailwind CSS",
        "Material Tailwind",
        "TanStack Query",
        "React Router DOM",
        "Axios",
        "Formik",
        "Yup",
        "JWT Authentication",
        "Framer Motion",
        "Highcharts",
        "jsPDF",
        "SheetJS (xlsx)",
        "SweetAlert2",
        "React Toastify",
        "Heroicons",
        "React Icons"
    ],
    
    liveUrl: "https://next-advisory.vercel.app",
    githubUrl: "https://github.com/kerolosatef1/next-advisory",
    featured: true,
}// ============================================
// Clacket Next.js - Movies Platform
// ============================================
,{
  id: "4",
  slug: "clacket-nextjs",
  title: "Clacket - Movies Platform (Next.js)",
  titleAr: "كلاكيت - منصة أفلام (Next.js)",
  titleDe: "Clacket - Filmplattform (Next.js)",
  titleFr: "Clacket - Plateforme de films (Next.js)",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2026",

  description: "A modern movies discovery platform built with Next.js 16 and React 19, featuring movie browsing, search, and detailed information from TMDB API.",
  descriptionAr: "منصة حديثة لاكتشاف الأفلام مبنية بـ Next.js 16 و React 19، تتضمن تصفح الأفلام والبحث ومعلومات تفصيلية من TMDB API.",
  descriptionDe: "Eine moderne Filmplattform mit Next.js 16 und React 19, mit Filmsuche und detaillierten Informationen von der TMDB API.",
  descriptionFr: "Une plateforme moderne de découverte de films construite avec Next.js 16 et React 19, avec recherche et informations détaillées de l'API TMDB.",

  longDescription: `Clacket is a sleek movies discovery platform that allows users to explore trending movies, search for specific titles, and view detailed information about each film including cast, ratings, and trailers.

Key Features:
- Browse trending and popular movies
- Advanced search functionality
- Detailed movie pages with cast and crew information
- Responsive design for all devices
- Server-side rendering for optimal performance
- Integration with TMDB API for real-time movie data

Built with the latest Next.js 16 and React 19, utilizing Tailwind CSS for styling and TypeScript for type safety.`,

  longDescriptionAr: `كلاكيت هي منصة أنيقة لاكتشاف الأفلام تتيح للمستخدمين استكشاف الأفلام الرائجة والبحث عن عناوين محددة وعرض معلومات تفصيلية عن كل فيلم.

الميزات الرئيسية:
- تصفح الأفلام الرائجة والشائعة
- وظيفة بحث متقدمة
- صفحات تفصيلية للأفلام مع معلومات الممثلين
- تصميم متجاوب لجميع الأجهزة
- عرض من جانب الخادم للأداء الأمثل
- تكامل مع TMDB API لبيانات الأفلام الفورية

مبني بأحدث Next.js 16 و React 19، باستخدام Tailwind CSS و TypeScript.`,

  longDescriptionDe: `Clacket ist eine elegante Filmplattform, die es Benutzern ermöglicht, Trendfilme zu erkunden und detaillierte Informationen anzuzeigen.

Hauptfunktionen:
- Durchsuchen von Trend- und beliebten Filmen
- Erweiterte Suchfunktion
- Detaillierte Filmseiten mit Besetzungsinformationen
- Responsives Design für alle Geräte
- Serverseitiges Rendering für optimale Leistung
- Integration mit TMDB API`,

  longDescriptionFr: `Clacket est une plateforme élégante de découverte de films permettant aux utilisateurs d'explorer les films tendance et de voir des informations détaillées.

Fonctionnalités principales:
- Parcourir les films tendance et populaires
- Fonction de recherche avancée
- Pages de films détaillées avec informations sur le casting
- Design responsive pour tous les appareils
- Rendu côté serveur pour des performances optimales
- Intégration avec l'API TMDB`,

  images: [
    clacketnext1,clacketnext2,clacketnext3,clacketnext4
  ],

  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "TMDB API",
    "ESLint",
    "Plop"
  ],

  liveUrl: "https://clackett-next.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/Clackett",
  featured: true,
},

// ============================================
// Clacket React - Movies Platform
// ============================================
{
  id: "5",
  slug: "clacket-react",
  title: "Clacket - Movies Platform (React)",
  titleAr: "كلاكيت - منصة أفلام (React)",
  titleDe: "Clacket - Filmplattform (React)",
  titleFr: "Clacket - Plateforme de films (React)",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2026",

  description: "A React-based movies platform with smooth animations using Framer Motion, pagination, and TMDB API integration for comprehensive movie data.",
  descriptionAr: "منصة أفلام مبنية بـ React مع رسوم متحركة سلسة باستخدام Framer Motion وترقيم الصفحات وتكامل TMDB API.",
  descriptionDe: "Eine React-basierte Filmplattform mit flüssigen Animationen, Paginierung und TMDB API-Integration.",
  descriptionFr: "Une plateforme de films basée sur React avec des animations fluides, pagination et intégration API TMDB.",

  longDescription: `A feature-rich movies discovery application built with React 19 and Vite, featuring smooth page transitions and animations powered by Framer Motion.

Key Features:
- Smooth animations with Framer Motion
- Pagination for browsing large movie collections
- Client-side routing with React Router DOM
- Axios for efficient API calls
- Modern UI with Tailwind CSS
- Fast development with Vite`,

  longDescriptionAr: `تطبيق غني بالميزات لاكتشاف الأفلام مبني بـ React 19 و Vite، يتميز بانتقالات صفحات سلسة ورسوم متحركة مدعومة بـ Framer Motion.

الميزات الرئيسية:
- رسوم متحركة سلسة مع Framer Motion
- ترقيم الصفحات لتصفح مجموعات الأفلام الكبيرة
- توجيه من جانب العميل مع React Router DOM
- Axios لاستدعاءات API فعالة
- واجهة مستخدم حديثة مع Tailwind CSS
- تطوير سريع مع Vite`,

  longDescriptionDe: `Eine funktionsreiche Filmanwendung mit React 19 und Vite, mit flüssigen Animationen durch Framer Motion.

Hauptfunktionen:
- Flüssige Animationen mit Framer Motion
- Paginierung für große Filmsammlungen
- Client-seitiges Routing mit React Router DOM
- Axios für effiziente API-Aufrufe
- Moderne UI mit Tailwind CSS`,

  longDescriptionFr: `Une application de découverte de films riche en fonctionnalités construite avec React 19 et Vite, avec des animations fluides.

Fonctionnalités principales:
- Animations fluides avec Framer Motion
- Pagination pour parcourir de grandes collections
- Routage côté client avec React Router DOM
- Axios pour des appels API efficaces
- Interface moderne avec Tailwind CSS`,

  images: [clacketnext1,clacketnext2,clacketnext3,clacketnext4],

  technologies: [
    "React 19",
    "Vite 7",
    "TypeScript",
    "Tailwind CSS 4",
    "Framer Motion",
    "React Router DOM",
    "Axios",
    "React Paginate",
    "TMDB API"
  ],

  liveUrl: "https://movies-five-liart.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/movies",
  featured: true,
},

// ============================================
// Holy Bible App
// ============================================
{
  id: "6",
  slug: "holy-bible",
  title: "Holy Bible - Scripture Reading App",
  titleAr: "الكتاب المقدس - تطبيق قراءة الأسفار",
  titleDe: "Heilige Bibel - Schriftlese-App",
  titleFr: "Sainte Bible - Application de lecture",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2024",

  description: "A clean and simple Bible reading application built with React 19 and Vite, providing easy access to scripture texts.",
  descriptionAr: "تطبيق بسيط وأنيق لقراءة الكتاب المقدس مبني بـ React 19 و Vite، يوفر وصولاً سهلاً لنصوص الأسفار.",
  descriptionDe: "Eine saubere Bibel-Lese-App mit React 19 und Vite für einfachen Zugang zu Schrifttexten.",
  descriptionFr: "Une application de lecture de la Bible simple et propre avec React 19 et Vite.",

  longDescription: `A minimalist Bible reading application designed for easy scripture reading and navigation. Built with React 19 and the latest Vite 8 beta for optimal performance.

Key Features:
- Clean, distraction-free reading interface
- Easy navigation between books and chapters
- Responsive design for mobile and desktop
- Fast loading with Vite 8
- Modern React 19 features`,

  longDescriptionAr: `تطبيق بسيط لقراءة الكتاب المقدس مصمم لقراءة سهلة وتنقل سلس. مبني بـ React 19 وأحدث Vite 8.

الميزات الرئيسية:
- واجهة قراءة نظيفة وخالية من التشتت
- تنقل سهل بين الأسفار والإصحاحات
- تصميم متجاوب للموبايل والديسكتوب
- تحميل سريع مع Vite 8
- ميزات React 19 الحديثة`,

  longDescriptionDe: `Eine minimalistische Bibel-App für einfaches Lesen und Navigation.

Hauptfunktionen:
- Saubere, ablenkungsfreie Leseoberfläche
- Einfache Navigation zwischen Büchern
- Responsives Design
- Schnelles Laden mit Vite 8`,

  longDescriptionFr: `Une application minimaliste de lecture de la Bible conçue pour une lecture facile.

Fonctionnalités principales:
- Interface de lecture propre
- Navigation facile entre les livres
- Design responsive
- Chargement rapide avec Vite 8`,

  images: [holly,holly1,holly2,holly3,holly4],

  technologies: [
    "React 19",
    "Vite 8 Beta",
    "JavaScript",
    "CSS"
  ],

  liveUrl: "https://holy-bible-tan.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/Holy-Bible",
  featured: true,
},

// ============================================
// FinBiz - Finance Solutions
// ============================================
{
  id: "7",
  slug: "finbiz-finance",
  title: "FinBiz - Business Finance Solutions",
  titleAr: "فين بيز - حلول مالية للأعمال",
  titleDe: "FinBiz - Geschäftsfinanzlösungen",
  titleFr: "FinBiz - Solutions financières",

  category: "Business / Finance",
  categoryAr: "أعمال / مالية",
  categoryDe: "Geschäft / Finanzen",
  categoryFr: "Business / Finance",

  year: "2026",

  description: "A comprehensive business finance platform with interactive charts, multi-language support, and dark/light theme switching.",
  descriptionAr: "منصة مالية شاملة للأعمال مع رسوم بيانية تفاعلية ودعم متعدد اللغات وتبديل السمات.",
  descriptionDe: "Eine umfassende Finanzplattform mit interaktiven Charts und Mehrsprachigkeit.",
  descriptionFr: "Une plateforme financière complète avec graphiques interactifs et support multilingue.",

  longDescription: `FinBiz is a modern business finance solutions platform featuring interactive data visualization, internationalization support, and a polished user interface.

Key Features:
- Interactive charts with Chart.js
- Multi-language support (i18next)
- Dark/Light theme switching
- Responsive carousel with Swiper
- TanStack Query for data fetching
- PWA support for offline access
- Modern UI with animations`,

  longDescriptionAr: `فين بيز هي منصة حلول مالية للأعمال تتميز بتصور بيانات تفاعلي ودعم تعدد اللغات وواجهة مستخدم أنيقة.

الميزات الرئيسية:
- رسوم بيانية تفاعلية مع Chart.js
- دعم متعدد اللغات (i18next)
- تبديل السمة الداكنة/الفاتحة
- كاروسيل متجاوب مع Swiper
- TanStack Query لجلب البيانات
- دعم PWA للوصول بدون إنترنت`,

  longDescriptionDe: `FinBiz ist eine moderne Finanzplattform mit interaktiver Datenvisualisierung und Internationalisierung.

Hauptfunktionen:
- Interaktive Charts mit Chart.js
- Mehrsprachige Unterstützung
- Dunkles/Helles Theme
- Responsive Karussell mit Swiper
- PWA-Unterstützung`,

  longDescriptionFr: `FinBiz est une plateforme financière moderne avec visualisation de données interactive et internationalisation.

Fonctionnalités principales:
- Graphiques interactifs avec Chart.js
- Support multilingue (i18next)
- Thème sombre/clair
- Carrousel responsive avec Swiper
- Support PWA`,

  images: [finance1,finance2,finance3,finance4],

  technologies: [
    "React 19",
    "Vite 7",
    "TypeScript",
    "Tailwind CSS",
    "Chart.js",
    "i18next",
    "React i18next",
    "next-themes",
    "Swiper",
    "TanStack Query",
    "React Router DOM",
    "Axios",
    "SASS",
    "PWA"
  ],
  liveUrl: "https://fin-biz-finance-y7mm.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/FinBiz-Finance",
  featured: true,
},

// ============================================
// Restaurant Menu - React Version
// ============================================
{
  id: "8",
  slug: "Countries World",
  title: "Countries World",
  titleAr: "بلاد العالم",
  titleDe: "Restaurantmenü - Interaktive Menü-App",
  titleFr: "Menu Restaurant - Application interactive",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2024",

  description: "An interactive restaurant menu application with smooth animations built with React 19, Motion library, and Tailwind CSS.",
  descriptionAr: "تطبيق قائمة مطعم تفاعلي مع رسوم متحركة سلسة مبني بـ React 19 و Motion و Tailwind CSS.",
  descriptionDe: "Eine interaktive Restaurantmenü-App mit flüssigen Animationen.",
  descriptionFr: "Une application de menu de restaurant interactive avec animations fluides.",

  longDescription: `A beautiful and interactive restaurant menu application featuring smooth animations and a modern user interface. Part of the Jonas course training projects.

Key Features:
- Smooth animations with Motion library
- Category filtering
- Responsive design
- Modern UI with Tailwind CSS
- Fast performance with Vite`,

  longDescriptionAr: `تطبيق قائمة مطعم جميل وتفاعلي يتميز برسوم متحركة سلسة وواجهة مستخدم حديثة. جزء من مشاريع تدريب كورس جوناس.

الميزات الرئيسية:
- رسوم متحركة سلسة مع Motion
- تصفية حسب الفئات
- تصميم متجاوب
- واجهة حديثة مع Tailwind CSS`,

  longDescriptionDe: `Eine schöne interaktive Restaurantmenü-App mit flüssigen Animationen.

Hauptfunktionen:
- Flüssige Animationen mit Motion
- Kategoriefilterung
- Responsives Design`,

  longDescriptionFr: `Une belle application de menu de restaurant interactive avec animations fluides.

Fonctionnalités principales:
- Animations fluides avec Motion
- Filtrage par catégorie
- Design responsive`,

  images: [Menu1,Menu2],

  technologies: [
    "React 19",
    "Vite 7",
    "TypeScript",
    "Tailwind CSS 4",
    "Motion",
    "PostCSS",
    "Autoprefixer"
  ],

  liveUrl: "https://frontend-beetleware-internship-day7.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/frontend-beetleware-internship-day7",
  featured: false,
},

// ============================================
// Menu Next.js
// ============================================
{
  id: "9",
  slug: "menu-nextjs",
  title: "Restaurant Menu - Next.js Version",
  titleAr: "قائمة مطعم - نسخة Next.js",
  titleDe: "Restaurantmenü - Next.js Version",
  titleFr: "Menu Restaurant - Version Next.js",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2024",

  description: "A Next.js version of the restaurant menu application with server-side rendering and optimized performance.",
  descriptionAr: "نسخة Next.js من تطبيق قائمة المطعم مع عرض من جانب الخادم وأداء محسن.",
  descriptionDe: "Eine Next.js-Version der Restaurantmenü-App mit serverseitigem Rendering.",
  descriptionFr: "Une version Next.js de l'application menu avec rendu côté serveur.",

  longDescription: `The Next.js implementation of the restaurant menu application, featuring server-side rendering for improved SEO and performance.

Key Features:
- Server-side rendering
- Optimized images
- Fast page loads
- Modern animations with Motion
- Tailwind CSS styling`,

  longDescriptionAr: `تطبيق قائمة المطعم بـ Next.js، يتميز بعرض من جانب الخادم لتحسين SEO والأداء.

الميزات الرئيسية:
- عرض من جانب الخادم
- صور محسنة
- تحميل سريع للصفحات
- رسوم متحركة حديثة مع Motion`,

  longDescriptionDe: `Die Next.js-Implementierung der Restaurantmenü-App mit serverseitigem Rendering.`,

  longDescriptionFr: `L'implémentation Next.js de l'application menu avec rendu côté serveur.`,

  images: [Menu1,Menu2],

  technologies: [
    "Next.js",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Motion"
  ],

  liveUrl: "https://next-menu-pied.vercel.app/",
  githubUrl: "https://github.com/yourusername/menu-nextjs",
  featured: false,
},

// ============================================
// Faragello Menu
// ============================================
{
  id: "10",
  slug: "faragello-menu",
  title: "Faragello - Restaurant Digital Menu",
  titleAr: "فراجيلو - قائمة مطعم رقمية",
  titleDe: "Faragello - Digitale Restaurantkarte",
  titleFr: "Faragello - Menu digital de restaurant",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2024",

  description: "A digital menu system for Faragello restaurant with modern design and smooth user experience.",
  descriptionAr: "نظام قائمة رقمية لمطعم فراجيلو بتصميم حديث وتجربة مستخدم سلسة.",
  descriptionDe: "Ein digitales Menüsystem für das Faragello Restaurant.",
  descriptionFr: "Un système de menu numérique pour le restaurant Faragello.",

  longDescription: `Faragello is a digital menu system designed for restaurants, featuring a clean interface and easy navigation through menu categories.`,

  longDescriptionAr: `فراجيلو هو نظام قائمة رقمية مصمم للمطاعم، يتميز بواجهة نظيفة وتنقل سهل عبر فئات القائمة.`,

  longDescriptionDe: `Faragello ist ein digitales Menüsystem für Restaurants mit sauberer Oberfläche.`,

  longDescriptionFr: `Faragello est un système de menu numérique pour restaurants avec une interface propre.`,

  images: [Menuac1,Menuac2,Menuac3,Menuac4],

  technologies: [
    "React 19",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "Motion"
  ],

  liveUrl: "https://menu-faragello.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/menu",
  featured: false,
},

// ============================================
// TanStack Products Table
// ============================================
{
  id: "11",
  slug: "tanstack-products",
  title: "Products Management - TanStack Integration",
  titleAr: "إدارة المنتجات - تكامل TanStack",
  titleDe: "Produktverwaltung - TanStack Integration",
  titleFr: "Gestion des produits - Intégration TanStack",

  category: "Dashboard / Admin",
  categoryAr: "لوحة تحكم / إدارة",
  categoryDe: "Dashboard / Admin",
  categoryFr: "Tableau de bord / Admin",

  year: "2024",

  description: "A products management system showcasing TanStack Query, Table, and Virtual integration for efficient data handling.",
  descriptionAr: "نظام إدارة منتجات يعرض تكامل TanStack Query و Table و Virtual للتعامل الفعال مع البيانات.",
  descriptionDe: "Ein Produktverwaltungssystem mit TanStack Query, Table und Virtual Integration.",
  descriptionFr: "Un système de gestion de produits avec intégration TanStack Query, Table et Virtual.",

  longDescription: `A learning project demonstrating the powerful combination of TanStack Query for data fetching, TanStack Table for data display, and TanStack Virtual for virtualized scrolling.

Key Features:
- TanStack Query for efficient data fetching and caching
- TanStack Table for sortable, filterable tables
- TanStack Virtual for handling large datasets
- Form validation with Formik and Yup
- Responsive design with Tailwind CSS`,

  longDescriptionAr: `مشروع تعليمي يوضح المزيج القوي من TanStack Query لجلب البيانات، TanStack Table لعرض البيانات، و TanStack Virtual للتمرير الافتراضي.

الميزات الرئيسية:
- TanStack Query لجلب البيانات والتخزين المؤقت
- TanStack Table للجداول القابلة للفرز والتصفية
- TanStack Virtual للتعامل مع مجموعات البيانات الكبيرة
- التحقق من النماذج مع Formik و Yup`,

  longDescriptionDe: `Ein Lernprojekt zur Demonstration der TanStack-Kombination für Datenverwaltung.`,

  longDescriptionFr: `Un projet d'apprentissage démontrant la combinaison TanStack pour la gestion des données.`,

  images: [tanstack1,tanstack2],

  technologies: [
    "React 19",
    "Vite 7",
    "TanStack Query",
    "TanStack Table",
    "TanStack Virtual",
    "Axios",
    "React Router DOM",
    "Tailwind CSS"
  ],

  liveUrl: "https://tan-stack-query-table-virtual.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/TanStack-Query-Table-Virtual",
  featured: true,
},

// ============================================
// Data Reminder Alarm
// ============================================
{
  id: "12",
  slug: "data-reminder-alarm",
  title: "Data Reminder - Task Alarm Application",
  titleAr: "منبه المهام - تطبيق تذكير بالمواعيد",
  titleDe: "Daten-Erinnerung - Aufgaben-Alarm-App",
  titleFr: "Rappel de données - Application d'alarme",

  category: "Productivity",
  categoryAr: "إنتاجية",
  categoryDe: "Produktivität",
  categoryFr: "Productivité",

  year: "2025",

  description: "A task reminder application with a full clock system and alarm functionality built with Next.js 16.",
  descriptionAr: "تطبيق تذكير بالمهام مع نظام ساعة كامل ووظيفة منبه مبني بـ Next.js 16.",
  descriptionDe: "Eine Aufgaben-Erinnerungs-App mit Uhr-System und Alarm-Funktion.",
  descriptionFr: "Une application de rappel de tâches avec système d'horloge et fonction alarme.",

  longDescription: `A productivity application featuring a complete clock system with alarm functionality to help users manage their tasks and schedules effectively.

Key Features:
- Real-time clock display
- Task scheduling with alarms
- Toast notifications with React Toastify
- Unique IDs with UUID
- Modern UI with Tailwind CSS
- Built with Next.js 16 and React 19`,

  longDescriptionAr: `تطبيق إنتاجية يتميز بنظام ساعة كامل مع وظيفة منبه لمساعدة المستخدمين على إدارة مهامهم وجداولهم بفعالية.

الميزات الرئيسية:
- عرض الساعة في الوقت الفعلي
- جدولة المهام مع المنبهات
- إشعارات منبثقة مع React Toastify
- معرفات فريدة مع UUID
- واجهة حديثة مع Tailwind CSS`,

  longDescriptionDe: `Eine Produktivitäts-App mit komplettem Uhrsystem und Alarmfunktion.`,

  longDescriptionFr: `Une application de productivité avec système d'horloge complet et fonction alarme.`,

  images: [alarm1,alarm2,alarm4],

  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "React Toastify",
    "UUID",
    "Plop"
  ],
  liveUrl: "https://data-reminder-alarm.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/data-reminder",
  featured: false,
},

// ============================================
// BookMarker - Vanilla JavaScript
// ============================================
{
  id: "13",
  slug: "bookmarker",
  title: "BookMarker - Bookmark Manager",
  titleAr: "بوك ماركر - مدير الإشارات المرجعية",
  titleDe: "BookMarker - Lesezeichen-Manager",
  titleFr: "BookMarker - Gestionnaire de signets",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2023",

  description: "A simple and elegant bookmark manager built with vanilla JavaScript for saving and organizing website links.",
  descriptionAr: "مدير إشارات مرجعية بسيط وأنيق مبني بـ JavaScript الخالص لحفظ وتنظيم روابط المواقع.",
  descriptionDe: "Ein einfacher Lesezeichen-Manager mit vanilla JavaScript.",
  descriptionFr: "Un gestionnaire de signets simple construit avec JavaScript vanilla.",

  longDescription: `BookMarker is a lightweight bookmark management application that allows users to save, organize, and quickly access their favorite websites.

Key Features:
- Add and remove bookmarks
- Local storage persistence
- URL validation
- Clean and simple UI
- No dependencies - pure JavaScript`,

  longDescriptionAr: `بوك ماركر هو تطبيق خفيف لإدارة الإشارات المرجعية يتيح للمستخدمين حفظ وتنظيم والوصول السريع لمواقعهم المفضلة.

الميزات الرئيسية:
- إضافة وحذف الإشارات المرجعية
- التخزين المحلي
- التحقق من صحة الروابط
- واجهة نظيفة وبسيطة`,

  longDescriptionDe: `BookMarker ist eine leichte Lesezeichen-App zum Speichern und Organisieren von Websites.`,

  longDescriptionFr: `BookMarker est une application légère de gestion de signets pour sauvegarder et organiser les sites.`,

  images: [bookmarker],

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Local Storage"
  ],

  liveUrl: "https://book-marker-project.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/BookMarkerProject",
  featured: false,
},

// ============================================
// Youmy - Vanilla JavaScript
// ============================================
{
  id: "14",
  slug: "youmy",
  title: "Youmy - Web Application",
  titleAr: "يومي - تطبيق ويب",
  titleDe: "Youmy - Webanwendung",
  titleFr: "Youmy - Application Web",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2023",

  description: "A web application built with vanilla JavaScript showcasing fundamental web development skills.",
  descriptionAr: "تطبيق ويب مبني بـ JavaScript الخالص يعرض مهارات تطوير الويب الأساسية.",
  descriptionDe: "Eine Webanwendung mit vanilla JavaScript.",
  descriptionFr: "Une application web construite avec JavaScript vanilla.",

  longDescription: `Youmy is a web application demonstrating core JavaScript skills and modern CSS techniques without relying on frameworks.`,

  longDescriptionAr: `يومي هو تطبيق ويب يوضح مهارات JavaScript الأساسية وتقنيات CSS الحديثة بدون الاعتماد على أطر العمل.`,

  longDescriptionDe: `Youmy ist eine Webanwendung, die JavaScript-Grundlagen demonstriert.`,

  longDescriptionFr: `Youmy est une application web démontrant les compétences JavaScript de base.`,

  images: [Menuac1,Menuac2,Menuac3,Menuac4],

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript"
  ],

  liveUrl: "https://youmy.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/Youmy",
  featured: false,
},

// ============================================
// Weather App - Vanilla JavaScript
// ============================================
{
  id: "15",
  slug: "weather-app",
  title: "Weather App - Current Weather Checker",
  titleAr: "تطبيق الطقس - فاحص الطقس الحالي",
  titleDe: "Wetter-App - Aktueller Wetter-Checker",
  titleFr: "Application Météo - Vérificateur météo",

  category: "Web Application",
  categoryAr: "تطبيق ويب",
  categoryDe: "Webanwendung",
  categoryFr: "Application Web",

  year: "2023",

  description: "A weather checking application built with vanilla JavaScript that displays current weather conditions for any city.",
  descriptionAr: "تطبيق فحص الطقس مبني بـ JavaScript الخالص يعرض حالة الطقس الحالية لأي مدينة.",
  descriptionDe: "Eine Wetter-App mit vanilla JavaScript für aktuelle Wetterbedingungen.",
  descriptionFr: "Une application météo en JavaScript vanilla pour les conditions actuelles.",

  longDescription: `A simple weather application that fetches and displays current weather data for any city using a weather API.

Key Features:
- Search by city name
- Display temperature, humidity, and conditions
- Weather icons
- Responsive design
- API integration`,

  longDescriptionAr: `تطبيق طقس بسيط يجلب ويعرض بيانات الطقس الحالية لأي مدينة باستخدام API.

الميزات الرئيسية:
- البحث باسم المدينة
- عرض درجة الحرارة والرطوبة والحالة
- أيقونات الطقس
- تصميم متجاوب`,

  longDescriptionDe: `Eine einfache Wetter-App zum Abrufen aktueller Wetterdaten für jede Stadt.`,

  longDescriptionFr: `Une application météo simple pour récupérer les données météo actuelles.`,

  images: [wheather],

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Weather API",
    "Fetch API"
  ],

  liveUrl: "https://weathe-project.vercel.app/",
  githubUrl: "https://github.com/kerolosatef1/Weathe-Project",
  featured: false,
},
]

export const getLocalizedProject = (project: Project, locale: string) => {
  const isArabic = locale === "ar"
  const isGerman = locale === "de"
  const isFrench = locale === "fr"

  return {
    ...project,
    title: isArabic
      ? project.titleAr
      : isGerman
      ? (project.titleDe || project.title)
      : isFrench
      ? (project.titleFr || project.title)
      : project.title,
    category: isArabic
      ? project.categoryAr
      : isGerman
      ? (project.categoryDe || project.category)
      : isFrench
      ? (project.categoryFr || project.category)
      : project.category,
    description: isArabic
      ? project.descriptionAr
      : isGerman
      ? (project.descriptionDe || project.description)
      : isFrench
      ? (project.descriptionFr || project.description)
      : project.description,
    longDescription: isArabic
      ? project.longDescriptionAr
      : isGerman
      ? (project.longDescriptionDe || project.longDescription)
      : isFrench
      ? (project.longDescriptionFr || project.longDescription)
      : project.longDescription,
  }
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured)
}