import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { projects, getProjectBySlug } from "@/data/projects"
import { ProjectPageContent } from "./ProjectPageContent"
import { Header } from "@/shared/components/Layout/Header/Header"
import { Footer } from "@/shared/components/Layout/Footer/Footer"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return projects.flatMap((project) =>
    ["en", "ar", "de", "fr"].map((locale) => ({
      locale,
      slug: project.slug,
    }))
  )
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <ProjectPageContent project={project} locale={locale} />
      
    </>
  )
}