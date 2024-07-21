import React, { useState, useEffect } from "react";
import "./MyPageTabs.css";

const tabsData = [
  {
    id: "history",
    label: "대회참여 히스토리",
    content:
      "프로필 탭의 연관된 콘텐츠에 대한 자리 표시자 콘텐츠입니다. 다른 탭을 클릭하면 다음 탭의 가시성이 전환됩니다. 탭 JavaScript는 콘텐츠 가시성과 스타일링을 제어하기 위해 클래스를 전환합니다.",
  },
  {
    id: "userSearch",
    label: "유저 검색",
    content:
      "대시보드 탭의 연관된 콘텐츠에 대한 자리 표시자 콘텐츠입니다. 다른 탭을 클릭하면 다음 탭의 가시성이 전환됩니다. 탭 JavaScript는 콘텐츠 가시성과 스타일링을 제어하기 위해 클래스를 전환합니다.",
  },
];

const MypageTabs = ({ getactiveTabOption }) => {
  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    getactiveTabOption(activeTab);
  }, [activeTab]);

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm text-center padding-lr-100"
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

export default MypageTabs;
