import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import {Container} from '@mui/material'
import styles from './styles.css'
import {MarvelPages, DcPages, Navbar} from './heroes'
import {Login} from './auth'
import {HeroesApp} from './HeroesApp'

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
    <Navbar />
    <Container maxWidth={'100%'}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
)
