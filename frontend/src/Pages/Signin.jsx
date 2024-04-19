import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";

const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="w-80 h-max p-2 px-4 text-center bg-white rounded-lg">
        <Heading lable={"Sign In"} />
        <SubHeading lable={"Enter your credentials to access your account"} />
        <InputBox lable={"Email"} placeholder={"john@gmail.com"} />
        <InputBox lable={"Password"} placeholder={"12345678"} />
        <div className="pt-4">
          <Button lable={"Sign In"} />
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
