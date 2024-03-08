import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from "axios";
import "./GetProduct.css"
import Loading from '../loading/loading';
import { CartContext } from '../Context/CartContext.Jsx';
import GetReviews from './GetReviews';
import PageNavLink from '../PageNavLink/PageNavLink.jsx';

export default function GetProduct() {

    const apiUrl = import.meta.env.VITE_API_URL;
    const id = useParams();
    const [loading, setLoading] = useState(false);
    const { addToCartContext } = useContext(CartContext)
    
    //  Get Product Detiles =>
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${apiUrl}/products/${id._id}`)
            return (data.product);
        } catch (error) {
            console.log(error);
        }
    }
    //  Set Prodect Detiles is Cash Browser =>
    const { data, isLoading } = useQuery("api_Prodect", getProduct)
    if (isLoading) {
        <Loading />
    }
    // Add Prodect to Cart Function =>
    const addToCart = async (productId) => {
        setLoading(true)
        const res = await addToCartContext(productId)
        setLoading(false)
    }
    
    return (
        <>
        {data ? <>
            <PageNavLink pageName={data.name} subPage="Shop" />
            </> : <></>
        }
            <div className='container'>
                <div className='row mt-5'>
                    {data ? <>
                        <div className="col-12 col-md-6 PartImg">
                            <div className="w-100 h-100">
                                <div className="discount position-relative">
                                    {data.discount > 0 ?
                                        <>
                                            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                                $ {data.discount}
                                            </span>
                                            <span className="position-absolute translate-middle badge rounded-pill bg-warning text-uppercase">
                                                hot
                                            </span>
                                        </> : <></>
                                    }
                                    <a href="#" className="nav-link">
                                        <img src={data.mainImage.secure_url} className="card-img-top w-75 rounded-5" alt={data.name} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="w-100 h-100 mt-4">
                                <div className="mt-4">
                                    <h1>
                                        {data.name}
                                    </h1>
                                    {data.discount > 0 ? <>
                                        <p className='price'>$ {data.finalPrice} <span> $ {data.price}</span></p>
                                    </> : <>
                                        <p className='price'>$ {data.price} <span /></p>
                                    </>}
                                    {/* <p className="mb-0 mt-3 price">{data.price}$<span /></p> */}
                                    <div className="mt-4">
                                        <i className="fa-regular fa-circle-check text-success" /> <span className="ms-1">
                                            {data.stock > 0 ? <>In Stook</> : <>Out of Stook</>}
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        {
                                            localStorage.getItem("userToken") ?
                                                <>
                                                    <button
                                                        className="btn rounded-pill text-uppercase showPartAtwo addToCartButton"
                                                        onClick={() => addToCart(data._id)}>
                                                        Add To Cart
                                                    </button>
                                                    {loading ? <Loading /> : ''}
                                                </>
                                            : <>
                                                <Link to="/register" className='btn rounded-pill text-uppercase showPartAtwo addToCartButton'>Add To Cart</Link>
                                            </>
                                        }
                                    </div>
                                    <hr />
                                    <div>
                                        <h3>Product Description</h3>
                                        <p>
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : <>
                        <Loading />
                    </>
                    }

                </div>
                {data ? <GetReviews data={data} /> : <></>}
            </div>
        </>
    )
}
