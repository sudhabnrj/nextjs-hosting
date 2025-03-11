import Image from "next/image";
import React from "react";
import Link from "next/link";

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  price: number | string;
  features: string[] | React.ReactNode;
  url: string;
}

const PricingCard = ({
  icon,
  title,
  price,
  features,
  url
}: PricingCardProps) => {
  return (
    <div
      className={`"bg-white  rounded-3xl shadow-custom flex-col justify-start items-start inline-flex p-10 text-secondary border border-lightBlue/20 mx-auto   w-full sm:w-[400px] xl:w-[363px] lg:w-[320px]`}
    >
      <p>
        <Image src={icon as string} alt="globe" width={40} height={40} />
      </p>
      <h3 className="capitalize text-2xl font-beatrice mt-6">{title}</h3>
      <p className="text-sm font-medium font-dmSans leading-tight">
        The King of domains
      </p>
      <h4 className="text-5xl font-semibold font-beatrice leading-normal mt-8 mb-10">
        <span className="leading-[56px">₹</span>
        {price}
        <span
          className={`"text-secondary/80"
          text-sm font-medium font-dmSans leading-normal`}
        >
          / per month
        </span>
      </h4>

        <Link href={url} className="h-[50px] transition-opacity opacity-1 hover:opacity-85 button-order w-full border-lightBlue bg-transparent hover:shadow-md">
          <span className="text-lg font-semibold font-dmSans leading-tight">
            Pick Domain
          </span>
        </Link>

      <div className="w-full h-[0px] border border-[#ededed] mt-8 mb-8"></div>

      <h5 className="text-xl font-semibold font-beatrice leading-normal mb-4">
        Features
      </h5>
      
      <div
        className={`price-description w-full flex justify-start items-center text-sm mb-3  "text-bodyText" font-dmSans`}
      >
        {/* <TickIcon className="mr-2 fill-lightBlue" width={20} height={20} /> */}
        {features}
      </div>
    </div>
  );
};

export default PricingCard;
