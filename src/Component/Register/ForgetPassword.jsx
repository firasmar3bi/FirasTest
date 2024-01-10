import { useFormik } from 'formik';
import React from 'react'
import Input from './Input';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
export default function ForgetPassword() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()
    const onSubmit = async value => {
        try {
            const { data } = await axios.patch(`${apiUrl}/auth/sendcode`, value,)
            if (data.message == 'success') {
                formik.resetForm();
                navigate('/RestPassword')
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const formik = useFormik({
        initialValues: {
            email: ''
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
                                <h2 className='mb-5 fw-bolder'>Password Reset</h2>
                                <p>We’ll send a password reset link to this email.</p>
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
