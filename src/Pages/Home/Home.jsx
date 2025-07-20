import React from "react";
import HomeBanner from "../../Components/Home Banner/HomeBanner";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Works from "../../Components/Works/Works";
const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <About></About>
      <Experience></Experience>
      <Works></Works>
    </div>
  );
};

export default Home;
