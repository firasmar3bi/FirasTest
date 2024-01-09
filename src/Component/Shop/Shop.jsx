import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CatgoriesContext } from '../Context/CatgoriesContext'
import axios from "axios";
import { useFormik } from 'formik'
import { CartContext } from '../Context/CartContext.Jsx';
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';

export default function Shop() {

    //  Price Filter =>
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)
    const [sort, setSort] = useState(0)
    const [loading,setLoading]=useState(false);

    const onSubmit = values => {
        if (values.fromPrice) {
            setFromPrice(`&price[gte]=${values.fromPrice}`);
        }
        if (values.toPrice) {
            setToPrice(`&price[lte]=${values.toPrice}`);
        }
        if (values.sort) {
            setSort(`&sort=${values.sort}`)
        }
        getProducts()
    }
    const formik = useFormik({
        initialValues: {
            fromPrice: '',
            toPrice: '',
            sort : '',
        },
        onSubmit,
    })
    // Get The Category = >
    const CategoryData = useContext(CatgoriesContext)

    // Change The Api Page =>
    const [page, setPage] = useState(1)
    const pageChange = (e) => {
        setLoading(true)
        setPage(e.target.value);
        setLoading(false)
    }

    // Get All Products =>
    const [data, setData] = useState();
    const apiUrl = import.meta.env.VITE_API_URL;
    const getProducts = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(
                `${apiUrl}/products?page=${page}&limit=4${fromPrice ? fromPrice : ''}${toPrice ? toPrice : ''}${sort ? sort : ''}`)
                setData(data);
            } catch (error) {
                console.log(error);
            }finally {
            setLoading(false)
        }
    }

    // Add Proudect To Cart = >
    const { addToCartContext } = useContext(CartContext)
    const addToCart = async (productId) => {
        setLoading(true)
        const res = await addToCartContext(productId)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [page, fromPrice, toPrice,]);

    return (
        <>
            <section>
                <div className="container-fluid px-0 py-5">
                    <div className="section-titel d-flex w-100 justify-content-center align-items-center mt-4 pb-5">
                        <h2 className="text-uppercase text-center" id="scrolvispilty">Shop {loading?<Loading /> : ''} </h2>
                    </div>
                </div>
                <div className="container-fluid" id="showNavbar">
                    <div className="row">
                        <div className="d-none d-md-none d-lg-block col-lg-3 ">
                            <ul className="list-group filter">
                                <li className="list-group-item">
                                    <h3>CATEGORY</h3>
                                </li>
                                {
                                    CategoryData?.categories.length ? CategoryData.categories.map((category) =>
                                        <li className="list-group-item" key={category._id}>
                                            <input className="form-check-input me-1" type="checkbox" defaultValue id={`F${category._id}`} />
                                            <label className="form-check-label stretched-link" htmlFor={`F${category._id}`}>{category.name}</label>
                                        </li>
                                    ) : <h2>Ther's no category</h2>
                                }
                            </ul>
                            <ul className="list-group filter">
                                <li className="list-group-item ">
                                    <h3>PRICE</h3>
                                </li>
                                <form onSubmit={formik.handleSubmit}>
                                    <label htmlFor="fromPrice">from</label>
                                    <input
                                        id="fromPrice"
                                        name="fromPrice"
                                        type="range"
                                        value={formik.values.fromPrice} 
                                        className="form-range"
                                        min="0"
                                        max="1000"
                                        defaultValue={0}
                                        errors={formik.errors}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        touchad={formik.touched}
                                    />
                                    <label htmlFor="toPrice">to </label>
                                    <input
                                        id="toPrice"
                                        name="toPrice"
                                        type="range"
                                        min="0"
                                        max="1000"
                                        className="form-range"
                                        value={formik.values.toPrice}
                                        errors={formik.errors}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        touchad={formik.touched}
                                    />

                                    <button className="btn text-uppercase text-black bg-warning" type="submit" >Go</button>
                                    <hr className='w-75 m-auto my-4'/>
                                    <li className="list-group-item ">
                                        <h3>Sort By</h3>
                                    </li>
                                    <select 
                                        className="form-select mb-2" 
                                        aria-label="Default select example"
                                        onChange={formik.handleChange}
                                        name="sort"
                                    >
                                        <option selected>Open this select menu</option>
                                        <option value='price'>from High To Low Price</option>
                                        <option value='-price'>from Low To High Price</option>
                                        <option value='name'>name</option>
                                        <option value='-name'>-name</option>
                                        <option value='discount'>discount</option>
                                        <option value='-discount'>discount</option>
                                    </select>
                                    <button className="btn text-uppercase text-black bg-warning" type="submit" >Go</button>
                                    
                                </form>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-9 " id="shopPageOne" >
                            <div className="row " id="columnAlignOne">
                                {data?.products.length ? data.products.map((product, index) =>
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
                                                {localStorage.getItem("userToken") ?
                                                <>
                                                <button
                                                    className="btn rounded-pill text-uppercase showPartAtwo addToCartButton"
                                                    onClick={() => addToCart(product._id)}>Add To Cart</button>
                                                    {loading?<Loading /> : ''}
                                                </> : <>
                                                    <Link to="/register" className='btn rounded-pill text-uppercase showPartAtwo addToCartButton'>Add To Cart</Link>
                                                </>
                                                }
                                            </div>
                                        </div>
                                    </div>
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
