import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { useState } from "react";


function App({ projects }) {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
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
