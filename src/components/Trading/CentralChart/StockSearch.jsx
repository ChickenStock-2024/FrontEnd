import React from "react";
import { useState } from "react";

const StockSearch = () => {
  const [userInput, setUserInput] = useState();
  const getSearchData = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const [searchLists, setSearchLists] = useState([]);

  const onClickSearchInput = async (e) => {
    e.preventDefault();
    const res = await getSearchRequest(userInput);
    // getSearchRequest는 백엔에서 준 API를 받아오는 함수를 따로
    // 함수로 정의했고 거기서 꺼내옴
    setSearchLists(userInput);
  };

  console.log(searchLists);

  return (
    <div>
      <input type="text" placeholder="종목 검색" onChange={getSearchData} />
    </div>
  );
};

export default StockSearch;
