import React from "react";

interface HostingSolutionListProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function HostingSolutionList({
  title,
  description,
  icon,
}: HostingSolutionListProps) {
  return (
    <div className="pl-8 relative">
      <div className="w-10 h-10 p-2 bg-white rounded-xl  shadow-[0px 0px 0px 1px #E1E1E1] border border-[#dedfe4] justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
          <div className="w-6 h-6 relative">{icon}</div>
        </div>
      </div>
      <h3 className="text-secondary text-2xl font-medium font-beatrice leading-loose mt-6">
        {title}
      </h3>
      <p className="w-full md:w-[456px] text-bodyText text-base font-normal font-dmSans leading-normal mt-3">
        {description}
      </p>
    </div>
  );
}
