import React from "react";
import { Link } from "react-router-dom";
import TierBadge from "../../TierBadge";
import { calculateTier } from "../../../utils/tierCalculator";

import profileImage from "../../../assets/userProfileImage_쑤.png";
import userTierBadge from "../../../assets/userTierBadge.png";

const ProfileUserSearchTabResult = ({ user }) => {
  const tier = calculateTier(user.rating);

  return (
    <div key={user.id}>
      {/* <div className="flex py-3"> */}
      <div>
        <Link to={`/profile/${user.memberId}`} className="flex py-3">
          <div className=" flex w-[50%]">
            <div className="w-[20%] text-l font-bold">{user.rank}위</div>
            <div className="flex items-center">
              <div className="flex-none">
                <img
                  className="rounded-full w-5 h-5"
                  src={`/profile/${user.imgUrl}`}
                  alt="userProfileImage"
                />
              </div>
              <div className="flex-none">
                <div className=" w-5 h-5 ml-1 mr-2">
                  <TierBadge tier={tier} />
                </div>
                {/* <img
                  className="rounded-full w-5 h-5 ml-1 mr-2"
                  src={userTierBadge}
                  alt="userTierBadge"
                /> */}
              </div>
              <div className="text-l font-bold">{user.nickname}</div>
            </div>
          </div>
          <div className="w-[50%] flex justify-end">
            <div className="w-[60%] flex justify-end ">
              <div className="text-l font-medium">
                {(user.balance - 1000000) / 10000 || 0}%
              </div>
              <div className="text-l font-medium">
                ({(user.balance - 1000000 || 0).toLocaleString()}원)
              </div>
            </div>
            <div className="w-[40%]">
              <div className="text-l font-medium text-right">{user.rating}</div>
            </div>
          </div>
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default ProfileUserSearchTabResult;
