import { setRequestLocale } from "next-intl/server"
import { Header } from "@/shared/components/Layout/Header/Header"
import { Footer } from "@/shared/components/Layout/Footer/Footer"
import { CertificatesContent } from "./CertificateContent"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params

  return {
    title: locale === "ar" ? "الشهادات" : "Certificates",
    description: locale === "ar" ? "شهاداتي المهنية" : "My Professional Certifications",
  }
}

export default async function CertificatesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <CertificatesContent locale={locale} />
      
    </>
  )
}