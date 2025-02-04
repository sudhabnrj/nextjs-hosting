import React from "react";
import Link from "next/link";
import GetStartedIcon from "@/components/ui/GetStartedIcon";
import Image, { StaticImageData } from "next/image";

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
}: heroProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2 flex justify-start flex-col items-start">
        <p className="font-beatrice font-medium text-lg text-secondary capitalize mb-5">
          <span className="dot w-2 h-2 rounded-full bg-custom-gradient inline-block mr-3"></span>
          {sub_title}
        </p>
        <h1 className="text-primary font-semibold font-beatrice text-left text-3xl lg:text-4xl leading-normal relative capitalize mb-5">
          {title}
        </h1>
        <p className="text-base text-bodyText">{description}</p>
        <div className="mt-5 flex justify-center min-[420px]:flex-row flex-col items-center gap-4 min-[420px]:gap-x-4 relative">
          <Link
            href={primaryBtnUrl || "#"}
            className="group btn-secondary hover:opacity-85 !py-1 !pr-1 !pl-8 flex justify-center items-center gap-x-2 font-medium shadow-custom font-beatrice"
          >
            {primaryBtnTitle}
            <span className="bg-custom-gradient rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <GetStartedIcon className="" width={20} height={20} />
            </span>
          </Link>
          <Link
            href={secondaryBtnurl || "#"}
            className="group btn-outline border border-bodyText text-center text-black font-beatrice font-medium  bg-transparent flex justify-center items-center text-sm relative !min-w-[100px]"
          >
            {secondaryBtnTitle} / <span>mo</span>
          </Link>
        </div>
        <p className="text-secondary">{offerText}</p>
      </div>
      <div className="w-1/2 flex flex-end justify-end">
        <Image
          src={bannerImg as string}
          alt={"globe"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
