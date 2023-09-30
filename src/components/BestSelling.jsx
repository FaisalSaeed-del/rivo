import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import IMG_one from "../assets/selling1.png";
import IMG_two from "../assets/selling2.png";

const BestSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    
  ];

  // Handle the "See All" button click
  const handleSeeAllClick = () => {
    setIsLoading(true); // Set loading state to true
    setTimeout(() => {
      setShowAll(!showAll);
      setIsLoading(false); // Set loading state to false after a delay (simulating loading)
    }, 1000); // Adjust the delay time as needed
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
            <img
              className={`bg-[#A9D4BA] ${isLoading ? "opacity-0" : "opacity-100"}`}
              src={product.image}
              alt=""
            />
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
        disabled={isLoading} // Disable the button while loading
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black" />
        ) : (
          <>
            {showAll ? "See Less" : "See All"}
            <BsArrowRight />
          </>
        )}
      </button>
    </div>
  );
};

export default BestSelling;
