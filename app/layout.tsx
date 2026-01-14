import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import "./globals-overrides.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppButton from "@/components/whatsapp-button"
import SafeFetchProvider from "@/components/safe-fetch-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SNEF India - Premier Maritime Training Institute",
  description:
    "Located in South India, Kochi. Offering comprehensive maritime training courses for merchant navy, certifications, and placement support.",
  keywords: "maritime academy, merchant navy training, maritime courses, ship training, Kochi, maritime education",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <SiteHeader />
        <SafeFetchProvider />
        <main className="min-h-[60vh] pt-24">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  )
}
