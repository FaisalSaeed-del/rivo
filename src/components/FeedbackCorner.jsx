import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import icon from "../assets/inverted.svg";
import { Pagination, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeedbackCorner = () => {
  return (
    <div>
      <div>
        <h3 className="text-[#224F34] text-[50px] font-medium text-center mb-14">
          Feedback Corner
        </h3>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2 py-4 shadow-lg bg-white flex flex-col items-start gap-4 px-5">
            <img src={icon} alt="" />
            <h3 className="text-[#224F34] font-semibold text-[22px]">
              Emily Wilson
            </h3>
            <p className="text-[#6F6F6F] font-medium text-base">
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeedbackCorner;
