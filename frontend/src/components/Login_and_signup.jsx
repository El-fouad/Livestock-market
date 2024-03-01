import React from "react";
import { MdSecurity,MdOutlineCancel } from "react-icons/md";
const Login_and_signup = (props) => {
  if ( !props.visable){
    return null
  }
  return (
    <>
    <div className=" flex justify-center items-center fixed inset-0 w-screen z-50 h-screen bg-opacity-20 bg-black backdrop-blur-sm">

      <div className="w-[80vw]  h-[80vh] bg-background-color shadow-md">
        <div className="flex h-full ">
          <div className=" flex-1 flex flex-col items-center justify-center overflow-scroll ">
            {props.children}
          </div>
          <div className=" bg-secondary-color w-[40%] text-white flex flex-col items-center overflow-scroll">
            <div className=" flex justify-end w-full ">
              <button className="m-4 mb-0" onClick={props.onClose}><MdOutlineCancel className="text-xl "/></button>
            </div>
            <div className=" flex flex-col items-center  ">
              <div className="font-bold text-3xl mx-20 text-center py-8 ">Get the best experience with FrigoMa</div>

              <div className="w-auto flex flex-col items-center py-2 mx-32">
                <MdSecurity className=" text-8xl" />
                <p className=" text-center py-2">
                  <span className=" font-bold text-xl">We secure your booking</span><br />
                  We make sure to provide you with the best security from the
                  deposit till withdrawing your products
                </p>
              </div>
              <div className="w-auto flex flex-col items-center py-2 mx-32">
                <MdSecurity className=" text-8xl" />
                <p className=" text-center py-2">
                  <span className=" font-bold text-xl">We secure your booking</span><br />
                  We make sure to provide you with the best security from the
                  deposit till withdrawing your products
                </p>
              </div>
              <div className="w-auto flex flex-col items-center py-2 mx-32">
                <MdSecurity className=" text-8xl" />
                <p className=" text-center py-2">
                  <span className=" font-bold text-xl">We secure your booking</span><br />
                  We make sure to provide you with the best security from the
                  deposit till withdrawing your products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login_and_signup;
