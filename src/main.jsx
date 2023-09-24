import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {HeroesApp} from './HeroesApp'
import styles from './styles.css'
import {MarvelPages, DcPages} from './heroes/pages'

const rootArr = [
  {
    path: '/',
    element: <HeroesApp />,
  },
  {
    path: 'dc',
    element: <DcPages />,
  },
  {
    path: 'marvel',
    element: <MarvelPages />,
  },
]

const router = createBrowserRouter(rootArr)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
