import React from "react";
import hero from "../assets/images/hiv.jpg";
const data = [
  {
    topic: "PLHIV",
    description: "vjedvkabvckvkjsdbkb",
    btn_link: "",
    image_link: hero,
    btn_caption: "talk to us ",
  },
];
const Services = () => {
  const services =
    data &&
    data.map((itms, index) => (
      <div
        key={index}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around"
      >
        <div className="">
          <img className="block" src={itms.image_link} alt="article_image" />
        </div>
        <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="block">
            <p>{itms.topic.toUpperCase()}</p>
          </div>
          <div className="block">
            <p>{itms.description}</p>
          </div>
          <div className="block mt-5 mb-2 rounded-md shadow lg:w-1/4">
            <a
              href={itms.btn_link}
              className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
            >
              {itms.btn_caption.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    ));
  return (
    <div className="mt-5">
      <p className="lg:text-center lg:text-5xl lg:mx-5 font-bold text-red-600">
        Please feel free to reach out to us for help with any of the following
        areas..
      </p>
      <div className="lg:h-4/5 lg:py-5">{services}</div>
    </div>
  );
};

export default Services;
