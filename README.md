<div align="center">

# ⟨ Kerolos Atef /⟩

### Frontend Developer Portfolio

A modern, performant, and fully internationalized portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **GSAP** animations.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge)](LICENSE)

[**Live Demo**](https://kerolos-atef-next-portfolio.vercel.app) · [**Report Bug**](https://github.com/kerolosatef1/Next-Portfolio/issues) · [**Request Feature**](https://github.com/kerolosatef1/Next-Portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Internationalization](#-internationalization)
- [Sections](#-sections)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🔍 Overview

A fully responsive, multilingual portfolio website designed to showcase my projects, skills, and professional experience as a Frontend Developer. The portfolio features smooth GSAP-powered animations, dark/light theme support, RTL layout for Arabic, and a 3D interactive project gallery.

---

## ✨ Features

- **Internationalization (i18n)** — Full support for 4 languages: English, Arabic, German, and French with `next-intl`
- **RTL Support** — Complete right-to-left layout adaptation for Arabic
- **Dark / Light Theme** — Seamless theme switching with `next-themes`, defaults to dark mode
- **GSAP Animations** — Scroll-triggered animations, timeline-based entrance effects, and smooth marquee skill rows
- **3D Project Gallery** — Interactive rotating cube built with CSS 3D transforms displaying project screenshots
- **Responsive Design** — Mobile-first approach, tested across all breakpoints from 320px to 2560px
- **SEO Optimized** — Dynamic metadata, sitemap, robots.txt, and Open Graph tags per locale
- **PWA Ready** — Web app manifest with theme color and standalone display mode
- **Server-Side Rendering** — Next.js App Router with SSR, ISR support, and static param generation
- **Contact Form** — Integrated contact section with WhatsApp, email, and social media links
- **Accessible** — Keyboard navigation, screen reader support, ARIA labels, and reduced-motion fallbacks

---

## 🛠 Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1 | React framework with App Router, SSR, ISR |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |

### UI & Animation

| Technology | Purpose |
|---|---|
| [GSAP](https://gsap.com/) + ScrollTrigger | Scroll-triggered animations and timelines |
| [Shadcn/ui](https://ui.shadcn.com/) | Accessible, customizable UI components |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Icons](https://react-icons.github.io/) | Technology and social media icons |

### Internationalization & Theming

| Technology | Purpose |
|---|---|
| [next-intl](https://next-intl-docs.vercel.app/) | i18n routing, translations, locale detection |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light theme management |

### Developer Experience

| Tool | Purpose |
|---|---|
| [Turbopack](https://turbo.build/) | Fast dev server bundler |
| [ESLint](https://eslint.org/) | Code linting |
| [Prettier](https://prettier.io/) | Code formatting |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── [locale]/
│   │   ├── layout.tsx                # Locale layout (Header, Footer, Providers)
│   │   ├── page.tsx                  # Home page
│   │   ├── about/page.tsx
│   │   ├── skills/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── certificates/page.tsx
│   │   └── contact/page.tsx
│   ├── manifest.ts                   # PWA manifest
│   ├── robots.ts                     # SEO robots
│   └── sitemap.ts                    # SEO sitemap
├── i18n/
│   └── routing.ts                    # Locale config & routing
├── messages/
│   ├── en.json
│   ├── ar.json
│   ├── de.json
│   └── fr.json
├── shared/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header/Header.tsx
│   │   │   ├── Footer/Footer.tsx
│   │   │   └── MobileMenu/MobileMenu.tsx
│   │   ├── Section/
│   │   │   ├── Hero/Hero.tsx
│   │   │   ├── About/About.tsx
│   │   │   ├── Skills/Skills.tsx
│   │   │   ├── Projects/Projects.tsx
│   │   │   ├── Experience/Experience.tsx
│   │   │   └── Contact/Contact.tsx
│   │   └── shared/                   # Reusable components
│   │       ├── Container/
│   │       ├── SectionHeading/
│   │       ├── PageHeader/
│   │       ├── PageLayout/
│   │       ├── Logo/
│   │       ├── ThemeToggle/
│   │       ├── LanguageSwitcher/
│   │       └── SocialLinks/
│   ├── hooks/
│   │   └── useGsapAnimation.ts       # Custom GSAP hook
│   ├── config/
│   │   ├── site.ts                   # Site metadata & creator info
│   │   └── navigation.ts            # Nav links config
│   └── lib/
│       └── fonts.ts                  # Font configuration
├── data/
│   └── projects.ts                   # Project data with localized content
├── components/
│   └── ui/                           # Shadcn/ui components
├── lib/
│   └── utils.ts                      # Utility functions (cn, etc.)
├── middleware.ts                      # next-intl locale middleware
public/
├── favicon.svg
└── images/
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.17
- **npm** >= 9 or **yarn** >= 1.22

### Installation

```bash
# Clone the repository
git clone https://github.com/kerolosatef1/Next-Portfolio.git

# Navigate to the project
cd Next-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the middleware will redirect to `/en` automatically.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Internationalization

The portfolio supports **4 languages** with full content translation:

| Language | Code | Direction | Font |
|---|---|---|---|
| English | `en` | LTR | Geist Sans |
| العربية (Arabic) | `ar` | RTL | Cairo |
| Deutsch (German) | `de` | LTR | Geist Sans |
| Français (French) | `fr` | LTR | Geist Sans |

**How it works:**

- `next-intl` middleware detects the user's preferred locale and redirects accordingly
- All routes are prefixed with the locale: `/en/projects`, `/ar/projects`, etc.
- Translation files are in `messages/{locale}.json`
- RTL layout is automatically applied for Arabic via `dir="rtl"` on `<html>`
- Project data (`data/projects.ts`) includes localized titles, descriptions, and categories

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | Animated entrance with name, role, CTA buttons, and social links |
| **About** | Brief bio with tech stack badges and stats (experience, projects) |
| **Skills** | 3-row infinite marquee showcasing 30+ technologies with hover pause |
| **Projects** | Interactive 3D cube gallery with project cards, filters, and detail pages |
| **Experience** | Timeline layout with company info, roles, and tech tags |
| **Certificates** | Professional certificates and achievements |
| **Contact** | Contact form, email, WhatsApp, location, and social media links |

---

## ⚡ Performance

Optimizations implemented:

- **Next.js Image Optimization** — Automatic WebP/AVIF conversion and lazy loading
- **Turbopack** — Fast development builds
- **CSS-first animation states** — Elements hidden via CSS before GSAP hydrates, preventing content flash
- **Custom `useGsapAnimation` hook** — Prevents double-firing in React lifecycle, uses `requestAnimationFrame` for DOM readiness
- **ScrollTrigger scoping** — All GSAP queries scoped to container refs, not global DOM
- **Passive scroll listeners** — Header scroll detection uses `{ passive: true }`
- **Font optimization** — `next/font` with `variable` strategy for zero layout shift
- **Static generation** — `generateStaticParams` pre-renders all locale routes

---

## 🚢 Deployment

The portfolio is deployed on **Vercel** with automatic deployments from the `main` branch.

```bash
# Deploy to Vercel
npx vercel --prod
```

### Environment Variables

No environment variables are required for the base portfolio. If you add a contact form API:

```env
NEXT_PUBLIC_CONTACT_API=your_api_endpoint
```

---

## 📬 Contact

**Kerolos Atef** — Frontend Developer

- **Portfolio:** [kerolos-atef-next-portfolio.vercel.app](https://kerolos-atef-next-portfolio.vercel.app)
- **GitHub:** [@kerolosatef1](https://github.com/kerolosatef1)
- **LinkedIn:** [Kerolos Atef](https://linkedin.com/in/faragello)
- **Email:** kerolosatef@example.com

---

<div align="center">

**Built with ❤️ by Kerolos Atef**

⭐ Star this repo if you found it helpful!

</div>
