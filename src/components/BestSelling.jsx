import React from "react";
import IMG_one from "../assets/selling1.png";
import IMG_two from "../assets/selling2.png";

const BestSelling = () => {
  return (
    <div className="container">
      <div>
        <h1>Best selling</h1>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <div>
          <img className="bg-[#A9D4BA]" src={IMG_one} alt="" />
          <div className="flex flex-col justify-center items-center">
            <h3>Regular Fit Long Sleeve Top</h3>
            <div className="flex gap-10">
            <span className="">$38.99</span>
            <span className="">|</span>
            <span className="">5.0</span>
            </div>
          </div>
        </div>
        <div>
          <img className="bg-[#DDECE2]" src={IMG_two} alt="" />
        </div>
        <div>
        <img className="bg-[#224F34]" src={IMG_one} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
