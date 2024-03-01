import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
function SearchBar() {
  return (
    <>
      {/* sub Nav */}
      <div className=" py-2 md:py-0 md:h-20 bg-primary-color">
        <form className=" flex flex-col md:flex-row px-4 justify-center items-center h-full">
          <div className=" flex my-2 md:my-0">
            <select
              id="countries_disabled"
              className="bg-gray-50 border-0 w-20 md:w-auto text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 block p-2.5 mx-1 md:mx-4"
            >
              <option selected disabled>
                Category
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {/* select vaiety */}
            <select
              id="countries_disabled"
              className="bg-gray-50 border-0 w-20 md:w-auto text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 block p-2.5 mx-1 md:mx-4"
            >
              <option selected disabled>
                Variety
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {/* select city */}
            <select
              id="countries_disabled"
              className="bg-gray-50 border-0 w-20 md:w-auto text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 block p-2.5 mx-1 md:mx-4"
            >
              <option selected disabled>
                City
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          {/* search Button */}
          <button
            type="submit"
            className=" my-2 md:my-0 text-white flex items-center pr-2 py-1 md:py-1.5 rounded-lg font-medium bg-secondary-color"
          >
            <BiSearchAlt2 className=" text-3xl mx-2" /> Update Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
