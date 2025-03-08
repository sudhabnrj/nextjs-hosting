import Image from "next/image";
import React from "react";
import QuoteIcon from "../ui/QuoteIcon";
import { acfTestimonial } from "@/types/types";

interface TestimonialProps {
  data: {
    acf: acfTestimonial;
  };
}

export default function TestimonialCard({ data }: TestimonialProps) {
  const { author_name, designation, author_image, comments } =
    data?.acf?.testimonial_block;
  return (
    <div className="testimobnial-card relative flex min-h-[285px] flex-col overflow-hidden rounded-[9px] border border-b-4 border-[#CCE4FF] bg-gradient-to-b from-[#D8EAFF] to-[#F6F6F6] p-8 shadow">
      <QuoteIcon className="fill-[#4C5671]" width={27} height={22} />
      <p className="my-6 font-dmSans text-base leading-normal text-secondary">
        {comments}
      </p>
      <div className="mt-auto flex w-full items-center justify-start">
        {author_image && (
          <Image
            alt={author_name}
            src={author_image?.url as string}
            width={50}
            height={50}
            priority
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <h3 className="flex max-w-[calc(100%-50px)] flex-col pl-3 font-beatrice text-base font-semibold text-secondary">
          {author_name}
          <span className="font-dmSans text-sm font-normal text-[#4C5671]">
            {designation}
          </span>
        </h3>
      </div>
    </div>
  );
}
