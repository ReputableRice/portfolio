import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//cans import
import can_all from "/src/public/assets/images/can_all.png"
import can_blue from "/src/public/assets/images/Can_Blue.png"
import can_pink from "/src/public/assets/images/Can_Pink.png"
import can_orange from "/src/public/assets/images/Can_Orange.png"
import label_blue from "/src/public/assets/images/label_eagle.png"
import label_orange from "/src/public/assets/images/label_tiger.png"
import label_pink from "/src/public/assets/images/label_wolf.png"

//rezealwulf import
import rez_wulf from "/src/public/assets/images/rezwulf.png"
import rez_book from "/src/public/assets/images/rezbook.png"
import rez_poster from "/src/public/assets/images/rezposterone.png"
import rez_poster_2 from "/src/public/assets/images/rezpostertwo.png"

//waddleOn
import wad_mockup from "./public/assets/images/wad_mockup.png"
import wad_hifi from "/src/public/assets/images/wad_hifi.png"
import wad_live from "/src/public/assets/images/wad_live.jpg"

//flare
import flare_mockup from "/src/public/assets/images/flare_mockup.png"

//Test

//Create a different object for solo and team projects along with component
const projects = [

  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle": "Drink Can Design",
    "description": "**Beastly Energy is a brand that prides itself with providing high-quality energy drinks** of various flavours with popping designs. This is a design mockup created for a fictional brand that uses animals as their main motif.",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup", "Photoshop", "Clip Studio Paint"],
    "images": [can_all, can_blue, can_orange, can_pink],
    "sections": [ //Additional Sections If I want to add details
      {
        "heading": "Processes",
        "description": "Each label is designed around specific dieline guides, utilizing them to ensure the design is showcased prominantly",
        "image": [label_blue, label_orange, label_pink],
      },
    ]
  },
  {
    "id": 1,
    "name": "Rezealwulf",
    "subtitle": "Creature Design",
    "description": "A fictional animal designed from photobashing several different animals together",
    "thumb_image": rez_wulf,
    "date": 2024,
    "tags": ["Illustration", "Mockup", "Photobashing", "Photoshop"],
    "images": [rez_wulf, rez_book, rez_poster, rez_poster_2],
    "sections": [ //Additional Sections If I want to add details
      // {
      //   "heading": "Project Details",
      //   "description": "Lorem Ipsum",
      //   "image": [can_orange],
      // },
      // {
      //   "heading": "Project Details",
      //   "description": "Lorem Ipsum 2",
      //   "image": [can_blue],
      // },
    ]
  },
  {
    "id": 2,
    "name": "WaddleOn",
    "subtitle": "Pomodoro Task Manager",
    "description": "An application designed to assist users who have trouble managing their time by utilizing the pomodoro method in combination with relaxing imagery",
    "thumb_image": wad_mockup,
    "date": 2024,
    "tags": ["App", "React", "Frontend Developing", "Graphic Design", "UI/UX"],
    "images": [wad_mockup, wad_live],
    "sections": [ //Additional Sections If I want to add details
    ]
  },
  {
    "id": 3,
    "name": "Flare",
    "subtitle": "Wildfire Mitigation App",
    "description": "An app created to help users who live in under-resourced areas and lack access to proper fire services, help them prepare for wildfire seasons.",
    "thumb_image": flare_mockup ,
    "date": 2024,
    "tags": ["App", "Frontend Developing", "UI Design"],
    "images": [flare_mockup],
    "sections": [ //Additional Sections If I want to add details
    ]
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
