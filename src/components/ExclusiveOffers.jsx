import React, { useState, useEffect } from "react";
import Offers_img from "../assets/offers.png";

const ExclusiveOffers = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Set the target date and time for the countdown
    const targetDate = new Date("2023-10-10T00:00:00"); // Replace with your target date and time

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown({ days, hours, minutes });
      }
    };

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="main_wrapper">
      <div className="container">
        <div className="flex flex-wrap  items-center justify-around">
          <div className="mb-5 md:m-0">
            <img src={Offers_img} alt="" className="relative top-4" />
          </div>
          <div className="flex flex-col  items-start gap-10">
            <h1 className="text-[#224F34] text-[46px] font-bold">
              Exclusive offer
            </h1>
            <p className="text-[#224F34] font-medium text-[22px] max-w-[550px]">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy
              savings of up to 40% off on our latest New Arrivals.
            </p>
            <div>
              <div className="flex gap-10">
                <button className="bg-white rounded-sm px-4 text-black font-semibold text-[32px]">
                  {countdown.days} <br /> <span className="text-xl">Days</span>
                </button>
                <button className="bg-white rounded-sm px-4 text-black font-semibold text-[32px]">
                  {countdown.hours} <br /> <span className="text-xl">Hours</span>
                </button>
                <button className="bg-white rounded-sm px-4 text-black font-semibold text-[32px]">
                  {countdown.minutes} <br /> <span className="text-xl">Mins</span>
                </button>
              </div>
            </div>
            <button className="bg-[#224F34] font-medium rounded-sm text-white text-xl py-4 px-10">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
