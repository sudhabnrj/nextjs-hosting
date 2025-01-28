"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import CommonTitle from "./CommonTitle";
import FaqListItem from "./FaqListItem";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "How can I reset my password?",
    answer:
      "To reset your password, go to the login page, click on 'Forgot Password,' and follow the instructions to reset it.",
  },
  {
    id: 2,
    question: "How do I update my billing information?",
    answer:
      "To update your billing information, navigate to your account settings, select 'Billing,' and update your payment details.",
  },
  {
    id: 3,
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by clicking the 'Support' button on the bottom-right corner of the page or by emailing us at support@example.com.",
  },
  {
    id: 4,
    question: "How do I delete my account?",
    answer:
      "To delete your account, go to account settings, and under 'Account Actions,' click 'Delete Account.' Follow the on-screen instructions.",
  },
  {
    id: 5,
    question: "account?",
    answer: "To delete .",
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
          title="Frequently asked questions"
          subHeading="Frequently asked questions"
        />
        <div
          className="accordion-group w-full"
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
