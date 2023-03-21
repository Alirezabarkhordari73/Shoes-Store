import React from "react";
import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

interface menuData {
  id: number;
  name: string;
  url: string;
  subMenu?: boolean;
}

const Menu = ({ showCatMenu, setShowCatMenu }: Props) => {
  const data: menuData[] = [
    { id: 1, name: "صفحه اصلی", url: "/" },
    { id: 2, name: "درباره ما", url: "/about" },
    { id: 3, name: "دسته بندی", url: "", subMenu: true },
    { id: 4, name: "تماس با ما", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li className="flex items-center gap-1 relative">
              <p className="Link">{item.name}</p>
              <MdKeyboardArrowDown />

              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] h-[400px] px-1 py-1 text-black shadow-lg">
                  {subMenuData?.map((item) => {
                    return <div key={item.id}></div>;
                  })}
                </ul>
              )}
            </li>
          ) : (
            <li className="Link">
              <Link href={item.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
