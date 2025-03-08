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
        <div className="flex flex-col items-start justify-between lg:flex-row xl:gap-8">
          <div className="space-y-8 lg:max-w-[280px] xl:max-w-[319px]">
            <Link href="/" className="w-36">
              <Logo className="sm:h-11 sm:w-36" />
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

          <div className="mt-16 w-full lg:w-[calc(100%-319px)] xl:mt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 xl:col-span-2">
              {footerMenu?.items &&
                footerMenu?.items.map((menu: MenuItem) => (
                  <div key={menu.ID} className="flex flex-col">
                    <h3 className="font-beatrice text-lg font-semibold leading-normal text-white">
                      {menu.title}
                    </h3>
                    <ul role="list" className="mt-6 space-y-4 font-beatrice">
                      {menu?.child_items &&
                        menu?.child_items.map((child: ChildItem) => (
                          <li key={child.ID}>
                            <Link
                              href={`/${filterBaseUrl(
                                child.url,
                                baseUrl || "",
                              )}`}
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
        <div className="mt-6 flex flex-col items-center justify-center border-t border-white/20 py-5 sm:flex-row sm:justify-between">
          <Copyright text="&copy; HostFlow 2024, all rights reserved" />
          <div className="flex-end mt-3 flex max-w-36 items-center gap-x-3 sm:mt-0">
            <SocialIcons />
          </div>
        </div>
      </Container>
    </footer>
  );
}
