"use client";
// import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SignOut } from "../auth/signout-button";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
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
    <nav className="relative  w-full b py-3 z-50">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="hidden w-full lg:flex lg:pl-11" id="megamenu-cta">
            <ul className="flex lg:items-center gap-y-4 flex-col my-4 lg:my-0 lg:flex-row">
              <li className="">
                <Link
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  href="/#"
                >
                  Servers
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  href="/#"
                >
                  Hosting
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row gap-y-4 lg:items-center ml-auto justify-center">
              {!session?.user ? (
                <Link
                  className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100"
                  href="/auth/signin"
                >
                  Sign In
                </Link>
              ) : (
                <div className="flex gap-x-4">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    src={session?.user?.image ?? "https://i.pravatar.cc/300"}
                    alt="avatar"
                  />
                  <SignOut />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
