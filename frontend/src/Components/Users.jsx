import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setUsers(response.data.user));
  }, [filter]);

  return (
    <div className="mx-4">
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="my-2">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-slate-200 h-12 w-12 flex justify-center items-center text-xl">
          {user.firstName[0]}
        </div>

        <div className="flex justify-center">
          {user.firstName} {user.lastName}
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
        <Button
          onClick={() => {
            navigation(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          lable={"Send Money"}
        />
      </div>
    </div>
  );
};

export default Users;
