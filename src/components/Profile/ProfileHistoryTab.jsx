import React, { useState } from "react";
import ProfileHistoryTabModal from "./ProfileHistoryTabModal";

// Date converted to YYYY. MM. DD format
const handleDate = (strDate) => {
  const date = new Date(strDate);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const priceFormat = (str) => {
  const comma = (str) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };
  const uncomma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  };
  return comma(uncomma(str));
};

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
// const competitionItems = [
//   {
//     competitonId: 12,
//     title: "정기 12차 대회",
//     startAt: "2024-08-07T09:03:28.0654",
//     endAt: "2024-08-10T18:03:28.0654",
//     rank: "9",
//     latestRating: "-300",
//     earningRate: "30",
//     earnings: "300,000",
//   },
//   {
//     competitonId: 11,
//     title: "정기 11차 대회",
//     startAt: "2024-08-02T13:03:28.0654",
//     endAt: "2024-08-05T18:03:28.0654",
//     rank: "1",
//     latestRating: "+400",
//     earningRate: "50",
//     earnings: "500,000",
//   },
//   {
//     competitonId: 10,
//     title: "정기 10차 대회",
//     startAt: "2024-07-27T10:03:28.0654",
//     endAt: "2024-07-30T18:03:28.0654",
//     rank: "3",
//     latestRating: "+200",
//     earningRate: "20",
//     earnings: "200,000",
//   },
//   {
//     competitonId: 9,
//     title: "정기 9차 대회",
//     startAt: "2024-07-22T10:03:28.0654",
//     endAt: "2024-07-26T18:03:28.0654",
//     rank: "6",
//     latestRating: "+2340",
//     earningRate: "15",
//     earnings: "150,000",
//   },
//   {
//     competitonId: 8,
//     title: "정기 8차 대회",
//     startAt: "2024-08-07T09:03:28.0654",
//     endAt: "2024-08-10T18:03:28.0654",
//     rank: "9",
//     latestRating: "-300",
//     earningRate: "30",
//     earnings: "300,000",
//   },
//   {
//     competitonId: 7,
//     title: "정기 7차 대회",
//     startAt: "2024-08-02T13:03:28.0654",
//     endAt: "2024-08-05T18:03:28.0654",
//     rank: "1",
//     latestRating: "+400",
//     earningRate: "50",
//     earnings: "500,000",
//   },
//   {
//     competitonId: 6,
//     title: "정기 6차 대회",
//     startAt: "2024-07-27T10:03:28.0654",
//     endAt: "2024-07-30T18:03:28.0654",
//     rank: "3",
//     latestRating: "+200",
//     earningRate: "20",
//     earnings: "200,000",
//   },
//   {
//     competitonId: 5,
//     title: "정기 5차 대회",
//     startAt: "2024-07-22T10:03:28.0654",
//     endAt: "2024-07-26T18:03:28.0654",
//     rank: "6",
//     latestRating: "+2340",
//     earningRate: "15",
//     earnings: "150,000",
//   },
//   {
//     competitonId: 4,
//     title: "정기 4차 대회",
//     startAt: "2024-08-07T09:03:28.0654",
//     endAt: "2024-08-10T18:03:28.0654",
//     rank: "9",
//     latestRating: "-300",
//     earningRate: "30",
//     earnings: "300,000",
//   },
//   {
//     competitonId: 3,
//     title: "정기 3차 대회",
//     startAt: "2024-08-02T13:03:28.0654",
//     endAt: "2024-08-05T18:03:28.0654",
//     rank: "1",
//     latestRating: "+400",
//     earningRate: "50",
//     earnings: "500,000",
//   },
//   {
//     competitonId: 2,
//     title: "정기 2차 대회",
//     startAt: "2024-07-27T10:03:28.0654",
//     endAt: "2024-07-30T18:03:28.0654",
//     rank: "3",
//     latestRating: "+200",
//     earningRate: "20",
//     earnings: "200,000",
//   },
//   {
//     competitonId: 1,
//     title: "정기 1차 대회",
//     startAt: "2024-07-22T10:03:28.0654",
//     endAt: "2024-07-26T18:03:28.0654",
//     rank: "6",
//     latestRating: "+2340",
//     earningRate: "15",
//     earnings: "150,000",
//   },
// ];

const ProfileHistoryTab = ({ userInfo }) => {
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
        {userInfo.competitionItems.map((competitionItem, index) => (
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
                <div>레이팅: {competitionItem.latestRating}</div>
                <div>
                  수익률: {competitionItem.earningRate}% (
                  {priceFormat(competitionItem.earnings)}원)
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
            priceFormat={priceFormat}
          />
        ) : null}
      </div>
    </>
  );
};

export default ProfileHistoryTab;
