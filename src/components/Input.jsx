import React, { useState } from "react";

const Input = (props) => {
  const { label, placeholder, onChange, width } = props;
  const [text, setText] = useState("");
  return (
    <div className="border-2 border-gray-300 p-3 rounded-lg">
      <input
        className="w-full outline-none"
        type="text"
        label={label}
        value={text}
        placeholder={placeholder}
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      />
    </div>
  );
};

export default Input;
