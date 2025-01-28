"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import CommonTitle from "./CommonTitle";
import FaqListItem from "./FaqListItem";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What is email hosting?",
    answer:
      "Email hosting is a service that operates email servers and provides email services for individuals and businesses. It enables users to send and receive emails using accounts with their own domain. Email hosting services offer secure access to your stored data, along with spam and virus protection filters.",
  },
  {
    id: 2,
    question: "Why choose email hosting over running your own email server?",
    answer:
      "To update your billing information, navigate to your account settings, select 'Billing,' and update your payment details.",
  },
  {
    id: 3,
    question: "How to migrate from an existing service provider?",
    answer:
      "You can contact customer support by clicking the 'Support' button on the bottom-right corner of the page or by emailing us at support@example.com.",
  },
  {
    id: 4,
    question: "What is a business email?",
    answer:
      "To delete your account, go to account settings, and under 'Account Actions,' click 'Delete Account.' Follow the on-screen instructions.",
  },
  {
    id: 5,
    question: "What is the difference between business email and personal email?",
    answer: "To delete your account, go to account settings, and under 'Account Actions,' click 'Delete Account.' Follow the on-screen instructions.",
  },
  {
    id: 6,
    question: "How to create a business email address in Postera Mail?",
    answer: "To delete your account, go to account settings, and under 'Account Actions,' click 'Delete Account.' Follow the on-screen instructions.",
  },
];

export default function FaqContainer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordianToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <Container>
        <CommonTitle
          className="mx-10"
          title="Frequently asked questions"
          subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
        />
        <div
          className="accordion-group w-full mt-16 lg:px-14"
          data-accordion="default-accordion"
        >
          {faqData.map((item, index) => (
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
      </Container>
    </section>
  );
}
