import React from "react";
import MypageTabs from "../components/MyPageTabs.jsx";
import MyPageHistory from "../components/MyPageHistory.jsx";
import MyPageUserSearch from "../components/MyPageUserSearch.jsx";
import { useState } from "react";

const MyPage = () => {
  const [activeTabOption, setActiveTabOption] = useState("");
  const getactiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  return (
    <>
      <section>
        {/* <div className="bg-yellow3 h-32">[h: 128px/백그라운드: 252-245-199]</div>
        <div className="h-60">[h: 240px 흰색 백그라운드]</div> */}
        <div className="bg-yellow3 h-28">
          [h: 112px/백그라운드: 252-245-199]
        </div>
        <div className="h-60">[h: 240px 흰색 백그라운드]</div>
      </section>
      <section>
        <MypageTabs getactiveTabOption={getactiveTabOption} />
      </section>
      <section>
        <p>{console.log(activeTabOption)}</p>
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
