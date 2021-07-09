import React from "react";

const data = [
  {
    title: "HIV Advocate",
    content:
      "YPM provides access to comprehensive health education and individualized counseling and referral We try to harness great potential of technology to facilitate HIV and sexual and reproductive health care for young people with ease accessibility to information",
    btn_link: "intagram.com",
    btn_caption: "talk to us ",
    image_url: "https://www.ffwd.org/wp-content/uploads/Open-Up-Resources.jpg",
  },
  {
    title: " SRHS",
    content:
      "YPM provides access to comprehensive health education and individualized counseling and referral We try to harness great potential of technology to facilitate HIV and sexual and reproductive health care for young people with ease accessibility to information",
    btn_link: "",
    btn_caption: " need help?",
    image_url:
      "https://pbs.twimg.com/profile_images/933461982203858944/mGW4Wvo5_400x400.jpg",
  },
  {
    title: " support for inclusion and diversity in our community ",
    content:
      "YPM provides access to comprehensive health education and individualized counseling and referral We try to harness great potential of technology to facilitate HIV and sexual and reproductive health care for young people with ease accessibility to information",
    btn_link: "",
    btn_caption: "talk to us",
    image_url:
      "https://static.wixstatic.com/media/8a67c7_3f12c383db004c68aa64f050cbb26d92~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01/8a67c7_3f12c383db004c68aa64f050cbb26d92~mv2.webp",
  },
  {
    title: "Fight aganist gender based violence  ",
    content:
      "YPM provides access to comprehensive health education and individualized counseling and referral We try to harness great potential of technology to facilitate HIV and sexual and reproductive health care for young people with ease accessibility to information",
    btn_link: "",
    btn_caption: "ask for help",
    image_url:
      "https://www.pngitem.com/pimgs/m/638-6383250_what-is-financial-disability-domestic-violence-png-transparent.png",
  },
];

const AboutUs = () => {
  const cards =
    data &&
    data.map((itms, index) => (
      <div
        key={index}
        className="flex-grow max-w-sm rounded overflow-hidden shadow-lg lg:px-10"
      >
        <p className="lg:text-2xl text-red-600 font-bold ">
          {itms.title.toUpperCase()}
        </p>
        <div className="lg:px-5">
          <img
            className="object-cover h-48 w-full"
            src={itms.image_url}
            alt="article_image"
          />
        </div>
        <div className="">
          <p className="mt-2 lg:text-xl leading-8  tracking-tight text-gray-900 sm:text-4xl overflow-hidden">
            {itms.content}
          </p>
        </div>
        <div className=" mt-5 mb-2 rounded-md shadow lg:w-auto">
          <a
            href={itms.btn_link}
            className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
          >
            {itms.btn_caption.toUpperCase()}
          </a>
        </div>
      </div>
    ));

  return (
    <div className="lg:py-10">
      <div className="lg:text-center lg:px-10">
        <h1 className="text-4xl text-red-600 font-bold tracking-wide uppercase">
          About us
        </h1>
        <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
          We are a youth peer mentors adressing needs that we identified in
          youth education around HIV testing, HIV care, and sexual and
          reproductive health, LGBTQ,
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          YPM provides access to comprehensive health education and
          individualized counseling and referral, We try to harness great
          potential of technology to facilitate HIV and sexual and reproductive
          health care for young people with ease accessibility to information
        </p>
      </div>
      <div className="container mx-auto flex  lg:py-10">{cards}</div>
    </div>
  );
};

export default AboutUs;
