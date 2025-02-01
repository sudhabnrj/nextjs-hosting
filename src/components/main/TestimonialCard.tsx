import Image from "next/image";
import React from "react";
import QuoteIcon from "../ui/QuoteIcon";

interface TestimonialProps {
  data: {
    author_name: string;
    author_designation: string;
    author_image: {
      url: string;
    };
    comments: string;
  };
}

export default function TestimonialCard({ data }: TestimonialProps) {
  const { author_name, author_designation, author_image, comments } = data;
  return (
    <div className="bg-white relative overflow-hidden shadow p-8 rounded-[9px] border border-b-4 border-[#CCE4FF] min-h-[285px] flex flex-col testimobnial-card">
      <QuoteIcon className="fill-[#4C5671]" width={27} height={22} />
      <p className="text-secondary font-dmSans text-base leading-normal my-6">
        {comments}
      </p>
      <div className="w-full flex justify-start items-center mt-auto">
        <Image
          alt={author_name}
          src={author_image?.url}
          width={50}
          height={50}
          priority
          className="rounded-full object-cover w-12 h-12"
        />
        <h3 className="flex flex-col pl-3 max-w-[calc(100%-50px)] text-secondary font-semibold font-beatrice text-base">
          {author_name}
          <span className="text-[#4C5671] text-sm font-normal font-dmSans">
            {author_designation}
          </span>
        </h3>
      </div>
    </div>
  );
}
