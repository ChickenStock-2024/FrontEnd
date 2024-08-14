import React from "react";
import { useState, useEffect } from "react";
import ProfileUserSearchTabSearch from "./ProfileUserSearchTabSearch.jsx";
// import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";
import ProfileUserSearchTabAxios from "./ProfileUserSearchTabAxios.js";
import { defaultInstance } from "../../../api/axios.jsx";
// import Input from "../../Input.jsx";

const ProfileUserSearchTab = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

  const getSearchUsers = async () => {
    try {
      const response = await defaultInstance.get(
        `/user/search?value=${search}`
      );
    } catch (error) {
      console.log(error);
      alert(
        "유저 검색을 실패했습니다: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  useEffect(() => {
    if (search === "") {
      return setUsers(null);
    } else {
      setUsers(() => ProfileUserSearchTabAxios(search));
    }
  }, [search]);

  return (
    <>
      <div className="flex flex-col mx-52">
        <div className="pb-5">
          <ProfileUserSearchTabSearch
            users={users}
            search={search}
            setSearch={setSearch}
            // priceFormat={priceFormat}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileUserSearchTab;
