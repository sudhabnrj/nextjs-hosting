import Image from "next/image";
import React from "react";
import BlazingPerformanceBg from "./BlazingPerformanceBG";
import CircleDotIcon from "./CircleDotIcon";

interface BlazingGridProps {
  className: string;
  banner_left_block?: {
    title: string;
    list_item: Array<{ item_title: string; item_icon: string }>;
  };
  banner_right_block?: {
    title: string;
    image: string;
  };
}
const BlazingGrid = ({
  banner_left_block,
  banner_right_block,
  className,
}: BlazingGridProps) => {
  const getImageSrc = (src: string | undefined) =>
    src ? src : "/no-image.png";

  return (
    <div
      className={`relative ${className} ${
        banner_left_block?.list_item ? "lg:mr-14" : "lg:ml-14"
      }`}
    >
      <BlazingPerformanceBg className="" />
      <div className="absolute left-0 top-0 w-full p-5">
        <p className="flex items-center font-beatrice">
          <CircleDotIcon className="mx-3 fill-black" width={15} height={15} />
          {banner_left_block?.list_item
            ? banner_left_block?.title
            : banner_right_block?.title}
        </p>
        {banner_left_block?.list_item ? (
          <ul className="mt-4 flex w-full flex-col">
            {banner_left_block?.list_item.map((list, index) => (
              <li
                key={index}
                className="mb-2 flex items-center justify-start gap-x-4 rounded-lg bg-white p-2 font-dmSans text-sm font-medium text-primary shadow-custom"
              >
                <Image
                  width={40}
                  height={40}
                  src={getImageSrc(list?.item_icon)}
                  alt="99.9% Uptime Guarantee"
                />
                <p>{list?.item_title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Image
            className="mt-4"
            src={getImageSrc(banner_right_block?.image)}
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
