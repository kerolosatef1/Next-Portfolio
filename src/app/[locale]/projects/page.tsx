import { setRequestLocale } from "next-intl/server"
import { ProjectsContent } from "./ProjectContent"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const titles = {
    en: "Projects",
    ar: "المشاريع",
    de: "Projekte",
    fr: "Projets",
  }
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ProjectsContent locale={locale} />
}