"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import { testimonialProps } from "@/types/types";

interface TestimonialContainerProps {
  testimonial_block: testimonialProps[];
}

export default function TestimonialContainer({
  testimonial_block,
}: TestimonialContainerProps) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3, // For desktop screens (1024px and above)
          },
          768: {
            slidesPerView: 2, // For tablets (768px - 1023px)
          },
          0: {
            slidesPerView: 1, // For mobile (0px - 767px)
          },
        }}
        className="mySwiper !pb-10"
      >
        {testimonial_block.map((comment: testimonialProps) => (
          <SwiperSlide className="min-h-[285px]" key={comment.id}>
            <TestimonialCard data={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
