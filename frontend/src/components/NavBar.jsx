import React, { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import Login_and_signup from "./Login_and_signup";
import Login from "../pages/Login"
import Connect from "../pages/Connect";
import { Link } from "react-router-dom";
function NavBar() {
  const [logVisable,setLogVisable]=useState(false)
  const handleClose = ()=>setLogVisable(false)
  return (
    <>
      {/* Navbar */}
      <div className=" flex  justify-around items-center text-primary-color h-16 border-b-2 border-primary-color">
        {/* logo */}
        <div className="flex-1 flex justify-center">
         <Link to={"/"}>
         <div className=" md:text-2xl text-xl font-bold">Hawli.ma</div>
          </Link> 
        </div>
        {/*  */}
        <div className=" flex flex-1 justify-end md:justify-center">
          <div className=" flex items-center  text-lg md:mx-4">
            <MdOutlineLanguage className=" mx-1" />
           <span className=" hidden md:block">English</span>  <AiOutlineCaretDown className=" mx-1 hidden md:block" />
          </div>
          <div className=" hidden items-center lg:flex mx-4">
            <BiSolidHelpCircle className=" mx-1" />
           <span> Contact us</span>
          </div>
          {/* profile settings */}
          <div className="flex items-center ">
            <button className=" w-12 h-12 rounded-full bg-black"></button>
          </div>
          {/* <button className=" md:px-4 mx-4 px-2 py-1 border-2 border-primary-color font-semibold"
          onClick={()=>setLogVisable(true)}
          >
            Sign in
          </button> */}
        </div>
      </div>
        <Connect visable={logVisable} close={handleClose} />
    </>
  );
}

export default NavBar;
