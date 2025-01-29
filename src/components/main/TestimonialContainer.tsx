"use client";
import React from "react";
import Container from "../ui/Container";
import CommonTitle from "./CommonTitle";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const customerFeedbackData = [
  {
    id: 1,
    authorName: "John Doe",
    designation: "CEO, TechCorp",
    authorImage: "/images/vineet-b.png", // Path to author's image
    comment:
      "I am using Digital Ocean Plan in Cloud ways and I can confirm it is very good. Also, additional the backup with my hosting is awesome too.",
  },
  {
    id: 2,
    authorName: "Jane Smith",
    designation: "Marketing Manager, BrandCo",
    authorImage: "/images/bhupendra-m.png",
    comment:
      "Customer support was quick and resolved my issue efficiently. Excellent service!",
  },
  {
    id: 3,
    authorName: "David Brown",
    designation: "Freelancer",
    authorImage: "/images/firos-k.png",
    comment:
      "Affordable and professional email solutions. Love the spam protection feature!",
  },
  {
    id: 4,
    authorName: "Emily White",
    designation: "Founder, Startup Inc.",
    authorImage: "/images/jaison-j.png",
    comment:
      "Setting up business emails was a breeze with Postera Mail. A game-changer for startups!",
  },
  {
    id: 5,
    authorName: "Michael Johnson",
    designation: "IT Director, Solutions Ltd.",
    authorImage: "/images/sbio-s.png",
    comment:
      "Scalable and secure email hosting, perfect for enterprise-level needs. Kudos to the team!",
  },
];

export default function TestimonialContainer() {
  return (
    <section className="py-20">
      <Container>
        <CommonTitle
          className="mx-10"
          title="Customer Feedback"
          subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
        />
        <div className="w-full mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {customerFeedbackData.map((feedback) => (
              <SwiperSlide className="flex items-stretch" key={feedback.id}>
                <TestimonialCard data={feedback} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
