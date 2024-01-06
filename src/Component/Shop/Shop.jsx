import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CatgoriesContext } from '../Context/CatgoriesContext'
import axios from "axios";
import { CartContext } from '../Context/CartContext.Jsx';
import { Link } from 'react-router-dom';

export default function Shop() {

    // Get The Category = >
    const CategoryData = useContext(CatgoriesContext)
    
    // Get All Products =>
    const [data, setData] = useState();
    const apiUrl = import.meta.env.VITE_API_URL;
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`${apiUrl}/products?page=${page}&limit=4`)
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Change The Api Page =>
    const [page, setPage] = useState(1)
    const pageChange = (e) => {
        setPage(e.target.value);
    }
    
    // Add Proudect To Cart = >
    const {addToCartContext} = useContext(CartContext)
    const addToCart = async (productId)=>{
        const res = await addToCartContext(productId)
    }


    useEffect(() => {
        getProducts()
    }, [page]);

    return (
        <>
            <section>
                <div className="container-fluid px-0 py-5">
                    <div className="section-titel d-flex w-100 justify-content-center align-items-center mt-4 pb-5">
                        <h2 className="text-uppercase text-center" id="scrolvispilty">Shop</h2>
                    </div>
                </div>
                <div className="container-fluid" id="showNavbar">
                    <nav aria-label="Page navigation " className="pageNav-1">
                        <ul className="pagination align-items-center">
                            <li className="page-item">
                                <a className="page-link alignProduct flex-row" href="#rowAlignOne" id="HREFone">
                                    <i className="fa-solid fa-list" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link alignProduct flex-row" href="#columnAlignOne" id="HREFtwo">
                                    <i className="fa-solid fa-border-all" />
                                </a>
                            </li>
                            <li className="page-item">Showing <span>1–9</span> of 27 results</li>
                        </ul>
                    </nav>
                    <div className="row">
                        <div className="d-none d-md-none d-lg-block col-lg-3 ">
                            <ul className="list-group filter">
                                <li className="list-group-item">
                                    <h3>CATEGORY</h3>
                                </li>
                                {
                                    CategoryData?.categories.length ? CategoryData.categories.map((category, index) =>
                                        <li className="list-group-item" key={index}>
                                            <input className="form-check-input me-1" type="checkbox" defaultValue id={`f${index}`} />
                                            <label className="form-check-label stretched-link" htmlFor={`f${index}`}>{category.name}</label>
                                        </li>
                                    ) : <h2>Ther's no category</h2>
                                }
                            </ul>
                            <ul className="list-group filter">
                                <li className="list-group-item ">
                                    <h3>PRICE</h3>
                                </li>
                                <form>
                                    <label htmlFor="range1">from </label>
                                    <input id="range1" name="range1" type="range" min={0} max={300} defaultValue={5} />
                                    <label htmlFor="range2">to</label>
                                    <input id="range2" name="range2" type="range" min={0} max={300} defaultValue={150} />
                                </form>
                            </ul>
                            <ul className="list-group filter">
                                <li className="list-group-item">
                                    <h3>RATING</h3>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="f20" />
                                    <label className="form-check-label stretched-link" htmlFor="f20">
                                        <div className="d-flex align-items-center p-0 m-0 sale-start">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star " />
                                            <span>(7)</span>
                                        </div>
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="f21" />
                                    <label className="form-check-label stretched-link" htmlFor="f21">
                                        <div className="d-flex align-items-center p-0 m-0 sale-start">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star start-no" />
                                            <span>(13)</span>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-9 " id="shopPageOne" >
                            <div className="row " id="columnAlignOne">
                                {data?.products.length ? data.products.map((product, index) =>
                                    <>
                                        <div className="col-6 col-md-6 col-lg-4 p-0 carPart-card" key={index}>
                                            <div className="card p-0 m-0 position-relative">
                                                <div className="d-flex flex-column custom-postion z-3">
                                                    <i className="fa-solid fa-magnifying-glass" />
                                                    <i className="fa-regular fa-heart" />
                                                    <i className="fa-solid fa-code-compare" />
                                                </div>
                                                <div className="discount position-relative">
                                                    {product.discount > 0 ? <>
                                                        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                                            {product.discount}%
                                                        </span></>
                                                        : <>
                                                            <span></span>
                                                        </>}
                                                    <Link to={`/products/${product._id}`} className="nav-link">
                                                        <img src={product.mainImage.secure_url} className="card-img-top" alt={product.name} />
                                                    </Link>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <Link to={`/products/${product._id}`} className="nav-link">{product.name}</Link>
                                                    </h3>
                                                    <div className="d-flex align-items-center p-0 m-0 sale-start">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star " />
                                                    </div>
                                                    {product.discount > 0 ? <>
                                                        <p>$ {product.finalPrice} <span> $ {product.price}</span></p>
                                                    </> : <>
                                                        <p>{product.price}</p>
                                                    </>}
                                                    <button
                                                        className="btn rounded-pill text-uppercase showPartAtwo addToCartButton"
                                                        onClick={() => addToCart(product._id)}
                                                    >add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : <></>
                                }
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation " className="pageNav">
                        <ul className="pagination">
                            <li className="page-item"><button className="page-link gg" onClick={(e) => pageChange(e)} value={1}> 1 </button></li>
                            <li className="page-item"><button className="page-link gg" onClick={(e) => pageChange(e)} value={2}> 2 </button></li>
                            <li className="page-item"><button className="page-link gg" onClick={(e) => pageChange(e)} value={3}> 3 </button></li>
                        </ul>
                    </nav>
                </div>
            </section>

        </>
    )
}
