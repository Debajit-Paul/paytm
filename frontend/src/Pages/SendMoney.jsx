import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const navigation = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 h-min bg-white shadow-lg rounded-lg space-y-8 flex flex-col">
        <h2 className="text-2xl font-bold text-center space-y-1.5 p-6">
          Send Money
        </h2>

        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">{`${name[0].toUpperCase()}`}</span>
            </div>
            <h3 className="text-xl font-semibold">{`${name[0].toUpperCase()}${name
              .slice(1)
              .toLowerCase()}`}</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="amount"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Amount (in Rs)
              </label>
              <input
                type="text"
                id="amount"
                placeholder="Enter Amount"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                axios.post(
                  "http://localhost:3000/api/v1/account/transfer",
                  {
                    amount,
                    to: id,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );

                navigation("./dasboard");
              }}
              className="w-full text-white bg-green-500 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
