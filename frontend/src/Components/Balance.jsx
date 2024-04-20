import React from "react";

const Balance = ({ value }) => {
  return (
    <div className="flex mx-4 mt-4">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {value.toFixed(2)}</div>
    </div>
  );
};

export default Balance;
