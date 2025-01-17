import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

function App({ projects }) {
  return (
    <Router>
      <nav className="p-[25px] w-full  flex items-center z-50 sm:hidden lg:flex">
        <img src={croc_logo} className="w-24" />
        <div className="flex gap-14">
          <Link to="/">Home</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/">About Me</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
        {projects.map((project) => (
          <Route
            key={project.id}
            path={`/project/${project.id}`}
            element={<ProjectDetails project={project} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
