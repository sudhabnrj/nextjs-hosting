import Link from "next/link";
import React from "react";
import TickIcon from "../ui/TickIcon";
import { listItemDataProps } from "@/types/types";

interface CommonTitleProps {
  subTitle?: string;
  section_title?: string;
  description?: string;
  className?: string;
  button_url?: string;
  button_title?: string;
  listItemData?: listItemDataProps[];
}

export default function TitleSecondary({
  subTitle,
  section_title,
  description,
  className,
  button_url,
  button_title,
  listItemData,
}: CommonTitleProps) {
  return (
    <div className={`${className} relative w-full`}>
      {subTitle && (
        <p className="bg-clip-text text-transparent bg-custom-gradient text-lg font-semibold font-dmSans mb-5">
          {subTitle}
        </p>
      )}
      <h2 className="text-primary text-3xl lg:text-4xl 2xl:text-h2-title font-semibold font-beatrice lg:leading-normal tracking-wide max-w-full relative w-full">
        {section_title}
      </h2>
      {description && (
        <p className="text-bodyText text-lg font-normal font-dmSans leading-normal mt-5">
          {description}
        </p>
      )}
      <ul className="mt-5 grid grid-cols-2 gap-4">
        {listItemData &&
          listItemData.map((list: listItemDataProps) => (
            <li key={list?.id} className=" flex items-center">
              <TickIcon
                className="mr-2 fill-lightBlue"
                width={20}
                height={20}
              />
              <span className="w-[calc(100%-25px)]">{list?.list_item}</span>
            </li>
          ))}
      </ul>
      {button_url && (
        <div className="flex mt-5">
          <Link
            rel="prefetch"
            href={button_url}
            className=" btn-primary sm:flex justify-center font-beatrice items-center gap-x-1 !min-w-[180px] hover:shadow-custom"
          >
            {button_title}
          </Link>
        </div>
      )}
    </div>
  );
}
