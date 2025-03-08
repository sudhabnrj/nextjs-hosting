"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { HistoryArrayProps } from "@/types/types";

interface HistoryProps {
  historyData: HistoryArrayProps[];
}

export default function HistoryContainer({ historyData = [] }: HistoryProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      const year = historyData[index]?.year;
      return `<span class="${className} relative">
        ${year} 
        <span class="dot">●</span>
      </span>`;
    },
  };

  return (
    <Swiper
      navigation={true}
      pagination={pagination}
      modules={[Pagination, Navigation]}
      className="historySwiper !py-10 md:mt-20 md:!py-20"
    >
      {historyData &&
        historyData.map((historyItem) => (
          <SwiperSlide key={historyItem.id}>
            <div className="max-w-[800px]">
              <span className="relative inline-block rounded bg-white px-5 py-2 font-dmSans font-medium text-secondary md:hidden">
                {historyItem?.year}
              </span>
              <h3 className="mt-6 font-beatrice text-2xl font-semibold text-white">
                {historyItem?.title}
              </h3>
              <p className="mt-4 font-dmSans text-base font-medium leading-loose text-white">
                {historyItem?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
