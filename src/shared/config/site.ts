export const siteConfig = {
  name: "Ahmed Mohamed | Frontend Developer",
  shortName: "Ahmed Dev",
  description:
    "Frontend Developer specialized in React, Next.js & TypeScript. Building exceptional user experiences with modern web technologies.",
  descriptionAr:
    "مطور واجهات أمامية متخصص في React, Next.js و TypeScript. أبني تجارب مستخدم استثنائية باستخدام أحدث تقنيات الويب.",
  url: "https://ahmeddev.com",
  ogImage: "/og-image.png",

  creator: {
    name: "Ahmed Mohamed",
    nameAr: "أحمد محمد",
    title: "Senior Frontend Developer",
    titleAr: "مطور واجهات أمامية",
    email: "ahmed@example.com",
    location: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    yearsOfExperience: 5,
    availableForWork: true,
  },

  links: {
    github: "https://github.com/ahmed",
    linkedin: "https://linkedin.com/in/ahmed",
    twitter: "https://twitter.com/ahmed",
    cv: "/cv.pdf",
  },

 keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "مطور واجهات أمامية",
    "مطور React",
  ],
} satisfies {
  // Type definition هنا لو محتاج
  name: string
  shortName: string
  description: string
  descriptionAr: string
  url: string
  ogImage: string
  creator: {
    name: string
    nameAr: string
    title: string
    titleAr: string
    email: string
    location: string
    locationAr: string
    yearsOfExperience: number
    availableForWork: boolean
  }
  links: {
    github: string
    linkedin: string
    twitter: string
    cv: string
  }
  keywords: string[]
}

export type SiteConfig = typeof siteConfig