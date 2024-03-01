import React from "react";
import { GiPositionMarker } from "react-icons/gi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import pic from "/assets/images/background_img.jpg";
import profile from "/assets/images/profile.jpg";
import ProfileInfoShortcut from "./ProfileInfoShortcut";
import { Link } from "react-router-dom";

const AnnouncementCardFilterPage = () => {
  return (
    <>
      <div className=" bg-background-color border-primary-color border rounded-lg my-2 ">
        <div className=" flex flex-col md:flex-row">
          <Link className="flex  flex-[1.8]" to={"/view/announce/id"}>
            <div className=" flex-1 md:h-44 md:w-60">
              <img
                src={pic}
                alt=""
                className=" bg-black rounded-s-lg h-full "
              />
            </div>
            <div className=" flex-1 flex flex-col justify-between  ">
              <div className="h-full flex flex-col px-4 justify-center">
                <div className=" flex justify-between items-center">
                  <div className=" text-2xl font-bold my-1 text-primary-text-color">
                    title
                  </div>
                  <div className="xl:hidden text-primary-text-color">
                    <div className=" text-md font-semibold border-primary-color/20 border-2  rounded-xl px-1">
                      4500
                      <span className=" text-sm font-light"> DH/h</span>
                    </div>
                  </div>
                </div>
                <div className=" text-sm font-light flex items-center text-secondary-color">
                  <GiPositionMarker className=" bg-transparent " /> Address
                </div>
              </div>
              <ProfileInfoShortcut />
            </div>
          </Link>

          <div className=" hidden xl:flex py-2 px-4  flex-col justify-end border-l-2 border-primary-color/20">
            <div className=" text-primary-text-color">
              <span className=" text-md font-extrabold">Starting Price </span>
              <div className=" text-lg font-extrabold">
                {" "}
                4500 <span className=" text-sm font-semibold">DH/head</span>
              </div>
            </div>
            <div className=" text-center">
              <button className=" bg-secondary-color text-background-color  py-1 px-4 text-lg font-bold my-4">
                Get Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementCardFilterPage;
