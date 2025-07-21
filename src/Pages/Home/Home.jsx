import React from "react";
import HomeBanner from "../../Components/Home Banner/HomeBanner";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Works from "../../Components/Works/Works";
import Contact from "../../Components/Contact/Contact";
const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <About></About>
      <Experience></Experience>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
};

export default Home;
