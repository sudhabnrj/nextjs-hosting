import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLight from "../ui/ArrowLight";

interface FeaturesListProps {
  title: string;
  description: string;
  icon: string;
  url: string;
  isFeatured?: boolean;
  className?: string; // optional prop to add custom styles to the component
}

export default function FeaturesList({
  title,
  description,
  icon,
  url,
  className,
  isFeatured,
}: FeaturesListProps) {
  return (
    <div
      className={`${className} col-span-12 sm:col-span-6 lg:col-span-3 relative rounded-[9.19px] border border-[#d4dcff] px-9 py-7 group hover:border-lightBlue`}
    >
      <Image src={icon} alt="VPSHosting" width={55} height={55} />
      <h3 className="text-secondary text-xl font-semibold font-beatrice capitalize leading-normal mt-6 mb-5">
        {title}
      </h3>
      <p className="text-secondary/95 text-sm font-normal font-dmSans leading-snug mb-6">
        {description}
      </p>
      {!isFeatured ? (
        <Link
          className="w-[36.74px] h-[36.74px] p-[11.02px] bg-[#ecefff] rounded-full justify-center items-center inline-flex group-hover:shadow-lg transition-all"
          href={url}
        >
          <ArrowLight className="" width={15} height={15} />
        </Link>
      ) : (
        <Link
          className="bg-white/20 rounded border border-[#66a9ff] justify-center items-center inline-flex text-center text-white text-sm font-medium font-dmSans capitalize leading-normal py-2 px-4 group-hover:shadow-lg transition-all"
          href={url}
        >
          Learn More
        </Link>
      )}
    </div>
  );
}
