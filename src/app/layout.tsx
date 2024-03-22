import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Navbar from "./header/navbar"
import Footer from "./footer/footer"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "appscrip",
  description:
    "Appscrip evolved from years of experience making mobility solutions and being a tech solution provider for startups. We soon realized that there was no specialized provider who can act as a technology partner for startups that are working on on-demand , social , discovery , messaging and shopping platforms and that brought about the whole idea that is APPSCRIP today",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
