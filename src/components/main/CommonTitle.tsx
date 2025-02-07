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
    <div className="text-center relative max-w-max mx-auto">
      <h2 className="text-primary text-center text-3xl lg:text-4xl 2xl:text-h2-title font-semibold font-beatrice lg:leading-normal tracking-wide max-w-full md:w-max relative mx-auto w-full">
        <DividerLeft className="absolute xl:-left-[256px] -left-[50px] hidden xl:block top-1/2 -translate-y-1/2" />
        <span className={`block ${className}`}>{section_title}</span>
        <DividerRight className="absolute xl:-right-[256px] -right-[50px] hidden xl:block top-1/2 -translate-y-1/2" />
      </h2>
      {description && (
        <p className="text-bodyText text-lg font-normal font-dmSans leading-normal mt-5">
          {description}
        </p>
      )}
    </div>
  );
}
