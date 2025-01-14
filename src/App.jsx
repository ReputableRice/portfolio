import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { useState } from "react";


function App() {
  const projects = [
    {
      "id": 0,
      "name": "test",
      "Description": "Lorem Ipsum",
      "Images": "https://placehold.co/600x400"
    },
    {
      "id": 1,
      "name": "test2",
      "Description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "Images": "https://placehold.co/600x400"
    }
  ]

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            {project.name}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
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
