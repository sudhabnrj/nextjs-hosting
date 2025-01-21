"use client";
// import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  // const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (
  //       menuRef.current &&
  //       !(menuRef.current as HTMLElement).contains(event.target as Node)
  //     ) {
  //       setVisibleMenu(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  // const handleMenuClick = (menuName: string) => {
  //   setVisibleMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  // };

  return (
    <nav className="relative w-full z-50">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="hidden w-full lg:flex justify-center"  id="megamenu-cta">
            <ul className="flex lg:items-center gap-y-4 flex-col my-4 lg:my-0 lg:flex-row">
              <li className="">
                <Link
                  className="flex items-center justify-between text-black font-beatrice text-sm text-center font-medium hover:text-primary transition-all duration-500 lg:mr-8 "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-black font-beatrice text-sm text-center font-medium hover:text-primary transition-all duration-500 lg:mr-8"
                  href="/server"
                >
                  Server
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-black font-beatrice text-sm text-center font-medium hover:text-primary transition-all duration-500 lg:mr-8"
                  href="/#"
                >
                  Hosting
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-black font-beatrice text-sm text-center font-medium hover:text-primary transition-all duration-500 lg:mr-8"
                  href="/blog"
                >
                  Domains
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-black font-beatrice text-sm text-center font-medium hover:text-primary transition-all duration-500 lg:mr-8"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-black font-beatrice text-sm text-center font-medium hover:text-primary transition-all duration-500 lg:mr-8"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
