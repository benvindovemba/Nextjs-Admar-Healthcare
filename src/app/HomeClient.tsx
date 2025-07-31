'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import SobreResumo from './site/about-us/resumo/page'
import ServicePage from './site/service/ServicePage'
import Testimonials from './site/testimonials/page'
import Gallery from './site/gallery/GalleryClient'
import Appointment from './site/appointment/AppointmentClient'
import Footer from './components/Footer/Footer'

export default function HomeClient() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <SobreResumo />
      <ServicePage />
      <Testimonials />
      <Gallery />
      <Appointment />
      <Footer />
    </>
  )
}