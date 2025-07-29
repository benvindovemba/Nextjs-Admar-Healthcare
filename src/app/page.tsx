'use client'

import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner"
import Explorer from "./explorer/Explorer";
import AboutUs from "./site/about-us/page";
import Selling from "./selling/page";
import InstantCare from "./instant/page";
import Footer from "./components/Footer/Footer";
import Explore from "./explorer/page";
import Order from "./order/page";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Service from "./site/service/page";
import Doctor from "./site/doctor/page";
import Blog from "./site/blogs/page";
import Gallery from "./site/gallery/page";
import SobreResumo from "./site/about-us/resumo/page";
import AdminPanel from "./components/admin/AdminPanel";
import Testimonials from "./site/testimonials/page";
import Appointment from "./site/appointment/page";

export default function Home() {
    useEffect(() => {
      AOS.init({
        //
      });
    }, []);

    return (
    <>
      <Header />
      <Banner />
      <SobreResumo /> 
      <Service />
      <Testimonials />
      <Gallery />
      <Appointment />
      <Footer />
      
    </>
  );
}
