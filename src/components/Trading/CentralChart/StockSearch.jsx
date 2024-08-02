import React from "react";
import { useState } from "react";
import Input from "../../Input";

const StockSearch = () => {
  const [userInput, setUserInput] = useState();
  const getSearchData = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  // 검색 인풋을 리스트에 넣기

  const [searchLists, setSearchLists] = useState([]);

  const onClickSearchInput = (e) => {
    e.preventDefault();
    // const res = await getSearchRequest(userInput);
    // getSearchRequest는 백엔에서 준 API를 받아오는 함수를 따로
    // 함수로 정의했고 거기서 꺼내옴
    setSearchLists([...searchLists, userInput]);
    console.log(searchLists);
  };

  return (
    <div>
      {/* <input type="text" placeholder="종목 검색" onChange={getSearchData} /> */}
      {/* <Input placeholder={"종목 검색"} onChange={getSearchData} /> */}
      <div className="border-2 border-gray-300 p-3 rounded-lg">
        <input
          className="w-full outline-none"
          type="text"
          value={userInput}
          placeholder="종목 검색"
        />
      </div>
      {/* <button onClick={onClickSearchInput}>검색</button> */}
    </div>
  );
};

export default StockSearch;
