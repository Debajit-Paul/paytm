import React from "react";

const InputBox = ({ lable, placeholder }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{lable}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="border-slste-200 w-full px-2 py-1 border rounded outline-none"
      />
    </div>
  );
};

export default InputBox;
