import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from "axios";

export default function ProductInCategories() {

    const id = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;

    const getProductFromCatgories = async () => {
        try {
            const { data } = await axios.get(`${apiUrl}/products/category/${id._id}`)
            return (data);
        } catch (error) {
            console.log(error);
        }
    }

    const { data, isLoading } = useQuery("api_ProdectFromCategories", getProductFromCatgories)
    if (isLoading) {
        <h2>... Loding</h2>
    }

    return (
        <>
            <div className="container-fluid px-0 py-5">
                <div className="section-titel d-flex w-100 justify-content-center align-items-center mt-4 pb-5">
                    <h2 className="text-uppercase text-center">Shop</h2>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        data?.products.length ? data.products.map((category) => <>
                            <div className="col-6 col-md-6 col-lg-4 p-4 carPart-card" key={category._id}>
                                <div className="card p-0 m-0 position-relative">
                                    {/* <div className="d-flex flex-column custom-postion">
                                        <i className="fa-solid fa-magnifying-glass" />
                                        <i className="fa-regular fa-heart" />
                                        <i className="fa-solid fa-code-compare" />
                                    </div> */}
                                    <Link href="showPart.html" className="nav-link">
                                        <img src={category.mainImage.secure_url} className="card-img-top" alt={category.name} />
                                    </Link>
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            <Link href="showPart.html" className="nav-link">  {category.name} </Link>
                                        </h3>
                                        {/* <div className="d-flex align-items-center p-0 m-0 sale-start">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star start-no" />
                                        </div> */}
                                        <p>$ {category.price} <span /></p>
                                        <a href="showPart.html" className="btn rounded-pill  text-uppercase">add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </>) : <h2>Ther's no data</h2>
                    }
                </div>
            </div>
        </>
    )
}
