import React from "react";

function ProjectDetails({ project }) {
  return (
    <div className="flex">
      <img 
      src={project.thumb_image} 
      alt={project.name} className="project__image"/>
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
