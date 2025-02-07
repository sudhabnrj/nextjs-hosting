import React from "react";
import TitleSecondary from "./TitleSecondary";
import Image from "next/image";
import Link from "next/link";
import { filterBaseUrl } from "@/lib/utility";

interface AlternateBlockProps {
  className?: string;
  src?: string;
  alt?: string;
  subTitle?: string;
  section_title?: string;
  description?: string;
  imagePosition: string;
  buttonSectionTitle?: string;
  buttonSectionUrl?: string;
}

export default function AlternateBlock({
  className = "",
  src,
  alt,
  subTitle,
  section_title,
  description,
  imagePosition,
  buttonSectionTitle,
  buttonSectionUrl,
}: AlternateBlockProps) {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const filterUrl = filterBaseUrl(buttonSectionUrl, baseUrl || "#");

  return (
    <div className={`${className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
      <div
        className={`thumb-img w-full flex ${
          imagePosition === "left"
            ? "md:order-1 justify-start"
            : "md:order-2 justify-end"
        }`}
      >
        <Image
          className="w-full"
          src={src as string}
          alt={alt || "Alternate Block Thumb"}
          width={400}
          height={400}
        />
      </div>
      <div
        className={`text-left px-0 leading- ${
          imagePosition === "left" ? "md:order-2" : "md:order-1"
        }`}
      >
        <TitleSecondary
          subTitle={subTitle}
          section_title={section_title}
          description={description}
        />
        {buttonSectionUrl && (
          <Link
            className="btn-primary sm:inline-flex justify-center font-beatrice items-center gap-x-1 !min-w-[200px] hover:shadow-custom"
            href={`/${filterUrl}`}
          >
            {buttonSectionTitle}
          </Link>
        )}
      </div>
    </div>
  );
}
