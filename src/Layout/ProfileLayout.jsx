import React from 'react'
import ProfileNavbar from '../Component/Profile/ProfileNavbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function ProfileLayout({userToken , setUserToken}) {
  return (
    <>
    <Navbar userToken={userToken} setUserToken={setUserToken} />
    <ProfileNavbar />
        <Outlet />
    <Footer />        
    </>
  )
}
