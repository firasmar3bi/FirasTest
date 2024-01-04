import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext.Jsx'
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Cart() {

    let { GetCartContext, quantity, setQuantity } = useContext(CartContext)
    const [data, setData] = useState(null)
    const apiUrl = import.meta.env.VITE_API_URL;

    // Get Cart Proudect =>
    const GetCart = async () => {
        const res = await GetCartContext()
        setData(res);
    }

    // Clear Product From Cart =>
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

    // remove Product from cart =>
    const removeItemFunction = async (productId) => {
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${apiUrl}/cart/removeItem`,
                { productId },
                {
                    headers: { Authorization: `Tariq__${token}` }
                }
            )
            if (data.message == 'success') {
                setQuantity(quantity - 1);
                localStorage.setItem("quantity",quantity)
                toast.success('Clear Cart success', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
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

    const removeItem = (productId) => {
        removeItemFunction(productId)
    }

    let plusQuantity = () => {
        setQuantity(quantity + 1);
        localStorage.setItem("quantity",quantity)
    }
    let minusQuantity = () => {
        setQuantity(quantity - 1);
        localStorage.setItem("quantity",quantity)
    }


    useEffect(() => {
        GetCart()
    }, [clerCart]);
    return (
        <>
            <section className="main-section" id="showNavbar">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className="py-5 mt-5 ps-3 d-inline-block">My Cart</h1>
                            <button className='btn btn-danger text-capitalize nav-custom-font mx-5 d-inline' onClick={() => clerCart()}>Clear Cart</button>

                            <div className="row d-none d-md-flex">
                                <div className="col-2 d-flex justify-content-center align-items-center">
                                    <p className="wishTitel p-0 m-0 border-0">Product Img</p>
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <p className="wishTitel p-0 m-0 border-0">Product name</p>
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <p className="wishTitel p-0 m-0 border-0">price</p>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-center">
                                    <p className="wishTitel p-0 m-0 border-0">Quantity</p>
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <p className="wishTitel p-0 m-0 border-0">remove item</p>
                                </div>
                            </div>
                            {
                                data?.products ? data.products.map((product, index) => <>
                                    <div className="row py-4 position-relative" id="closeRow-1" key={index}>
                                        <div className="col-12 col-md-3">
                                            <div className="w-100">
                                                <img src={product.details.mainImage.secure_url} alt={product.details.name} className="w-50" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 d-flex justify-content-start align-items-center">
                                            <div>
                                                <p className="nav-link d-block wishname">{product.details.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center">
                                            {product.details.discount > 0 ? <>
                                                <p className=" price-2">$ {product.details.finalPrice} <span className='text-decoration-line-through'> $ {product.details.price}</span></p>
                                            </> : <>
                                                <p className=" price-2">{product.details.finalPrice}</p>
                                            </>}

                                        </div>
                                        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                                            <button className='btn me-2 btn-light' onClick={() => minusQuantity()} > - </button>
                                            <p className="m-0">{quantity}</p>
                                            <button className='btn ms-2 btn-light' onClick={() => plusQuantity()} > + </button>
                                        </div>
                                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center ">
                                            <button type="button" className="btn-close closeCustom" onClick={() => removeItem(product.productId)} />
                                        </div>
                                    </div>
                                </>) : <><h1>... Loading</h1></>
                            }
                        </div>
                        <div className='col-4 py-5 mt-5'>
                                <div className="py-5 mt-5 d-flex flex-column p-4 g-4 border border-2 border-light-subtle rounded-3">
                                    <h2>Cart summary</h2>
                                    <div>
                                        <div className='d-flex justify-content-between align-items-center mb-4 border border-1 border-black rounded-2 px-2 py-3'>
                                            <div className='d-flex justify-content-center align-items-center w-50'>
                                                <input type="radio" className='w-25 me-3' /> <label className='w-75'>Free shipping</label>
                                            </div>
                                            <span>$0.00</span>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mb-4 border border-1 border-black rounded-2 px-2 py-3'>
                                            <div className='d-flex justify-content-center align-items-center w-50'>
                                                <input type="radio" className='w-25 me-3'/> <label className='w-75'>Express shipping</label>
                                            </div>
                                            <span>+$15.00</span>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mb-4 border border-1 border-black rounded-2 px-2 py-3'>
                                            <div className='d-flex justify-content-center align-items-center w-50'>
                                                <input type="radio" className='w-25 me-3'/> <label className='w-75'>Pick Up</label>
                                            </div>
                                            <span>%21.00</span>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mb-4 border border-1 border-black rounded-2 px-2 py-3'>
                                            <label className='ms-4'>Subtotal</label>
                                            <span>$1234.00</span>
                                        </div>
                                        <div  className='d-flex justify-content-between align-items-center mb-4 border border-1 border-success rounded-3 px-2 py-3'>
                                            <label className='ms-4'>Total</label>
                                            <span className='price-2'>$1345.00</span>
                                        </div>
                                        <div>
                                            <Link to="/Checkout" className='btn btn-success'>Chekout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        </>
    )
}
