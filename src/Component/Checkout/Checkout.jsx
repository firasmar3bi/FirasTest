import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Context/CartContext.Jsx'
import axios from "axios";
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { OrderSchema } from '../validation/validation';
import Input from '../Register/Input';
export default function Checkout() {

    const navigate = useNavigate()

    // Get Cart Proudect =>
    let { GetCartContext, quantity } = useContext(CartContext)
    const [data, setData] = useState(null)
    const GetCart = async () => {
        const res = await GetCartContext()
        setData(res);
    }
    // Clear Cart =>
    const clerCart = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${apiUrl}/cart/clear`,
                {},
                {
                    headers: { Authorization: `Tariq__${token}` }
                }
            )
            if (data.message == 'success') {
                setQuantity(quantity = 0)
                localStorage.removeItem("quantity")
                toast.success('Clear Cart success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "colored",
                });
            }
            return (data);
        } catch (error) {
            console.log(error);
        }
    }
    // Order And Checkout =>
    const apiUrl = import.meta.env.VITE_API_URL;

    const initialValues = {
        couponName: '',
        address: '',
        phone: ''
    }

    const onSubmit = async values => {
        try {
            const token = localStorage.getItem("userToken")
            const { data } = await axios.post(`${apiUrl}/order`, values,
                {
                    headers: { Authorization: `Tariq__${token}` }
                })
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
                clerCart()
                navigate('/')

            }
        } catch (error) {
            console.log(error);
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: OrderSchema
    })

    const inputs = [
        {
            id: "couponName",
            name: "couponName",
            type: "text",
            title: "User couponName",
            value: formik.values.couponName,
        },
        {
            id: "address",
            name: "address",
            type: "text",
            title: "User address",
            value: formik.values.address,
        },
        {
            id: "phone",
            name: "phone",
            type: "text",
            title: "User phone",
            value: formik.values.phone,
        },
    ]
    const OrderInpuds = inputs.map((inputs, index) =>
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

    useEffect(() => {
        GetCart()
    }, []);

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center m-5'>
                <div className='bg text-bg-light w-100 h-100  rounded-3'>
                    <div className='p-4'>
                        <h2>Checkout Summary:</h2>
                        <hr />
                        <div className=''>
                            {data?.products ? data.products.map((product) =>
                                <>
                                    <h3>{product.details.name}</h3>
                                    <p>Quantity : {quantity}</p>
                                    <p>Price per Unit : <span className='price-2'> {product.details.finalPrice}$</span></p>
                                    <p>Total Price : <span className='price-2'> {product.details.finalPrice * quantity}$ </span></p>
                                </>
                            ) : <p className='bg-danger'>Thers no Data i Cart</p>}
                        </div>
                        <hr />
                        <h3>Have a coupon ?</h3>
                        <p>Add your code for an instant cart discount</p>
                        <form onSubmit={formik.handleSubmit} className='mw-100' >
                            {OrderInpuds}
                            <button className="btn text-uppercase rounded-2 w-25 text-black bg-success" type="submit" disabled={!formik.isValid}>register</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
