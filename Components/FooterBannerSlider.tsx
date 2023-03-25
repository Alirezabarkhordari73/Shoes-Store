import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {};

const FooterBannerSlider = (props: Props) => {
  const slides = [
    {
      Id: 1,
      path: "/FooterBannerSlider-1.png",
    },
    {
      Id: 2,
      path: "/FooterBannerSlider-2.png",
    },
    {
      Id: 3,
      path: "/FooterBannerSlider-3.png",
    },
    {
      Id: 4,
      path: "/FooterBannerSlider-4.png",
    },
    {
      Id: 5,
      path: "/FooterBannerSlider-5.png",
    },
    {
      Id: 6,
      path: "/FooterBannerSlider-1.png",
    },
    {
      Id: 7,
      path: "/FooterBannerSlider-2.png",
    },
    {
      Id: 8,
      path: "/FooterBannerSlider-3.png",
    },
    {
      Id: 9,
      path: "/FooterBannerSlider-4.png",
    },
    {
      Id: 10,
      path: "/FooterBannerSlider-5.png",
    },
  ];
  return (
    <div className="w-full h-[220px] flex justify-center items-center bg-[#f7f7f7]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        centeredSlides={true}
      >
        {slides.map((product) => (
          <SwiperSlide key={product.Id}>
            <div className="flex justify-center items-center">
              <img
                src={product?.path}
                alt={product.path}
                className="banner-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FooterBannerSlider;
