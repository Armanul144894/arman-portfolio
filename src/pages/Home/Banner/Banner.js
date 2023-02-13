import React from "react";
import image from "../../../assets/images/profile.jpg";

const Banner = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between lg:gap-52">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="text-start">
          <h1 className="text-4xl font-bold">HI THERE !</h1>
          <h1 className="text-4xl font-bold">
            I'M <strong className="text-orange-600"> Armanul Islam</strong>
          </h1>
          <p className="py-6 text-xl font-bold">Front-End Developer</p>

          <a
            href="https://drive.google.com/file/d/1YGbU52o39R_Cjszz9_7D_kdl85TWWDkY/view?usp=share_link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="btn btn-outline px-10 font-bold">resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
