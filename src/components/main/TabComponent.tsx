"use client"
import { GreenEnergy } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import TickIcon from "../ui/TickIcon";
import Link from "next/link";
import ArrowLight from "../ui/ArrowLight";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1); // State to track the active tab

  return (
    <>
      {/* Tab Navigation */}
      <div className="border-b border-white/20 dark:border-neutral-700 w-full">
        <div
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {/* Tab 1 */}
          <button
            type="button"
            className={`py-2 px-3 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap focus:outline-none text-sm font-medium font-dmSans leading-tight text-white ${
              activeTab === 1
                ? " border-white "
                : "border-transparent "
            }`}
            onClick={() => setActiveTab(1)} // Switch to Tab 1
          >
            All Location
          </button>

          {/* Tab 2 */}
          <button
            type="button"
            className={`py-2 px-3 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap focus:outline-none text-sm font-medium font-dmSans leading-tight text-white ${
              activeTab === 2
                ? " border-white "
                : "border-transparent "
            }`}
            onClick={() => setActiveTab(2)} // Switch to Tab 2
          >
            United States
          </button>

          {/* Tab 3 */}
          <button
            type="button"
            className={`py-2 px-3 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap focus:outline-none text-sm font-medium font-dmSans leading-tight text-white ${
              activeTab === 3
                ? " border-white "
                : "border-transparent "
            }`}
            onClick={() => setActiveTab(3)} // Switch to Tab 3
          >
            Europe
          </button>
          <button
            type="button"
            className={`py-2 px-3 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap focus:outline-none text-sm font-medium font-dmSans leading-tight text-white ${
              activeTab === 4
                ? " border-white "
                : "border-transparent "
            }`}
            onClick={() => setActiveTab(4)} // Switch to Tab 3
          >
            Australia
          </button>
          <button
            type="button"
            className={`py-2 px-3 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap focus:outline-none text-sm font-medium font-dmSans leading-tight text-white ${
              activeTab === 5
                ? " border-white "
                : "border-transparent "
            }`}
            onClick={() => setActiveTab(5)} // Switch to Tab 3
          >
            Asia
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 1 && (
          <div className="w-full ">
            <div className="w-full flex justify-items-start items-start mb-10">
              <div className="w-[130px]">
                <Image src={GreenEnergy} alt="GreenEnergy" width={113} height={113} />
              </div>
              <div className="w-[calc(100%-130px)]">
                <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">Modern & Green Energy Data Centers</h3>
                <ul>
                  <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                    <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                    Web Hosting
                  </li>
                  <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                    <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                    Website Builder
                  </li>
                  <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal">
                    <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                    WordPress Hosting
                  </li>
                </ul>
              </div>
            </div>
            <Link href='#' className="group btn-secondary hover:opacity-85 inline-flex justify-between items-center  font-medium shadow-custom font-beatrice !text-sm relative w-[160px]">
              See All Server
              <ArrowLight className="absolute right-5 group-hover:right-3 transition-all ease-linear" width={15} height={15} />
            </Link>
          </div>
        )}
        {activeTab === 2 && (
          <div className="w-full flex justify-items-start items-start">
          <div className="w-[130px]">
            <Image src={GreenEnergy} alt="GreenEnergy" width={113} height={113} />
          </div>
          <div className="w-[calc(100%-130px)]">
            <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">Modern & Green Energy Data Centers</h3>
            <ul>
              <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                Web Hosting
              </li>
              <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                Website Builder
              </li>
              <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal">
                <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                WordPress Hosting
              </li>
            </ul>
          </div>
        </div>
        )}
        {activeTab === 3 && (
          <div className="w-full flex justify-items-start items-start">
            <div className="w-[130px]">
              <Image src={GreenEnergy} alt="GreenEnergy" width={113} height={113} />
            </div>
            <div className="w-[calc(100%-130px)]">
              <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">Europe</h3>
              <ul>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  Web Hosting
                </li>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  Website Builder
                </li>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  WordPress Hosting
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div className="w-full flex justify-items-start items-start">
            <div className="w-[130px]">
              <Image src={GreenEnergy} alt="GreenEnergy" width={113} height={113} />
            </div>
            <div className="w-[calc(100%-130px)]">
              <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">Australia</h3>
              <ul>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  Web Hosting
                </li>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  Website Builder
                </li>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  WordPress Hosting
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 5 && (
          <div className="w-full flex justify-items-start items-start">
            <div className="w-[130px]">
              <Image src={GreenEnergy} alt="GreenEnergy" width={113} height={113} />
            </div>
            <div className="w-[calc(100%-130px)]">
              <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">Asia</h3>
              <ul>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  Web Hosting
                </li>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  Website Builder
                </li>
                <li className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal">
                  <TickIcon width={13} height={13} className="fill-transparent mr-2" />
                  WordPress Hosting
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TabComponent;
