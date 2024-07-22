import React from "react";
import MypageTabs from "../components/MyPageTabs.jsx";
import MyPageHistory from "../components/MyPageHistory.jsx";
import MyPageUserSearch from "../components/MyPageUserSearch.jsx";
import MyPageProfile from "../components/MyPageProfile.jsx";
import { useState } from "react";

const MyPage = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  return (
    <>
      <section>
        <span className="z-0">
          <div className="bg-yellow3 h-28">
            [h: 112px/백그라운드: 252-245-199]
          </div>
          <div className="h-60">[h: 240px 흰색 백그라운드]</div>
        </span>
        <span className="z-10">
          <MyPageProfile />
        </span>
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
