import Image from "next/image";
import React from "react";

interface ObjectStorageType {
  title?: string;
  description?: string;
  src?: string;
}

const ObjectStorageCard = ({ title, src, description }: ObjectStorageType) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#085BDF] to-[#5D39D3] p-px">
      <div className="relative flex flex-col items-center justify-center rounded-xl bg-slate-100 p-8 text-center">
        <Image width={80} height={80} src={src as string} alt={"performance"} />
        <h3 className="mb-4 mt-7 font-beatrice text-lg font-medium text-primary">
          {title}
        </h3>
        <p className="font-dmSans text-sm text-bodyText">{description}</p>
      </div>
    </div>
  );
};

export default ObjectStorageCard;
