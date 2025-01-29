import Image from "next/image";
import React from "react";
import QuoteIcon from "../ui/QuoteIcon";

interface TestimonialProps {
  data: {
    authorName: string;
    designation: string;
    authorImage: string;
    comment: string;
  };
}

export default function TestimonialCard({ data }: TestimonialProps) {
  const { authorName, designation, authorImage, comment } = data;
  return (
    <div className="bg-white shadow p-8 rounded-[9px] border border-b-4 border-[#CCE4FF]">
      <QuoteIcon className="text-[#4C5671]" width={27} height={22} />
      <p className="text-secondary font-dmSans text-base leading-normal my-6">
        {comment}
      </p>
      <div className="w-full flex justify-start items-center">
        <Image alt={authorName} src={authorImage} width={50} height={50} />
        <h3 className="flex flex-col pl-3 max-w-[calc(100%-50px)] text-secondary font-semibold font-beatrice text-base">
          {authorName}
          <span className="text-[#4C5671] text-sm font-normal font-dmSans">
            {designation}
          </span>
        </h3>
      </div>
    </div>
  );
}
