import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import {HeroesApp} from './HeroesApp'
import styles from './styles.css'
import {MarvelPages, DcPages} from './heroes/pages'
import {Login} from './auth/pages/LoginPage'

const rootArr = [
  {
    path: '/',
    element: <Navigate to={'/marvel'} replace={true} />,
  },
  {
    path: 'dc',
    element: <DcPages />,
  },
  {
    path: 'marvel',
    element: <MarvelPages />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]

const router = createBrowserRouter(rootArr)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
