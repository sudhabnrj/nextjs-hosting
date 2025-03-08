import React from "react";
import Image from "next/image";
import EmailIconWhite from "../ui/EmailIconWhite";
import { alternateBlock, compareListItem } from "@/types/types";

interface alternateBlockProps {
  alternateBlock: alternateBlock;
}

const CompareHostingAlternateBlock = ({
  alternateBlock,
}: alternateBlockProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-between lg:mb-16 xl:flex-row">
      <div
        className={`mx-auto flex w-full flex-col gap-4 sm:w-[544px] ${alternateBlock?.banner_position?.value === "right" ? "order-2 mr-auto xl:order-1" : "order-2 ml-auto"}`}
      >
        <h3 className="font-dmSans text-4xl font-bold text-primary">
          {alternateBlock?.title}
        </h3>
        <p className="font-base font-dmSans text-[#4C5671]">
          {alternateBlock?.description}
        </p>
        {alternateBlock?.compare_list_item && (
          <ul className="flex flex-col gap-4">
            {alternateBlock?.compare_list_item.map(
              (compareList: compareListItem) => (
                <li
                  key={compareList?.id}
                  className="font-sm flex items-center justify-start gap-4 rounded-md border border-gray-200 p-5 font-dmSans text-[#4C5671]"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-10 w-10"
                    src={compareList?.icon?.url as string}
                    alt={compareList?.icon?.alt as string}
                  />
                  <span className="w-[calc(100%-50px)]">
                    {compareList?.content}
                  </span>
                </li>
              ),
            )}
          </ul>
        )}
      </div>
      <div
        className={`thumb relative mx-auto mb-10 h-auto w-full items-center justify-center sm:flex sm:h-[339px] sm:w-[495px] xl:mx-0 xl:mb-0 ${alternateBlock?.banner_position?.value === "right" ? "order-1 xl:order-2 xl:justify-end" : "order-1 xl:justify-start"} `}
      >
        {alternateBlock?.banner_position?.value === "right" ? (
          <div className="mb-5 flex flex-col justify-between gap-2 sm:mb-0 sm:block">
            <div className="-left-4 bottom-[140px] flex items-center justify-center rounded-md bg-custom-gradient px-8 py-4 font-beatrice font-semibold text-white sm:absolute sm:-left-12">
              Seo Score
              <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white">
                90
              </span>
            </div>
            <div className="-left-4 bottom-[40px] flex items-center justify-center rounded-md bg-custom-gradient px-8 py-4 font-beatrice font-semibold text-white sm:absolute sm:-left-5">
              Performance
              <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white">
                90
              </span>
            </div>
          </div>
        ) : (
          <div className="absolute -bottom-5 left-1/2 right-1/2 flex w-[315px] -translate-x-1/2 items-center justify-center gap-4 rounded-md bg-custom-gradient px-6 py-5 sm:-right-[50px] sm:left-[unset] sm:translate-x-0 sm:justify-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0774FF]">
              <EmailIconWhite className={"h-5 w-5"} fill={"#fff"} />
            </span>
            <div className="flex w-[calc(100%-50px)] flex-col items-start justify-start text-white">
              <span className="font-beatrice font-semibold">Hostie Mail</span>
              <p className="font-dmSans text-[11px]">
                Shared Unlimited hosting Plan Comes with unlimited Free Email
                addresses.
              </p>
            </div>
          </div>
        )}

        <Image
          className="h-auto w-full sm:w-auto"
          src={alternateBlock?.block_image?.url as string}
          alt={alternateBlock?.block_image?.alt as string}
          width={alternateBlock?.block_image?.width as number}
          height={alternateBlock?.block_image?.height as number}
          priority
        />
      </div>
    </div>
  );
};

export default CompareHostingAlternateBlock;
