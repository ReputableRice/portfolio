import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import cans from "./assets/images/can_all.png"

const projects = [
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle":"Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": "/src/assets/images/can_all.png",
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": ["/src/assets/images/can_all.png", "/src/assets/images/Can_Blue.png", "/src/assets/images/Can_Pink.png", "/src/assets/images/Can_Orange.png"],
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
