import React, { useState } from "react";
import Header from "./Header";

const tabsData = [
  {
    id: "history",
    label: "대회참여 히스토리",
    content:
      "프로필 탭의 연관된 콘텐츠에 대한 자리 표시자 콘텐츠입니다. 다른 탭을 클릭하면 다음 탭의 가시성이 전환됩니다. 탭 JavaScript는 콘텐츠 가시성과 스타일링을 제어하기 위해 클래스를 전환합니다.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    content:
      "대시보드 탭의 연관된 콘텐츠에 대한 자리 표시자 콘텐츠입니다. 다른 탭을 클릭하면 다음 탭의 가시성이 전환됩니다. 탭 JavaScript는 콘텐츠 가시성과 스타일링을 제어하기 위해 클래스를 전환합니다.",
  },
  {
    id: "settings",
    label: "Settings",
    content:
      "설정 탭의 연관된 콘텐츠에 대한 자리 표시자 콘텐츠입니다. 다른 탭을 클릭하면 다음 탭의 가시성이 전환됩니다. 탭 JavaScript는 콘텐츠 가시성과 스타일링을 제어하기 위해 클래스를 전환합니다.",
  },
  {
    id: "contacts",
    label: "Contacts",
    content:
      "연락처 탭의 연관된 콘텐츠에 대한 자리 표시자 콘텐츠입니다. 다른 탭을 클릭하면 다음 탭의 가시성이 전환됩니다. 탭 JavaScript는 콘텐츠 가시성과 스타일링을 제어하기 위해 클래스를 전환합니다.",
  },
];

const MypageTabs = () => {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          role="tablist"
        >
          {tabsData.map((tab) => (
            <li className="me-2" role="presentation" key={tab.id}>
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 border-gray-100 dark:border-gray-700 dark:hover:text-gray-300"
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
      <div id="default-tab-content">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong className="font-medium text-gray-800 dark:text-white">
                {tab.label}의 연관된 콘텐츠
              </strong>
              : {tab.content}
              <Header />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MypageTabs;
