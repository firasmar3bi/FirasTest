import React, { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout.jsx'
import Home from './Component/Home/Home.jsx'
import Register from './Component/Register/Register.jsx'
import { jwtDecode } from "jwt-decode";
import Catrgories from './Component/Categories/Catrgories.jsx';
import ProductInCategories from './Component/ProductInCategories/ProductInCategories.jsx';
import GetProduct from './Component/GetProduct/GetProduct.jsx';
import Shop from './Component/Shop/Shop.jsx';
import Cart from './Component/Cart/Cart.jsx';
import Profile from './Component/Profile/Profile.jsx';
import ProfileLayout from './Layout/ProfileLayout.jsx';
import UserOrder from './Component/Profile/UserOrder.jsx';
import Contact from './Component/Profile/Contact.jsx';
import Checkout from './Component/Checkout/Checkout.jsx';
import ProtectRouting from './Component/ProtectRouting/ProtectRouting.jsx';
import PageNotFound from './Component/PageNotFound/PageNotFound.jsx';
import ForgetPassword from './Component/Register/ForgetPassword.jsx';
import RestPassword from './Component/Register/restPassword.jsx';


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
