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
      <div className="border-b border-white/20 w-full">
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
                className={`py-2 px-1 md:px-3 inline-flex items-center flex-wrap gap-x-2 border-b-2 sm:whitespace-nowrap focus:outline-none text-base sm:text-sm font-medium font-dmSans leading-tight text-white justify-start text-left ${
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
                <div className="w-full flex justify-items-start items-start mb-8">
                  <div className="w-[130px]">
                    <Image
                      src={tabContent?.content?.image?.url}
                      alt={tabContent?.content?.image?.alt || "Image"}
                      width={113}
                      height={113}
                      priority
                    />
                  </div>
                  <div className="w-full pl-4 lg:w-[calc(100%-130px)]">
                    <h3 className="text-white text-lg font-extrabold font-dmSans leading-normal mb-4">
                      {tabContent.tab_name}
                    </h3>
                    <p className="text-white text-base font-dmSans">
                      {tabContent?.content?.content}
                    </p>
                    <ul className="mt-4">
                      {tabContent?.content?.tab_content_list &&
                        tabContent?.content?.tab_content_list.map(
                          (tabList: TabContentListProps) => (
                            <li
                              key={tabList?.id}
                              className="flex justify-start items-center text-white text-xs font-light font-dmSans leading-normal mb-2"
                            >
                              <TickIcon
                                width={13}
                                height={13}
                                className="fill-transparent md:mr-2"
                              />
                              {tabList?.content_list}
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                </div>
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
