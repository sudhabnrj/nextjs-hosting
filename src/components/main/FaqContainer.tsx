"use client";
import React, { useState } from "react";
import FaqListItem from "./FaqListItem";
import { FaqProps } from "@/types/types";

interface FaqContainerProps {
  faq_list_item: FaqProps[];
}

export default function FaqContainer({ faq_list_item }: FaqContainerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordianToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="accordion-group w-full mt-16 lg:px-14"
      data-accordion="default-accordion"
    >
      {faq_list_item.map((item: FaqProps, index: number) => (
        <FaqListItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => handleAccordianToggle(index)}
        />
      ))}
    </div>
  );
}
