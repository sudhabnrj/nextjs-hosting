import React from "react";
import Button from "../ui/Button";

interface FaqListItemProps {
  id: string | number;
  question: string;
  answer: string;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FaqListItem({
  id,
  question,
  answer,
  onClick,
  isActive,
}: FaqListItemProps) {
  return (
    <div
      className={`accordion overflow-hidden border border-solid border-[#dedfe4] rounded-2xl mb-4 transition ${
        isActive ? "bg-[#F6F7FB] border-lightBlue" : "hover:bg-gray-50"
      }`}
    >
      <Button
        onClick={onClick}
        className="accordion-toggle group inline-flex items-center justify-between text-left text-xl font-medium rounded-none font-dmSans leading-normal w-full bg-white transition hover:text-lightBlue !p-6"
        aria-expanded={isActive}
        aria-controls={`faq-content-${id}`}
      >
        {question}
        <svg
          className={`w-6 h-6 transform transition ${
            isActive ? "rotate-180 text-indigo-600" : "rotate-0 text-gray-900"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </Button>
      <div
        id={`faq-content-${id}`}
        className={`text-bodyText text-base font-normal font-dmSans leading-7 overflow-hidden transition-all border-t  ${
          isActive ? "max-h-48 px-6 py-4 border-[#DEDFE4]" : "max-h-0 border-transparent"
        }`}
        aria-hidden={!isActive}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
