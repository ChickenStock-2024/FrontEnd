import React from "react";
import Button from "../components/Button.jsx";

import ProfileTabs from "../components/Profile/ProfileTabs.jsx";
import ProfileHistoryTab from "../components/Profile/ProfileHistoryTab.jsx";

import ProfileUserSearchTab from "../components/Profile/ProfileUserSearchTab.jsx";
import ProfileUserInfo from "../components/Profile/ProfileUserInfo.jsx";

import { useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  // const params = useParams();
  const [activeTabOption, setActiveTabOption] = useState("");
  const getActiveTabOption = (data) => {
    setActiveTabOption(data);
  };
  return (
    <>
      <section>
        {/* <div className="relative bg-red-200"> */}
        <div className="relative">
          {/* <div className="bg-yellow3 h-28">{params.id}의 프로필 페이지~!!</div> */}
          <div className="bg-yellow3 h-28">프로필 페이지~!!</div>
          <div className="h-44"></div>
          <div className="flex flex-row justify-between">
            <div className="absolute top-0 left-40">
              <ProfileUserInfo />
            </div>
            <div className="absolute bottom-10 right-40">
              <Button text={"라이벌 등록"} color={"yellow3"} />
              {/* <button className="absolute bottom-10 right-40">라이벌 등록</button> */}
            </div>
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
