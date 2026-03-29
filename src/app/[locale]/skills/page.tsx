import { setRequestLocale } from "next-intl/server"
import { Header } from "@/shared/components/Layout/Header/Header"
import { Footer } from "@/shared/components/Layout/Footer/Footer"
import { SkillsContent } from "./SkillsContent"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params

  return {
    title: locale === "ar" ? "المهارات" : "Skills",
    description: locale === "ar" ? "مهاراتي التقنية" : "My Technical Skills",
  }
}

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <SkillsContent locale={locale} />
     
    </>
  )
}