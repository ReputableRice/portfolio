import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//cans import
import can_all from "/src/public/assets/images/cans/can_all.jpg"
import can_blue from "/src/public/assets/images/cans/Can_Blue.jpg"
import can_pink from "/src/public/assets/images/cans/Can_Pink.jpg"
import can_orange from "/src/public/assets/images/cans/Can_Orange.jpg"
import label_blue from "/src/public/assets/images/cans/label_eagle.jpg"
import label_orange from "/src/public/assets/images/cans/label_tiger.jpg"
import label_pink from "/src/public/assets/images/cans/label_wolf.jpg"
import label_sketches from "/src/public/assets/images/cans/sketches.jpg"


//rezealwulf import
import rez_wulf from "/src/public/assets/images/rezeal/rezwulf.jpg"
import rez_book from "/src/public/assets/images/rezeal/rezbook.jpg"
import rez_poster from "/src/public/assets/images/rezeal/rezposterone.jpg"
import rez_poster_2 from "/src/public/assets/images/rezeal/rezpostertwo.jpg"

//waddleOn
import wad_mockup from "/src/public/assets/images/wad_mock.png"
import wad_hifi from "/src/public/assets/images/wad_hifi.png"
import wad_live from "/src/public/assets/images/wad_live.jpg"
import wad_lofi from "/src/public/assets/images/wad_lofi.png"
import wad_logo from "/src/public/assets/images/wad_logo1.png"
import wad_style from "/src/public/assets/images/wad_style.png"

//flare
import flare_mockup from "/src/public/assets/images/flare_mock.png"

//Charizard
import char_cover from "/src/public/assets/images/charizard/charizard_cover.png"
import char_mock1 from "/src/public/assets/images/charizard/Book.png"
import char_mock2 from "/src/public/assets/images/charizard/poster.jpg"
import char_mock3 from "/src/public/assets/images/charizard/poster_2.jpg"
import char_wip1 from "/src/public/assets/images/charizard/bg.png"
import char_wip2 from "/src/public/assets/images/charizard/bg_chars.png"
import char_wip3 from "/src/public/assets/images/charizard/charizard.png"
import char_icon from "/src/public/assets/images/charizard/iconography.png"

//
import ill_1 from "/src/public/assets/images/illustrations/Vast Skies.png"
import ill_2 from "/src/public/assets/images/illustrations/Summer Day.png"
import ill_3 from "/src/public/assets/images/illustrations/Giant Shrines.jpg"
import ill_4 from "/src/public/assets/images/illustrations/Grasslands.jpg"
import ill_5 from "/src/public/assets/images/illustrations/Commission.jpg"
import ill_6 from "/src/public/assets/images/illustrations/Distant Landscape.jpg"

const illustrations = [ill_3, ill_4, ill_5, ill_6]

//Create a different object for solo and team projects along with component
const projects = [

  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle": "Drink Can Design",
    "description": "**Beastly Energy is a brand that prides itself on providing high-quality energy drinks of various flavours with popping designs.** This is a label design for the brand showcasing the flavours: Orange, Blueberry, and Bubblegum",
    "thumb_image": can_all,
    "date": 2024,
    "tags": ["Illustration", "Mockup", "Photoshop", "Clip Studio Paint"],
    "images": [can_all, can_blue, can_orange, can_pink],
    "sections": [ //Additional Sections If I want to add details
      {
        "heading": "Labels",
        "description": "**Each label uses a mono-colour design**, Assigning colours that closely relate to the flavour ensures the design is easily understandable without needing to read the label. By having a diverse set of animals, Beastly Energy can easily adapt itself to different product requirements if needed",
        "image": [label_blue, label_orange, label_pink],
      },
      {
        "heading": "Early Designs",
        "description": "The earlier variants used an anthropomorphic wolf, performing various activities which would be inspired by the flavour the design represented. The wolf would’ve been utilized to ensure consistency across all designs through characterization. Different animals were chosen to diversify the possible design options for different flavours.",
        "image": [label_sketches],
      },
    ]
  },
  {
    "id": 1,
    "name": "Rezealwulf",
    "subtitle": "Creature Design",
    "description": "A promotional poster featuring an animal design, advertising it's nature",
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
    "link": "https://waddleon.vercel.app",
    "name": "WaddleOn",
    "subtitle": "Pomodoro Task Manager",
    "description": "An application designed to assist users who have trouble managing their time by utilizing the pomodoro method in combination with relaxing imagery and ducks as our mascot",
    "thumb_image": wad_mockup,
    "date": 2024,
    "tags": ["App", "React", "Frontend Developing", "Graphic Design", "UI/UX"],
    "roles": ["UI Designer", "Project Manager"],
    "images": [wad_mockup],
    "sections": [
      {
        "heading": "Branding",
        "description": "The core aspect of the design was to utilize common palettes found in ducks, combined with imagery in nature. Together they compose to be a relaxing experience.",
        "image": [wad_style],
      },
      {
        "heading": "Logo Colour Development",
        "description": "Various different colours were considered during the design period to see which attracted the most interest but ultimately the palette resembling Mallard was suitable.",
        "image": [wad_logo],
      },
    ]
  },
  {
    "id": 3,
    "link": "https://flare-idsp.vercel.app",
    "name": "Flare",
    "subtitle": "Wildfire Mitigation App",
    "description": "An app created to help users who live in under-resourced areas and lack access to proper fire services, help them prepare for wildfire seasons.",
    "thumb_image": flare_mockup,
    "date": 2024,
    "tags": ["App", "Frontend Developing", "UI Design"],
    "roles": ["UI Designer", "Frontend Developer"],
    "images": [flare_mockup],
    "sections": [

    ]
  },
  {
    "id": 4,
    "name": "Pokephoto Studios",
    "subtitle": "Magazine graphic",
    "description": "**A Pokemon themed magazine cover** designed for a photography company based in the Pokemon franchise. It features Charizard from Pokemon as the prominent figure.",
    "thumb_image": char_cover,
    "date": 2024,
    "tags": ["Photoshop", "Illustrator", "Clip Studio Paint"],
    "images": [char_cover, char_mock1, char_mock2, char_mock3],
    "sections": [
      {
        "heading": "Background Development",
        "description": "In the designing of the background, several images are put photobashed together to produce a visually appealing background.",
        "image": [char_wip1],
      },
      {
        "heading": "Character Painting",
        "description": "After painting the background, charizard is inserted into the painting, it is done in this order for easier compositing.",
        "image": [char_wip3],
      },
      {
        "heading": "Icons & Graphics",
        "description": "Graphics were all made inside Adobe Illustrator with semblance to Pokemon or items within the series.",
        "image": [char_icon],
      },
    ]
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} illustrations={illustrations} />
  </StrictMode>,
)
