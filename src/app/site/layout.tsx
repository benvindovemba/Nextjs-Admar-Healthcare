'use client'

import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"



export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  )
}
