import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import MyProject from "../MyProject/MyProject";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <MyProject></MyProject>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
