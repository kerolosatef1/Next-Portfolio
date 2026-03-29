export interface AboutData {
  bio: string
  bioAr: string
  bioDe: string
  bioFr: string
  stats: {
    yearsExperience: number
    projectsCompleted: number
    happyClients: number
    technologies: number
  }
  highlights: {
    title: string
    titleAr: string
    titleDe: string
    titleFr: string
    description: string
    descriptionAr: string
    descriptionDe: string
    descriptionFr: string
  }[]
}

export const aboutData: AboutData = {
  bio: `I'm a passionate Frontend Developer with a strong focus on building modern, responsive, and user-friendly web applications. I specialize in React, Next.js, and TypeScript, and I'm always eager to learn new technologies and improve my skills.

My journey in web development started with a curiosity about how websites work, and it has grown into a career where I get to create meaningful digital experiences. I believe in writing clean, maintainable code and following best practices to deliver high-quality products.

When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.`,

  bioAr: `أنا مطور واجهات أمامية شغوف بتركيز قوي على بناء تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام. أتخصص في React و Next.js و TypeScript، وأنا دائماً متحمس لتعلم تقنيات جديدة وتحسين مهاراتي.

بدأت رحلتي في تطوير الويب بفضول حول كيفية عمل المواقع، وتطورت إلى مهنة أستطيع فيها إنشاء تجارب رقمية ذات معنى. أؤمن بكتابة كود نظيف وقابل للصيانة واتباع أفضل الممارسات لتقديم منتجات عالية الجودة.

عندما لا أكون أكتب الكود، أستمتع باستكشاف تقنيات جديدة والمساهمة في مشاريع مفتوحة المصدر ومشاركة المعرفة مع مجتمع المطورين.`,

  bioDe: `Ich bin ein leidenschaftlicher Frontend-Entwickler mit starkem Fokus auf moderne, responsive und benutzerfreundliche Webanwendungen. Ich spezialisiere mich auf React, Next.js und TypeScript und bin immer bestrebt, neue Technologien zu lernen.

Meine Reise in der Webentwicklung begann mit der Neugier, wie Websites funktionieren, und hat sich zu einer Karriere entwickelt, in der ich bedeutungsvolle digitale Erlebnisse schaffen kann.`,

  bioFr: `Je suis un développeur Frontend passionné avec un fort accent sur la création d'applications web modernes, réactives et conviviales. Je me spécialise dans React, Next.js et TypeScript, et je suis toujours désireux d'apprendre de nouvelles technologies.

Mon parcours dans le développement web a commencé par une curiosité sur le fonctionnement des sites web, et s'est transformé en une carrière où je peux créer des expériences numériques significatives.`,

  stats: {
    yearsExperience: 2,
    projectsCompleted: 15,
    happyClients: 10,
    technologies: 20,
  },

  highlights: [
    {
      title: "Problem Solver",
      titleAr: "حلال المشكلات",
      titleDe: "Problemlöser",
      titleFr: "Résolveur de problèmes",
      description: "I love tackling complex challenges and finding elegant solutions.",
      descriptionAr: "أحب مواجهة التحديات المعقدة وإيجاد حلول أنيقة.",
      descriptionDe: "Ich liebe es, komplexe Herausforderungen anzugehen.",
      descriptionFr: "J'aime relever des défis complexes et trouver des solutions élégantes.",
    },
    {
      title: "Fast Learner",
      titleAr: "متعلم سريع",
      titleDe: "Schneller Lerner",
      titleFr: "Apprenant rapide",
      description: "I quickly adapt to new technologies and frameworks.",
      descriptionAr: "أتكيف بسرعة مع التقنيات والأطر الجديدة.",
      descriptionDe: "Ich passe mich schnell an neue Technologien an.",
      descriptionFr: "Je m'adapte rapidement aux nouvelles technologies.",
    },
    {
      title: "Team Player",
      titleAr: "لاعب فريق",
      titleDe: "Teamplayer",
      titleFr: "Joueur d'équipe",
      description: "I collaborate effectively and communicate clearly with teams.",
      descriptionAr: "أتعاون بفعالية وأتواصل بوضوح مع الفرق.",
      descriptionDe: "Ich arbeite effektiv zusammen und kommuniziere klar.",
      descriptionFr: "Je collabore efficacement et communique clairement.",
    },
    {
      title: "Detail Oriented",
      titleAr: "مهتم بالتفاصيل",
      titleDe: "Detailorientiert",
      titleFr: "Orienté détails",
      description: "I pay attention to every pixel and line of code.",
      descriptionAr: "أهتم بكل بكسل وكل سطر كود.",
      descriptionDe: "Ich achte auf jedes Pixel und jede Codezeile.",
      descriptionFr: "Je fais attention à chaque pixel et ligne de code.",
    },
  ],
}

export const getLocalizedBio = (locale: string): string => {
  const bios: Record<string, string> = {
    en: aboutData.bio,
    ar: aboutData.bioAr,
    de: aboutData.bioDe,
    fr: aboutData.bioFr,
  }
  return bios[locale] || aboutData.bio
}

export const getLocalizedHighlight = (
  highlight: AboutData["highlights"][0],
  locale: string
) => {
  return {
    title:
      locale === "ar"
        ? highlight.titleAr
        : locale === "de"
        ? highlight.titleDe
        : locale === "fr"
        ? highlight.titleFr
        : highlight.title,
    description:
      locale === "ar"
        ? highlight.descriptionAr
        : locale === "de"
        ? highlight.descriptionDe
        : locale === "fr"
        ? highlight.descriptionFr
        : highlight.description,
  }
}