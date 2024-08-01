import React, { useState, useEffect } from "react";
import "./ProfileTabs.css";

const tabsData = [
  {
    id: "history",
    label: "대회참여 히스토리",
  },
  {
    id: "userSearch",
    label: "유저 검색",
  },
];

const ProfileTabs = ({ getActiveTabOption }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  useEffect(() => {
    getActiveTabOption(activeTab);
  }, [activeTab]);

  return (
    <>
      <div className="mb-4 border-b border-gray-200">
        <ul
          className="flex flex-wrap -mb-px text-sm text-center padding-lr-150"
          id="default-tab"
          role="tablist"
        >
          {tabsData.map((tab) => (
            <li className="me-2" role="presentation" key={tab.id}>
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "font-bold text-slate-950 border-slate-950"
                    : // : "text-gray-500 hover:text-gray-600 hover:border-gray-300 border-gray-100"
                      "font-medium text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 "
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

export default ProfileTabs;
