import React from "react";
import Link from "next/link";
import GetStartedIcon from "@/components/ui/GetStartedIcon";
import Image, { StaticImageData } from "next/image";
import { filterBaseUrl } from "@/lib/utility";

interface heroProps {
  sub_title?: string;
  title?: string;
  description?: string;
  offerText?: string;
  primaryBtnTitle?: string;
  primaryBtnUrl?: string;
  secondaryBtnTitle?: string;
  secondaryBtnurl?: string;
  bannerImg?: string | StaticImageData;
  alt?: string;
  animatedBanner?: string[] | undefined;
}

export default function HeroCommon({
  sub_title,
  title,
  description,
  offerText,
  primaryBtnTitle,
  primaryBtnUrl,
  secondaryBtnTitle,
  secondaryBtnurl,
  bannerImg,
  animatedBanner,
  alt,
}: heroProps) {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const filterUrl = filterBaseUrl(primaryBtnUrl, baseUrl || "#");

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <div className="flex w-full flex-col items-start justify-start lg:w-1/2 min-[1600px]:w-[calc(100%-520px)]">
        <p className="mb-5 font-dmSans text-sm font-semibold capitalize text-secondary">
          <span className="dot mr-3 inline-block h-2 w-2 rounded-full bg-custom-gradient"></span>
          {sub_title}
        </p>
        <h1 className="relative mb-5 text-left font-beatrice text-[28px] font-semibold capitalize leading-relaxed text-primary min-[480px]:text-[32px] sm:text-4xl lg:text-5xl lg:leading-normal">
          {title}
        </h1>
        <p className="text-start font-dmSans text-base font-medium text-bodyText">
          {description}
        </p>
        <div className="relative mt-5 flex w-full flex-col items-center justify-start gap-4 min-[420px]:flex-row min-[420px]:gap-x-4">
          <Link
            href={filterUrl || "#"}
            className="btn-secondary group flex items-center justify-center gap-x-2 !py-1 !pl-8 !pr-1 font-beatrice font-medium shadow-custom hover:opacity-85"
          >
            {primaryBtnTitle}
            <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-custom-gradient">
              <GetStartedIcon className="" width={20} height={20} />
            </span>
          </Link>
          {secondaryBtnTitle && (
            <Link
              href={secondaryBtnurl || "#"}
              className="btn-outline group relative flex !min-w-[100px] items-center justify-center border border-bodyText bg-transparent text-center font-beatrice text-sm font-medium text-black"
            >
              {secondaryBtnTitle}
            </Link>
          )}
        </div>
        <p className="mt-4 font-dmSans text-sm font-medium text-secondary">
          {offerText}
        </p>
      </div>
      <div className="flex-end group flex w-full max-w-[500px] justify-start lg:w-1/2 lg:justify-end">
        {bannerImg && (
          <div
            className={
              animatedBanner && animatedBanner.length > 0
                ? "relative rounded-xl border-[2px] border-white"
                : "relative rounded-xl"
            }
          >
            <Image
              className={
                animatedBanner && animatedBanner.length > 0
                  ? "relative top-6 rounded-xl transition-all group-hover:right-0 group-hover:top-0 sm:right-5"
                  : "relative rounded-xl"
              }
              src={bannerImg as string}
              alt={alt as string}
              width={500}
              height={500}
            />
          </div>
        )}
      </div>
    </div>
  );
}
