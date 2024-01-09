import React, { useState } from 'react'
import Input from './Input'
import axios from "axios";
import { useFormik } from 'formik'
import { toast } from 'react-toastify';
import { LogInSchema } from '../validation/validation'
import { Link, useNavigate } from 'react-router-dom'
import ForgetPassword from './ForgetPassword';
import Loading from '../loading/loading';

export default function LogInSection({ getCurentUser }) {

    const apiUrl = import.meta.env.VITE_API_URL;
    const [logInerror, setLogInError] = useState(null)
    const navigate = useNavigate()


    const initialValues = {
        email: '',
        password: '',
    }

    const onSubmit = async values => {
        try {
            const { data } = await axios.post(`${apiUrl}/auth/signin`, values)
            if (data.message == 'success') {
                formik.resetForm();
                localStorage.setItem("userToken", data.token)
                getCurentUser()
                toast.success('Your Login success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "colored",
                });
                navigate('/')
            }
        } catch (error) {
            setLogInError(error.response.data.message);
        }
    }

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema: LogInSchema

    })

    const inputs = [
        {
            id: "logInEmail",
            name: "email",
            type: "email",
            title: "User email",
            value: formik.values.email,
        },
        {
            id: "logInPassword",
            name: "password",
            type: "password",
            title: "User password",
            value: formik.values.password,
        },
    ]

    const registerInputs = inputs.map((inputs, index) =>
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
        <div className="col-12 col-md-12 col-lg-6 log-in ">
            <h2 className="mb-5">Login</h2>
            <form onSubmit={formik.handleSubmit} >
                {registerInputs}
                <button className="btn text-uppercase rounded-pill text-black" type="submit" disabled={!formik.isValid}>register</button>
                {/* Button trigger modal */}
                <Link className=" ms-3 text-uppercase rounded-pill text-black link-underline-info text-info link-warning" to="ForgetPassword">
                Do You Forget password ?
                </Link>
                {logInerror ? <p className='m-0 ms-3 text-danger d-inline-block fw-bolder'>{logInerror}</p> : <></>}
            </form>
        </div>
    )
}
