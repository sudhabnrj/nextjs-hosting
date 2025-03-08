import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLight from "../ui/ArrowLight";
import { filterBaseUrl } from "@/lib/utility";

interface FeaturesListProps {
  title: string;
  description: string;
  icon: string;
  pageUrl: string;
  isFeatured?: boolean;
  className?: string; // optional prop to add custom styles to the component
}

export default function FeaturesList({
  title,
  description,
  icon,
  pageUrl,
  className,
  isFeatured,
}: FeaturesListProps) {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const filterUrl = filterBaseUrl(pageUrl, baseUrl || "");

  return (
    <div
      className={`${className} group relative col-span-12 rounded-[9.19px] border border-[#d4dcff] px-9 py-7 hover:border-lightBlue sm:col-span-6 lg:col-span-3`}
    >
      <Image src={icon as string} alt="VPSHosting" width={55} height={55} />
      <h3 className="mb-5 mt-6 font-beatrice text-xl font-semibold capitalize leading-normal text-secondary">
        {title}
      </h3>
      <p className="mb-6 font-dmSans text-sm font-normal leading-snug text-secondary/95">
        {description}
      </p>
      {pageUrl && (
        <>
          {!isFeatured ? (
            <Link
              className="inline-flex h-[36.74px] w-[36.74px] items-center justify-center rounded-full bg-[#ecefff] p-[11.02px] transition-all group-hover:shadow-lg"
              aria-label={`Read more about ${title}`}
              href={filterUrl}
            >
              <ArrowLight className="" width={15} height={15} />
            </Link>
          ) : (
            <Link
              className="inline-flex items-center justify-center rounded border border-[#66a9ff] bg-white/20 px-4 py-2 text-center font-dmSans text-sm font-medium capitalize leading-normal text-white transition-all group-hover:shadow-lg"
              href={filterUrl}
            >
              Learn More
            </Link>
          )}
        </>
      )}
    </div>
  );
}
