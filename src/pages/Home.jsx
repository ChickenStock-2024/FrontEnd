import React from "react";
import { useState } from "react";
import HomeCompetitionInfo from "../components/Home/HomeCompetitionInfo";
import HomeCenter from "../components/Home/HomeCenter";
import HomeCenterAfterLogin from "../components/Home/HomeCenterAfterLogin";
import HomeCenterAfterLoginJoinCompetition from "../components/Home/HomeCenterAfterLoginJoinCompetition";
import HomeBottom from "../components/Home/HomeBottom";
import Input from "../components/Input";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalPen] = useState(false);
  const openModal = () => setIsModalPen(true);
  const closeModal = () => setIsModalPen(false);

  return (
    <>
      {/* 모달 예시 */}
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div className="p-10">안녕하세요</div>
        </Modal>
      </div>

      <HomeCompetitionInfo />

      {/* 인풋 예시 */}
      {/* <div className="w-40">
        <Input placeholder={"검색"} />
      </div> */}

      <div>
        {/* 로그인 & 대회참여 여부에 따라 다르게 렌더링 */}
        {/* 어떻게 구현 할지 생각???? */}
        <HomeCenter />
        {/* <HomeCenterAfterLogin /> */}
        {/* <HomeCenterAfterLoginJoinCompetition /> */}
        <HomeBottom />
      </div>
    </>
  );
};

export default Home;
