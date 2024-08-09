import React from "react";
import { useState, useEffect } from "react";
import ProfileUserSearchTabSearch from "./ProfileUserSearchTabSearch.jsx";
// import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult.jsx";
import ProfileUserSearchTabAxios from "./ProfileUserSearchTabAxios.js";
// import Input from "../../Input.jsx";

const ProfileUserSearchTab = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

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
