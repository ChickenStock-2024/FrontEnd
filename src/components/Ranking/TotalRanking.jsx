import React from "react";
import { useState, useEffect } from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";
import { defaultInstance } from "../../api/axios";

const TotalRanking = () => {
  const [memberList, setMemberList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getRankingTotal(currentPage);
  }, [currentPage]);

  const getRankingTotal = async (page) => {
    try {
      const response = await defaultInstance.get("/ranking/all", {
        params: { offset: page },
      });
      // console.log(response.data);
      setMemberList(response.data.memberList);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-w-max">
      <RankingProfile parameter={`전체 ${memberList.length}`} />
      <RankingList memberList={memberList} />

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded mr-2 hover:bg-yellow3"
        >
          이전
        </button>
        <span className="px-4 py-2 font-bold ">{currentPage}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 rounded ml-2 hover:bg-yellow3"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default TotalRanking;
