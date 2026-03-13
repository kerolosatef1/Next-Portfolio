"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Send, Mail, MapPin, Loader2 } from "lucide-react"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"
import { SocialLinks } from "@/shared/components/shared/SocialLinks/SocialLinks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/shared/config/site"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const t = useTranslations("contact")
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(formData)
    setIsLoading(false)
    setFormData({ name: "", email: "", message: "" })
    alert(t("success"))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div className="contact-content space-y-8">
            <p className="text-lg text-muted-foreground">{t("description")}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-xl">
                  <Mail className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.creator.email}`}
                    className="text-foreground hover:text-emerald-500 transition-colors"
                  >
                    {siteConfig.creator.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-xl">
                  <MapPin className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">{siteConfig.creator.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Follow me on social media
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-content space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder={t("form.name")}
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 bg-card border-border focus:border-emerald-500"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder={t("form.email")}
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 bg-card border-border focus:border-emerald-500"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder={t("form.message")}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card border-border focus:border-emerald-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("form.sending")}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {t("form.send")}
                </>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}