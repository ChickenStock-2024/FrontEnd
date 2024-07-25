import React, { useState } from "react";
import ProfileHistoryTabModal from "./ProfileHistoryTabModal";

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
const competitionHistoryInfos = [
  {
    competitonId: 4,
    title: "정기 4차 대회",
    startAt: "2024-08-07T09:03:28.0654",
    endAt: "2024-08-10T18:03:28.0654",
    rank: "3",
    latestRating: "-300",
    earningRate: "30",
    earnings: "300,000",
  },
  {
    competitonId: 3,
    title: "정기 3차 대회",
    startAt: "2024-08-02T13:03:28.0654",
    endAt: "2024-08-05T18:03:28.0654",
    rank: "3",
    latestRating: "400",
    earningRate: "50",
    earnings: "500,000",
  },
  {
    competitonId: 2,
    title: "정기 2차 대회",
    startAt: "2024-07-27T10:03:28.0654",
    endAt: "2024-07-30T18:03:28.0654",
    rank: "3",
    latestRating: "+200",
    earningRate: "20",
    earnings: "200,000",
  },
  {
    competitonId: 1,
    title: "정기 1차 대회",
    startAt: "2024-07-22T10:03:28.0654",
    endAt: "2024-07-26T18:03:28.0654",
    rank: "6",
    latestRating: "+2340",
    earningRate: "15",
    earnings: "150,000",
  },
];

const ProfileHistoryTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  const handleItemClick = (competitionItem) => {
    setSelectedCompetition(competitionItem);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCompetition(null);
  };

  return (
    <>
      <div className="p-4 mx-36">
        {competitionHistoryInfos.map((competitionItem, index) => (
          <div key={index} onClick={() => handleItemClick(competitionItem)}>
            <div className="flex flex-row justify-between mb-2 cursor-pointer">
              <div className="block">
                <div className="text-xl">{competitionItem.title}</div>
                <div className="text-xs">
                  기간: {competitionItem.startAt} ~ {competitionItem.endAt}
                </div>
              </div>
              <div className="block text-right">
                <div>순위: {competitionItem.rank}위</div>
                <div>레이팅: {competitionItem.latestRating}</div>
                <div>
                  수익률: {competitionItem.earningRate}% (
                  {competitionItem.earnings})
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
          />
        ) : null}
      </div>
    </>
  );
};

export default ProfileHistoryTab;
