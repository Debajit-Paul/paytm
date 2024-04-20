import React, { useEffect, useState } from "react";
import axios from "axios";

const AppBar = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setName(response.data.user.firstName));
  }, []);
  return (
    <div className="h-14 flex justify-between px-4 shadow">
      <div className="flex items-center h-full">PayTM App</div>
      <div className="flex items-center gap-2">
        <div className="flex items-center h-full">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center">
          <div className="text-xl">{name.charAt(0).toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
