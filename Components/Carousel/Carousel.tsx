import { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxDot } from "react-icons/rx";

type Prop = {
  slides: { path: string }[];
};

const ImageSlider = ({ slides }: Prop) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  // };

  return (
    <div className="relative w-full flex justify-center items-start bg-slate-600">
      <div className="absolute bottom-5 right-0 flex justify-center items-center gap-1">
        <IoIosArrowForward
          onClick={goToPrevious}
          className="w-[70px] h-[2.2rem] bg-[#00000077] text-white"
        />
        <IoIosArrowBack
          onClick={goToNext}
          className="w-[70px] h-[2.2rem] bg-[#00000077] text-white"
        />
      </div>

      {slides.map((item, index) => (
        <img
          key={index}
          src={item.path}
          className="w-full h-full object-cover aspect-[16/8]"
        />
      ))}

      <div className="absolute bottom-0 flex justify-center items-center gap-1">
        {slides.map((slide, slideIndex) => (
          <RxDot
            className="text-[2rem] text-[#000000a1]"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
