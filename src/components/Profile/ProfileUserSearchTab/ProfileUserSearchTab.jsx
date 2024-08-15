import React from "react";
import { useState, useEffect } from "react";
import ProfileUserSearchTabSearch from "./ProfileUserSearchTabSearch.jsx";
// import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";
import { defaultInstance } from "../../../api/axios.jsx";
// import Input from "../../Input.jsx";

const ProfileUserSearchTab = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getSearchUsers = async (search) => {
    try {
      const response = await defaultInstance.get(
        `/user/search?value=${search}`
      );
      // console.log("getSearchUsers response: ", response);
      if (response.data.memberList.length == 0) {
        return null;
      } else {
        return response.data.memberList;
      }
    } catch (error) {
      console.error(error);
      alert(
        "유저 검색실패: " +
          (error.response ? error.response.data.message : error.message)
      );
      return null;
    }
  };

  useEffect(() => {
    const searchData = async () => {
      setLoading(true);
      if (search === "") {
        setUsers(null);
      } else {
        const userList = await getSearchUsers(search);
        setUsers(userList);
      }
      setLoading(false);
    };

    searchData();
  }, [search]);

  return (
    <div className="flex flex-col mx-52">
      <div className="pb-5">
        <ProfileUserSearchTabSearch
          users={users}
          search={search}
          setSearch={setSearch}
        />
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProfileUserSearchTab;
