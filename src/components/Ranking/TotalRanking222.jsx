import React, { useState, useEffect } from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";
import { defaultInstance } from "../../api/axios";

const TotalRanking = () => {
  const [memberList, setMemberList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 관리하는 상태 변수

  useEffect(() => {
    getRankingTotal(currentPage); // currentPage가 변경될 때마다 데이터를 가져옴
  }, [currentPage]);

  const getRankingTotal = async (page) => {
    try {
      const response = await defaultInstance.get("/ranking/all", {
        params: { offset: page },
      });
      console.log(response.data);
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
          className="px-4 py-2 bg-gray-200 rounded mr-2"
        >
          이전
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-200 rounded ml-2"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default TotalRanking;
