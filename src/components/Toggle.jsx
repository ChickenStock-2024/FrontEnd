import React from "react";
import { useState } from "react";

const Toggle = ({ toggleDefault, toggleSwitch }) => {
  const [toggle, setToggle] = useState(toggleDefault);
  const toggleClass = " transform translate-x-6";

  return (
    <div
      className={
        "w-14 h-7 flex items-center rounded-full p-1 cursor-pointer shadow-md" +
        (toggle ? " bg-yellow2" : " bg-gray-300")
      }
      onClick={() => {
        setToggle(!toggle);
        toggleSwitch();
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-white h-6 w-6 rounded-full shadow-md transform" +
          (toggle ? toggleClass : null)
        }
      ></div>
    </div>
  );
};

export default Toggle;
