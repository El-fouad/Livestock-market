import React from "react";
import SearchBar from "../components/SearchBar";
import AnnouncementCard from "../components/AnnouncementCard";
import AnnouncementCardFilterPage from "../components/AnnouncementCardFilterPage";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const FilteredAnnouncements = () => {
  return (
    <>
      <SearchBar />
      <div className=" flex md:justify-center">
        <div className=" flex flex-col md:flex-row w-auto md:w-[80%]">
          <div className=" flex-[0.5]  border-l py-5 hidden lg:block">filtering zone</div>
          <div className=" flex-1  border-x  p-4  py-5">
            {/* <AnnouncementCard/> */}
            <div className=" flex justify-between py-2">
              <div className=" font-bold">
                Agadir <span className=" font-light">(1 results )</span>
              </div>
              <div>
                Sorted by{" "}
                <select name="rate" className=" bg-transparent font-bold">
                  <option value="rate" selected disabled>
                    price
                  </option>
                </select>
              </div>
            </div>
            <AnnouncementCardFilterPage />
            <AnnouncementCardFilterPage />
            <AnnouncementCardFilterPage />
            <AnnouncementCardFilterPage />
            <AnnouncementCardFilterPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredAnnouncements;
