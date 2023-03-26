import HeroBanner from "@/Components/HeroBanner";
import ProductCard from "@/Components/ProducrCard";
import Wrapper from "@/Components/Wrapper";

ProductCard;
export default function Home() {
  return (
    <main className="w-full min-h-[100vh]">
      <HeroBanner />

      <Wrapper className="w-full flex justify-center">
        <div className="w-[50%] flex justify-start items-center flex-col mt-12">
          <h1 className="text-[1.5rem] font-bold">
            خرید کتونی آسان تر از همیشه
          </h1>
          <p className="mt-3 text-center">
            با خیالی راحت و بسیار آسون کتونی مورد علاقه ات رو ببین و انتخاب کن !
            خیلی راحت و ساده بخر و در اسرع وقت تحویل بگیر !
          </p>
        </div>
      </Wrapper>
      <div className="flex justify-center items-start">
        <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
