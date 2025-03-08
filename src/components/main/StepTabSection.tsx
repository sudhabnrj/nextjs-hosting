"use client";
import React, { useState } from "react";
import Image from "next/image";
import CheckMarkRounded from "../ui/CheckMarkRounded";
import { TabProps } from "@/types/types";

interface StepTabSectionProps {
  tabData: TabProps[];
}

const StepTabSection = ({ tabData }: StepTabSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id);

  return (
    <div>
      <div id="myTabContent">
        {tabData &&
          tabData.map((tabContent, index) => (
            <div
              key={tabContent.id}
              className={`${activeTab === tabContent.id ? "block" : "hidden"} mb-5 rounded-lg md:p-4`}
              id={tabContent.id}
              role="tabpanel"
              aria-labelledby={`${tabContent.id}-tab`}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
                {tabContent?.content?.image.url && (
                  <div className="img-Thumb">
                    <Image
                      className="max-h-[400px] w-full object-cover"
                      src={tabContent?.content?.image.url as string}
                      width={400}
                      height={400}
                      alt={tabContent?.content?.image.alt || ""}
                    />
                  </div>
                )}
                <div className="flex flex-col gap-4 md:ml-10">
                  <span className="max-w-max rounded-md bg-custom-gradient px-3 py-1 font-dmSans text-white">
                    Step {index + 1}
                  </span>
                  <h3 className="font-dmSans text-2xl font-semibold text-secondary">
                    {tabContent?.content?.title}
                  </h3>
                  <p className="font-base font-dmSans text-bodyText">
                    {tabContent?.content?.content}
                  </p>
                  {tabContent?.content?.tab_content_list && (
                    <ul className="flex flex-col gap-5">
                      {tabContent?.content?.tab_content_list.map((listItem) => (
                        <li
                          key={listItem.id}
                          className="relative flex items-center justify-start pl-7"
                        >
                          <CheckMarkRounded
                            className={
                              "absolute left-0 top-[2px] fill-blue-700"
                            }
                          />
                          {listItem?.content_list}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mb-4">
        <ul
          className="-mb-px flex flex-col items-center justify-between gap-3 min-[480px]:flex-row"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {tabData &&
            tabData.map((tab: TabProps, index) => (
              <li key={tab.id} className="mr-2 w-full" role="presentation">
                <button
                  className={`flex w-full flex-col rounded-md border border-gray-200 px-4 py-4 text-left text-sm font-medium ${activeTab === tab.id ? "bg-custom-gradient text-white" : "bg-transparent"}`}
                  id={`${tab.id}-tab`}
                  data-tabs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="font-dmSans">-0{index + 1}</span>
                  {tab.tab_name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default StepTabSection;
