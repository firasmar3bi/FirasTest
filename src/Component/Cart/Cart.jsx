import React from 'react'

export default function Cart() {
    return (
        <>
            <section className="main-section" id="showNavbar">
                <div className="container-fluid">
                    <h1 className="py-5 mt-5 ps-3">My Cart</h1>
                    <div className="row d-none d-md-flex">
                        <div className="col-6">
                            <p className="wishTitel p-0 m-0 border-0">Product name</p>
                        </div>
                        <div className="col-1">
                            <p className="wishTitel p-0 m-0 border-0">Unit price</p>
                        </div>
                        <div className="col-2">
                            <p className="wishTitel p-0 m-0 border-0">Stock status</p>
                        </div>
                    </div>
                    <div className="row py-4 position-relative" id="closeRow-1">
                        <div className="col-12 col-md-2">
                            <div className="w-100">
                                <img src="assets/imgs/shop/27-480x480.jpg" alt="Racing Custom Wheels VF123" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start align-items-center">
                            <div>
                                <a href="showPart.html" className="nav-link d-block wishname">Racing Custom Wheels VF123</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center">
                            <p className="price">$38.24</p>
                        </div>
                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center">
                            <p className="wishname text-success"><i className="fa-solid fa-check" /> In Stock</p>
                        </div>
                        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                            <a href="showPart.html" className="btn rounded-pill  text-uppercase wishA">add to cart</a>
                        </div>
                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center ">
                            <button type="button" className="btn-close closeCustom" id="btnOne" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
