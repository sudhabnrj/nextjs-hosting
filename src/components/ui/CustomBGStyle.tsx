import React from "react";
import Image from "next/image";
import { LIGHT_MERGE } from "@/lib/constants";

const CustomBGStyle = () => {
  return (
    <>
      <Image
        width={1024}
        height={980}
        className="absolute h-full w-full origin-top-left opacity-40 mix-blend-color-dodge"
        src={LIGHT_MERGE}
        alt="h"
      />
      <div className="hero-Home-bg absolute left-0 right-0 top-0 z-10 h-full mix-blend-multiply blur-xl">
        <div className="absolute -right-[70px] -top-[85px] h-[496px] w-[496px] rounded-full bg-[#d5cafa] blur-[374px]"></div>
        <div className="absolute -left-[150px] top-[130px] h-[496px] w-[496px] rounded-full bg-[#cfe5ff] blur-[74px]"></div>
      </div>
    </>
  );
};

export default CustomBGStyle;
