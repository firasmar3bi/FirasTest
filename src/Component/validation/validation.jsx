import * as yup from "yup";

export const SingInSchema = yup.object ({
    userName : yup.string().required('The name is required').min(3,'Min number of charecter is 3').max(20,'Max number of charecter is 20'),
    email : yup.string().required('The email is required').email(),
    password : yup.string().required('The password is required').min(4,'Min number of charecter is 4').max(10,'Max number of charecter is 10'),
})

export const LogInSchema = yup.object ({
    email : yup.string().required('The email is required').email(),
    password : yup.string().required('The password is required').min(4,'Min number of charecter is 4').max(10,'Max number of charecter is 10'),
})
export const OrderSchema = yup.object ({
    address : yup.string().required('The address is required'),
    phone : yup.string().required('The phone is required'),
})