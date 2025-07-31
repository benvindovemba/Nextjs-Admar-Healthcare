"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Button } from '../../../components/ui/Button';
import Link  from 'next/link';

const Banner = () => {
  return (
    <div className="px-4 md:px-6 lg:px-[60px] bg-gray-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[1, 2].map((_, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="container py-10 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                {/* TEXTO */}
                <div className="relative ">
                  <h1 className="font-bold py-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl" 
                  data-aos="fade-right" 
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out">
                      ADMAR Healthcare
                    <span className="relative inline-block">
                      Professional{" "}
                    </span>
                  </h1>
                  {/* ÍCONE CUIDADOS DECORATIVO */}
                   <div className="absolute lg:top-58 top-8 md:top-33 right-28 -md:right-50 lg:right-1 z-10"
                   data-aos="fade-left" 
                   data-aos-duration="900" 
                   data-aos-easing="ease-in-out-back"> 
                    <Image 
                      src="/admar/cuidados.png"
                      alt="Ícone cuidados"
                      width={80}
                      height={80}
                    />
                    </div>
                  {/* DESCRIÇÃO */} 
                  <p className="py-4 text-base sm:text-lg" 
                  data-aos="fade-right" 
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out">
                    Serviços especializados em cuidados geriátricos no domicílio ou em clínica, 
                    com uma equipa multidisciplinar pronta para atender com empatia e profissionalismo.
                  </p>
                  {/* BOTÕES */}
                  <div className="md:flex gap-4 py-6 grid">
                    <Link href="/site/appointment">
                      <Button variant="accent" 
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-lg px-6 py-7 text-base sm:text-lg gap-2" 
                      data-aos="fade-right" 
                      data-aos-delay="50"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out">
                        Agendar Consulta
                      </Button>
                    </Link>
                    <Link href="/site/about-us">
                      <Button variant="ghost"
                        className="w-full bg-gray-200 hover:bg-gray-500 active:bg-gray-500 hover:text-white active:text-white rounded-md shadow-lg px-6 py-7 text-base sm:text-lg gap-2"
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                     >
                        Saber Mais
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* IMAGEM */}
                <div className="relative flex justify-center md:justify-end" 
                data-aos="fade-left" 
                data-aos-duration="900"
                data-aos-easing="ease-in-out-back">
                  <Image
                    src={index === 0 ? "/admar/4.png" : "/admar/5.png"}
                    alt="Imagem destaque"
                    width={300}
                    height={300}
                    className="w-64 h-auto md:w-96"
                  />
                  {/* <div className='' data-aos="fade-left"> */}
                  <Image
                    src="/admar/cuidados.png"
                    alt="Ícone cuidados decorativo"
                    width={100}
                    height={100}
                    className="absolute top-0 right-0"
                  />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;