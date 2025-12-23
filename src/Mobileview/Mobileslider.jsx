import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../assets/mb1.jpg";
import img2 from "../assets/mb2.jpg";
import img3 from "../assets/mb3.jpg";
import img4 from "../assets/mb5.jpg";
const data = {
  slide: [
    { image: img1 },
    { image: img2 },
    { image: img3 },
     { image: img4 },

  ],
};

const Mobileslider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={0}
      className="mt-5 mb-5"
    >
      {data.slide.map((item, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg ml-6  w-[280px] h-[390px] overflow-hidden">
            <img
              src={item.image}
              className="w-full h-full object-fit"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Mobileslider;
