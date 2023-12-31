import React from "react";
import { FiInstagram } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-[#224F34]">
      <div className="container mt-32">
        <div className=" flex justify-around flex-wrap py-20">
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#FFF] font-bold text-[50px]">Rivo</h3>
              <span className="text-[#FFF] font-semibold text-[22px]">
                Social Media
              </span>
              <div className="flex gap-4 mt-3">
                <a href="" className="text-white">
                  <FiInstagram />
                </a>
                <a href="" className="text-white text-xl">
                  <CiTwitter />
                </a>
                <a href="" className="text-white text-xl">
                  <RiFacebookBoxLine />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 footer-items">
            <a>SHOP</a>
            <span>Products</span>
            <span>Overview</span>
            <span>Pricing</span>
            <span>Releases</span>
          </div>
          <div className="flex flex-col gap-5 footer-items">
            <a>Company</a>
            <span>About us</span>
            <span>Contact</span>
            <span>News</span>
            <span>Support</span>
          </div>
          
          <div className="flex flex-col gap-5 footer-items">
            <a href="">Stay up to date</a>
            <div className="border-[#A3F3BE] border-2">
              <input
                className="bg-transparent "
                type="text"
                placeholder="Enter your email"
              />
              <button className="text-black py-2 px-2 text-base font-medium bg-[#A3F3BE]">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center footer-items">
          <div className="border-[#A3F3BE] w-[50%] border-b-2"></div>
          <span className="">Terms</span>
          <span className="">Privacy</span>
          <span className="">Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
