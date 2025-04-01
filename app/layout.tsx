import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <div className="h-16 bg-white border-b"></div>
})

export const metadata = {
  title: "Shree Laxminarayan Vivah Kendra",
  description: "Find your perfect match with our AI-powered matrimonial platform",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`} suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
import './globals.css'