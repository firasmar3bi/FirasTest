import React, { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import { jwtDecode } from "jwt-decode";
import Catrgories from './Component/Categories/Catrgories';
import ProductInCategories from './Component/ProductInCategories/ProductInCategories';
import GetProduct from './Component/GetProduct/GetProduct';
import Shop from './Component/Shop/Shop';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import ProfileLayout from './Layout/ProfileLayout';
import UserOrder from './Component/Profile/UserOrder';
import Contact from './Component/Profile/Contact';
import Checkout from './Component/Checkout/Checkout';
import ProtectRouting from './Component/ProtectRouting/ProtectRouting';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import ForgetPassword from './Component/Register/ForgetPassword';
import RestPassword from './Component/Register/restPassword';


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
          path:"products/category/:_id",
          element:<ProductInCategories />
        },
        {
          path:"products/:_id",
          element:<GetProduct />
        },
        {
          path:"Shop",
          element:<Shop />
        },
        {
          path:"Cart",
          element:<ProtectRouting><Cart /></ProtectRouting> 
        },
        {
          path:'register',
          element:<Register getCurentUser={getCurentUser}/>
        },  
        {
          path:'register/ForgetPassword',
          element:<ForgetPassword />
        },  
        {
          path:'RestPassword',
          element: <RestPassword />
        },  
        {
          path:'Checkout',
          element:<ProtectRouting><Checkout /></ProtectRouting>
        },
        {
          path:"*",
          element:<PageNotFound />
        }  
      ]
    },
    {
      path:'/Profile',
      element: <ProtectRouting><ProfileLayout userToken={userToken} setUserToken={setUserToken} /></ProtectRouting>,
      children :[
        {
          index:true,
          element: <ProtectRouting><Profile /></ProtectRouting>
        },
        {
          path:"Contact",
          element: <ProtectRouting><Contact /></ProtectRouting>
        },
        {
          path : "UserOrder",
          element : <ProtectRouting><UserOrder /></ProtectRouting>
        }
      ]
    }
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
