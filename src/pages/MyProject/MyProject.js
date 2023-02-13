import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProjectCard from "./ProjectCard";

const MyProject = () => {
  const { data: projects = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("project.json", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div id="projects" className="my-5">
      <h1 className="text-4xl font-bold ">
        My <strong className="text-orange-600">Project</strong>
      </h1>
      <br />
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
