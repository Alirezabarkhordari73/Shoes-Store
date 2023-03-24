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
      path: "/slide-3.png",
    },
    {
      Id: 4,
      path: "/slide-4.jpg",
    },
    {
      Id: 5,
      path: "/slide-5.jpg",
    },
    {
      Id: 6,
      path: "/slide-6.jpg",
    },
  ];
  return (
    <Carousel
      slides={slides}
      controls
      indicators={false}
      interval={5000}
      autoPlay={true}
      width={1200}
    />
  );
};

export default HeroBanner;
