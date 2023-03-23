import React from "react";
import Carousel from "./Carousel/Carousel";

const HeroBanner = () => {
  const slides = [
    {
      path: "/slide-1.png",
    },
  ];
  return (
    <div className=" w-full h-[680px] flex justify-center mt-2 p-7">
      <Carousel slides={slides} />
    </div>
  );
};

export default HeroBanner;
