import React from 'react'
import axios from "axios";
import Input from './Input'
import { useFormik } from 'formik'
import { SingInSchema } from '../validation/validation'

export default function SignUp() {
    
    const apiUrl = import.meta.env.VITE_API_URL;
    // console.log(apiUlr);

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
        
        try{
            const {data} = await axios.post(`${apiUrl}`,formData)
            console.log(data);
        }catch(errors){
            console.log(errors);
        }


    }

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema:SingInSchema

    })

    const handelFieldChange = (event) =>{
        console.log(event.target.files[0]);
        formik.setFieldValue('image',event.target.files[0])
    } 

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
            onChange : handelFieldChange,
        },
        
    ]

    const registerInputs = inputs.map ( (inputs , index)  => 
        <Input 
            type={inputs.type} 
            id={inputs.id} 
            name={inputs.name} 
            title={inputs.title} 
            value={inputs.value}
            key={index} 
            errors = {formik.errors}
            onChange={inputs.onChange || formik.handleChange}
            onBlur = {formik.handleBlur}
            touchad={formik.touched}
        />
    )

    return (
        <div className="col-12 col-md-12 col-lg-6 register ">
            <h2 className="mb-5 mt-3 mt-lg-0">SignUp</h2>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">

                {registerInputs}

                <button className="btn text-uppercase rounded-pill text-black" type="submit" disabled={!formik.isValid}>register</button>

            </form>
        </div>
    )
}
