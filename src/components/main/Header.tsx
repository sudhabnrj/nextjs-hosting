"use client";
import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Logo from "@/components/main/Logo";
import { SITE_LOGO } from "@/lib/constants";
import Navbar from "./Navbar";
import SupportIcon from "../ui/SupportIcon";
import AccountButton from "../account/AccountButton";
import ToggleNav from "../ui/ToggleNav";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] pt-6">
      <Container className="flex justify-between items-center lg:relative">
        {/* Logo */}
        <Link href="/" className="w-[200px]">
          <Logo className="w-36 h-11" src={SITE_LOGO} alt="Site Logo" />
        </Link>

        {/* Navbar for Mobile and Desktop */}
        <div
          className={`${
            isToggle ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative top-0 left-0 h-screen overflow-y-auto lg:overflow-visible lg:h-auto w-[300px] lg:w-[calc(100%-550px)] bg-white lg:bg-transparent shadow-md lg:shadow-none z-50 transition-transform duration-300`}
        >
          <Navbar />
        </div>

        {/* Right-side Buttons */}
        <div className="w-[295px] flex flex-row gap-x-4 items-center justify-end lg:mr-0 sm:mr-10">
          <Link
            href="#"
            className="btn-primary hidden sm:flex justify-center items-center gap-x-1 !min-w-[149px] hover:shadow-custom"
          >
            <SupportIcon width={20} height={20} className="mr-2" />
            Support
          </Link>
          <AccountButton className="w-[124px] hover:shadow-custom" />
          <ToggleNav
            aria-expanded={isToggle}
            aria-label={isToggle ? "Close menu" : "Open menu"}
            onClick={handleToggle}
          />
        </div>
      </Container>

      {/* Overlay for Mobile Menu */}
      {isToggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </header>
  );
};

export default Header;
