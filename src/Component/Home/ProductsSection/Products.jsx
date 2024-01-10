import React , { useState }from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import Loading from '../../loading/loading';
export default function Products() {
    
    const { addToCartContext } = useContext(CartContext)
    const data = useContext(ProductsContext)
    const [loading,setLoading]=useState(false);

    // Add Proudect To Cart = >
    const addToCart = async (productId) => {
        setLoading(true)
        const res = await addToCartContext(productId)
        setLoading(false)
    }

    return (
        <>
            <section className="pt-5" id="sale">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-3 p-0">
                            <div className="titel">
                                <span className="text-uppercase">sale</span>
                                <h2>Tops and clothes</h2>
                                <p>Black Friday selection up to 50% off</p>
                                <Link className="btn text-uppercase rounded-pill border-1 border-black ms-3" to="/Shop">shop now</Link>
                            </div>
                        </div>
                        {
                            data?.products.length ? data.products.slice(0, 3).map((product) =>
                                    <div className="col-6 col-lg-3 p-0 carPart-card" key={product._id}>
                                        <div className="card p-0 m-0 position-relative">
                                            <Link to={`/products/${product._id}`} className="nav-link productsImgHeigth">
                                                <img src={product.mainImage.secure_url} className="card-img-top w-100" alt={product.name} />
                                            </Link>
                                            <div className="card-body">
                                                <h3 className="card-title">
                                                    <Link to={`/products/${product._id}`} className="nav-link">  {product.name}</Link>
                                                </h3>
                                                <div className="d-flex align-items-center p-0 m-0 sale-start">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star start-no" />
                                                </div>
                                                {product.discount > 0 ? <>
                                                    <p>$ {product.finalPrice} <span> $ {product.price}</span></p>
                                                </> : <>
                                                    <p>$ {product.price} <span /></p>
                                                </>}
                                                {localStorage.getItem("userToken")? 
                                                <>
                                                <button
                                                    className="btn rounded-pill text-uppercase showPartAtwo addToCartButton"
                                                    onClick={() => addToCart(product._id)}
                                                >Add To Cart</button> 
                                                {loading ? <Loading /> : ''}
                                                </> : <>
                                                 <Link to="/register" className='btn rounded-pill text-uppercase showPartAtwo addToCartButton'>Add To Cart</Link> </> }                                               
                                            </div>
                                        </div>
                                    </div>
                            ) : <></>
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
