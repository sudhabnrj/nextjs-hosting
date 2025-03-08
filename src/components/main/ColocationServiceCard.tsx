import React from "react";

interface ColocationType {
  title?: string;
  description?: string;
  index?: string | number;
}

const ColocationServiceCard = ({
  index,
  title,
  description,
}: ColocationType) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-custom-gradient font-beatrice text-2xl font-semibold text-white">
        {index}
      </span>
      <h3 className="mb-2 mt-5 font-beatrice text-base font-medium text-primary">
        {title}
      </h3>
      <p className="text-center font-dmSans text-sm font-medium text-bodyText">
        {description}
      </p>
    </div>
  );
};

export default ColocationServiceCard;
