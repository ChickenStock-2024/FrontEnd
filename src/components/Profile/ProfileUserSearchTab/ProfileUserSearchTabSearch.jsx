import React, { useDebugValue, useState } from "react";

import ProfileUserSearchTabResult from "./ProfileUserSearchTabResult";

const ProfileUserSearchTabSearch = ({
  users,
  search,
  setSearch,
  priceFormat,
}) => {
  // users: 전체 유저
  console.log(users);
  // const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    // if (search === "") {
    //   return setSearch(null);
    // } else {
    setSearch(e.target.value);
    // }
  };
  return (
    <div>
      <div className="border-2 border-gray-300 p-3 rounded-lg">
        <input
          className="w-full outline-none"
          type="text"
          value={search}
          placeholder={"검색할 유저 닉네임을 입력하세요~!!"}
          onChange={onChangeSearch}
        />
      </div>
      {!users ? (
        <>
          <div>
            <div className="px-7">
              <div
                className="py-5 text-gray-500
               font-semibold text-xl text-center"
              >
                검색된 유저가 없습니다
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="px-7">
            <div className="flex">
              <section className="flex-row flex-1">
                {users.map((user, index) => (
                  <ProfileUserSearchTabResult
                    key={index}
                    user={user}
                    priceFormat={priceFormat}
                  />
                ))}
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
  // const getFilteredUsers = () => {
  //   if (search === "") {
  //     return users;
  //   }
  //   return users.filter((user) =>
  //     user.nickname.toLowerCase().includes(search.toLowerCase())
  //   );
  // };
  // const filteredUsers = getFilteredUsers();
  // // filteredUsers: 검색어에 해당하는 유저
  // console.log(filteredUsers);
  // if (!users) {
  //   return (
  //     <>
  //       <div>
  //         {/* <div className="border-2 border-gray-300 p-3 rounded-lg"> */}
  //         <div className="border-2 border-gray-300 p-3 rounded-lg">
  //           <input
  //             // className={`${width ? `"w-"${width}` : "w-full"} outline-none`}
  //             className="w-full outline-none"
  //             type="text"
  //             value={search}
  //             placeholder={"유저 닉네임을 입력하세여~!!"}
  //             onChange={onChangeSearch}
  //           />
  //         </div>
  //         <div className="px-7">
  //           <div>검색된 유저가 없습니다!!</div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {/* <div className="border-2 border-gray-300 p-3 rounded-lg"> */}
  //       <div className="border-2 border-gray-300 p-3 rounded-lg">
  //         <input
  //           // className={`${width ? `"w-"${width}` : "w-full"} outline-none`}
  //           className="w-full outline-none"
  //           type="text"
  //           value={search}
  //           placeholder={"유저 닉네임을 입력하세여~!!"}
  //           onChange={onChangeSearch}
  //         />
  //       </div>
  //       <>
  //         <div className="px-7">
  //           <div className="flex">
  //             <section className="flex-row flex-1">
  //               {users.map((user, index) => (
  //                 <ProfileUserSearchTabResult
  //                   key={index}
  //                   user={user}
  //                   priceFormat={priceFormat}
  //                 />
  //               ))}
  //             </section>
  //           </div>
  //         </div>
  //       </>
  //     </div>
  //   );
  // }
};

export default ProfileUserSearchTabSearch;
