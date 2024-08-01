import React from "react";
import ExecutionList from "./ExecutionList";
import UnexecutionList from "./UnexecutionList";

const OrderList = () => {
  return (
    <div className="overflow-y-auto max-h-[450px] border border-red-300">
      <UnexecutionList />
      <ExecutionList />
    </div>
  );
};

export default OrderList;
