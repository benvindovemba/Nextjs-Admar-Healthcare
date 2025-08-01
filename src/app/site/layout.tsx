'use client'

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  )
}
