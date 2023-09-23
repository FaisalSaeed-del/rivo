import React from "react";
import Nvabar from "./components/Nvabar";
import MobileResponsive from "./components/MobileResponsive";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";

const App = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Nvabar />
      </div>
      <div className="block md:hidden">
        <MobileResponsive />
      </div>
      <Hero/>
      <BestSelling/>
    </div>
  );
};

export default App;
