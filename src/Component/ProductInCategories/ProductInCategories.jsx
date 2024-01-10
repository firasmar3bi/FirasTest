import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from "axios";
import { CartContext } from '../Context/CartContext.Jsx';
import { useContext } from 'react'
import Loading from '../loading/loading';
import PageNavLink from '../PageNavLink/PageNavLink';

export default function ProductInCategories() {

    const id = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;
    const { addToCartContext } = useContext(CartContext)
    const [loading, setLoading] = useState(false);

    // Get Catgories Product =>
    const getProductFromCatgories = async () => {
        try {
            const { data } = await axios.get(`${apiUrl}/products/category/${id._id}`)
            return (data);
        } catch (error) {
            console.log(error);
        }
    }
    // Set Product In Cash Browser =>
    const { data, isLoading } = useQuery("api_ProdectFromCategories", getProductFromCatgories)
    if (isLoading) {
        <h2>... Loding</h2>
    }
    // Add Proudect To Cart = >
    const addToCart = async (productId) => {
        setLoading(false)
        const res = await addToCartContext(productId)
        setLoading(true)
    }

    return (
        <>
            <PageNavLink pageName='Product' subPage="Catgories" />
            <div className="container-fluid px-0 py-5">
                <div className="section-titel d-flex w-100 justify-content-center align-items-center mt-4 pb-5">
                    <h2 className="text-uppercase text-center">Shop</h2>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        data?.products.length ? data.products.map((category,index) => <>
                            <div className="col-6 col-md-6 col-lg-4 p-4 carPart-card" key={index}>
                                <div className="card p-0 m-0 position-relative" key={index}>
                                    <Link to={`/products/${category._id}`} className="nav-link">
                                        <img src={category.mainImage.secure_url} className="card-img-top" alt={category.name} />
                                    </Link>
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            <Link to={`/products/${category._id}`} className="nav-link">  {category.name} </Link>
                                        </h3>
                                        <p>$ {category.price} <span /></p>
                                        {localStorage.getItem("userToken") ?
                                            <>
                                                <button
                                                    className="btn rounded-pill text-uppercase showPartAtwo addToCartButton"
                                                    onClick={() => addToCart(category._id)}
                                                >add to cart</button>
                                                {loading ? <Loading /> : ''}
                                            </> : <>
                                                <Link to="/register" className='btn rounded-pill text-uppercase showPartAtwo addToCartButton'>Add To Cart</Link>
                                            </>
                                        }

                                    </div>
                                </div>
                            </div>
                        </>) : <div className="alert alert-danger" role="alert">
                            Ther's No Data In This Catgorie 
                        </div>

                    }
                </div>
            </div>
        </>
    )
}
