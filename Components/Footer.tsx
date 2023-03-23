import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-[#eeeeee] text-black pt-14 pb-3 shadow-2xl">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-bold uppercase text-[1.2rem]cursor-pointer">
              فروشگاه مورد نظر را پیدا کنید
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-[#61addf]">
              همکار ما شوید
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-[#61addf]">
              عضویت با ایمیل
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-[#61addf]">
              پیشنهادات و انتقادات
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-[#61addf]">
              تخفیف دانش آموزی
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-bold uppercase text-[1.2rem]">
                راهنمایی
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                وضعیت سفارشات
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                ارسال شده ها
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                مرجوعی ها
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                نحوه ی پرداخت
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                ارتباط با ما
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-bold uppercase text-[1.2rem]">
                درباره نایک
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                اخبار
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                تاریخچه
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                سرمایه گذاران
              </div>
              <div className="text-sm text-black hover:text-[#61addf] cursor-pointer">
                پایداری
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3f3f3f] hover:text-[#61addf] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://twitter.com"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3f3f3f] hover:text-[#61addf] cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3f3f3f] hover:text-[#61addf] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3f3f3f] hover:text-[#61addf] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-[#424242] hover:text-[#61addf] cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-[#424242] hover:text-[#61addf] cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-[#424242] hover:text-[#61addf] cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-[#424242] hover:text-[#61addf] cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
