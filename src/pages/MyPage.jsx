import React from "react";
import MypageTabs from "../components/MyPage/MyPageTabs.jsx";
import MyPageHistory from "../components/MyPage/MyPageHistory.jsx";
import MyPageUserSearch from "../components/MyPage/MyPageUserSearchResult.jsx";
import MyPageProfile from "../components/MyPage/MyPageProfile.jsx";
import { useState } from "react";

const MyPage = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  return (
    <>
      <section>
        {/* <div className="relative bg-red-200"> */}
        <div className="relative">
          <div className="bg-yellow3 h-28">
            [h: 112px/백그라운드: 252-245-199]
          </div>
          <div className="h-44">[h: 240px 흰색 백그라운드]</div>
          <div className="absolute top-0 left-24">
            <MyPageProfile />
          </div>
        </div>
      </section>
      <section>
        <MypageTabs getActiveTabOption={getActiveTabOption} />
      </section>
      <section>
        {/* <p>{console.log(activeTabOption)}</p> */}
        {activeTabOption === "history" ? (
          <MyPageHistory activeTabOption={activeTabOption} />
        ) : (
          <>
            <MyPageUserSearch />
          </>
        )}
      </section>
    </>
  );
};
export default MyPage;
