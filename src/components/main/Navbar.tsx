"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import fetchMenu from "@/lib/fetchMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { renderErrorMessage } from "@/lib/utility";

// Define MenuItem type to describe the structure of each menu item
interface MenuItem {
  ID: string; // or number, based on your data
  slug: string;
  title: string;
  url?: string;
  child_items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]); // Typing menuData
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
  const [isError, setIsError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetchMenu("primary-main-menu");
        if (!response || !response.items) {
          throw new Error("Failed to fetch menu.");
        }
        setMenuData(response.items);
        setLoading(false);
      } catch (error) {
        setIsError((error as Error).message);
      } finally {
        setLoading(false);
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

  if (isError) {
    return renderErrorMessage({
      isError,
      message: "Menu failed to load. Please try again later.",
    });
  }

  return (
    <nav className={`${className} w-full z-50`}>
      <Container className="mx-auto px-0">
        <div className="w-full flex flex-col lg:flex-row">
          <div
            className="w-full flex justify-start lg:justify-center"
            id="megamenu-cta"
          >
            <ul
              className="w-full lg:w-auto flex lg:items-center gap-y-4 flex-col my-4 lg:my-0 lg:flex-row"
              ref={menuRef}
            >
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <li
                      key={index}
                      className="animate-pulse flex justify-center items-center"
                    >
                      <div className="bg-gray-300 rounded w-11 lg:w-11 h-6 mb-2 lg:mb-0 mx-3"></div>
                    </li>
                  ))
                : menuData.map((menuItem) => (
                    <li key={menuItem.ID} className="relative">
                      <Link
                        href={`${menuItem.slug}`}
                        className={`flex items-center justify-between text-center text-sm 2xl:text-base font-medium hover:text-indigo-700 ${
                          pathname === `/${menuItem.slug || ""}`
                            ? "text-lightBlue"
                            : "text-secondary"
                        } transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0`}
                        onClick={(e) => {
                          if (menuItem.child_items) {
                            e.preventDefault(); // Prevent navigation for menu with children
                            handleMenuClick(menuItem.ID);
                          }
                        }}
                      >
                        {menuItem.title}
                        {menuItem.child_items &&
                        menuItem.child_items.length > 0 ? (
                          <MdKeyboardArrowDown />
                        ) : null}
                      </Link>
                      {menuItem.child_items &&
                        menuItem.child_items.length > 0 &&
                        visibleMenu === menuItem.ID && (
                          <div className="dropdown-menu animate-fade z-10 lg:absolute top-full lg:-translate-x-1/2 lg:left-1/2 bg-white rounded-lg lg:shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-full lg:min-w-[300px] xl:py-8 lg:py-4 md:py-2 mt-4">
                            <span className="caret absolute"></span>
                            <ul className="grid grid-cols-1 gap-x-4">
                              {menuItem.child_items.map((subItem) => (
                                <li className="group" key={subItem.ID}>
                                  {subItem.slug ? (
                                    <Link
                                      href={`/${menuItem.slug}/${subItem.slug}`}
                                      className="lg:px-3 p-2 block rounded transition hover:bg-lightBlue/10"
                                      onClick={() => setVisibleMenu(null)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ) : (
                                    <span className="px-3 py-5">
                                      {subItem.title}
                                    </span>
                                  )}
                                </li>
                              ))}
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
