import { setRequestLocale } from "next-intl/server"
import { AboutContent } from "./AboutContent"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return {
    title: locale === "ar" ? "نبذة عني" : "About Me",
    description: locale === "ar" ? "تعرف علي أكثر" : "Get to know me better",
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <AboutContent locale={locale} />
}