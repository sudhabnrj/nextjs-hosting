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
    <div className="flex flex-col justify-center items-center bg-custom-gradient pt-12 pb-8 px-10 gap-4 rounded-md">
      <h2 className="text-white text-4xl font-semibold">{section_title}</h2>
      <p className="text-white font-dmSans">{description}</p>
      <Link
        className="group btn-secondary hover:opacity-85 inline-flex justify-between items-center font-medium shadow-custom font-beatrice !text-sm relative !min-w-[160px] !pr-10"
        href={`/${filterUrl}`}
      >
        {button_title}
        <ArrowLight
          className="absolute right-5 group-hover:right-3 transition-all ease-linear"
          width={15}
          height={15}
        />
      </Link>
    </div>
  );
}
