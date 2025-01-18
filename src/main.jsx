import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//cans import
import can_all from "/src/public/assets/images/can_all.png"
import can_blue from "/src/public/assets/images/Can_Blue.png"
import can_pink from "/src/public/assets/images/Can_Pink.png"
import can_orange from "/src/public/assets/images/Can_Orange.png"

//rezealwulf import
import rez_wulf from "/src/public/assets/images/rezwulf.png"
import rez_book from "/src/public/assets/images/rezbook.png"
import rez_poster from "/src/public/assets/images/rezposterone.png"
import rez_poster_2 from "/src/public/assets/images/rezpostertwo.png"


//
const projects = [
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle": "Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue, can_orange, can_pink],
  },
  {
    "id": 1,
    "name": "Rezealwulf",
    "subtitle": "Fictional Creature Design",
    "description": "A fictional animal designed from photobashing several different animals together",
    "thumb_image": rez_wulf,
    "date": 2024,
    "tags": ["Illustration", "Mockup", "Photobashing"],
    "images": [rez_wulf, rez_book, rez_poster, rez_poster_2],
  },
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle": "Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue, can_orange, can_pink],
  },
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle": "Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue, can_orange, can_pink],
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
