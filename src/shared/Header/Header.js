import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/profile.jpg";

const Header = () => {
  return (
    <div className="navbar py-5">
      <div className="flex-1">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className="mask mask-circle" src={image} alt="" />
          </div>
        </div>

        <Link className="btn btn-ghost upper-case text-xl text-orange-600 font-bold">
          Portfolio
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1YGbU52o39R_Cjszz9_7D_kdl85TWWDkY/view?usp=share_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
