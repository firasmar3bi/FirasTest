import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from "axios";

export default function GetProduct() {

    const id = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${apiUrl}/products/${id._id}`)
            return(data.product);
        } catch (error) {
            console.log(error);
        }
    }

    const { data, isLoading } = useQuery("api_Prodect", getProduct)
    if (isLoading) {
        <h2>... Loding</h2>
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {data ? <>
                        <div className="col-12 col-md-6 PartImg">
                            <div className="w-100 h-100">
                                <div className="discount position-relative">
                                    {data.discount > 0 ?
                                        <>
                                            <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                                                $ {data.discount}
                                            </span>
                                            <span className="position-absolute translate-middle badge rounded-pill bg-warning text-uppercase">
                                                hot
                                            </span>
                                        </> : <></>
                                    }

                                    <a href="#" className="nav-link">
                                        <img src={data.mainImage.secure_url} className="card-img-top" alt={data.name} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="w-100 h-100 mt-4">
                                {/* <div className="d-flex align-items-center  p-0 m-0 sale-start">
                                <i className="fa-solid fa-star " />
                                <i className="fa-solid fa-star " />
                                <i className="fa-solid fa-star " />
                                <i className="fa-solid fa-star " />
                                <i className="fa-solid fa-star start-no" />
                                <p className="m-0 ms-3">Reviews (3)</p>
                            </div> */}
                                <div className="mt-4">
                                    <h1>
                                        {data.name}
                                    </h1>
                                    {data.discount>0?<>
                                                <p className='price'>$ {data.finalPrice} <span> $ {data.price}</span></p>
                                                </>:<>
                                                <p className='price'>$ {data.price} <span /></p>
                                                </>}
                                    {/* <p className="mb-0 mt-3 price">{data.price}$<span /></p> */}
                                    <div className="mt-4">
                                        <i className="fa-regular fa-circle-check text-success" /> <span className="ms-1">
                                            {data.stook > 0 ? <>In Stook</> : <>Out of Stook</>}
                                        </span>
                                    </div>
                                    {/* <p className="mt-3 mb-0">The small round table in the dinette may be great for casual meals with your family, but inviting overnight guests.</p> */}
                                    {/* <div className="mt-2  ">
                                    <ul className="ms-2 ps-2">
                                        <li className="mt-1">Country: USA</li>
                                        <li className="mt-1">Part Number: A123-3416</li>
                                        <li className="mt-1">Color: White/Sliver</li>
                                    </ul>
                                </div> */}
                                    {/* <div>
                                    <label htmlFor="Quantity">Quantity</label>
                                    <div className="cart-totals rounded-pill">
                                        <input type="button" defaultValue="-" id="minus-button" htmlFor="quantity" />
                                        <input type="number" id="quantity" defaultValue={1} min={0} />
                                        <input type="button" defaultValue="+" id="plus-button" htmlFor="quantity" />
                                    </div>
                                </div> */}
                                    <div className="mt-4">
                                        <a href="#" className="btn rounded-pill text-uppercase showPartAone">add to cart</a>
                                        {/* <a href="#" className="btn rounded-pill text-uppercase showPartAtwo">BUY IT NOW</a> */}
                                    </div>
                                    {/* <div className="mt-4 d-flex align-items-center">
                                    <a href="#" className="nav-link text-decoration-none showIcon">
                                        <i className="fa-regular fa-heart" /> Add To Wishlist
                                    </a>
                                    <a href="#" className="ms-5 nav-link text-decoration-none showIcon">
                                        <i className="fa-regular fa-compass" /> Compare
                                    </a>
                                </div> */}
                                    <hr />
                                    {/* <div className="showInformation">
                                    <p>BRANDS: <span>Toyota</span></p>
                                    <p>TAGS: <span>car</span>,<span>stainless</span>,<span>wheel</span></p>
                                    <p>SKU: <span>P9AIEL</span></p>
                                    <p className="d-flex">SHARE:
                                        <a href="#" className="ms-3 nav-link text-decoration-none">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                        <a href="#" className="ms-4 nav-link text-decoration-none">
                                            <i className="fa-brands fa-square-pinterest" />
                                        </a>
                                        <a href="#" className="ms-4 nav-link text-decoration-none">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </p>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </> : <>
                        <h2>... loding</h2>
                    </>}

                </div>
            </div>
        </>
    )
}
