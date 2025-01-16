import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const projects = [
  {
    "id": 0,
    "name": "Beastly Energy Drinks",
    "subtitle":"Design Project",
    "description": "A design mockup created for a fictional brand that uses animals as their motif.",
    "thumb_image": "/src/public/images/can_all.png",
    "date": 2024,
    "tags": ["Illustration", "Mockup"],
    "images": ["/src/public/images/can_all.png", "/src/public/images/Can_Blue.png", "/src/public/images/Can_Pink.png", "/src/public/images/Can_Orange.png"],
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
