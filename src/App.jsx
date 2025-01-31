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
import Illustrations from "./Pages/Illustrations/Illustrations";

import { Live2DModel } from 'pixi-live2d-display';
import * as PIXI from 'pixi.js'
import { useEffect } from 'react';


//images
import croc_logo from "/src/public/assets/images/CrocColour.png"

function App({ projects, illustrations }) {
  return (
    <Router>
      Test
    </Router>
  );
}

export default App;