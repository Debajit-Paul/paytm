import React, { useState } from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="w-80 h-max p-2 px-4 text-center bg-white rounded-lg">
        <Heading lable={"Sign Up"} />
        <SubHeading lable={"Enter your information to create an account"} />
        <InputBox
          lable={"First Name"}
          placeholder={"John"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputBox
          lable={"Last Name"}
          placeholder={"Doe"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputBox
          lable={"Email"}
          placeholder={"john@gmail.com"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          lable={"Password"}
          placeholder={"12345678"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="pt-4">
          <Button
            lable={"Sign Up"}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              );

              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
          />
        </div>
        <BottomWarning
          lable={"Already have an account?"}
          to={"/signin"}
          buttonText={"Sign In"}
        />
      </div>
    </div>
  );
};

export default Signup;
