import React, { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import { jwtDecode } from "jwt-decode";
import Catrgories from './Component/Categories/Catrgories';


export default function App() {

  const [userToken,setUserToken]= useState(null)
  const getCurentUser = ()=> {
      const token = localStorage.getItem('userToken');
      const decde = jwtDecode(token)
      setUserToken(decde)
  }

  const router = createBrowserRouter ([
    {
      path:'/',
      element:<Layout userToken={userToken} setUserToken={setUserToken} />,
      children :[
        {
          index:true,
          element:<Home />,
        },
        {
          path:"Catgories",
          element:<Catrgories />
        },
        {
          path:'register',
          element:<Register getCurentUser={getCurentUser}/>
        },  
      ]
    },
  
  ])

  useEffect(()=>{
    if (localStorage.getItem("userToken")) {
      getCurentUser()
    }
  },[])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>


  )
}
