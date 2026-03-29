import { setRequestLocale } from "next-intl/server"
import { Header } from "@/shared/components/Layout/Header/Header"
import { Footer } from "@/shared/components/Layout/Footer/Footer"
import { ContactContent } from "./ContactContent"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params

  return {
    title: locale === "ar" ? "تواصل معي" : "Contact",
    description: locale === "ar" ? "تواصل معي" : "Get in touch with me",
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <ContactContent locale={locale} />
      
    </>
  )
}