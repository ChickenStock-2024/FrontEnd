import React, { useState } from "react";
import ProfileHistoryTabModal from "./ProfileHistoryTabModal";
import useProfilePageInfoStore from "../../../store/useProfilePageInfoStore";

const ProfileHistoryTab = ({ handleDate }) => {
  const competitionItems = useProfilePageInfoStore(
    (state) => state.competitionItems
  );

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

  if (!competitionItems) {
    return (
      <>
        <div>"유저의 대회 참여 내역을 불러오는 중입니다!!</div>
      </>
    );
  } else {
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
                  <div className="flex flex-row justify-end">
                    레이팅 변동:
                    <div
                      className={`ml-1 ${
                        competitionItem.ratingChange < 0
                          ? "text-blue-500"
                          : competitionItem.ratingChange === 0
                            ? "text-black"
                            : "text-red-500"
                      }`}
                    >
                      {`${
                        competitionItem.ratingChange < 0
                          ? `▼${Math.abs(competitionItem.ratingChange)}`
                          : competitionItem.ratingChange === 0
                            ? "-"
                            : `▲${competitionItem.ratingChange}`
                      }`}
                    </div>
                  </div>
                  <div>
                    수익률: {(competitionItem.balance - 50000000) / 500000}% (
                    {competitionItem.balance.toLocaleString()}원)
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
  }
};

export default ProfileHistoryTab;
