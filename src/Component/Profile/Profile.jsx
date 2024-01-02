import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../Context/ProfileContext';

export default function Profile() {

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
            <div className='container my-5 bg-body-tertiary rounded-5'>
                <div className='container row my-5 py-5'>
                    {
                        data?.user ?
                            <>
                                <div className='col-6'>
                                    <div className='cardImag w-75 d-flex justify-content-center align-items-center h'>
                                        <img src={data.user.image.secure_url} alt="" className='w-75 rounded-5' />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='d-flex flex-column justify-content-between h-100'>
                                        <div>
                                            <h2>Name :</h2>
                                            <p>{data.user.userName}</p>
                                        </div>
                                        <div>
                                            <h2>Email :</h2>
                                            <p>{data.user.email}</p>
                                        </div>
                                        <div>
                                            <h2>Role :</h2>
                                            <p>{data.user.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}
