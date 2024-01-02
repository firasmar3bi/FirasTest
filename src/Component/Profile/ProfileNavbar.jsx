import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../Context/ProfileContext'


export default function ProfileNavbar() {

    const {GetProfileContext} = useContext(ProfileContext)
    const [data,setData] = useState(null);
    const GetProfile = async ()=>{
        const data = await GetProfileContext()
        setData(data)
    }
    useEffect(() => {
        GetProfile()
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 bg-white justify-content-start w-100 bg-body-secondary" id="navBarThree">
                <div className="container-fluid p-2">
                    <div className="collapse navbar-collapse nav-mobile-screen" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <Link className="nav-link text-black dropdown nav-text active" aria-current="page" to="/">Home Page</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link text-black nav-text dropdown" aria-current="page" to="/Profile/">profil eDetails</Link>
                            </li>
                            <li className="nav-link">
                                <Link className="text-black nav-text px-2 dropdown text-decoration-none custom-icon-hover" to="/Profile/UserOrder">
                                    User Order
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link className="text-black nav-text dropdown px-2  text-decoration-none custom-icon-hover" to="/Cart">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav w-25'>
                            <div className="container-fluid d-flex justify-content-center align-items-center ">
                                        {
                                    data?.user ?
                                        <>
                                        <img src={data.user.image.secure_url} alt="Logo" width={50} height={50} className="d-inline-block align-text-top me-3 rounded-circle" />
                                            {data.user.userName} 
                                        </>
                                        : console.log("erre")
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
