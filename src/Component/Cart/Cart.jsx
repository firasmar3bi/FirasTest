import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext.Jsx'
import { useQuery } from 'react-query'
import axios from "axios";

export default function Cart() {

    const { GetCartContext } = useContext(CartContext)
    const apiUrl = import.meta.env.VITE_API_URL;

    const GetCart = async () => {
        const res = await GetCartContext()
        return res;
    }

    const removeItemFunction = async (productId) => {
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.patch(`${apiUrl}/cart/removeItem`,
                { productId },
                {
                    headers: { Authorization: `Tariq__${token}` }
                }
            )
            return (data);
        } catch (error) {
            console.log(error);
        }

    }

    const removeItem = (productId) => {
        removeItemFunction(productId)
    }

    const { data, isLoading } = useQuery("Cart", GetCart);

    if (isLoading) {
        return <><p>.... is Loading</p></>
    }


    return (
        <>
            <section className="main-section" id="showNavbar">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className="py-5 mt-5 ps-3">My Cart</h1>
                            <div className="row d-none d-md-flex">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <p className="wishTitel p-0 m-0 border-0">Product Img</p>
                                </div>
                                <div className="col-2 d-flex justify-content-center align-items-center">
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
                                data?.products ? data.products.map((product) => <>
                                    <div className="row py-4 position-relative" id="closeRow-1">
                                        <div className="col-12 col-md-3">
                                            <div className="w-100">
                                                <img src={product.details.mainImage.secure_url} alt={product.details.name} className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 d-flex justify-content-start align-items-center">
                                            <div>
                                                <p className="nav-link d-block wishname">{product.details.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center">
                                            <p className="price">{product.details.price}$</p>
                                        </div>
                                        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                                            <p className="wishname text-success">{product.details.quantity}</p>
                                        </div>
                                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center ">
                                            <button type="button" className="btn-close closeCustom" onClick={() => removeItem(product.productId)} />
                                        </div>
                                    </div>
                                </>) : <><h1>hhhhhhh Your work is wrong</h1></>
                            }
                        </div>
                        <div className='col-4'>

                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}
