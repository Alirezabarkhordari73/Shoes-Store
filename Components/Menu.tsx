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
    { id: 1, name: "جردن", doc_count: 11 },
    { id: 2, name: "کتونی", doc_count: 8 },
    { id: 3, name: "کتونی پیاده روی و دویدن", doc_count: 64 },
    { id: 4, name: "کتونی فوتبال", doc_count: 107 },
  ];
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li className="flex items-center gap-1 relative">
              <p className="Link">{item.name}</p>
              <MdKeyboardArrowDown
                onClick={() => setShowCatMenu(!showCatMenu)}
                className="text-[1.2rem] cursor-pointer"
              />

              {showCatMenu && (
                <ul className="bg-white absolute top-8 left-0 min-w-[260px] px-1 py-1 text-black shadow-lg">
                  {subMenuData?.map((subMenu) => {
                    return (
                      <Link
                        key={subMenu.id}
                        href="/"
                        onClick={() => setShowCatMenu(false)}
                      >
                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md cursor-pointer">
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
