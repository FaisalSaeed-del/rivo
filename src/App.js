import React, { useState, useEffect } from "react";
import Nvabar from "./components/Nvabar";
import MobileResponsive from "./components/MobileResponsive";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import OurProducts from "./components/OurProducts";
import ExclusiveOffers from "./components/ExclusiveOffers";
import Designer from "./components/Designer";
import FeedbackCorner from "./components/FeedbackCorner";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader"; // Import the Preloader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with your actual data fetching logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  return (
    <div>
      {loading ? ( // Render the Preloader while loading
        <Preloader />
      ) : (
        <>
          <div className="hidden md:block">
            <Nvabar />
          </div>
          <div className="block md:hidden">
            <MobileResponsive />
          </div>
          <Hero />
          <BestSelling />
          <OurProducts />
          <ExclusiveOffers />
          <Designer />
          <FeedbackCorner />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
