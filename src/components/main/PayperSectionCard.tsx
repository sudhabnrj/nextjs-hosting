import Link from "next/link";
import React from "react";
import ArrowLight from "../ui/ArrowLight";
interface PayperSectionCardType {
  title?: string;
  description?: string;
  buttonTitle?: string;
  url?: string;
}
const PayperSectionCard = ({
  title,
  description,
  buttonTitle,
  url,
}: PayperSectionCardType) => {
  return (
    <div className="group flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#E2D6FF] to-[#F6F6F6] px-4 py-8 text-center">
      <h3 className="mb-5 font-beatrice text-lg font-semibold text-primary">
        {title}
      </h3>
      <p className="mb-8 text-sm text-bodyText">{description}</p>
      <Link
        href={url as string}
        className="relative inline-flex min-w-[185px] items-center justify-center font-dmSans text-base font-medium text-primary"
      >
        {buttonTitle}
        <ArrowLight
          className="absolute right-5 top-1/2 -translate-y-1/2 transition-all ease-linear group-hover:right-3"
          width={15}
          height={15}
        />
      </Link>
    </div>
  );
};

export default PayperSectionCard;
