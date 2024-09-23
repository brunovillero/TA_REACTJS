import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import ProtectedRoute from './routeAuth/ProtectedRoute.jsx'

const getAccessToken = () => {
  const token = localStorage.getItem('token')
  return token
}

const isAuthenticated = () => {
  const token = getAccessToken()
  if (token) {
    return true
  }
  return false
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      { 
        path: "/dashboard", 
        element: <Dashboard />
      }
    ]
  },
  {
    path: "*",
    element: <p>404</p>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
