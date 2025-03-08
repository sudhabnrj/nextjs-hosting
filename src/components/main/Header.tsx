"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Logo from "@/components/main/Logo";
import { SITE_LOGO } from "@/lib/constants";
import Navbar from "./Navbar";
import SupportIcon from "../ui/SupportIcon";
import ToggleNav from "../ui/ToggleNav";
import AccountButton from "./../account/AccountButton";
import { useAuth } from "@/contexts/AuthContext";
import { RxAvatar } from "react-icons/rx";
import Button from "../ui/Button";
import DropdownMenu from "../account/DropdownMenu";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [visibleAccountDropdown, setVisibleAccountDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  //Account Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setVisibleAccountDropdown(false);
      }
    };

    if (visibleAccountDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleAccountDropdown]);

  if (!isClient) return null; // ✅ Prevents hydration mismatch

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-[1000] pt-6">
      <Container className="flex items-center justify-between lg:relative">
        {/* Logo */}
        <Link href="/" className="w-36">
          <Logo className="sm:h-11 sm:w-36" src={SITE_LOGO} alt="Site Logo" />
        </Link>

        {/* Navbar for Mobile and Desktop */}
        <div
          className={`${
            isToggle ? "translate-x-0" : "-translate-x-full"
          } fixed left-0 top-0 z-50 h-screen w-[300px] overflow-y-auto bg-white shadow-md transition-transform duration-300 lg:relative lg:h-auto lg:w-[calc(100%-450px)] lg:translate-x-0 lg:overflow-visible lg:bg-transparent lg:shadow-none`}
        >
          <Navbar />
        </div>

        {/* Right-side Buttons */}
        <div className="relative flex w-[295px] flex-row items-center justify-end gap-x-4 sm:mr-10 lg:mr-0">
          <Link
            href="#"
            className="btn-primary hidden !min-w-[149px] items-center justify-center gap-x-1 font-dmSans hover:shadow-custom sm:flex"
          >
            <SupportIcon width={20} height={20} className="mr-2" />
            Support
          </Link>
          {isAuthenticated ? (
            <div className="account-dropdown relative" ref={dropdownRef}>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
                onClick={() => setVisibleAccountDropdown((prev) => !prev)}
              >
                <RxAvatar className="h-7 w-7 text-blue-700" />
              </button>
              {visibleAccountDropdown && (
                <div className="dropdown-menu animate-fade -right-5 top-full z-10 mt-4 max-w-full rounded-lg bg-white p-4 md:px-5 md:py-2 lg:absolute lg:min-w-[240px] lg:py-4 lg:shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:py-8">
                  <DropdownMenu />
                </div>
              )}
            </div>
          ) : (
            <AccountButton className="w-[124px] font-dmSans hover:shadow-custom" />
          )}

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
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </header>
  );
};

export default Header;
