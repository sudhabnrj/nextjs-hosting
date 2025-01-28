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
      className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-4 transition ${
        isActive ? "bg-indigo-50 border-indigo-600" : "hover:bg-gray-50"
      }`}
    >
      <Button
        onClick={onClick}
        className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-medium text-gray-900 w-full transition hover:text-indigo-600"
        aria-expanded={isActive}
        aria-controls={`faq-content-${id}`}
      >
        <h5>{question}</h5>
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
        className={`mt-2 text-gray-700 text-base overflow-hidden transition-all ${
          isActive ? "max-h-48" : "max-h-0"
        }`}
        aria-hidden={!isActive}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
