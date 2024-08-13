import React from "react";
import { useState, useEffect } from "react";

const tabsData = [
  {
    id: "buy",
    label: "매수",
  },
  {
    id: "sell",
    label: "매도",
  },
];

const OrderStockTabs = ({ getActiveTabOption }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  useEffect(() => {
    getActiveTabOption(activeTab);
  }, [activeTab]);
  return (
    <>
      <div className="mb-4 border-b border-gray-200">
        <ul
          className="flex flex-wrap -mb-px text-sm text-center justify-evenly"
          id="default-tab"
          role="tablist"
        >
          {tabsData.map((tab) => (
            <li className="flex-auto" role="presentation" key={tab.id}>
              <button
                className={`inline-block w-full p-3 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? activeTab === "buy"
                      ? "font-bold text-red-500 border-red-500"
                      : "font-bold text-blue-600  border-blue-600"
                    : "font-medium text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 "
                }`}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrderStockTabs;
