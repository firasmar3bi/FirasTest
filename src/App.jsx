import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout />,
    children :[
      {
        path:'register',
        element:<Register />
      },
      {
        path:'home',
        element:<Home />,
      },
    ]
  },

])

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
