import React, { useState } from "react";
import { BsCheckSquare, BsStar, BsStarFill } from "react-icons/bs";

const Rating = () => {
    
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className=" flex lg:my-0 my-4 flex-col flex-auto justify-center lg:px-4">
        <h2 className=" py-2 text-lg font-bold text-primary-text-color">
          Rate this seller
        </h2>
        <div className=" flex ">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)}>
              {star <= rating ? (
                <BsStarFill className=" text-lg sm:text-3xl mx-2 sm:mx-3 text-yellow-dark" />
              ) : (
                <BsStar className="text-lg sm:text-3xl mx-2 sm:mx-3 text-yellow-dark" />
              )}
            </button>
          ))}
          {rating ? (
            <button className=" text-secondary-color sm:text-lg "><BsCheckSquare/></button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Rating;
