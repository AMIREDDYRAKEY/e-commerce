import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";
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

const Bikeslider = () => {
  return (
      <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 2500,          
        disableOnInteraction: false, 
      }}
      
      loop={true}
      slidesPerView={4}
      spaceBetween={20}
      className="w-[98%] h-[200px] bg-white"
    >
      {data.slide.map((item, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <img
            src={item.img}
            alt="product"
            className="h-[140px] w-auto object-contain cursor-pointer mt-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Bikeslider;
