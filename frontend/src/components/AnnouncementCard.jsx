import React from "react";
import ProfileInfoShortcut from "./ProfileInfoShortcut";

const AnnouncementCard = ({price,userName, userAddress,userProfile,title}) => {
  return (
    <>
      {/* announce card  */}
      <div className=" w-64 bg-background-color shadow-md flex flex-col mx-auto my-4  rounded-lg">
        {/* IMG */}
        <div className=" flex-[1.4] rounded-lg">
          <div className=" h-56 w-full bg-slate-500 rounded-lg"></div>
        </div>
        <div className="flex-[0.6] rounded-lg ">
          <div className=" flex justify-between py-1 px-4">
            <div className=" text-lg font-bold">{title}</div>
            <div className=" text-lg font-medium">
              {price} <span className=" text-sm font-medium">DH/HEAD</span>
            </div>
          </div>
          <div className=" flex items-center py-1">
            <ProfileInfoShortcut hideCheck="md:hidden"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementCard;
