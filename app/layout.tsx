import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MedConsult Pro - Expert Medical School & Residency Application Consulting",
  description:
    "Get personalized guidance from a dermatology resident to strengthen your medical school applications, ace interviews, and secure your spot in competitive programs.",
  keywords:
    "medical school consulting, residency application help, medical school interview prep, dermatology resident consultant, medical application review",
  authors: [{ name: "MedConsult Pro" }],
  creator: "MedConsult Pro",
  publisher: "MedConsult Pro",
  openGraph: {
    title: "MedConsult Pro - Expert Medical Application Consulting",
    description: "Expert guidance for medical school and residency applications from a current dermatology resident.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedConsult Pro - Medical Application Consulting",
    description: "Expert guidance for medical school and residency applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
