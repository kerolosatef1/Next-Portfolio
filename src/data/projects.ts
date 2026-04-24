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
import finance1 from "@/shared/components/shared/Images/finbiz1.jpeg"
import finance2 from "@/shared/components/shared/Images/finbiz2.jpeg"
import finance3 from "@/shared/components/shared/Images/finbiz3.jpeg"
import finance4 from "@/shared/components/shared/Images/finbiz4.jpeg"
import sayil1 from "@/shared/components/shared/Images/sail1.jpeg"
import sayil2 from "@/shared/components/shared/Images/sail2.jpeg"
import sayil3 from "@/shared/components/shared/Images/sail3.jpeg"
import sayil4 from "@/shared/components/shared/Images/sail4.jpeg"
import tanstack1 from "@/shared/components/shared/Images/tanstacktask1.png"
import tanstack2 from "@/shared/components/shared/Images/tanstacktask2.png"
import Menu1 from "@/shared/components/shared/Images/MENU1.png"
import Menu2 from "@/shared/components/shared/Images/MENU2.png"
import Menuac1 from "@/shared/components/shared/Images/MENUac1.png"
import Menuac2 from "@/shared/components/shared/Images/MENUac2.png"
import Menuac3 from "@/shared/components/shared/Images/MENUac3.png"
import Menuac4 from "@/shared/components/shared/Images/MENUac4.png"
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
    longDescription:
      "A comprehensive e-commerce solution built with Next.js and TypeScript. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard.",
    longDescriptionAr:
      "حل تجارة إلكترونية شامل مبني بـ Next.js و TypeScript. يتضمن مصادقة المستخدم، كتالوج المنتجات، سلة التسوق، تكامل الدفع مع Stripe، إدارة الطلبات، ولوحة تحكم المسؤول.",
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
    // ✅ Fixed: "Yub" → "Yup", removed empty string
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Formik",
      "Yup",
      "TanStack Query",
    ],
    liveUrl: "https://e-commerce-black-delta.vercel.app/login",
    githubUrl: "https://github.com/kerolosatef1/E-commerce",
    featured: true,
  },
  {
    id: "2",
    slug: "LandTech",
    // ✅ Fixed: "BeetleWare" consistent spelling, "Saudi Arabia" correct
    title: "LandTech Admin Dashboard - Beetleware Internship",
    titleAr: "لوحة تحكم LandTech - تدريب في شركة Beetleware بالسعودية",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2026",
    description:
      "LandTech Admin Dashboard is a comprehensive real estate management platform built with Next.js 14, designed for administrators to manage land listings, users, roles and permissions, and platform settings.",
    descriptionAr:
      "لوحة تحكم LandTech هي منصة شاملة لإدارة العقارات مبنية باستخدام Next.js 14، مصممة للمسؤولين لإدارة عروض الأراضي والمستخدمين والأدوار والصلاحيات.",
    longDescription:
      "LandTech Admin Dashboard is a full-featured real estate administration platform built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features include real-time analytics with Chart.js, user management with CRUD operations, roles and permissions system, bilingual interface (Arabic/English) with RTL support, and ISR for optimized performance.",
    longDescriptionAr:
      "لوحة تحكم LandTech هي منصة إدارة عقارات متكاملة مبنية باستخدام Next.js 14 App Router وTypeScript وTailwind CSS. تشمل تحليلات فورية مع Chart.js، إدارة المستخدمين، نظام أدوار وصلاحيات، واجهة ثنائية اللغة مع دعم RTL.",
    images: [sayil1, sayil2, sayil3, sayil4],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Lucide React",
      "TanStack Query",
      "Server Actions",
      "Axios",
      "React Hook Form",
      "Zod",
      "NextAuth",
      "next-intl",
      "Chart.js",
      "React Toastify",
    ],
    liveUrl: "https://landtech-admin-dashboard.vercel.app",
    githubUrl: "https://github.com/kerolosatef1/sayil-dashboard",
    featured: true,
  },
  {
    id: "3",
    slug: "next-advisory",
    title: "AI-NEXT ADVISORY - University Timetable Generator",
    titleAr: "AI-NEXT ADVISORY - مولد جداول جامعية بالذكاء الاصطناعي",
    category: "AI / Scheduling System",
    categoryAr: "ذكاء اصطناعي / نظام جدولة",
    year: "2025",
    description:
      "AI-powered university timetable generation platform that automates course scheduling, professor assignments, and classroom management.",
    descriptionAr:
      "منصة توليد جداول جامعية بالذكاء الاصطناعي تعمل على أتمتة جدولة المواد وتوزيع الأساتذة وإدارة القاعات.",
    longDescription:
      "NEXT ADVISORY is an advanced AI-powered university timetable generation platform built with React 19. Features include intelligent schedule generation with conflict detection, drag-and-drop interface, bilingual support (Arabic/English), and export to PDF/Excel/Word.",
    longDescriptionAr:
      "NEXT ADVISORY هي منصة متقدمة لتوليد جداول الجامعات بالذكاء الاصطناعي. تشمل توليد جداول ذكية مع اكتشاف التعارضات، واجهة سحب وإفلات، ودعم ثنائي اللغة.",
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
      nextAdvisory11,
    ],
    // ✅ Fixed: "Yup" not "Yub"
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
      "SheetJS",
    ],
    liveUrl: "https://next-advisory.vercel.app",
    githubUrl: "https://github.com/kerolosatef1/next-advisory",
    featured: true,
  },
  {
    id: "4",
    slug: "clacket-nextjs",
    title: "Clacket - Movies Platform (Next.js)",
    titleAr: "كلاكيت - منصة أفلام (Next.js)",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2026",
    description:
      "A modern movies discovery platform built with Next.js 16 and React 19, featuring movie browsing, search, and TMDB API integration.",
    descriptionAr:
      "منصة حديثة لاكتشاف الأفلام مبنية بـ Next.js 16 و React 19، تتضمن تصفح الأفلام والبحث وتكامل TMDB API.",
    longDescription:
      "Clacket is a sleek movies discovery platform with trending movies, search, detailed movie pages with cast information, and server-side rendering for optimal performance.",
    longDescriptionAr:
      "كلاكيت هي منصة أنيقة لاكتشاف الأفلام مع أفلام رائجة، بحث، صفحات تفصيلية، وعرض من جانب الخادم.",
    images: [clacketnext1, clacketnext2, clacketnext3, clacketnext4],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TMDB API",
    ],
    liveUrl: "https://clackett-next.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/Clackett",
    featured: true,
  },
  {
    id: "5",
    slug: "clacket-react",
    title: "Clacket - Movies Platform (React)",
    titleAr: "كلاكيت - منصة أفلام (React)",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2026",
    description:
      "A React-based movies platform with Framer Motion animations, pagination, and TMDB API integration.",
    descriptionAr:
      "منصة أفلام مبنية بـ React مع رسوم متحركة سلسة وتكامل TMDB API.",
    longDescription:
      "A feature-rich movies discovery application built with React 19 and Vite, featuring smooth page transitions powered by Framer Motion.",
    longDescriptionAr:
      "تطبيق اكتشاف أفلام مبني بـ React 19 و Vite مع انتقالات سلسة بـ Framer Motion.",
    images: [clacketnext1, clacketnext2, clacketnext3, clacketnext4],
    technologies: [
      "React 19",
      "Vite 7",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "React Router DOM",
      "Axios",
      "TMDB API",
    ],
    liveUrl: "https://movies-five-liart.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/movies",
    featured: true,
  },
  {
    id: "6",
    slug: "holy-bible",
    title: "Holy Bible - Scripture Reading App",
    titleAr: "الكتاب المقدس - تطبيق قراءة الأسفار",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2024",
    description:
      "A clean Bible reading application built with React 19 and Vite.",
    descriptionAr:
      "تطبيق بسيط وأنيق لقراءة الكتاب المقدس مبني بـ React 19 و Vite.",
    longDescription:
      "A minimalist Bible reading application designed for easy scripture reading and navigation with React 19.",
    longDescriptionAr:
      "تطبيق بسيط لقراءة الكتاب المقدس مصمم لقراءة سهلة وتنقل سلس.",
    images: [holly, holly1, holly2, holly3, holly4],
    technologies: ["React 19", "Vite 8 Beta", "JavaScript", "CSS"],
    liveUrl: "https://holy-bible-tan.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/Holy-Bible",
    featured: true,
  },
  {
    id: "7",
    slug: "finbiz-finance",
    title: "FinBiz - Business Finance Solutions",
    titleAr: "فين بيز - حلول مالية للأعمال",
    category: "Business / Finance",
    categoryAr: "أعمال / مالية",
    year: "2026",
    description:
      "A comprehensive business finance platform with interactive charts and multi-language support.",
    descriptionAr:
      "منصة مالية شاملة للأعمال مع رسوم بيانية تفاعلية ودعم متعدد اللغات.",
    longDescription:
      "FinBiz is a modern business finance solutions platform featuring interactive Chart.js visualizations, i18next internationalization, dark/light theme, and PWA support.",
    longDescriptionAr:
      "فين بيز هي منصة حلول مالية تتميز برسوم بيانية تفاعلية ودعم تعدد اللغات وPWA.",
    images: [finance1, finance2, finance3, finance4],
    technologies: [
      "React 19",
      "Vite 7",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "i18next",
      "Swiper",
      "TanStack Query",
      "Axios",
      "PWA",
    ],
    liveUrl: "https://fin-biz-finance-y7mm.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/FinBiz-Finance",
    featured: true,
  },
  {
    id: "8",
    slug: "countries-world",
    // ✅ Fixed: slug was "Countries World" with space
    title: "Countries World",
    titleAr: "بلاد العالم",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2024",
    description:
      "An interactive countries explorer with smooth animations built with React 19.",
    descriptionAr:
      "تطبيق تفاعلي لاستكشاف الدول مع رسوم متحركة سلسة مبني بـ React 19.",
    longDescription:
      "A beautiful interactive application featuring smooth animations and modern UI.",
    longDescriptionAr: "تطبيق جميل وتفاعلي يتميز برسوم متحركة سلسة.",
    images: [Menu1, Menu2],
    technologies: [
      "React 19",
      "Vite 7",
      "TypeScript",
      "Tailwind CSS 4",
      "Motion",
    ],
    liveUrl: "https://frontend-beetleware-internship-day7.vercel.app/",
    githubUrl:
      "https://github.com/kerolosatef1/frontend-beetleware-internship-day7",
    featured: false,
  },
  {
    id: "9",
    slug: "menu-nextjs",
    title: "Restaurant Menu - Next.js Version",
    titleAr: "قائمة مطعم - نسخة Next.js",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2024",
    description:
      "A Next.js version of the restaurant menu application with SSR.",
    descriptionAr:
      "نسخة Next.js من تطبيق قائمة المطعم مع عرض من جانب الخادم.",
    longDescription:
      "The Next.js implementation featuring server-side rendering for improved SEO and performance.",
    longDescriptionAr:
      "تطبيق قائمة المطعم بـ Next.js يتميز بعرض من جانب الخادم لتحسين SEO.",
    images: [Menu1, Menu2],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS 4", "Motion"],
    liveUrl: "https://next-menu-pied.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/menu-nextjs",
    featured: false,
  },
  {
    id: "10",
    slug: "faragello-menu",
    title: "Faragello - Restaurant Digital Menu",
    titleAr: "فراجيلو - قائمة مطعم رقمية",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2024",
    description:
      "A digital menu system for Faragello restaurant with modern design.",
    descriptionAr: "نظام قائمة رقمية لمطعم فراجيلو بتصميم حديث.",
    longDescription:
      "Faragello is a digital menu system designed for restaurants with a clean interface.",
    longDescriptionAr:
      "فراجيلو هو نظام قائمة رقمية مصمم للمطاعم بواجهة نظيفة.",
    images: [Menuac1, Menuac2, Menuac3, Menuac4],
    technologies: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Motion"],
    liveUrl: "https://menu-faragello.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/menu",
    featured: false,
  },
  {
    id: "11",
    slug: "tanstack-products",
    title: "Products Management - TanStack Integration",
    titleAr: "إدارة المنتجات - تكامل TanStack",
    category: "Dashboard / Admin",
    categoryAr: "لوحة تحكم / إدارة",
    year: "2024",
    description:
      "A products management system showcasing TanStack Query, Table, and Virtual.",
    descriptionAr:
      "نظام إدارة منتجات يعرض تكامل TanStack Query و Table و Virtual.",
    longDescription:
      "A project demonstrating TanStack Query for data fetching, TanStack Table for sortable/filterable tables, and TanStack Virtual for virtualized scrolling.",
    longDescriptionAr:
      "مشروع يوضح TanStack Query لجلب البيانات وTanStack Table للجداول وTanStack Virtual للتمرير.",
    images: [tanstack1, tanstack2],
    // ✅ Fixed: "Yup" not "Yub"
    technologies: [
      "React 19",
      "Vite 7",
      "TanStack Query",
      "TanStack Table",
      "TanStack Virtual",
      "Axios",
      "React Router DOM",
      "Tailwind CSS",
    ],
    liveUrl: "https://tan-stack-query-table-virtual.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/TanStack-Query-Table-Virtual",
    featured: true,
  },
  {
    id: "12",
    slug: "data-reminder-alarm",
    title: "Data Reminder - Task Alarm Application",
    titleAr: "منبه المهام - تطبيق تذكير بالمواعيد",
    category: "Productivity",
    categoryAr: "إنتاجية",
    year: "2025",
    description:
      "A task reminder application with clock system and alarm functionality.",
    descriptionAr: "تطبيق تذكير بالمهام مع نظام ساعة ووظيفة منبه.",
    longDescription:
      "A productivity application featuring a complete clock system with alarm functionality built with Next.js 16.",
    longDescriptionAr:
      "تطبيق إنتاجية يتميز بنظام ساعة كامل مع وظيفة منبه.",
    images: [alarm1, alarm2, alarm4],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "React Toastify",
      "UUID",
    ],
    liveUrl: "https://data-reminder-alarm.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/data-reminder",
    featured: false,
  },
  {
    id: "13",
    slug: "bookmarker",
    title: "BookMarker - Bookmark Manager",
    titleAr: "بوك ماركر - مدير الإشارات المرجعية",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2023",
    description:
      "A simple bookmark manager built with vanilla JavaScript.",
    descriptionAr:
      "مدير إشارات مرجعية بسيط مبني بـ JavaScript الخالص.",
    longDescription:
      "BookMarker is a lightweight bookmark management application with local storage persistence.",
    longDescriptionAr:
      "بوك ماركر هو تطبيق خفيف لإدارة الإشارات المرجعية مع التخزين المحلي.",
    images: [bookmarker],
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    liveUrl: "https://book-marker-project.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/BookMarkerProject",
    featured: false,
  },
  {
    id: "14",
    slug: "youmy",
    title: "Youmy - Web Application",
    titleAr: "يومي - تطبيق ويب",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2023",
    description:
      "A web application built with vanilla JavaScript showcasing fundamental skills.",
    descriptionAr:
      "تطبيق ويب مبني بـ JavaScript الخالص يعرض مهارات أساسية.",
    longDescription:
      "Youmy demonstrates core JavaScript skills and modern CSS techniques.",
    longDescriptionAr:
      "يومي يوضح مهارات JavaScript الأساسية وتقنيات CSS الحديثة.",
    images: [Menuac1, Menuac2, Menuac3, Menuac4],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://youmy.vercel.app/",
    githubUrl: "https://github.com/kerolosatef1/Youmy",
    featured: false,
  },
  {
    id: "15",
    slug: "weather-app",
    title: "Weather App - Current Weather Checker",
    titleAr: "تطبيق الطقس - فاحص الطقس الحالي",
    category: "Web Application",
    categoryAr: "تطبيق ويب",
    year: "2023",
    description:
      "A weather checking application built with vanilla JavaScript.",
    descriptionAr: "تطبيق فحص الطقس مبني بـ JavaScript الخالص.",
    longDescription:
      "A simple weather application that fetches current weather data for any city using a weather API.",
    longDescriptionAr:
      "تطبيق طقس بسيط يجلب بيانات الطقس الحالية لأي مدينة.",
    images: [wheather],
    technologies: ["HTML5", "CSS3", "JavaScript", "Weather API", "Fetch API"],
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
        ? project.titleDe || project.title
        : isFrench
          ? project.titleFr || project.title
          : project.title,
    category: isArabic
      ? project.categoryAr
      : isGerman
        ? project.categoryDe || project.category
        : isFrench
          ? project.categoryFr || project.category
          : project.category,
    description: isArabic
      ? project.descriptionAr
      : isGerman
        ? project.descriptionDe || project.description
        : isFrench
          ? project.descriptionFr || project.description
          : project.description,
    longDescription: isArabic
      ? project.longDescriptionAr
      : isGerman
        ? project.longDescriptionDe || project.longDescription
        : isFrench
          ? project.longDescriptionFr || project.longDescription
          : project.longDescription,
  }
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured)
}