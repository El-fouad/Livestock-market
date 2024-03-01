import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
const ProfileInfoShortcut = ({hideCheck,classname}) => {
  return (
    <>
      <div className={`${classname} flex justify-between items-center border-primary-color/20  py-2 px-4 `}>
        <button className=" flex  items-center">
          <div className=" h-10 w-10 rounded-full bg-[url('/assets/images/profile.jpg')] bg-cover bg-center"></div>
          <div className=" mx-2">
            <div className=" text-sm text-start font-semibold">userName</div>
            <div className=" text-xs flex ">
              <BsStarFill className=" text-yellow-dark" />
              <BsStarFill className=" text-yellow-dark" />
              <BsStarFill className=" text-yellow-dark" />
              <BsStar className=" text-yellow-dark" />
              {/* <BsStarHalf className=" text-yellow-dark"/> */}
              <BsStar className=" text-yellow-dark" />
              <span className=" text-[8px] mx-1 text-yellow-dark">(3.0)</span>
            </div>
          </div>
        </button>
        <div className={`${hideCheck}  text-xs font-light text-secondary-color hidden md:block`}>
          check all offers <br />
          <span className=" text-xs font-semibold">By userName</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoShortcut;
