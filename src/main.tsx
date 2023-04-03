import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './routes/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="mx-auto max-w-4xl px-8">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
