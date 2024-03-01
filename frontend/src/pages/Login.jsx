import React, { useState } from "react";
import { CustomButton, FieldText } from "../components/FieldandButton";
import Login_and_signup from "../components/Login_and_signup";

const Login = ({ isLogin, toLoginForm }) => {
  if (!isLogin) return null;
  return (
    <>
      <form action="" className="flex h-full justify-center flex-col w-[50%] ">
        <h1 className=" text-2xl font-black my-4 ">Login to Hawli</h1>
        <FieldText type={"email"} labelText={"Email Address"} />
        <FieldText type={"password"} labelText={"Password"} />
        <div className=" flex justify-between">
          <div className=" py-4">
            <input type="checkbox" name="showPass" id="" className="mr-2" />
            <label htmlFor="showPass">show Password</label>
          </div>
          <div className=" py-4">Forgot Password ?</div>
        </div>
        <CustomButton
          name={"Login"}
          customStyle={"w-full justify-center py-2 rounded-md font-bold"}
        />
        <div className=" text-center py-4">
          Don’t have an account ?{" "}
          <button
            type="button"
            onClick={toLoginForm}
            className=" text-secondary-color"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
