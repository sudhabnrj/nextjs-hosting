import { Blob } from "@/lib/constants";
import { ImageProps, SectionBlockProps } from "@/types/types";
import Image from "next/image";
import React from "react";

interface AboutContentProps {
  AboutBanner?: {
    large_image?: ImageProps;
    small_image?: ImageProps;
  };
  AboutContent?: SectionBlockProps[];
}

export default function AboutUsContent({
  AboutBanner,
  AboutContent,
}: AboutContentProps) {
  return (
    <>
      <div className="relative flex w-full flex-row items-stretch gap-4 lg:w-1/2">
        <div className="absolute -top-[40px] left-1/2 -z-10 h-[200px] w-full -translate-x-1/2 md:left-[65%] md:h-[540px] md:w-[402px]">
          <Image
            src={Blob}
            alt="blob"
            className="h-full w-full"
            width={402}
            height={540}
          />
        </div>
        <div className="w-[60%]">
          {AboutBanner && (
            <Image
              className={`w-full h-[${AboutBanner?.large_image?.height}px]`}
              src={AboutBanner?.large_image?.url as string}
              alt={AboutBanner?.large_image?.alt as string}
              width={AboutBanner?.large_image?.width as number}
              height={AboutBanner?.large_image?.height as number}
              priority
            />
          )}
        </div>
        <div className="relative top-20 w-[40%]">
          {AboutBanner && (
            <Image
              className={`w-full h-[${AboutBanner?.small_image?.height}px]`}
              src={AboutBanner?.small_image?.url as string}
              alt={AboutBanner?.small_image?.alt as string}
              width={AboutBanner?.small_image?.width as number}
              height={AboutBanner?.small_image?.height as number}
              priority
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 lg:w-1/2">
        {AboutContent &&
          AboutContent.map((item: SectionBlockProps) => (
            <div className="flex w-full flex-col gap-3" key={item.id}>
              <h3 className="font-beatrice text-2xl font-semibold">
                {item?.title}
              </h3>
              {item.description &&
                item.description.map((paragraph) => (
                  <p
                    key={paragraph.id}
                    className="font-dmSans text-base text-bodyText"
                  >
                    {paragraph?.paragraph}
                  </p>
                ))}
              {item.icon && (
                <Image
                  src={item?.icon.url as string}
                  alt="24/7 Support"
                  className="mt-3 h-10 w-10"
                  width={24}
                  height={24}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
}
