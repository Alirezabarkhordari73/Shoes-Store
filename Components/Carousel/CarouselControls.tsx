type Prop = {
  prev: () => void;
  next: () => void;
};

const CarouselControls = ({ prev, next }: Prop) => {
  return (
    <div>
      <button className="carousel-control left" onClick={prev}>
        Prev
      </button>
      <button className="carousel-control right" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default CarouselControls;
