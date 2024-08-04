import React, { useState } from "react";

import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult";

const ProfileUserSearchTabSearch = ({ users }) => {
  // users: 전체 유저
  console.log(users);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredUsers = () => {
    if (search === "") {
      return users;
    }
    return users.filter((user) =>
      user.nickname.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredUsers = getFilteredUsers();
  // filteredUsers: 검색어에 해당하는 유저
  console.log(filteredUsers);

  return (
    <div>
      {/* <div className="border-2 border-gray-300 p-3 rounded-lg"> */}
      <div className="border-2 border-gray-300 p-3 rounded-lg">
        <input
          // className={`${width ? `"w-"${width}` : "w-full"} outline-none`}
          className="w-full outline-none"
          type="text"
          value={search}
          placeholder={"유저 닉네임을 입력하세여~!!"}
          onChange={onChangeSearch}
        />
      </div>
      <div className="px-7">
        <div className="flex">
          <section className="flex-row flex-1">
            {filteredUsers.map((filteredUser, index) => (
              <ProfileUserSearchTabResult
                filteredUser={filteredUser}
                key={index}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserSearchTabSearch;
