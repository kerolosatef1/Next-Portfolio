export const siteConfig = {
  name: "Kerolos Atef | Frontend Developer",
  shortName: "Kerolos Dev",
  description:
    "Frontend Developer specialized in React, Next.js & TypeScript. Building exceptional user experiences with modern web technologies.",
  descriptionAr:
    "مطور واجهات أمامية متخصص في React, Next.js و TypeScript. أبني تجارب مستخدم استثنائية باستخدام أحدث تقنيات الويب.",
  url: "https://Kerolosdev.com",
  ogImage: "/og-image.png",

  creator: {
    name: "Kerolos Atef",
    nameAr: "كيرلس عاطف",
    title: "Juinor Frontend Developer",
    titleAr: "مطور واجهات أمامية",
    email: "atefkerolos25@gmail.com",
    phone: "+201212092100", 
    whatsapp: "+201212092100",
    location: "Nasr City, Cairo, Egypt",
    locationAr: "مدينة نصر، القاهرة، مصر",
    yearsOfExperience: 2,
    availableForWork: true,
  },

  links: {
    github: "https://github.com/kerolosatef1",
    linkedin: "https://linkedin.com/in/faragello",
    whatsapp: "https://wa.me/201212092100", 
    cv: "https://drive.google.com/drive/folders/1VeA450DS2rEXd_oO5uAMHJGehb3g6z_4?usp=sharing",
  },

 keywords: [
    "Frontend Developer",
    "React  Developer",
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
    phone:string
    whatsapp:string
    location: string
    locationAr: string
    yearsOfExperience: number
    availableForWork: boolean
  }
  links: {
    github: string
    linkedin: string
    cv: string
    whatsapp:string
  }
  keywords: string[]
}

export type SiteConfig = typeof siteConfig