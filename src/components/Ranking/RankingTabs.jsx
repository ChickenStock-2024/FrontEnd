import React from "react";
import { useState, useEffect } from "react";

const tabsData = [
  {
    id: "totalRanking",
    label: "전체 순위",
  },
  {
    id: "rivalRanking",
    label: "친구 순위",
  },
];

const RankingTabs = ({ getActiveTabOption }) => {
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
                className={`inline-block w-full p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "font-bold text-slate-950 border-slate-950"
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

export default RankingTabs;
