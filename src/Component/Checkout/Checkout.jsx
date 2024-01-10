import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import { OrderSchema } from '../validation/validation'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext.Jsx'
import Input from '../Register/Input';
export default function Checkout() {

    const { GetCartContext } = useContext(CartContext)
    const [orderData, setOrderData] = useState(null)
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()

    // Get Cart Proudect =>
    const GetCart = async () => {
        const res = await GetCartContext()
        setOrderData(res);
    }
    // Clear Cart Funcion =>
    const clerCart = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${apiUrl}/cart/clear`,
                {},
                {
                    headers: { Authorization: `Tariq__${token}` }
                }
            )
            GetCart()
            return (data);
        } catch (error) {
            console.log("Clear Cart Error");
        }
    }
    //  Order Formic =>
    const onSubmit = async value => {
        try {
            const token = localStorage.getItem("userToken")
            const { data } = await axios.post(`${apiUrl}/order`, value,
                { headers: { Authorization: `Tariq__${token}` } }
            )
            if (data.message == 'success') {
                formik.resetForm();
                toast.success('Your request has been accepted', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "colored",
                });
                clerCart()
                navigate('/Profile/UserOrder')
            }
            return (data);
        } catch (error) {
            console.log(error);
        }
    }
    const formik = useFormik({
        initialValues: {
            couponName: '',
            address: '',
            phone: '',
        },
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
                        <div >
                            {
                                orderData?.products ? orderData.products.map((product) => 
                                    <div key={product._id}>
                                        <h3>name : {product.details.name}</h3>
                                        <p>Quantity : {product.quantity}</p>
                                        <p>Price per Unit : <span className='price-2'>{product.details.finalPrice} $</span></p>
                                        <p className='border border-1 border-warning p-2 rounded-3 text-center bg-warning w-50 m-auto mb-2'>Total Price : <span className='price-2'>{product.details.finalPrice * product.quantity} $ </span></p>
                                    </div>
                                ) : <>
                                    <p className='bg-danger'>Thers no Products in Cart</p>
                                </>
                            }
                        </div>
                        <hr />
                        <h3>Have a coupon ?</h3>
                        <p>Add your code for an instant cart discount</p>
                        <form onSubmit={formik.handleSubmit} className='mw-100' >
                            {orderInpus}
                            <button className="btn text-uppercase rounded-2 w-50 m-auto d-block my-3 text-black bg-success" type="submit" disabled={!formik.isValid}>register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

