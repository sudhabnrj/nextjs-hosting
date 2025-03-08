import React from "react";
import DividerLeft from "../ui/DividerLeft";
import DividerRight from "../ui/DividerRight";

interface CommonTitleProps {
  section_title?: string;
  description?: string;
  className?: string;
}

export default function CommonTitle({
  section_title,
  description,
  className,
}: CommonTitleProps) {
  return (
    <div className="relative mx-auto max-w-max text-center">
      <h2 className="relative mx-auto w-full max-w-full text-center font-beatrice text-3xl font-semibold tracking-wide text-primary md:w-max lg:max-w-[700px] lg:text-4xl lg:leading-normal min-[1400px]:max-w-[900px] 2xl:text-h2-title min-[1680px]:max-w-full">
        <DividerLeft className="absolute -left-[50px] top-1/2 hidden -translate-y-1/2 xl:-left-[256px] xl:block" />
        <span className={`block ${className}`}>{section_title}</span>
        <DividerRight className="absolute -right-[50px] top-1/2 hidden -translate-y-1/2 xl:-right-[256px] xl:block" />
      </h2>
      {description && (
        <p className="mt-5 font-dmSans text-lg font-normal leading-normal text-bodyText">
          {description}
        </p>
      )}
    </div>
  );
}
