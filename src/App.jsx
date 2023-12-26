import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import { TokenContext } from './Component/Context/TokenContext';


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
      element:<Layout />,
      children :[
        {
          path:'register',
          element:<Register getCurentUser={getCurentUser}/>
        },
        {
          index:true,
          element:<Home />,
        },
      ]
    },
  
  ])


  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>


  )
}
