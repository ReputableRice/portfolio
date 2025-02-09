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
import can_display from "/src/public/assets/images/cans/display.png"


//rezealwulf import
import rez_wulf from "/src/public/assets/images/rezeal/rezwulf.jpg"
import rez_book from "/src/public/assets/images/rezeal/rezbook.jpg"
import rez_poster from "/src/public/assets/images/rezeal/rezposterone.jpg"
import rez_poster_2 from "/src/public/assets/images/rezeal/rezpostertwo.jpg"

//waddleOn
import wad_mockup from "/src/public/assets/images/wad/wad_mock.webp"
import wad_color from "/src/public/assets/images/wad/WaddleOn_colours.png"
import wad_logo from "/src/public/assets/images/wad/WaddleOn_logo.png"
import wad_type from "/src/public/assets/images/wad/WaddleOn_type.png"
import wad_hifi from "/src/public/assets/images/wad/hifi.png"
import wad_lofi from "/src/public/assets/images/wad/lofi.png"

//flare
import flare_mockup from "/src/public/assets/images/flare/flare_mock.png"
import flare_mockup2 from "/src/public/assets/images/flare/flare_mock2.png"
import flare_safety from "/src/public/assets/images/flare/Safety.png"
import flare_settings from "/src/public/assets/images/flare/Settings.png"
import flare_sol from "/src/public/assets/images/flare/flaresol.png"
import flare_land from "/src/public/assets/images/flare/land.png"


//Charizard
import char_cover from "/src/public/assets/images/charizard/charizard_cover.webp"
import char_mock1 from "/src/public/assets/images/charizard/holding.png"
import char_mock2 from "/src/public/assets/images/charizard/MagazineCovers.png"
import char_wip1 from "/src/public/assets/images/charizard/bg.png"
import char_wip3 from "/src/public/assets/images/charizard/charizard.png"
import char_icon from "/src/public/assets/images/charizard/iconography.png"

//hoyo
import hoyo_cover from "/src/public/assets/images/hoyo/hoyo-cover.png"
import hoyo_1 from "/src/public/assets/images/hoyo/hoyo-liyue.jpg"
import hoyo_2 from "/src/public/assets/images/hoyo/hoyo-font.jpg"
import hoyo_3 from "/src/public/assets/images/hoyo/hoyo-pena.jpg"
import hoyo_4 from "/src/public/assets/images/hoyo/hoyo-zzz.jpg"
import hoyo_inside from "/src/public/assets/images/hoyo/inside.png"
import hoyo_multi from "/src/public/assets/images/hoyo/hoyo_multi.png"
import hoyo_crop from "/src/public/assets/images/hoyo/crop.png"

//UNA 
import una_mock from "/src/public/assets/images/UNA/una_mock.png"
import una_style from "/src/public/assets/images/UNA/Style.png"
import una_logo from "/src/public/assets/images/UNA/Logo Design.png"
import una_promo from "/src/public/assets/images/UNA/promo.mp4"


//mueseum
import museum_draft from "/src/public/assets/images/museum/draft.png"
import museum_cover from "/src/public/assets/images/museum/Museum.png"
import museum_poster from "/src/public/assets/images/museum/Museum2.png"
import museum_mock1 from "/src/public/assets/images/museum/mockup.png"
import museum_mock2 from "/src/public/assets/images/museum/mockup2.png"

//egg

import egg_display from "/src/public/assets/images/egg/egg_preview.png"

//
import ill_1 from "/src/public/assets/images/illustrations/Vast Skies.png"
import ill_2 from "/src/public/assets/images/illustrations/Summer Day.png"
import ill_3 from "/src/public/assets/images/illustrations/Giant Shrines.jpg"
import ill_4 from "/src/public/assets/images/illustrations/Grasslands.jpg"
import ill_5 from "/src/public/assets/images/illustrations/Commission.jpg"
import ill_6 from "/src/public/assets/images/illustrations/Distant Landscape.jpg"
import ill_7 from "/src/public/assets/images/illustrations/plane.png"
import ill_8 from "/src/public/assets/images/illustrations/Shoutmon.png"
import ill_9 from "/src/public/assets/images/illustrations/river.png"
import ill_10 from "/src/public/assets/images/illustrations/spright blue.png"
import ill_11 from "/src/public/assets/images/illustrations/Mantra.png"
import ill_12 from "/src/public/assets/images/illustrations/Mundane.png"
import ill_13 from "/src/public/assets/images/illustrations/Heartbeat.png"



const illustrations = [ill_3, ill_4, ill_6, ill_7, ill_9, ill_10, museum_cover, char_cover, rez_wulf, ill_11, ill_12, ill_13]

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
    "images": [can_display, can_all, can_blue, can_orange, can_pink],
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
  // {
  //   "id": 1,
  //   "name": "Rezealwulf",
  //   "subtitle": "Creature Design",
  //   "description": "A promotional advertisement featuring an original animal, promoting it's natural habitat through the text.",
  //   "thumb_image": rez_wulf,
  //   "date": 2024,
  //   "tags": ["Illustration", "Mockup", "Photobashing", "Photoshop"],
  //   "images": [rez_wulf, rez_book, rez_poster, rez_poster_2],
  //   "sections": [
  //   ]
  // },
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
        "image": [wad_color, wad_type],
      },
      {
        "heading": "Logo Colour Development",
        "description": "Various different colours were considered during the design period to see which attracted the most interest but ultimately the palette resembling Mallard was suitable.",
        "image": [wad_logo],
      },
      {
        "heading": "Lofi and Hifi",
        "description": "LoFi and HiFi developments mainly consisted on ensuring the core feature of the app can be intuitively navigated.",
        "image": [wad_lofi, wad_hifi],
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
    "tags": ["App", "Frontend Developer", "UI Design"],
    "roles": ["UI/UX Designer", "Frontend Developer"],
    "images": [flare_mockup, flare_mockup2, flare_safety, flare_settings],
    "sections": [
      {
        "heading": "1. Project Summary",
        "description": `Flare is an app targeted towards those who live in areas that lack the necessary resources for fire relief services. This app provides **informational** and **reliable** information about fires occurring in the Vancouver area.`,
        "image": [flare_mockup],
      },
      {
        "heading": "2. Challenges",
        "description": `
        
* One of the core challenges for Flare was **cohesive design**. Being the first large project most team members were a part of it was difficult to coordinate proper design systems between frontend and backend, from visuals to micro-interactions.
---
* Another obstacle was overall coordination, highlighting a difference between team members other work and this particular project. It made it much more difficult to properly pace the project.

        `,
        "image": [flare_mockup2],
      },
      {
        "heading": "3. Solution",
        "description": `
        
* The best solutions for cohesive design was to **create a single concise document** highlighting all the required colours and schema for components.
---
* During the latter half of the project we were able to properly better discuss and coordinate times in which we could work. By setting expectations when **[x] feature** needed to be done ensured accountability across team members. 

`,
        "image": [flare_sol],
      },
      {
        "heading": "4. Design Process",
        "description": `
        
By establishing the purpose of Flare, **we were able to ideate possible visuals that would resonate with the meaning of the app through mood boards**, providing peace of mind from wildfires. This process helped dictate the colours that were used in the app.
---
The fonts chosen were based on **simplicity and readabliity** and how quickly users can understand what's going on.
---
The rest of the designs were based off of pre-existing UI Kits with our style guide adapted to the components provided.
---

        `,
        "image": [flare_land, flare_safety, flare_settings],
      },
    ]
  },
  {
    "id": 4,
    "name": "Pokephoto Studios",
    "subtitle": "Magazine Cover",
    "description": "**A Pokemon themed magazine cover** designed for a photography company based in the Pokemon franchise. It features Charizard from Pokemon as the prominent figure.",
    "thumb_image": char_cover,
    "date": 2024,
    "tags": ["Photoshop", "Illustrator", "Clip Studio Paint"],
    "images": [char_mock2, char_cover, char_mock1,],
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
  {
    "id": 5,
    "link": "https://indd.adobe.com/view/9077b5bd-4735-48f2-9be5-db070371064f",
    "name": "The Architecture of Hoyoverse",
    "subtitle": "Magazine Print",
    "description": "This magazine highlights the diverse locations designed and produced in the games **Genshin Impact**, **Honkai Star Rail** and **Zenless Zone Zero**. This editorial was created for both web and for print to showcase and highlight the cultural references within these games. ",
    "thumb_image": hoyo_cover,
    "date": 2024,
    "tags": ["InDesign", "Photoshop", "Illustrator", "Clip Studio Paint"],
    "images": [hoyo_multi, hoyo_cover, hoyo_inside,],
    "sections": [
      {
        "heading": "Layout",
        "description": "The layout of the magazine emphasizes large imagery, using screenshots within the game and edited further in **Photoshop** for visual direction.",
        "image": [hoyo_1, hoyo_2, hoyo_3, hoyo_4],
      },
      {
        "heading": "Optimized for Print",
        "description": "All pages for the print version of the magazine are optimized for print, including crop/bleed marks and necessary color settings.",
        "image": [hoyo_crop],
      },
    ]
  },
  {
    "id": 6,
    "link": "https://una-marketing.vercel.app",
    "name": "UNA",
    "subtitle": "Social Media App Prototype",
    "description": "UNA is a social media app focused on providing users with largely live interactable interface, enriching social media experiences through live customizeable avatars, and live forums.",
    "thumb_image": una_mock,
    "date": 2024,
    "tags": ["UI/UX", "Figma", "After Effects"],
    "roles": ["UI Designer", "UX Researcher"],
    "images": [una_mock],
    "sections": [
      {
        "heading": "Promotion",
        "description": "All pages for the print version of the magazine are optimized for print, including crop/bleed marks and necessary color settings.",
        "video": [una_promo],
        "image": [],
      },
      {
        "heading": "Branding",
        "description": "The main motif being bunny along with eccentric colour styles enabled una to stand out from the crowd.",
        "image": [una_style],
      },
      {
        "heading": "Logo Development",
        "description": "The core motif for our app was using rabbits for our development, this choice helped guide our philosiphy throughout our design process.",
        "image": [una_logo],
      },
    ]
  },
  {
    "id": 7,
    "link": "https://una-marketing.vercel.app",
    "name": "Candian Museum Advertisement",
    "subtitle": "Advertisement Mockup",
    "description":
      `
A design exercise advertisement (mockup) for the Canadian National Museum based around the theme of Retro Technology, highlighting a showcase of Nintendo's old consoles.

    `,
    "thumb_image": museum_cover,
    "date": 2024,
    "tags": ["Illustrator", "Photoshop"],
    "images": [museum_poster, museum_cover],
    "sections": [
      {
        "heading": "For Print & Poster",
        "description": "Two seperate designs were screated for the purpose of intending to print one for magazines while the other is intented for a large physical banner.",
        "image": [museum_mock1, museum_mock2],
      },
      {
        "heading": "Early Sketches",
        "description": "After establishing the initial intention of what the showcase was about, several different ideas were drafted. By gauging and receiving feedback, the one to was most received well was selected to be turned into the final render.",
        "image": [museum_draft],
      },
    ]
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} illustrations={illustrations} />
  </StrictMode>,
)
