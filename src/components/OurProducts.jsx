import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Product_one from "../assets/product_one.png";
import Product_two from "../assets/product_two.png";
import Product_three from "../assets/product_three.png";
import Product_four from "../assets/product_four.png";
import Product_five from "../assets/product_five.png";

const OurProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategories, setShowCategories] = useState(true); // Initially show categories on large screens

  const products = [
    {
      image: Product_one,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      category: "Sale",
    },
    {
      image: Product_two,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      category: "Hot",
    },
    {
      image: Product_three,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      category: "New Arrivals",
    },
    {
      image: Product_two,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      category: "Accessories",
    },
    {
      image: Product_four,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      category: "Accessories",
    },
    {
      image: Product_five,
      name: "Regular Fit Long Sleeve Top",
      price: "$38.99",
      rating: 5.0,
      category: "Accessories",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ["All", "Sale", "Hot", "New Arrivals", "Accessories"];

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="bg-white pt-32">
      <div className="container">
        <h1 className="text-[#224F34] text-[50px] font-medium text-center mb-10">
          Our products
        </h1>
        {showCategories ? (
          <div className="flex justify-center flex-wrap gap-20 mb-20">
            {categories.map((category, index) => (
              <span
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer ${
                  selectedCategory === category ? "underline underline-offset-4 text-[#224F34]" : ""
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        ) : (
          <button
            className="cursor-pointer underline underline-offset-2"
            onClick={handleToggleCategories}
          >
            Show Categories
          </button>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <div key={index} className="text-center">
              <img className="bg-[#A9D4BA] mx-auto" src={product.image} alt="" />
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
      </div>
    </div>
  );
};

export default OurProducts;
