import React from "react";

import { FreeMode, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroBanner = () => {
  return (
    <div className="overflow-hidden w-full h-[620px] flex justify-center mt-2">
      <Swiper
        pagination={{ clickable: true }}
        navigation
        className="Hero-Banner"
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src="/slide-1.png" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide-2.png" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide-3.png" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide-4.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
