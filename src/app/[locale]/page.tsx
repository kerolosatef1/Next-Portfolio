import { Hero } from "@/shared/components/Section/Hero/Hero"
import { About } from "@/shared/components/Section/About/About"
import { Skills } from "@/shared/components/Section/Skills/Skills"
import { Projects } from "@/shared/components/Section/Projects/Projects"
import { Experience } from "@/shared/components/Section/Experience/Experience"
import { Contact } from "@/shared/components/Section/Contact/Contact"
import { setRequestLocale } from "next-intl/server"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <About />
      <Skills locale={locale} />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}