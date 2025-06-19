"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className="px-4 md:px-6 lg:px-[60px] bg-gray-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
                <div className="relative text-center md:text-left">
                  <h1 className="font-bold py-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl" data-aos="fade-right" data-aos-duration="1000"
                      data-aos-easing="ease-in-out">
                      ADMAR Healthcare
                    <span className="relative inline-block">
                      Professional
                    <div className='' data-aos="fade-left" data-aos-duration="900" data-aos-easing="ease-in-out-back"> 
                    <Image 
                      src="/admar/cuidados.png"
                      alt="Ícone cuidados"
                      width={80}
                      height={80}
                      className="absolute -bottom-4 -right-20 translate-x-1 translate-y-1 z-[-1]
                      sm:translate-x-2 sm:translate-y-1 md:translate-x-3 md:translate-y-1 lg:translate-x-4 lg:translate-y-1" 
                    />
                    </div>
                    </span>
                  </h1>

                  {/* <div className="relative inline-block">
                    <Image
                      src="/admar/cuidados.png"
                      alt="Ícone cuidados"
                      width={80}
                      height={80}
                      className="inline-block md:absolute md:top-0 md:right-0 mt-2"
                    />
                  </div> */}
                  <p className="py-4 text-base sm:text-lg" data-aos="fade-right" data-aos-duration="1000"
                      data-aos-easing="ease-in-out">
                    A ADMAR Healthcare é uma empresa dedicada ao cuidado e bem-estar dos nossos clientes,
                    oferecendo Atenção e cuidados profissionais ao domicílio para terceira idade.
                    Serviços de alta qualidade e atenção personalizada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 py-6 justify-center md:justify-start">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-lg px-6 py-3 text-base sm:text-lg" data-aos="fade-right" data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out">
                      Agendar Consulta
                    </Button>
                    <Button
                      className="rounded-full shadow-lg px-6 py-3 text-base sm:text-lg"
                      variant="outline" data-aos="fade-right" data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      Saber Mais
                    </Button>
                  </div>
                </div>

                {/* IMAGEM */}
                <div className="relative flex justify-center md:justify-end" data-aos="fade-left" data-aos-duration="900"
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
