import React, { useEffect, useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import AnnouncementCard from "../components/AnnouncementCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnouncmentsSlider from "../components/AnnouncmentsSlider";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className=" md:h-96 bg-hero-pattern bg-cover bg-center">
        <div className=" md:h-96 bg-gradient-to-t from-background-color to-background-color/50 flex ">
          {/* sub Nav */}
          <div className="sm:w-[80%] mx-4 h-auto lg:w-auto md:h-72 mt-10 sm:mx-auto bg-primary-color rounded-xl ">
            <form className=" flex flex-col justify-center items-center h-full">
              <div className=" text-white mx-8 my-4">
                <div className=" md:text-3xl text-xl font-bold py-1">
                  Hawli The morocco s number 1 livestock marketplace
                </div>
                <div className=" md:text-lg text-sm font-light py-1">
                  Reach farmers to buy and sell livestock in the morocco .
                  Simple, smart, effective.
                </div>
              </div>
              <div className=" flex flex-col md:flex-row md:w-auto w-full flex-1 space-y-4 md:space-y-0 md:items-end">
                <select
                  id="countries_disabled"
                  className="h-10 bg-gray-50 border-0  text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 block px-2.5 mx-4"
                >
                  <option selected disabled>
                    Choose a Categorie
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                {/* select vaiety */}
                <select
                  id="countries_disabled"
                  className="h-10 bg-gray-50 border-0  text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 block px-2.5 mx-4"
                >
                  <option selected disabled>
                    Choose a Categorie
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                {/* select city */}
                <select
                  id="countries_disabled"
                  className="h-10 bg-gray-50 border-0  text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 block px-2.5 mx-4"
                >
                  <option selected disabled>
                    Choose a Categorie
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              {/* search Button */}
              <div className="w-full flex-1 flex items-end justify-end ">
                <NavLink className={"relative  mx-10 top-4"} to={"search/id"}>
                  <button
                    type="submit"
                    className=" text-white flex items-center pr-2 py-1.5 rounded-lg font-medium bg-secondary-color "
                  >
                    <BiSearchAlt2 className=" text-3xl mx-2" /> Search
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto">
        <AnnouncmentsSlider dataAnnounces={data} />
        <AnnouncmentsSlider dataAnnounces={data} />
      </div>
    </>
  );
};

export default Home;
