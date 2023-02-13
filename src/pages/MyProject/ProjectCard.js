import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { id, name, img, details, website, github } = project;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[350px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className=" text-justify">{details}</p>
        <div className="w-full text-start ">
          <button className="badge badge-secondary badge-outline p-5 mx-2 my-2">
            React
          </button>
          <button className="badge badge-secondary badge-outline p-5 mx-2 my-2">
            Express
          </button>
          <button className="badge badge-secondary badge-outline p-5 mx-2 my-2">
            MongoDB
          </button>
          <button className="badge badge-secondary badge-outline p-5 mx-2 my-2">
            Firebase
          </button>
          <button className="badge badge-secondary badge-outline p-5 mx-2 my-2">
            Node
          </button>
          <button className="badge badge-secondary badge-outline p-5 mx-2 my-2">
            {id === "02" ? "Bootstrap" : "Tailwind"}
          </button>
        </div>
        <div className="card-actions text-3xl flex justify-center gap-10 my-5">
          <a href={github} rel="noopener noreferrer" target="_blank">
            <FaGithub></FaGithub>
          </a>

          <a href={website} rel="noopener noreferrer" target="_blank">
            <FaLink></FaLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
