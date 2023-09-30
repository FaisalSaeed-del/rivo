import React from "react";
import Design_one from "../assets/design_one.png";
import Design_two from "../assets/selling1.png";
import Design_three from "../assets/selling2.png";

const Designer = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-32">
          <h2 className="text-[#224F34] text-center font-medium text-[50px]">Designer Clothes For You</h2>
          <p className="text-[#224F34] text-[22px] font-medium text-center mb-10">
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#D3E2D7]">
                <img src={Design_one} alt="" />
              </div>
              <h3 className="text-[#373737] font-semibold text-[38px]">
                Accessories
              </h3>
              <p className="text-[#373737] font-normaltext-[22px] text-center max-w-[330px]">
                Complete your ensemble with designer accessories such as
                handbags, scarves, belts, and hats.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#D3E2D7]">
                <img src={Design_two} alt="" />
              </div>
              <h3 className="text-[#373737] font-semibold text-[38px]">
                Dresses
              </h3>
              <p className="text-[#373737] font-normaltext-[22px] text-center max-w-[330px]">
                Explore a stunning range of designer dresses, including evening
                gowns and chic day dresses.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#D3E2D7]">
                <img src={Design_three} alt="" />
              </div>
              <h3 className="text-[#373737] font-semibold text-[38px]">
                Outerwear
              </h3>
              <p className="text-[#373737] font-normaltext-[22px] text-center max-w-[330px]">
                Browse luxurious designer coats, jackets, and blazers to stay
                stylishly warm during colder seasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
