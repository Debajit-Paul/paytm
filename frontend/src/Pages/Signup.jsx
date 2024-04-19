import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="w-80 h-max p-2 px-4 text-center bg-white rounded-lg">
        <Heading lable={"Sign Up"} />
        <SubHeading lable={"Enter your information to create an account"} />
        <InputBox lable={"First Name"} placeholder={"John"} />
        <InputBox lable={"Last Name"} placeholder={"Doe"} />
        <InputBox lable={"Email"} placeholder={"john@gmail.com"} />
        <InputBox lable={"Password"} placeholder={"12345678"} />
        <div className="pt-4">
          <Button lable={"Sign Up"} />
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
