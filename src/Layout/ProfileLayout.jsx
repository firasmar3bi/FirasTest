import React from 'react'
import ProfileNavbar from '../Component/Profile/ProfileNavbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function ProfileLayout({userToken , setUserToken}) {
  return (
    <>
    <Navbar userToken={userToken} setUserToken={setUserToken} />
    
    <div className='row bg-body-secondary mb-5 mt-3 py-5'>
      <div className='col-3 p-0'><ProfileNavbar /></div>
      <div className='col-9'><Outlet /></div>
    </div>
         
    <Footer />        
    </>
  )
}
