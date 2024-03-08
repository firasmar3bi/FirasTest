import { useFormik } from 'formik';
import React from 'react'
import Input from './Input.jsx';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
export default function RestPassword() {

    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()
    const onSubmit = async value => {
        try {
            const { data } = await axios.patch(`${apiUrl}/auth/forgotPassword`, value,)
            if (data.message == 'success') {
                formik.resetForm();
            }
            navigate('/Register')
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '', 
            password: '',
            code :''
        },
        onSubmit,
    })
    const inputs = [
        {
            id: "email",
            name: "email",
            type: "email",
            title: "User Email",
            value: formik.values.email,
        },
        {
            id: "password",
            name: "password",
            type: "password",
            title: "User New Password",
            value: formik.values.password,
        },
        {
            id: "code",
            name: "code",
            type: "text",
            title: "Your Code From Email",
            value: formik.values.code,
        },
    ]
    const orderInpus = inputs.map((inputs, index) =>
        <Input
            type={inputs.type}
            id={inputs.id}
            name={inputs.name}
            title={inputs.title}
            value={inputs.value}
            key={index}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touchad={formik.touched}
        />
    )
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-7 d-sm-none'>
                    </div>
                    <div className='col-12 col-lg-5'>
                        <div className='card'>
                            <div className='p-3'>
                                <h2 className='mb-5 fw-bolder'>Enter New Password </h2>
                                <p>Enter the Code that We send To you in Email</p>
                                <form onSubmit={formik.handleSubmit} className='mw-100' >
                                    {orderInpus}
                                    <button className="btn btn-warning text-uppercase rounded-pill text-black" type="submit" disabled={!formik.isValid}>SendCode</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
