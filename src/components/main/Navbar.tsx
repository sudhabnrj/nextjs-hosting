"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import fetchMenu from "@/lib/fetchMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { renderErrorMessage } from "@/lib/utility";
import SupportIcon from "../ui/SupportIcon";

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
    <nav className={`${className} z-50 w-full`}>
      <Container className="mx-auto px-0">
        <div className="flex w-full flex-col lg:flex-row">
          <div
            className="flex w-full justify-start lg:justify-center"
            id="megamenu-cta"
          >
            <ul
              className="my-4 flex w-full flex-col gap-y-4 lg:my-0 lg:w-auto lg:flex-row lg:items-center"
              ref={menuRef}
            >
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex animate-pulse items-center justify-center"
                    >
                      <div className="mx-3 mb-2 h-6 w-11 rounded bg-gray-300 lg:mb-0 lg:w-11"></div>
                    </li>
                  ))
                : menuData.map((menuItem) => (
                    <li key={menuItem.ID} className="relative">
                      <Link
                        href={`/${menuItem.slug}`}
                        className={`flex items-center justify-between text-center text-lg font-medium hover:text-indigo-700 lg:text-sm 2xl:text-base ${
                          pathname === `/${menuItem.slug || ""}`
                            ? "text-lightBlue"
                            : "text-secondary"
                        } mb-2 mr-auto transition-all duration-500 lg:m-0 lg:mb-0 lg:mr-6 lg:text-left`}
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
                          <div className="dropdown-menu animate-fade top-full z-10 mt-4 max-w-full rounded-lg bg-white p-4 md:px-5 md:py-2 lg:absolute lg:left-1/2 lg:min-w-[300px] lg:-translate-x-1/2 lg:px-10 lg:py-4 lg:shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:px-8 xl:py-8">
                            <span className="caret absolute"></span>
                            <ul className="grid grid-cols-1 gap-x-4">
                              {menuItem.child_items.map((subItem) => (
                                <li className="group" key={subItem.ID}>
                                  {subItem.slug ? (
                                    <Link
                                      href={`/${menuItem.slug}/${subItem.slug}`}
                                      className="block rounded p-2 transition hover:bg-lightBlue/10 lg:px-3"
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

              <li className="flex sm:hidden">
                <Link
                  href="#"
                  className="btn-primary flex w-full items-center justify-center gap-x-1 font-dmSans hover:shadow-custom"
                >
                  <SupportIcon width={20} height={20} className="mr-2" />
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
