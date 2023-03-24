type Prop = {
  slides: { Id: number; path: string }[];
  currentIndex: number;
  switchIndex: (index: number) => void;
};

const CarouselIndicators = ({ slides, currentIndex, switchIndex }: Prop) => {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`carousel-indicator-item${
            currentIndex === index ? " active" : ""
          }`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
