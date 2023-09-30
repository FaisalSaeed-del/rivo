import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import IMG_one from "../assets/selling1.png";
import IMG_two from "../assets/selling2.png";

const BestSelling = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_two,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_two,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 4.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_two,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 3.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    {
      image: IMG_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
    },
    // Add more product objects as needed
  ];

  // Handle the "See All" button click
  const handleSeeAllClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container">
      <div className="flex flex-col text-center gap-4 py-20">
        <h1 className="text-black text-6xl font-normal">Best selling</h1>
        <p className="text-black text-[22px] font-normal">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center mb-10">
        {products.slice(0, showAll ? products.length : 3).map((product, index) => (
          <div key={index}>
            <img className="bg-[#A9D4BA]" src={product.image} alt="" />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[22px] font-semibold text-black text-center">
                {product.name}
              </h3>{" "}
              <div className="flex gap-10">
                <span className="">{product.price}</span>
                <span className="">|</span>
                <div className="flex gap-1 items-center">
                  <span className="">{product.rating}</span>
                  <span className="text-yellow-300 text-xl">
                    <AiFillStar />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="flex items-center gap-4 py-2 px-10 bg-transparent border-2 border-black m-auto"
        onClick={handleSeeAllClick}
      >
        {showAll ? "See Less" : "See All"}
        <BsArrowRight />
      </button>
    </div>
  );
};

export default BestSelling;
