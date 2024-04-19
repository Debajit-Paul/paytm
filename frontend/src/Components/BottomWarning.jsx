import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ lable, buttonText, to }) => {
  return (
    <div className="flex justify-center py-2 text-sm">
      <div>{lable}</div>
      <Link to={to} className="underline pl-1 cursor-pointer">
        {buttonText}
      </Link>
    </div>
  );
};

export default BottomWarning;
