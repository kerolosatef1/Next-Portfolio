import { Geist, Geist_Mono, Cairo } from "next/font/google"

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
})