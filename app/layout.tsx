import Providers from "./provider"
import type { Metadata } from "next"

import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import Header from "./header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S7 Airlines",
  description: "S7 Airlines test web app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("text-gray-600", inter.className)}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
