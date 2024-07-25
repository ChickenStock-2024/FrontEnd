import React from "react";

import ProfileTabs from "../components/Profile/ProfileTabs.jsx";
import ProfileHistoryTab from "../components/Profile/ProfileHistoryTab.jsx";

import ProfileUserSearchTab from "../components/Profile/ProfileUserSearchTab.jsx";

import ProfileUserInfo from "../components/Profile/ProfileUserInfo.jsx";
import { useState } from "react";

const Profile = () => {
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
            <ProfileUserInfo />
          </div>
        </div>
      </section>
      <section>
        <ProfileTabs getActiveTabOption={getActiveTabOption} />
      </section>
      <section>
        {/* <p>{console.log(activeTabOption)}</p> */}
        {activeTabOption === "history" ? (
          <ProfileHistoryTab activeTabOption={activeTabOption} />
        ) : (
          <>
            <ProfileUserSearchTab />
          </>
        )}
      </section>
    </>
  );
};
export default Profile;
