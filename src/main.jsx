import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//cans import
import can_all from "/src/public/assets/images/can_all.png"
import can_blue from"/src/public/assets/images/Can_Blue.png"
import can_pink from"/src/public/assets/images/Can_Pink.png"
import can_orange from"/src/public/assets/images/Can_Orange.png"

//
const projects = [
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle":"Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue , can_orange, can_pink],
  },
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle":"Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue , can_orange, can_pink],
  },
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle":"Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue , can_orange, can_pink],
  },
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle":"Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": [can_all, can_blue , can_orange, can_pink],
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
