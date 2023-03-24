import React from "react";
import Carousel from "./Carousel/Carousel";

const HeroBanner = () => {
  const slides = [
    {
      Id: 1,
      path: "/slide-1.png",
    },
    {
      Id: 2,
      path: "/slide-2.png",
    },
    {
      Id: 3,
      path: "/slide-6.jpg",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <Carousel
        slides={slides}
        controls
        indicators={false}
        interval={5000}
        autoPlay={true}
        width={1200}
      />
      <div className="w-[50%] flex justify-start items-center flex-col mt-12">
        <h1 className="text-[1.5rem] font-semibold">
          برای قدم های خود فکر کنید
        </h1>
        <p className="mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
