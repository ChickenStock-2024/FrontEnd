import React from "react";
import ExecutionList from "./ExecutionList";
import UnexecutionList from "./UnexecutionList";

const OrderList = () => {
  return (
    <div className="overflow-y-auto p-4 max-h-[550px]">
      <UnexecutionList />
      <hr className="pb-4" />
      <ExecutionList />
    </div>
  );
};

export default OrderList;
