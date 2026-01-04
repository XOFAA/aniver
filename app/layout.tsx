import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aniversário da Mavie 🎀 2 Anos",
  description: "Convite de aniversário da Mavie - Tema Cinderela",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },

  // ✅ DOMÍNIO CERTO
  metadataBase: new URL("https://mavie.gdelivery.app.br"),

  openGraph: {
    title: "Aniversário da Mavie 🎀 2 Anos",
    description: "Convite de aniversário da Mavie - Tema Cinderela",
    url: "https://mavie.gdelivery.app.br",
    siteName: "Aniversário da Mavie",
    images: [
      {
        url: "/mavie-foto.jpg", // ou melhor: /cinderela-capa.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Convite de aniversário da Mavie",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aniversário da Mavie 🎀 2 Anos",
    description: "Convite de aniversário da Mavie - Tema Cinderela",
    images: ["/mavie-foto.jpg"],
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
