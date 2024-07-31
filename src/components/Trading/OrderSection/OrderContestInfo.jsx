import React from "react";

const contestInfo = {
  title: "정기 2차 대회",
  startDate: "24. 07. 22",
  endDate: "24. 07. 26",
};

const OrderContestInfo = () => {
  return (
    <div>
      <div className="text-lg">{contestInfo.title}</div>
      <div className="text-sm text-right">
        기간: {contestInfo.startDate} ~ {contestInfo.endDate}
      </div>
    </div>
  );
};

export default OrderContestInfo;
