import React, { useRef } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import About from "../Components/About/About";
import Experience from "../Components/Experience/Experience";
import Works from "../Components/Works/Works";
import Contact from "../Components/Contact/Contact";
import Home from "../Pages/Home/Home";
const Main = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const worksRef = useRef(null);
  const footerRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  return (
    <div>
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onWorksClick={() => scrollToSection(worksRef)}
        onHomeClick={() => scrollToSection(homeRef)}
      ></Navbar>
      <div ref={homeRef}>
        <Home></Home>
      </div>
      <div ref={aboutRef}>
        <About></About>
      </div>
      <div ref={experienceRef}>
        <Experience></Experience>
      </div>
      <div ref={worksRef}>
        <Works></Works>
      </div>
      <div ref={contactRef}>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
