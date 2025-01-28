import Image from "next/image";
import React from "react";
import BlazingPerformanceBg from "./BlazingPerformanceBG";
import CircleDotIcon from "./CircleDotIcon";
import {
  FasterLoad,
  GlobalCDN,
  GuaranteeIcon,
  ProvenReliability,
} from "@/lib/constants";

interface BlazingGridProps {
  title: string;
  className: string;
  list: boolean;
}
const BlazingGrid = ({ title, list, className }: BlazingGridProps) => {
  return (
    <div className={`relative ${className} ${list ? "lg:mr-14" : "lg:ml-14"}`}>
      <BlazingPerformanceBg className="" />
      <div className="absolute top-0 left-0 w-full p-5">
        <p className="flex items-center font-beatrice">
          <CircleDotIcon className="mx-3 fill-black" width={15} height={15} />
          {title}
        </p>
        {list ? (
          <ul className="flex flex-col w-full mt-4">
            <li className="flex bg-white rounded-lg shadow-custom p-2 justify-start items-center gap-x-4 mb-2 text-primary text-sm font-medium font-dmSans">
              <Image
                width={40}
                height={40}
                src={GuaranteeIcon}
                alt="99.9% Uptime Guarantee"
              />
              <p>99.9% Uptime Guarantee</p>
            </li>
            <li className="flex bg-white rounded-lg shadow-custom p-2 justify-start items-center gap-x-4 mb-2 text-primary text-sm font-medium font-dmSans text-start">
              <Image
                width={40}
                height={40}
                src={FasterLoad}
                alt="5x Faster Load Times with SSDs"
              />
              <p>5x Faster Load Times with SSDs</p>
            </li>
            <li className="flex bg-white rounded-lg shadow-custom p-2 justify-start items-center gap-x-4 text-primary text-sm font-medium font-dmSans text-start">
              <Image
                width={40}
                height={40}
                src={GlobalCDN}
                alt="Global CDN for Local Speeds"
              />
              <p>Global CDN for Local Speeds</p>
            </li>
          </ul>
        ) : (
          <Image
            className="mt-4"
            src={ProvenReliability}
            alt="Proven reliability"
            width={280}
            height={168}
          />
        )}
      </div>
    </div>
  );
};

export default BlazingGrid;
