import React from "react";
import { useState, useEffect } from "react";
import RankingProfile from "./RankingProfile";
import RankingList from "./RankingList";
import { defaultInstance } from "../../api/axios";

const RivalRanking = () => {
  const [memberList, setMemberList] = useState([]);
  const [myRanking, setMyRanking] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getRankingRival(currentPage);
  }, [currentPage]);

  const getRankingRival = async (page) => {
    try {
      const response = await defaultInstance.get("/ranking/rival", {
        params: { offset: page },
      });
      setMemberList(response.data.memberList);
      setMyRanking(response.data.myRanking);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const totalPages = Math.ceil(totalCount / 10);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const rank = memberList.findIndex(
    (obj) => obj.memberId === myRanking.memberId
  );

  return (
    <div className="min-w-max">
      <RankingProfile
        parameter={`친구 ${totalCount}`}
        myRanking={myRanking}
        rank={rank + 1}
      />
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
          disabled={currentPage >= totalPages}
          className="px-4 py-2 rounded ml-2 hover:bg-yellow3"
        >
          다음
        </button>
      </div>
    </div>
  );
};
export default RivalRanking;
