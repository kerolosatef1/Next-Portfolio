"use client"

import { useRef, useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Send, Mail, MapPin, Loader2 } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"
import { Container } from "@/shared/components/shared/Container/Container"
import { SocialLinks } from "@/shared/components/shared/SocialLinks/SocialLinks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/shared/config/site"
import { cn } from "@/lib/utils"
import { PageHeader } from "../../shared/PageHeader/PageHeader"
import { useGsapAnimation } from "@/shared/hooks/useGsap"

type FormState = "idle" | "loading" | "success" | "error"

export function Contact() {
  const t = useTranslations("contact")
  const locale = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState<FormState>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const isArabic = locale === "ar"
  const isLoading = formState === "loading"

  useGsapAnimation(
    sectionRef,
    [
      {
        target: "[data-contact-card]",
        from: { opacity: 0, y: 50, scale: 0.9 },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: "[data-contact-card]",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
      {
        target: "[data-contact-form]",
        from: { opacity: 0, x: isArabic ? -50 : 50 },
        to: { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        scrollTrigger: {
          trigger: "[data-contact-form]",
          start: "top 75%",
        },
      },
      {
        target: "[data-badge]",
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        scrollTrigger: {
          trigger: "[data-badge]",
          start: "top 80%",
        },
      },
    ],
    [isArabic]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")

    // TODO: Replace with actual email service (EmailJS, Resend, etc.)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setFormState("success")
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
      value: isArabic
        ? siteConfig.creator.locationAr
        : siteConfig.creator.location,
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
            {siteConfig.creator.availableForWork && (
              <div
                data-badge
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-emerald-500 font-medium">
                  {l("available")}
                </span>
              </div>
            )}

            <p data-contact-card className="text-lg text-muted-foreground">
              {t("description")}
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    data-contact-card
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl",
                      "bg-gradient-to-br",
                      method.color,
                      "border border-border/50",
                      "hover:border-emerald-500/50 hover:-translate-y-1",
                      "transition-all duration-300",
                      method.href === "#" && "pointer-events-none"
                    )}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-background/50 rounded-xl shrink-0">
                      <Icon
                        className="h-5 w-5"
                        style={{ color: method.iconColor }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        {method.label}
                      </p>
                      <p className="text-foreground font-medium truncate">
                        {method.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div
              data-contact-card
              className="pt-4 p-6 rounded-2xl bg-card border border-border"
            >
              <p className="text-muted-foreground mb-4">{l("or")}</p>
              <SocialLinks />
            </div>
          </div>

          {/* Form */}
          <form
            data-contact-form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-card border border-border space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {l("getInTouch")}
            </h3>

            <Input
              type="text"
              name="name"
              placeholder={t("form.name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 bg-secondary border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />

            <Input
              type="email"
              name="email"
              placeholder={t("form.email")}
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 bg-secondary border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />

            <Textarea
              name="message"
              placeholder={t("form.message")}
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-secondary border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
            />

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
                <>✓ {l("success")}</>
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