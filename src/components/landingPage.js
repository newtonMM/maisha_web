import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/sxedu.jpg";
import image2 from "../assets/images/hiv.jpg";

const data = [
  {
    caption: "walk with us in this journey",
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
    btn_caption: " ask help",
    imageUrl: image2,
  },
  {
    caption: " lets talk sex",
    btn_link:
      "https://cdn.pixabay.com/photo/2020/05/31/11/19/firemen-5242315_960_720.jpg",
    btn_caption: " contact us",
    imageUrl: image1,
  },
];

const LandingPage = () => {
  const display =
    data &&
    data.map((itms, index) => (
      <div
        key={index}
        className="flex bg-white mt-10 mx-auto max-w-7xl px-4  lg:h-full sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 "
      >
        <div className="flex-grow sm:text-center lg:text-left">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            <span className="flex-grow text-red-600 xl:inline">
              {itms.caption.toLocaleUpperCase()}
            </span>
          </h1>
          <div className=" flex-grow sm:mt-8 sm:justify-center lg:justify-start">
            <div className="rounded-md shadow lg:w-48">
              <a
                href={itms.btn_link}
                className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
              >
                {itms.btn_caption.toUpperCase()}
              </a>
            </div>
          </div>
        </div>
        <div className="flex-grow lg:relative h-1/2 w-2/4">
          <img
            className=" sm:h-72 md:h-96 lg:w-auto lg:h-1/2 rounded"
            src={itms.imageUrl}
            alt="imag2"
          />
        </div>
      </div>
    ));

  const lowerSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <main className="lg:h-4/5 lg:py-10 shadow-inner">
      {data && data.length > 0 && <Slick {...lowerSettings}>{display}</Slick>}
    </main>
  );
};

export default LandingPage;
