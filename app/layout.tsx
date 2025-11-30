import type React from "react"
import type { Metadata } from "next"
import { Inter, IBM_Plex_Sans, Roboto_Flex } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
})

export const metadata: Metadata = {
  title: "PillarHome - Manage Rentals With Clarity, Control, and Confidence",
  description: "PillarQ helps landlords and property teams automate rent collection, track tenants, and manage properties from a modern, secure platform built for the Rwandan market.",
  generator: "pillarh",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable} ${robotoFlex.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
