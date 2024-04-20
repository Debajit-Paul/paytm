import React, { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import Balance from "../Components/Balance";
import Users from "../Components/Users";
import axios from "axios";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/account/balance`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setBalance(response.data.balance));
  }, [balance]);
  return (
    <div className="flex flex-col h-screen w-full">
      <AppBar />
      <Balance value={balance} />
      <Users />
    </div>
  );
};

export default Dashboard;
