import { setRequestLocale } from "next-intl/server"
import { Header } from "@/shared/components/Layout/Header/Header"
import { Footer } from "@/shared/components/Layout/Footer/Footer"
import { ExperienceContent } from "./ExperienceContent"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params

  return {
    title: locale === "ar" ? "الخبرات" : "Experience",
    description: locale === "ar" ? "خبراتي المهنية" : "My Professional Experience",
  }
}

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <ExperienceContent locale={locale} />
      
    </>
  )
}