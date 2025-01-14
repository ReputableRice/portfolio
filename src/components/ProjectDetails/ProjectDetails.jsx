import React from "react";

function ProjectDetails({ project }) {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.Description}</p>
      <img src={project.Images} alt={project.name} />
    </div>
  );
}

export default ProjectDetails;
