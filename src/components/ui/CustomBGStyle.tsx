import React from "react";
import Image from "next/image";
import { LIGHT_MERGE } from "@/lib/constants";

const CustomBGStyle = () => {
  return (
    <>
      <Image
        width={1024}
        height={980}
        className="w-full h-full origin-top-left absolute opacity-40 mix-blend-color-dodge"
        src={LIGHT_MERGE}
        alt="h"
      />
      <div className="hero-Home-bg absolute h-full z-10 top-0 left-0 right-0 mix-blend-multiply blur-xl">
        <div className="w-[496px] h-[496px] bg-[#d5cafa] rounded-full blur-[374px] absolute -top-[85px] -right-[70px]"></div>
        <div className="w-[496px] h-[496px] bg-[#cfe5ff] rounded-full blur-[74px] absolute top-[130px] -left-[150px]"></div>
      </div>
    </>
  );
};

export default CustomBGStyle;
