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
      <div className="absolute w-[402px] h-[536px] -top-[60px] left-[65%] -translate-x-1/2 -z-10">
        <Image
          src={Blob}
          alt="blob"
          className="w-full h-full"
          width={402}
          height={540}
        />
      </div>
      <div className="w-[60%]">
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
      <div className="w-[40%] h-[311px] relative top-20">
        {ImageGroup && (
          <Image
            src={ImageGroup?.small_image?.url as string}
            alt={ImageGroup?.small_image?.alt as string}
            className="w-full object-cover h-full"
            width={ImageGroup?.small_image?.width as number}
            height={ImageGroup?.small_image?.height as number}
            priority
          />
        )}
      </div>
    </>
  );
}
