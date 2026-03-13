import { Header } from "@/shared/components/Layout/Header/Header"
import { Footer } from "@/shared/components/Layout/Footer/Footer"
import { Hero } from "@/shared/components/Section/Hero/Hero"
import { About } from "@/shared/components/Section/About/About"
import { Skills } from "@/shared/components/Section/Skills/Skills"
import { Projects } from "@/shared/components/Section/Projects/Projects"
import { Experience } from "@/shared/components/Section/Experience/Experience"
import { Contact } from "@/shared/components/Section/Contact/Contact"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}