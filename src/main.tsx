import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './routes/Dashboard'
import AboutMe from './routes/AboutMe'
import Projects from './routes/Projects'
import Contact from './routes/Contact'

import './assets/tailwind.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/About-me',
    element: <AboutMe />,
  },
  {
    path: '/Projects',
    element: <Projects />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
