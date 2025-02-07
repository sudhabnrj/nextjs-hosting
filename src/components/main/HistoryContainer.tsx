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
      className="historySwiper !py-20 mt-20"
    >
      {historyData &&
        historyData.map((historyItem) => (
          <SwiperSlide key={historyItem.id}>
            <div className="max-w-[800px]">
              <h3 className="text-white font-beatrice font-semibold text-2xl mt-6">
                {historyItem?.title}
              </h3>
              <p className="font-dmSans text-white mt-4 font-medium leading-loose text-base">
                {historyItem?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
