import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f5.png";

const data = {
  slide: [
    { img: img1 },
    { img: img2 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img1 },
  ],
};

const Fashionslider = () => {
  return (
    <div className="bg-white px-4 py-2 w-[98%] lg:ml-[12px]">

       
      <h2 className="text-[20px] font-semibold lg:ml-6  ">
        Best Sellers in Clothing & Accesories
      </h2>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        allowTouchMove
        touchRatio={4}
        grabCursor
        resistance
        resistanceRatio={0.5}
        loop
        slidesPerView={4}
        spaceBetween={10}
        className="h-[150px]"
      >
        {data.slide.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={item.img}
              alt="product"
              className="h-[140px] w-auto object-contain cursor-pointer mt-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Fashionslider;
