import { StrictMode } from 'react'  // development-only wrapper to detect potential issues
import { createRoot } from 'react-dom/client'     // new root rendering method from React 18
import './index.css'      //  Loads your global CSS file to style the app
import App from './App.jsx'   // main React component — the entry point of your UI.
import { BrowserRouter } from 'react-router-dom'    //  used to enable routing in your app

// sets up and renders your React app inside the #root element of your HTML.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
   </BrowserRouter>
  </StrictMode>
)

