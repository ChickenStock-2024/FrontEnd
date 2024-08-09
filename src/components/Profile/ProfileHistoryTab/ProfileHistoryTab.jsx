import React, { useEffect, useState } from "react";
import ProfileHistoryTabModal from "./ProfileHistoryTabModal";
import { authInstance } from "../../../api/axios";

const competitionItems = [
  {
    competitonId: 12,
    title: "정기 12차 대회",
    startAt: "2024-08-07T09:03:28.0654",
    endAt: "2024-08-10T18:03:28.0654",
    rank: "9",
    rating_change: "-300",
    balance: "1300000",
  },
  {
    competitonId: 11,
    title: "정기 11차 대회",
    startAt: "2024-08-02T13:03:28.0654",
    endAt: "2024-08-05T18:03:28.0654",
    rank: "1",
    rating_change: "+400",
    balance: "1500000",
  },
  {
    competitonId: 10,
    title: "정기 10차 대회",
    startAt: "2024-07-27T10:03:28.0654",
    endAt: "2024-07-30T18:03:28.0654",
    rank: "3",
    rating_change: "+200",
    balance: "1200000",
  },
  {
    competitonId: 9,
    title: "정기 9차 대회",
    startAt: "2024-07-22T10:03:28.0654",
    endAt: "2024-07-26T18:03:28.0654",
    rank: "6",
    rating_change: "+2340",
    balance: "1150000",
  },
  {
    competitonId: 8,
    title: "정기 8차 대회",
    startAt: "2024-08-07T09:03:28.0654",
    endAt: "2024-08-10T18:03:28.0654",
    rank: "9",
    rating_change: "-300",
    balance: "1300000",
  },
  {
    competitonId: 7,
    title: "정기 7차 대회",
    startAt: "2024-08-02T13:03:28.0654",
    endAt: "2024-08-05T18:03:28.0654",
    rank: "1",
    rating_change: "+400",
    balance: "1500000",
  },
  {
    competitonId: 6,
    title: "정기 6차 대회",
    startAt: "2024-07-27T10:03:28.0654",
    endAt: "2024-07-30T18:03:28.0654",
    rank: "3",
    rating_change: "+200",
    balance: "1200000",
  },
  {
    competitonId: 5,
    title: "정기 5차 대회",
    startAt: "2024-07-22T10:03:28.0654",
    endAt: "2024-07-26T18:03:28.0654",
    rank: "6",
    rating_change: "+2340",
    balance: "1150000",
  },
  {
    competitonId: 4,
    title: "정기 4차 대회",
    startAt: "2024-08-07T09:03:28.0654",
    endAt: "2024-08-10T18:03:28.0654",
    rank: "9",
    rating_change: "-300",
    balance: "1300000",
  },
  {
    competitonId: 3,
    title: "정기 3차 대회",
    startAt: "2024-08-02T13:03:28.0654",
    endAt: "2024-08-05T18:03:28.0654",
    rank: "1",
    rating_change: "+400",
    balance: "1500000",
  },
  {
    competitonId: 2,
    title: "정기 2차 대회",
    startAt: "2024-07-27T10:03:28.0654",
    endAt: "2024-07-30T18:03:28.0654",
    rank: "3",
    rating_change: "+200",
    balance: "1200000",
  },
  {
    competitonId: 1,
    title: "정기 1차 대회",
    startAt: "2024-07-22T10:03:28.0654",
    endAt: "2024-07-26T18:03:28.0654",
    rank: "6",
    rating_change: "+2340",
    balance: "1150000",
  },
];

const ProfileHistoryTab = ({ handleDate }) => {
  // const ProfileHistoryTab = ({ handleDate, priceFormat }) => {
  // useEffect(() => {
  //   // 0. 프로필 히스토리 페이지 렌더링시,
  //   getCompetitionAll();
  // }, []);
  // // 1.  대회참여 히스토리 가져오기
  // const getCompetitionAll = async () => {
  //   try {
  //     const competitionItems = [];
  //     console.log(
  //       "프로필 히스토리탭 대회 데이터 가져오기 전: ",
  //       competitionItems
  //     );

  //     // # 2.0. Axios의 응답 객체에서 직접 competitionItems 추출
  //     const response = await authInstance.get("/competition/all");

  //     // # 2.1. Axios getCompetitionAll 완료 알림
  //     alert("대회 데이터 전체 가져오기 완료~!!");
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //     alert(
  //       "대회 데이터 전체 가져오기에 실패했습니다: " +
  //         (error.response ? error.response.data.message : error.message)
  //     );
  //   }
  // };
  const [showModal, setShowModal] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  const handleItemClick = (competitionItem) => {
    setSelectedCompetition(competitionItem);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCompetition(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="p-4 mx-48">
        {competitionItems.map((competitionItem, index) => (
          <div key={index} onClick={() => handleItemClick(competitionItem)}>
            <div className="flex flex-row justify-between mb-2 cursor-pointer">
              <div className="block">
                <div className="text-xl">{competitionItem.title}</div>
                <div className="text-xs">
                  기간: {handleDate(competitionItem.startAt)} ~{" "}
                  {handleDate(competitionItem.endAt)}
                </div>
              </div>
              <div className="block text-right">
                <div>순위: {competitionItem.rank}위</div>
                <div>레이팅 변동: {competitionItem.rating_change}</div>
                <div>
                  수익률: {(competitionItem.balance - 1000000) / 10000}% (
                  {(competitionItem.balance - 1000000).toLocaleString()}원)
                </div>
              </div>
            </div>
            <hr className="mb-2" />
          </div>
        ))}
      </div>
      <div>
        {showModal ? (
          <ProfileHistoryTabModal
            show={showModal}
            onClose={handleCloseModal}
            competitionItem={selectedCompetition}
            handleDate={handleDate}
            // priceFormat={priceFormat}
          />
        ) : null}
      </div>
    </>
  );
};

export default ProfileHistoryTab;
