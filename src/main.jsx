import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const projects = [
  {
    "id": 0,
    "name": "test",
    "subtitle":"Basic Description",
    "description": "Lorem Ipsum",
    "Images": "https://placehold.co/600x400"
  },
  {
    "id": 1,
    "name": "test2",
    "subtitle":"Basic Description",
    "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    "Images": "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:adnnbk7strlabsylfijbosfs/bafkreicgbrzz6oynha5czdjegag63qtfxmeouztorfeeul7v4lilngtqe4@jpeg"
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App projects={projects} />
  </StrictMode>,
)
