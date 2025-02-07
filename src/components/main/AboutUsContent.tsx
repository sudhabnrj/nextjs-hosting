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
      <div className="w-1/2 relative flex flex-row items-stretch gap-4">
        <div className="absolute w-[402px] h-[540px] -top-[40px] left-[65%] -translate-x-1/2 -z-10">
          <Image
            src={Blob}
            alt="blob"
            className="w-full h-full"
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
        <div className="w-[40%] relative top-20">
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
      <div className="w-1/2 flex flex-col gap-3">
        {AboutContent &&
          AboutContent.map((item: SectionBlockProps) => (
            <div className="w-full flex flex-col gap-3" key={item.id}>
              <h3 className="text-2xl font-beatrice font-semibold">
                {item?.title}
              </h3>
              {item.description &&
                item.description.map((paragraph) => (
                  <p
                    key={paragraph.id}
                    className="font-dmSans text-bodyText text-base"
                  >
                    {paragraph?.paragraph}
                  </p>
                ))}
              {item.icon && (
                <Image
                  src={item?.icon.url}
                  alt="24/7 Support"
                  className="w-10 h-10 mt-3"
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
