import Image from "next/image";
import React from "react";

interface MoneybackCardProps {
  src: string;
  title: string;
  description: string;
  alt: string;
}

export default function MoneybackCard({
  src,
  alt,
  title,
  description,
}: MoneybackCardProps) {
  return (
    <div className="w-full">
      <div className="card-header bg-[#DFE9FF] rounded-xl relative h-[160px]">
        <Image
          src={src}
          alt={alt}
          width={318}
          height={93}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:max-[1100px]:w-[95%]"
          priority
        />
      </div>
      <div className="text-center mx-auto w-full sm:max-w-[296px]">
        <h3 className="text-primary font-beatrice font-semibold text-xl mt-6 mb-3">
          {title}
        </h3>
        <p className="font-dmSans text-sm font-normal text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
