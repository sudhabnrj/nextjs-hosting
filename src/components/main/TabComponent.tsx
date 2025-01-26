"use client"
import { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1); // State to track the active tab

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {/* Tab 1 */}
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-none ${
              activeTab === 1
                ? "font-semibold border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(1)} // Switch to Tab 1
          >
            Tab 1
          </button>

          {/* Tab 2 */}
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-none ${
              activeTab === 2
                ? "font-semibold border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(2)} // Switch to Tab 2
          >
            Tab 2
          </button>

          {/* Tab 3 */}
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-none ${
              activeTab === 3
                ? "font-semibold border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(3)} // Switch to Tab 3
          >
            Tab 3
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-3">
        {activeTab === 1 && (
          <div>
            <p className="text-gray-500 dark:text-neutral-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-neutral-200">
                first
              </em>{" "}
              item's tab body.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <p className="text-gray-500 dark:text-neutral-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-neutral-200">
                second
              </em>{" "}
              item's tab body.
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <p className="text-gray-500 dark:text-neutral-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-neutral-200">
                third
              </em>{" "}
              item's tab body.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
