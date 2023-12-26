import React from 'react'
import Input from './Input'
import { useFormik } from 'formik'
import { SingInSchema } from '../validation/validation'

export default function LogInSection() {

    const initialValues = {
        email: '',
        password: '',
    }

    const onSubmit = values => {
        const formData = new FormData();
        formData.append("email", values.email)
        formData.append("password", values.password)
    }

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema: SingInSchema

    })

    const inputs = [
        {
            id: "email",
            name: "email",
            type: "email",
            title: "User email",
            value: formik.values.email,
        },
        {
            id: "password",
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

            </form>
        </div>
    )
}
