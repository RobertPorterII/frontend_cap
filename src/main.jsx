import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// need to warp app in browser router for links and nav bar navigation

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
