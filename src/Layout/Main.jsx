import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
