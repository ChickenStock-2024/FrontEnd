import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-6";

  return (
    <div
      className={
        "w-14 h-7 flex items-center rounded-full p-1 cursor-pointer shadow-md" +
        (toggle ? " bg-gray-300" : " bg-yellow2")
      }
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-white h-6 w-6 rounded-full shadow-md transform" +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Toggle;
