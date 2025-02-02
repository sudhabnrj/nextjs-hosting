import React from "react";
import Logo from "@/components/main/Logo";
import Link from "next/link";
import Container from "../ui/Container";
import Image from "next/image";
import { PayentCard } from "@/lib/constants";
import SocialIcons from "../ui/SocialIcons";
import Copyright from "../ui/Copyright";
import fetchMenu from "@/lib/fetchMenu";
import { filterBaseUrl } from "@/lib/utility";
import { FooterMenu, MenuItem, ChildItem } from "@/types/menuTypes";

export default async function Footer() {
  const footerMenu: FooterMenu = await fetchMenu("footer-menu");

  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <footer className="bg-gradient-to-b from-[#28118a] to-[#022253] pt-12">
      <Container>
        <div className="flex justify-between lg:flex-row flex-col items-start xl:gap-8">
          <div className="space-y-8 lg:max-w-[280px] xl:max-w-[319px]">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm leading-6 text-white">
              HostFlow is a secure, ad-free hosting platform with custom domain
              support and easy management tools for businesses.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="">
                <Image
                  src={PayentCard}
                  width={282}
                  height={29}
                  alt="payment accepted"
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[calc(100%-319px)] mt-16 xl:mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:col-span-2">
              {footerMenu?.items &&
                footerMenu?.items.map((menu: MenuItem) => (
                  <div key={menu.ID} className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-normal font-beatrice text-white">
                      {menu.title}
                    </h3>
                    <ul role="list" className="mt-6 space-y-4 font-beatrice">
                      {menu?.child_items &&
                        menu?.child_items.map((child: ChildItem) => (
                          <li key={child.ID}>
                            <Link
                              href={`/${filterBaseUrl(child.url, baseUrl || "")}`}
                              className="text-sm leading-normal text-[#D0D2D6] hover:text-white"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="py-5 border-t border-white/20 mt-6 flex sm:flex-row flex-col justify-center sm:justify-between items-center">
          <Copyright text="&copy; HostFlow 2024, all rights reserved" />
          <div className="flex-end max-w-36 flex items-center sm:mt-0 mt-3 gap-x-3">
            <SocialIcons />
          </div>
        </div>
      </Container>
    </footer>
  );
}
