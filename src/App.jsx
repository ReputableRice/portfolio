import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import NavBar from "./components/Nav/Nav";

//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

function App({ projects }) {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio projects={projects} />} />

          {projects.map((project) => (
            <Route
              key={project.id}
              path={`/project/${project.id}`}
              element={<ProjectDetails project={project} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
