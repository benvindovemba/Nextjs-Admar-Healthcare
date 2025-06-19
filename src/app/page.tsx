'use client'

import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Explorer from "./components/Explorer/Explorer";
import SolutionStep from "./components/Solution/SolutionStep";
import ConsultSolution from "./components/Consult/ConsultSolution";
import Appointment from "./components/Appointment/Appointment";
import AboutUs from "./components/About Us/AboutUs";
import Selling from "./components/Selling/Selling";
import InstantCare from "./components/Instant/InstantCare";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explorer/Explore";
import Order from "./components/Order/Order";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

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
      <AboutUs />
      <InstantCare />
      <SolutionStep />
      <Appointment />
      <Testimonials />
      <Footer />

      {/************************** */}
      {/* <Explore />
      
      <Order />
      
      {/* <Explorer /> 
      <ConsultSolution />
      
      <Selling /> 
      
      <InstantCare /> */}
      
    </>
  );
}
