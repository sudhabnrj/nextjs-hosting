"use client";
import { GreenEnergy } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import TickIcon from "../ui/TickIcon";
import Link from "next/link";
import ArrowLight from "../ui/ArrowLight";

const tabs = [
  { id: 1, label: "All Location", title: "Modern & Green Energy Data Centers" },
  {
    id: 2,
    label: "United States",
    title: "Modern & Green Energy Data Centers",
  },
  { id: 3, label: "Europe", title: "Europe" },
  { id: 4, label: "Australia", title: "Australia" },
  { id: 5, label: "Asia", title: "Asia" },
];

const services = ["Web Hosting", "Website Builder", "WordPress Hosting"];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1); // State to track the active tab

  const renderTabContent = (tab) => (
    <div className="w-full flex justify-items-start items-start mb-8">
      <div className="w-[130px]">
        <Image src={GreenEnergy} alt={tab.title} width={113} height={113} />
      </div>
      <div className="w-full pl-4 lg:w-[calc(100%-130px)]">
        <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">
          {tab.title}
        </h3>
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2"
            >
              <TickIcon
                width={13}
                height={13}
                className="fill-transparent md:mr-2"
              />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Tab Navigation */}
      <div className="border-b border-white/20 w-full">
        <div
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`py-2 px-1 md:px-3 inline-flex items-center flex-wrap gap-x-2 border-b-2 sm:whitespace-nowrap focus:outline-none text-base sm:text-sm font-medium font-dmSans leading-tight text-white justify-start text-left ${
                activeTab === tab.id ? "border-white" : "border-transparent"
              }`}
              onClick={() => setActiveTab(tab.id)} // Switch to the corresponding tab
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="w-full">
              {renderTabContent(tab)}
            </div>
          ) : null
        )}
        <Link
          href="#"
          className="group btn-secondary hover:opacity-85 inline-flex justify-between items-center font-medium shadow-custom font-beatrice !text-sm relative w-[160px]"
        >
          See All Server
          <ArrowLight
            className="absolute right-5 group-hover:right-3 transition-all ease-linear"
            width={15}
            height={15}
          />
        </Link>
      </div>
    </>
  );
};

export default TabComponent;
