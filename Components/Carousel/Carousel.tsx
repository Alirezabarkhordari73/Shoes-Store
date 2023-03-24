import { useRef, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";

type Prop = {
  slides: { Id: number; path: string }[];
  interval: number;
  controls: boolean;
  indicators: boolean;
  autoPlay: boolean;
  width: number;
};

const Carousel = ({
  slides,
  interval,
  controls = false,
  indicators,
  autoPlay,
  width,
}: Prop) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index: number) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div className="carousel" style={{ maxWidth: width }}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            slide={slide.path}
            key={slide.Id}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      {indicators && (
        <CarouselIndicators
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
      )}
      {controls && <CarouselControls prev={prev} next={next} />}
      <div className="bg-[#ffffff] w-[210px] h-[85px] flex justify-center items-center gap-2 text-[1.5rem] text-[#272727] absolute bottom-12 left-0 font-bold">
        <FaShoppingCart className="text-[1.7rem] text-[#ff6363]" />
        حالا بخرید
      </div>
    </div>
  );
};

export default Carousel;
