"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import fetchMenu from "@/app/api/nav/route";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { CgMenuGridO } from "react-icons/cg";

interface NavbarProps {
  className: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [menuData, setMenuData] = useState([]);
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);

  const menuRef = useRef(null);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const getMenu = async () => {
      const response = await fetchMenu("primary-main-menu");
      if (response) {
        setMenuData(response.items);
      }
    };

    getMenu();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setVisibleMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMenuClick = (menuName: string) => {
    setVisibleMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  // if (!menuData || menuData.length === 0) {
  //   return (
  //     <ul className="flex lg:items-center gap-y-4 flex-col my-4 lg:my-0 lg:flex-row">
  //       {Array.from({ length: 6 }).map((_, index) => (
  //         <li key={index} className="animate-pulse">
  //           <div className="bg-gray-200 rounded w-11 lg:w-11 h-6 mb-2 lg:mr-6 lg:mb-0"></div>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <nav className={` ${className} w-full z-50`}>
      <Container className="mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          <div
            className="w-full flex justify-start lg:justify-center"
            id="megamenu-cta"
          >
            <ul
              className="w-full lg:w-auto flex lg:items-center gap-y-4 flex-col my-4 lg:my-0 lg:flex-row"
              ref={menuRef}
            >
              {menuData.map((menuItem) => (
                <li key={menuItem?.ID} className="">
                  <Link
                    href={`/${menuItem?.slug || "#"}`}
                    className={`flex items-center justify-between text-sm text-center lg:text-base font-medium hover:text-indigo-700 ${
                      pathname === `/${menuItem.slug || ""}`
                        ? "text-lightBlue"
                        : "text-secondary"
                    } transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0`}
                    onClick={(e) => {
                      if (menuItem.child_items) {
                        e.preventDefault(); // Prevent navigation for menu with children
                        handleMenuClick(menuItem?.ID);
                      }
                    }}
                  >
                    {menuItem?.title}
                    {menuItem.child_items?.length > 0 ? (
                      <MdKeyboardArrowDown />
                    ) : null}
                  </Link>
                  {menuItem.child_items?.length > 0 &&
                    visibleMenu === menuItem.ID && (
                      <div className="dropdown-menu animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white rounded-lg lg:shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 mx-w-full lg:max-w-[400px] xl:py-8 lg:py-4 md:py-2 mt-4">
                        <ul className="grid grid-cols-1 gap-x-4">
                          {menuItem.child_items.map(
                            (subItem: object | array) => (
                              <li key={subItem?.ID}>
                                {subItem.slug ? (
                                  <Link
                                    href={`/hosting/${subItem.slug}`}
                                    className="px-3 py-3 block"
                                    onClick={() => setVisibleMenu(null)}
                                  >
                                    {subItem.title}
                                  </Link>
                                ) : (
                                  <span className="px-3 py-5 ...">
                                    {subItem.title}
                                  </span>
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
