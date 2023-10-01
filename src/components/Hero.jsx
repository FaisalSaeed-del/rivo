import React from "react";
import Main from "../assets/hero.png";
import Dotted from "../assets/dotted.svg"

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="flex justify-between flex-wrap px-10 pt-20 md:pt-[139px]">
          <div className="flex flex-col md:items-start mb-10 md:mb-0 gap-10">
            <h1 className="md:text-[86px] text-[32px] font-bold text-[#224F34] max-w-[640px]">
              Discover and Find Your Own Fashion!
            </h1>
            <p className="text-[#267D49] font-medium md:text-[24px] text-base max-w-[500px]">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
            <button className="bg-[#224F34] py-3 px-8 text-[#FFF] font-medium text-xl uppercase">
              Explore Now
            </button>
          </div>
          <div className="hero-bg relative ">
            <img src={Main} alt="" />
            <div className="absolute bottom-12 left-6">
              <img src={Dotted} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
