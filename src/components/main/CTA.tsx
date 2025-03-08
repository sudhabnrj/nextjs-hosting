import React from "react";
import Link from "next/link";
import ArrowLight from "../ui/ArrowLight";
import { filterBaseUrl } from "@/lib/utility";

interface CTAProps {
  section_title?: string;
  description?: string;
  button_title: string;
  button_url?: string;
}

export default function CTA({
  section_title,
  description,
  button_title,
  button_url,
}: CTAProps) {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const filterUrl = filterBaseUrl(button_url, baseUrl || "#");

  return (
    <div className="cta-bg relative flex flex-col items-center justify-center gap-4 rounded-md bg-custom-gradient px-5 pb-8 pt-12 sm:px-10">
      <h2 className="text-3xl font-semibold text-white lg:text-4xl">
        {section_title}
      </h2>
      <p className="font-dmSans text-base font-medium text-white sm:text-xl">
        {description}
      </p>
      <Link
        className="btn-secondary group relative inline-flex !min-w-[160px] items-center justify-between !pr-10 font-beatrice !text-base font-medium shadow-custom hover:opacity-85 lg:!text-base"
        href={`/${filterUrl}`}
      >
        {button_title}
        <ArrowLight
          className="absolute right-5 transition-all ease-linear group-hover:right-3"
          width={15}
          height={15}
        />
      </Link>
    </div>
  );
}
