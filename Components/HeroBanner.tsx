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
    <Carousel
      slides={slides}
      controls
      indicators={true}
      interval={5000}
      autoPlay={true}
      width={1200}
    />
  );
};

export default HeroBanner;
