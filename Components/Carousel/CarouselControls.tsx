import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
type Prop = {
  prev: () => void;
  next: () => void;
};

const CarouselControls = ({ prev, next }: Prop) => {
  return (
    <div>
      <button className="carousel-control left" onClick={prev}>
        <p>قبلی</p>
        <MdArrowBackIosNew />
      </button>
      <button className="carousel-control right" onClick={next}>
        <MdArrowForwardIos />
        <p>بعدی</p>
      </button>
    </div>
  );
};

export default CarouselControls;
