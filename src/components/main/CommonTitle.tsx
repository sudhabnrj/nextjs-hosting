import React from "react";
import DividerLeft from "../ui/DividerLeft";
import DividerRight from "../ui/DividerRight";

interface CommonTitleProps {
  title: string;
  subHeading?: string;
  className?: string;
}

export default function CommonTitle({
  title,
  subHeading,
  className,
}: CommonTitleProps) {
  return (
    <div className="text-center relative max-w-max mx-auto">
      <h2 className="text-primary text-center text-3xl lg:text-4xl 2xl:text-h2-title font-semibold font-beatrice lg:leading-normal tracking-wide max-w-full lg:max-w-[774px] md:w-max relative mx-auto w-full">
        <DividerLeft className="absolute xl:-left-[256px] -left-[50px] hidden xl:block top-1/2 -translate-y-1/2" />
        <span className={`block ${className}`}>{title}</span>
        <DividerRight className="absolute xl:-right-[256px] -right-[50px] hidden xl:block top-1/2 -translate-y-1/2" />
      </h2>
      {subHeading && (
        <p className="text-bodyText text-lg font-normal font-dmSans leading-normal mt-5">
          {subHeading}
        </p>
      )}
    </div>
  );
}
