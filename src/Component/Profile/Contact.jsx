
import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../Context/ProfileContext';

export default function Contact() {
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
            <div className='container m-5 rounded-5 h-100 bg-body-tertiary'>
                <div className='container row m-5 py-5'>
                    {
                        data?.user ?
                            <>
                                    <div className='d-flex flex-column justify-content-between h-100'>

                                        <div>
                                            <h2 className='py-5'>Email :</h2>
                                            <h3>{data.user.email}</h3>
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
