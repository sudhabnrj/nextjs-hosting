import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import TickIcon from "../ui/TickIcon";
import UplinkIcon from "../ui/UplinkIcon";
import SlaIcon from "../ui/SlaIcon";
import DedicatedIPIcon from "../ui/DedicatedIPIcon";

interface PricingCardProps {
  icon: string;
  title: string;
  price: number | string;
  features: string[];
  heghlighted?: boolean;
  extrainfo: boolean;
}

const PricingCard = ({
  icon,
  title,
  price,
  features,
  heghlighted,
  extrainfo,
}: PricingCardProps) => {
  return (
    <div
      className={`${
        heghlighted
          ? "bg-custom-gradient text-white"
          : "bg-white text-secondary"
      } rounded-3xl shadow-custom flex-col justify-start items-start inline-flex p-10 text-secondary border border-lightBlue/20 mx-auto  col-span-3 xl:w-[363px]`}
    >
      <p>
        <Image src={icon} alt="globe" width={40} height={40} />
      </p>
      <h3 className="capitalize text-2xl font-beatrice mt-6">{title}</h3>
      <p className="text-sm font-medium font-dmSans leading-tight">
        The King of domains
      </p>
      <h4 className="text-5xl font-semibold font-beatrice leading-normal mt-8 mb-10">
        <span className="leading-[56px]">$</span>
        {price}
        <span
          className={`${
            heghlighted ? "text-white/80" : "text-secondary/80"
          } text-sm font-medium font-dmSans leading-normal`}
        >
          / per month
        </span>
      </h4>

      {heghlighted ? (
        <Button className="h-[50px] transition-opacity opacity-1 hover:opacity-85 w-full border-lightBlue bg-white hover:shadow-lg">
          <span className="text-lg font-semibold font-dmSans leading-tight text-lightBlue">
            Pick Domain
          </span>
        </Button>
      ) : (
        <Button className="h-[50px] transition-opacity opacity-1 hover:opacity-85 button-order w-full border-lightBlue bg-transparent hover:shadow-md">
          <span className="text-lg font-semibold font-dmSans leading-tight">
            Pick Domain
          </span>
        </Button>
      )}

      <div className="w-full h-[0px] border border-[#ededed] mt-8 mb-8"></div>

      <h5 className="text-xl font-semibold font-beatrice leading-normal mb-4">
        Features
      </h5>
      {features &&
        features.map((feature, index) => (
          <p
            key={index}
            className={`flex justify-start items-center text-sm mb-3 ${
              heghlighted ? "text-white" : "text-bodyText"
            }  font-dmSans`}
          >
            <TickIcon className="mr-2 fill-lightBlue" width={20} height={20} />{" "}
            {feature}
          </p>
        ))}

      {extrainfo && (
        <div className="extra-info mt-7">
          <p className="text-sm text-primary font-dmSans mb-2 flex justify-start items-center">
            <UplinkIcon className="mr-2" width={13} height={13} />
            1000 Mbit <strong className="mx-1"> Uplink </strong> Guaranteed
          </p>
          <p className="text-sm text-primary font-dmSans mb-2 flex justify-start items-center">
            <SlaIcon className="mr-2" width={13} height={13} />
            <strong className="mr-1"> 99.99% </strong> Uptime SLA
          </p>
          <p className="text-sm text-primary font-dmSans flex justify-start items-center">
            <DedicatedIPIcon className="mr-2" width={13} height={13} />
            <strong className="mr-1">Dedicated </strong> IP Address
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
