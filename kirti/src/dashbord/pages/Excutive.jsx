import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

import Slider1 from "./slider/slider1/Slider1";
import Slider2 from "./slider/slider2/Slider2";
import Slider3 from "./slider/slider3/Slider3";
import Slider4 from "./slider/slider4/Slider4";

const Excutive = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Header />
      <Navbar />

      <div className="pt-[100px] h-screen">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          grabCursor={true}
          speed={800}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>

          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>

          <SwiperSlide>
            <Slider3 />
          </SwiperSlide>

          <SwiperSlide>
            <Slider4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Excutive;
