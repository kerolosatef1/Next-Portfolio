"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageLayout } from "@/shared/components/shared/PageLayout/PageLayout"
import { PageHeader } from "@/shared/components/shared/PageHeader/PageHeader"
import { siteConfig } from "@/shared/config/site"
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface ContactContentProps {
  locale: string
}

export function ContactContent({ locale }: ContactContentProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const cardsRef = useRef<HTMLElement[]>([])
  const [isClient, setIsClient] = useState(false)
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        )
      })

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [isClient])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setFormState("success")
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setFormState("idle"), 3000)
  }

  const labels = {
    title: {
      en: "CONTACT",
      ar: "تواصل",
      de: "KONTAKT",
      fr: "CONTACT",
    },
    subtitle: {
      en: "Have a project in mind? Let's talk",
      ar: "هل لديك مشروع في ذهنك؟ دعنا نتحدث",
      de: "Haben Sie ein Projekt im Sinn? Lassen Sie uns reden",
      fr: "Vous avez un projet en tête ? Parlons-en",
    },
    name: {
      en: "Name",
      ar: "الاسم",
      de: "Name",
      fr: "Nom",
    },
    email: {
      en: "Email",
      ar: "البريد الإلكتروني",
      de: "E-Mail",
      fr: "E-mail",
    },
    message: {
      en: "Message",
      ar: "الرسالة",
      de: "Nachricht",
      fr: "Message",
    },
    send: {
      en: "Send Message",
      ar: "إرسال الرسالة",
      de: "Nachricht senden",
      fr: "Envoyer le message",
    },
    sending: {
      en: "Sending...",
      ar: "جاري الإرسال...",
      de: "Wird gesendet...",
      fr: "Envoi en cours...",
    },
    success: {
      en: "Message sent successfully!",
      ar: "تم إرسال الرسالة بنجاح!",
      de: "Nachricht erfolgreich gesendet!",
      fr: "Message envoyé avec succès !",
    },
    error: {
      en: "Something went wrong, try again",
      ar: "حدث خطأ، حاول مرة أخرى",
      de: "Etwas ist schief gelaufen, versuchen Sie es erneut",
      fr: "Une erreur s'est produite, réessayez",
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
    available: {
      en: "Available for work",
      ar: "متاح للعمل",
      de: "Verfügbar für Arbeit",
      fr: "Disponible pour travailler",
    },
    namePlaceholder: {
      en: "Your name",
      ar: "اسمك",
      de: "Ihr Name",
      fr: "Votre nom",
    },
    emailPlaceholder: {
      en: "your@email.com",
      ar: "بريدك الإلكتروني",
      de: "ihre@email.com",
      fr: "votre@email.com",
    },
    messagePlaceholder: {
      en: "Your message...",
      ar: "رسالتك...",
      de: "Ihre Nachricht...",
      fr: "Votre message...",
    },
    emailLabel: {
      en: "Email",
      ar: "البريد الإلكتروني",
      de: "E-Mail",
      fr: "E-mail",
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
  }

  const t = (key: keyof typeof labels) => labels[key][locale as keyof typeof labels.title] || labels[key].en

  const contactMethods = [
    {
      icon: Mail,
      label: t("emailLabel"),
      value: siteConfig.creator.email,
      href: `mailto:${siteConfig.creator.email}`,
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: MessageCircle,
      label: t("whatsapp"),
      value: siteConfig.creator.whatsapp,
      href: siteConfig.links.whatsapp,
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: MapPin,
      label: t("location"),
      value: locale === "ar" ? siteConfig.creator.locationAr : siteConfig.creator.location,
      href: "#",
      color: "from-red-500/20 to-red-500/5",
    },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: siteConfig.links.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.links.linkedin },
    { icon: MessageCircle, label: "WhatsApp", href: siteConfig.links.whatsapp },
  ]

  const setCardRef = (index: number) => (el: HTMLElement | null) => {
    if (el) cardsRef.current[index] = el
  }

  return (
    <PageLayout>
      <PageHeader title={t("title")} subtitle={t("subtitle")} locale={locale} />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          {siteConfig.creator.availableForWork && (
            <div
              ref={setCardRef(0) as React.Ref<HTMLDivElement>}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 font-medium">{t("available")}</span>
            </div>
          )}

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={method.label} ref={setCardRef(index + 1) as React.Ref<HTMLDivElement>}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl",
                    "bg-gradient-to-br",
                    method.color,
                    "border border-border/50",
                    "hover:border-emerald-500/50 hover:-translate-y-1",
                    "transition-all duration-300"
                  )}
                >
                  <div className="p-3 rounded-xl bg-background/50">
                    <method.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground">{method.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div ref={setCardRef(4) as React.Ref<HTMLDivElement>} className="p-6 rounded-2xl bg-card border border-border">
            <p className="text-muted-foreground mb-4">{t("or")}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-emerald-500/20 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card border border-border space-y-6">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t("getInTouch")}</h3>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t("name")}</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder={t("namePlaceholder")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t("email")}</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder={t("emailPlaceholder")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t("message")}</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
              placeholder={t("messagePlaceholder")}
            />
          </div>

          <button
            type="submit"
            disabled={formState === "loading"}
            className={cn(
              "w-full py-4 rounded-xl font-medium transition-all duration-300",
              "flex items-center justify-center gap-2",
              formState === "success"
                ? "bg-emerald-500 text-white"
                : formState === "error"
                ? "bg-red-500 text-white"
                : "bg-emerald-500 hover:bg-emerald-600 text-white",
              formState === "loading" && "opacity-70 cursor-not-allowed"
            )}
          >
            {formState === "loading" ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t("sending")}
              </>
            ) : formState === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                {t("success")}
              </>
            ) : formState === "error" ? (
              <>
                <AlertCircle className="w-5 h-5" />
                {t("error")}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t("send")}
              </>
            )}
          </button>
        </form>
      </div>
    </PageLayout>
  )
}