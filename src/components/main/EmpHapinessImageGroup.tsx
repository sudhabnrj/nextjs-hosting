import { Blob } from "@/lib/constants";
import { ImageProps } from "@/types/types";
import Image from "next/image";
import React from "react";

interface ImageGroupProps {
  ImageGroup?: {
    large_image?: ImageProps;
    small_image?: ImageProps;
  };
}
export default function EmpHapinessImageGroup({ ImageGroup }: ImageGroupProps) {
  return (
    <>
      <div className="absolute -top-[60px] left-1/2 -z-10 h-[300px] w-full -translate-x-1/2 sm:w-[402px] md:h-[536px] xl:left-[65%]">
        <Image
          src={Blob}
          alt="blob"
          className="h-full w-full"
          width={402}
          height={540}
        />
      </div>
      <div className="h-auto w-[100%] sm:w-[60%]">
        {ImageGroup && (
          <Image
            src={ImageGroup?.large_image?.url as string}
            alt={ImageGroup?.large_image?.alt as string}
            className="w-full"
            width={ImageGroup?.large_image?.width as number}
            height={ImageGroup?.large_image?.height as number}
            priority
          />
        )}
      </div>
      <div className="relative top-20 h-auto w-[100%] sm:h-[311px] sm:w-[40%]">
        {ImageGroup && (
          <Image
            src={ImageGroup?.small_image?.url as string}
            alt={ImageGroup?.small_image?.alt as string}
            className="h-full w-full object-cover"
            width={ImageGroup?.small_image?.width as number}
            height={ImageGroup?.small_image?.height as number}
            priority
          />
        )}
      </div>
    </>
  );
}
