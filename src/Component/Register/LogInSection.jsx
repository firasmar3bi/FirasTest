import React from 'react'
import Input from './Input'
import { useFormik } from 'formik'

export default function LogInSection() {

    const formik = useFormik({
            initialValues : {
            UserEmail:'',
            Userpassword:'',
        },onSubmit: values => {
            console.log(values);
        }
    })

    const inputs = [
        {
            type : "email",
            name : "UserEmail",
            title : "User Email",
            value : formik.values.UserEmail ,
        }, 
        {
            type : "password",
            name : "Userpassword",
            title : "User password",
            value : formik.values.Userpassword ,
        }
    ]

    const logInInputs = inputs.map( (inputs , index ) =>
        <Input 
        type={inputs.type} 
        name={inputs.name} 
        key={index} 
        title={inputs.title} 
        onChange ={formik.handleChange}
        />
    )
    
    return (
        <div className="col-12 col-md-12 col-lg-6 log-in">
            <h2 className="mb-5">Login</h2>
            <form onSubmit={formik.handleSubmit}>
                {logInInputs}
                <button className="btn text-uppercase rounded-pill text-black me-4">log in</button>
            </form>
        </div>
    )
}
