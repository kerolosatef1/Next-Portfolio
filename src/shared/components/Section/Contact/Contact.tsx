"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Send, Mail, MapPin, Loader2, Phone } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { Container } from "@/shared/components/shared/Container/Container"
import { SectionHeading } from "@/shared/components/shared/SectionHeading/SectionHeading"
import { SocialLinks } from "@/shared/components/shared/SocialLinks/SocialLinks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/shared/config/site"
import { cn } from "@/lib/utils"
import { PageHeader } from "../../shared/PageHeader/PageHeader"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const t = useTranslations("contact")
  const locale = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const isArabic = locale === "ar"

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation
      gsap.fromTo(
        ".contact-card",
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Form animation
      gsap.fromTo(
        ".contact-form",
        { 
          opacity: 0, 
          x: isArabic ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )

      // Availability badge animation
      gsap.fromTo(
        ".availability-badge",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isArabic])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(formData)
    setFormState("success")
    setIsLoading(false)
    setFormData({ name: "", email: "", message: "" })
    
    setTimeout(() => setFormState("idle"), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const labels = {
    available: {
      en: "Available for work",
      ar: "متاح للعمل",
      de: "Verfügbar für Arbeit",
      fr: "Disponible pour travailler",
    },
    or: {
      en: "Or reach out via",
      ar: "أو تواصل عبر",
      de: "Oder erreichen Sie mich über",
      fr: "Ou contactez-moi via",
    },
    getInTouch: {
      en: "Get in Touch",
      ar: "تواصل معي",
      de: "Kontaktieren Sie mich",
      fr: "Contactez-moi",
    },
    whatsapp: {
      en: "WhatsApp",
      ar: "واتساب",
      de: "WhatsApp",
      fr: "WhatsApp",
    },
    location: {
      en: "Location",
      ar: "الموقع",
      de: "Standort",
      fr: "Emplacement",
    },
    email: {
      en: "Email",
      ar: "البريد الإلكتروني",
      de: "E-Mail",
      fr: "E-mail",
    },
    followMe: {
      en: "Follow me on social media",
      ar: "تابعني على وسائل التواصل",
      de: "Folgen Sie mir in den sozialen Medien",
      fr: "Suivez-moi sur les réseaux sociaux",
    },
    success: {
      en: "Message sent successfully!",
      ar: "تم إرسال الرسالة بنجاح!",
      de: "Nachricht erfolgreich gesendet!",
      fr: "Message envoyé avec succès!",
    },
  }

  const l = (key: keyof typeof labels) =>
    labels[key][locale as keyof typeof labels.available] || labels[key].en

  const contactMethods = [
    {
      icon: Mail,
      label: l("email"),
      value: siteConfig.creator.email,
      href: `mailto:${siteConfig.creator.email}`,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "#3b82f6",
    },
    {
      icon: SiWhatsapp,
      label: l("whatsapp"),
      value: siteConfig.creator.phone || "+20 123 456 7890",
      href: `https://wa.me/${siteConfig.creator.whatsapp?.replace(/\D/g, "")}?text=${encodeURIComponent(
        `Hey Kerolos! 👋\n\nI just visited your portfolio and I'm really impressed by your work! ✨\n\nI'd love to discuss a potential project with you.\n\nLooking forward to hearing from you! 🚀`
      )}`,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "#25d366",
    },
    {
      icon: MapPin,
      label: l("location"),
      value: isArabic ? siteConfig.creator.locationAr : siteConfig.creator.location,
      href: "#",
      color: "from-red-500/20 to-red-500/5",
      iconColor: "#ef4444",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <Container>
          <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            {/* Availability Badge */}
            {siteConfig.creator.availableForWork && (
              <div className="availability-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 font-medium">{l("available")}</span>
              </div>
            )}

            <p className="contact-card text-lg text-muted-foreground">{t("description")}</p>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      "contact-card flex items-center gap-4 p-4 rounded-2xl",
                      "bg-gradient-to-br",
                      method.color,
                      "border border-border/50",
                      "hover:border-emerald-500/50 hover:-translate-y-1",
                      "transition-all duration-300",
                      method.href === "#" && "pointer-events-none"
                    )}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-background/50 rounded-xl">
                      <Icon className="h-5 w-5" style={{ color: method.iconColor }} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="text-foreground font-medium">{method.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="contact-card pt-4 p-6 rounded-2xl bg-card border border-border">
              <p className="text-muted-foreground mb-4">{l("or")}</p>
              <SocialLinks />
            </div>
          </div>

          {/* Form */}
          <form 
            onSubmit={handleSubmit} 
            className="contact-form p-8 rounded-3xl bg-card border border-border space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">{l("getInTouch")}</h3>

            <div>
              <Input
                type="text"
                name="name"
                placeholder={t("form.name")}
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 bg-secondary border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                className="h-12 bg-secondary border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                className="bg-secondary border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full gap-2 transition-all duration-300",
                formState === "success" && "bg-emerald-500 hover:bg-emerald-600"
              )}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("form.sending")}
                </>
              ) : formState === "success" ? (
                <>
                  ✓ {l("success")}
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