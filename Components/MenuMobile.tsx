import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

interface menuData {
  id: number;
  name: string;
  url: string;
  subMenu?: boolean;
}

const data: menuData[] = [
  { id: 1, name: "صفحه اصلی", url: "/" },
  { id: 2, name: "درباره ما", url: "/about" },
  { id: 3, name: "دسته بندی", url: "", subMenu: true },
  { id: 4, name: "تماس با ما", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "جردن", doc_count: 11 },
  { id: 2, name: "کتونی", doc_count: 8 },
  { id: 3, name: "کتونی پیاده روی و دویدن", doc_count: 64 },
  { id: 4, name: "کتونی فوتبال", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }: Props) => {
  return (
    <ul className="flex flex-col md:hidden absolute top-[70px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-[#000000] font-medium">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative hover:bg-[#f8f8f8] transition-all duration-200"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData?.map((subMenu) => {
                      return (
                        <Link
                          key={subMenu.id}
                          href="/"
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="py-4 px-8 border-t flex justify-between ">
                            <p>{subMenu.name}</p>
                            <p>{subMenu.doc_count}</p>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b hover:bg-[#f8f8f8] transition-all duration-200">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
