import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import React, { useEffect, useRef } from "react";
import AnnouncementCard from "../components/AnnouncementCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCustomArrow from "../components/SlickCustomArrow";
import { Link } from "react-router-dom";

const AnnouncmentsSlider = ({ dataAnnounces }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" sm:p-4 sm:py-0 py-6  text-primary-color">
        <div className=" py-1 sm:text-3xl text-xl font-extrabold ">
          Announcments listed in your regoin
        </div>
        <div className=" sm:text-base text-sm font-normal">
          some of the livestock listed by farmers in your region
        </div>
      </div>
      {dataAnnounces ? (
        <div className=" flex justify-center">
          <SlickCustomArrow
            onclick={() => sliderRef.current.slickPrev()}
            icon={
              <IoIosArrowBack className=" text-black font-extrabold text-3xl " />
            }
          />
          <Slider ref={sliderRef} className=" w-full mb-10" {...settings}>
            {dataAnnounces.map((anonce, index) => (
              <Link to={"/view/announce/id"} key={index}>
                <AnnouncementCard />
              </Link>
            ))}
          </Slider>
          <SlickCustomArrow
            onclick={() => sliderRef.current.slickNext()}
            icon={
              <IoIosArrowForward className=" text-black font-extrabold text-3xl " />
            }
          />
        </div>
      ) : (
        <div>no announcements</div>
      )}
      {/* slider */}
    </>
  );
};

export default AnnouncmentsSlider;
