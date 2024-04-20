import React, { useState } from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="w-80 h-max p-2 px-4 text-center bg-white rounded-lg">
        <Heading lable={"Sign In"} />
        <SubHeading lable={"Enter your credentials to access your account"} />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          lable={"Email"}
          placeholder={"john@gmail.com"}
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          lable={"Password"}
          placeholder={"12345678"}
        />
        <div className="pt-4">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigation("/dashboard");
            }}
            lable={"Sign In"}
          />
        </div>
        <BottomWarning
          lable={"Don't have an account?"}
          to={"/signup"}
          buttonText={"Sign Up"}
        />
      </div>
    </div>
  );
};

export default Signin;
