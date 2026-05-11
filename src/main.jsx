import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
// import MainLayout from './Layout/MainLayout'
// import HomePage from './pages/homePage/homePage'
// import Books from './pages/Books/Books'
import { router } from './Routes/Routes'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
