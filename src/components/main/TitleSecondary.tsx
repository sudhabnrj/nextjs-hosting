import Link from "next/link";
import React from "react";

interface CommonTitleProps {
  subTitle?: string;
  section_title?: string;
  description?: string;
  className?: string;
  button_url?: string;
  button_title?: string;
}

export default function TitleSecondary({
  subTitle,
  section_title,
  description,
  className,
  button_url,
  button_title,
}: CommonTitleProps) {
  return (
    <div className={`${className} relative w-full`}>
      {subTitle && (
        <p className="text-transparent bg-custom-gradient bg-clip-text">
          {subTitle}
        </p>
      )}
      <h2 className="text-primary text-3xl lg:text-4xl 2xl:text-h2-title font-semibold font-beatrice lg:leading-normal tracking-wide max-w-full relative w-full">
        <span>{section_title}</span>
      </h2>
      {description && (
        <p className="text-bodyText text-lg font-normal font-dmSans leading-normal mt-5">
          {description}
        </p>
      )}
      {button_url && (
        <div className="flex mt-5">
          <Link
            rel="prefetch"
            href={button_url}
            className="btn-primary sm:flex justify-center items-center gap-x-1 !min-w-[149px] hover:shadow-custom"
          >
            {button_title}
          </Link>
        </div>
      )}
    </div>
  );
}
