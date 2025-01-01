import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import AppCat from './Components/Category-Products/AppCat'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AppCat/> */}
  </StrictMode>,
)
