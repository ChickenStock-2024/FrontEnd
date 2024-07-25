import React from "react";

import { useState } from "react";

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
    startAt: "24-08-07",
    endAt: "24-08-10",
    rank: "3",
    latestRating: "-300",
    earningRate: "30",
    earnings: "300,000",
  },
  {
    competitonId: 3,
    title: "정기 3차 대회",
    startAt: "24-08-02",
    endAt: "24-08-05",
    rank: "3",
    latestRating: "400",
    earningRate: "50",
    earnings: "500,000",
  },
  {
    competitonId: 2,
    title: "정기 2차 대회",
    startAt: "24-07-27",
    endAt: "24-07-30",
    rank: "3",
    latestRating: "+200",
    earningRate: "20",
    earnings: "200,000",
  },
  {
    competitonId: 1,
    title: "정기 1차 대회",
    startAt: "24-07-22",
    endAt: "24-07-26",
    rank: "6",
    latestRating: "+2340",
    earningRate: "15",
    earnings: "150,000",
  },
];

const Modal = ({ show, onClose, competitionItem }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl mb-2">{competitionItem.title}</h2>
        <div className="text-xs mb-4">
          기간: {competitionItem.startAt} ~ {competitionItem.endAt}
        </div>
        <div className="text-right">
          <div>순위: {competitionItem.rank}위</div>
          <div>레이팅: {competitionItem.latestRating}</div>
          <div>
            수익률: {competitionItem.earningRate}% ({competitionItem.earnings})
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

const ProfileHistoryTab = ({}) => {
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
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        competitionItem={selectedCompetition}
      />
    </>
  );
};

export default ProfileHistoryTab;
