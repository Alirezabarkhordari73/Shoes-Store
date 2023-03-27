import Image from "next/image";
import Link from "next/link";
import StarRate from "./StarRate";

import { GiShoppingCart } from "react-icons/gi";

const ProductCard = () => {
  return (
    <Link
      href={`/product`}
      className="transform overflow-hidden relative bg-white duration-300 transition-all hover:scale-105 cursor-pointer"
    >
      <Image width={380} height={380} src="/slide-8.webp" alt="" />
      <div className="mt-3 flex flex-col justify-start px-2">
        <div className="flex justify-between items-start">
          <h1 className="text-[0.9rem] text-gray-400">نام محصول</h1>
          <StarRate Ratevalue={4} />
        </div>
        <div className="pl-5 mt-2">
          <p className="text-[#2e2e2e] text-[0.9rem]">
            در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان
            نگه داریم و همیشه در دسترس شما قرار دهیم
          </p>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex gap-2 mt-2">
            <h1 className="text-[#66b3e6] text-[1.1rem] font-semibold tracking-[1px]">
              3200
            </h1>
            <h1 className="text-[#66b3e6] text-[1.1rem] font-semibold">
              تومان
            </h1>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="text-[#66b3e6] text-[1.1rem] font-semibold">10%</h1>
            <h1 className="text-[#66b3e6] text-[1.1rem] font-semibold tracking-[1px]">
              تخفیف
            </h1>
          </div>
        </div>
      </div>
      <div className="w-14 h-14 rounded-full bg-[#66b3e6] cursor-default absolute top-3 left-3 flex justify-center items-center text-white">
        جدید
      </div>
      <GiShoppingCart className="absolute top-3 right-3 flex justify-center items-center text-[#8a8a8a] text-[1.8rem] hover:text-[#66b3e6] transition-all duration-200" />
    </Link>
  );
};

export default ProductCard;
