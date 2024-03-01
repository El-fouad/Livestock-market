import React, { useState } from "react";

import { GiPositionMarker } from "react-icons/gi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import ProfileInfoShortcut from "../components/ProfileInfoShortcut";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "../components/Rating";

const AnnouncementDetails = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <div className="flex justify-center ">
        <div className="  lg:w-[80%] border-x flex justify-center">
          <div className="md:w-[80%] px-4">
            {/* zone imgs */}
            <div className=" grid gap-2 lg:grid-cols-2 my-8 ">
              <div className=" bg-red-400 lg:h-96 h-60 ">first</div>
              <div className=" grid gap-2">
                <div className="bg-blue ">sec</div>
                <div className=" grid gap-2 grid-cols-2">
                  <div className=" bg-yellow ">thir</div>
                  <div className=" bg-green">four</div>
                </div>
              </div>
            </div>
            {/* details  */}
            <div className="  shadow-lg rounded-md flex lg:flex-row flex-col py-4 px-6 mb-8">
              <div className=" flex-1">
                <div className="flex justify-between">
                  <div className=" flex flex-col  justify-center">
                    <div className=" text-4xl font-bold  text-primary-text-color">
                      title
                    </div>
                    <div className="text-base font-light flex items-center text-secondary-color">
                      <GiPositionMarker className="  bg-transparent " /> Address
                    </div>
                  </div>

                  <div className=" lg:hidden flex items-center justify-around ">
                    
                    {/* favorite */}
                    <div className=" flex items-center flex-1">
                      <button
                        className=" "
                        onClick={() => setFavorite(!favorite)}
                      >
                        {favorite ? (
                          <MdOutlineFavoriteBorder className=" mx-2 text-4xl" />
                        ) : (
                          <MdOutlineFavorite className="mx-2  text-yellow-dark text-4xl" />
                        )}
                      </button>
                    </div>
                    {/* button */}
                    <button className=" bg-secondary-color text-background-color px-2 h-12 text-lg font-bold rounded-md">
                      Get Offer
                    </button>
                  </div>
                </div>
                <div className=" py-2">
                  <h1 className=" text-lg font-bold">
                    Description about the offer
                  </h1>
                  <p className=" px-2 mdw-[85%] ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus..
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className=" hidden lg:flex justify-around ">
                  <button className=" bg-secondary-color text-background-color flex-1 py-3 text-lg font-bold mx-4 rounded-md">
                    Get Offer
                  </button>
                  {/* favorite */}
                  <div className=" flex justify-center items-center flex-1">
                    <h3
                      className={`px-2 underline ${
                        favorite ? null : "text-yellow-dark"
                      }`}
                      onClick={() => setFavorite(!favorite)}
                    >
                      favorite it
                    </h3>
                    <button
                      className=" "
                      onClick={() => setFavorite(!favorite)}
                    >
                      {favorite ? (
                        <MdOutlineFavoriteBorder className=" text-2xl" />
                      ) : (
                        <MdOutlineFavorite className=" text-yellow-dark text-2xl" />
                      )}
                    </button>
                  </div>
                </div>
                {/* seller profile  */}
                <div className=" flex flex-col flex-auto justify-between">
                  <Rating />
                  <ProfileInfoShortcut />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementDetails;
