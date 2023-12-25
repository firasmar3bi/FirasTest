import React, { useState } from 'react'
import Input from './Input'
import { useFormik } from 'formik'

export default function SignUp() {

    const initialValues = {
        userName:'',
        email:'',
        password:'',
        image:'',
    }
    const onSubmit = async values=> {
        const formData = new FormData();
        formData.append("userName",values.userName)
        formData.append("email",values.email)
        formData.append("password",values.password)
        formData.append("image",values.image);
        
        console.log(values);
    }

    const formik = useFormik({

        initialValues,
        onSubmit,

    })

    const inputs = [
        {
            id : "userName",
            name : "userName",
            type : "text",
            title : "User Name",
            value : formik.values.userName,
        },
        {
            id : "email",
            name : "email",
            type : "email",
            title : "User email",
            value : formik.values.email,
        },
        {
            id : "password",
            name : "password",
            type : "password",
            title : "User password",
            value : formik.values.password,
        },
        {
            id : "image",
            name : "image",
            type : "file",
            title : "User image",
            value : formik.values.image,
        },
        
    ]

    const registerInputs = inputs.map ( (inputs , index)  => 
        <Input 
            id={inputs.id} 
            name={inputs.name} 
            type={inputs.type} 
            title={inputs.title} 
            key={index} 
            onChange={formik.handleChange}
        />
    )

    return (
        <div className="col-12 col-md-12 col-lg-6 register ">
            <h2 className="mb-5 mt-3 mt-lg-0">Register</h2>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">

                {registerInputs}

                <button className="btn text-uppercase rounded-pill text-black" type="submit" >register</button>

            </form>
        </div>
    )
}
