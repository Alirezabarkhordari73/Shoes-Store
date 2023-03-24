type Prop = {
  slide: string;
  stopSlide: () => void;
  startSlide: () => void;
};

const CarouselItem = ({ slide, stopSlide, startSlide }: Prop) => {
  return (
    <div
      className="carousel-item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} alt="slide" className="w-full h-full object-cover" />
    </div>
  );
};

export default CarouselItem;
