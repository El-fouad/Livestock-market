import React, { useState } from "react";
import { CustomButton, FieldText } from "../components/FieldandButton";
const SignUp = ({isSignup,toRegForm}) => {
  
  if(isSignup)return null;
  return (
    <>
        <form action="" className="flex h-full flex-col w-[50%]  ">
          <h1 className=" text-2xl font-black my-4">Create your account</h1>
          <FieldText type={"text"} labelText={"First Name"} />
          <FieldText type={"text"} labelText={"Last Name"} />
          <FieldText type={"email"} labelText={"Email"} />
          <FieldText type={"text"} labelText={"Number Phone"} />
          <div className=" flex">
            <FieldText
              type={"password"}
              labelText={"Password"}
              style={"flex-1"}
            />
            <FieldText
              type={"password"}
              labelText={"Confirm Password"}
              style={" flex-1 ml-4"}
            />
          </div>
          <CustomButton
            name={"Create Account"}
            customStyle={"w-full justify-center py-2 rounded-md font-bold my-4"}
          />
          <div className=" text-center pb-4 ">
            Already have an account ?
            <button type="button" onClick={toRegForm} className=" text-secondary-color"> Sign in</button>
          </div>
        </form>
    </>
  );
};

export default SignUp;
