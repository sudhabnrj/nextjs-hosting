"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ArrowLight from "../ui/ArrowLight";
import TickIcon from "../ui/TickIcon";
import { TabContentListProps, TabProps } from "@/types/types";

interface TabContentProps {
  tab: TabProps[];
}

const TabComponent = ({ tab }: TabContentProps) => {
  const [activeTab, setActiveTab] = useState<string>(tab[0]?.id || ""); // State to track the active tab
  return (
    <>
      {/* Tab Navigation */}
      <div className="w-full border-b border-white/20">
        <div
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tab &&
            tab.map((tabItem) => (
              <button
                key={tabItem.id}
                type="button"
                role="tab"
                className={`inline-flex flex-wrap items-center justify-start gap-x-2 border-b-2 px-1 py-2 text-left font-dmSans text-base font-medium leading-tight text-white focus:outline-none sm:whitespace-nowrap sm:text-sm md:px-3 ${
                  activeTab === tabItem.id
                    ? "border-white"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab(tabItem.id)}
                aria-selected={activeTab === tabItem.id ? "true" : "false"}
                aria-controls={`tab-panel-${tabItem.id}`}
                id={`tab-${tabItem.id}`}
              >
                {tabItem.tab_name}
              </button>
            ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tab &&
          tab.map((tabContent) =>
            activeTab === tabContent.id ? (
              <div
                key={tabContent.id}
                className="w-full"
                id={`tab-panel-${tabContent.id}`}
              >
                <div className="mb-8 flex w-full items-start justify-items-start">
                  <div className="w-[130px]">
                    <Image
                      src={tabContent?.content?.image?.url as string}
                      alt={tabContent?.content?.image?.alt || "Image"}
                      width={113}
                      height={113}
                      priority
                    />
                  </div>
                  <div className="w-full pl-4 lg:w-[calc(100%-130px)]">
                    <h3 className="mb-4 font-dmSans text-lg font-extrabold leading-normal text-white">
                      {tabContent.tab_name}
                    </h3>
                    <p className="font-dmSans text-base text-white">
                      {tabContent?.content?.content}
                    </p>
                    <ul className="mt-4">
                      {tabContent?.content?.tab_content_list &&
                        tabContent?.content?.tab_content_list.map(
                          (tabList: TabContentListProps) => (
                            <li
                              key={tabList?.id}
                              className="mb-2 flex items-center justify-start font-dmSans text-xs font-light leading-normal text-white"
                            >
                              <TickIcon
                                width={13}
                                height={13}
                                className="fill-transparent md:mr-2"
                              />
                              {tabList?.content_list}
                            </li>
                          ),
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        <Link
          href="#"
          className="btn-secondary group relative inline-flex w-[160px] items-center justify-between font-beatrice !text-sm font-medium shadow-custom hover:opacity-85"
        >
          See All Server
          <ArrowLight
            className="absolute right-5 transition-all ease-linear group-hover:right-3"
            width={15}
            height={15}
          />
        </Link>
      </div>
    </>
  );
};

export default TabComponent;
