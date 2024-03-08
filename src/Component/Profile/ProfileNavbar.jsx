import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../Context/ProfileContext.jsx'



export default function ProfileNavbar() {

    const { GetProfileContext } = useContext(ProfileContext)
    const [data, setData] = useState(null);
    const GetProfile = async () => {
        const data = await GetProfileContext()
        setData(data)
    }
    useEffect(() => {
        GetProfile()
    }, []);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column m-5 siedNav rounded-5 h-100 text-white ProfileNavbar'>
                <ul className='navbar-nav py-5'>
                    <div className="container-fluid d-flex justify-content-center align-items-center ">
                        {
                            data?.user ?
                                <>
                                    <img src={data.user.image.secure_url} alt="Logo" width={50} height={50} className="d-inline-block align-text-top me-3 rounded-circle" />
                                    {data.user.userName}
                                </>
                                : <></>
                        }
                    </div>
                </ul>
                <ul className="navbar-nav h-75 w-100 align-items-center text-center">
                    <li className="nav-item py-2 w-100">
                        <Link className="nav-link nav-text" aria-current="page" to="/Profile/">profile Details</Link>
                    </li>
                    <li className="nav-item py-2 w-100">
                        <Link className="nav-link nav-text " to="/Profile/Contact">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item py-2 w-100">
                        <Link className="nav-link nav-text " to="/Profile/UserOrder">
                            User Order
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
