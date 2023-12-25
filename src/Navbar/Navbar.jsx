import React from 'react'
import Logo from '../assets/img/logo.png'
import PhoneImg from '../assets/img/phone-icon.png'
import CartImg from '../assets/img/carticon.jpeg'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom-color d-none d-md-none d-lg-block">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between w-100 align-items-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link nav-custom-font" aria-current="page" href="ContactUs.html">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-custom-font" href="login.html">My Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-custom-font" href="about.html">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-custom-font" href="ContactUs.html">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-custom-font " href="wishlist.html">My wishlist</a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-bolt" />
                            <p className="text-uppercase m-0">
                                <span className="fw-bolder">FLASH SALE:</span> 60% OFF CAR BATTERIES | USE CODE "BATT60"
                            </p>
                        </div>
                        <div className="d-flex me-5">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-capitalize nav-custom-font" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-start w-auto">
                                        <li><a className="dropdown-item text-capitalize nav-custom-font" href="#">LOG-In</a></li>
                                        <li><a className="dropdown-item text-capitalize nav-custom-font" href="#">SING-UP</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg p-0 bg-white flex-column" id="navBarTwo">
                <div className="container-fluid justify-content-lg-around justify-content-between align-items-center">
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt="druco logo" className="w-100" />
                    </a>
                    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="showButtonScroll">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="d-flex justify-content-center align-items-center ">
                        {/* <li className="nav-link ">
                            <div className="dropdown p-3 d-block d-md-block d-lg-none">
                                <a href="wishlist.html" className="custom-icon-hover">
                                    ---
                                </a>
                            </div>
                        </li>
                        <li className="nav-link d-block d-lg-none">
                            <div className="dropdown ">
                                <button type="button" className="btn custom-icon-hover">
                                    <i className="fa-solid fa-cart-shopping" />
                                </button>
                                <div className="dropdown-menu p-4 custom-form text-center">
                                    
                                    <span>Your cart is currently empty</span>
                                </div>
                            </div>
                        </li> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <ul className="nav-item  d-none d-md-none d-lg-block">
                        <div className="d-flex rounded-start-pill p-1 m-0 rounded-end-pill nav-custom-drop">
                            <li className="nav-link border-end">
                                <div className="dropdown me-5 ">
                                    <button type="button" className="btn bg-transparent dropdown-toggle form-control border-0" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                        All categories
                                    </button>
                                    <ul className="dropdown-menu" id="navDrop">
                                        <li><a className="dropdown-item" href="#">Batteries</a></li>
                                        <li><a className="dropdown-item" href="#">Brake</a></li>
                                        <li><a className="dropdown-item" href="#">Electric Brakes</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link">
                                <div className="collapse navbar-collapse bg-transparent" id>
                                    <form className="d-flex " role="search">
                                        <input className="form-control me-2 bg-transparent border border-0 search-custom" type="search" placeholder="Search" aria-label="Search" />
                                        {/* <button className="btn bg-transparent rounded-circle m-0 p-0" type="submit">
                                            <i className="search-icon rounded-circle fa-solid fa-magnifying-glass" />
                                        </button> */}
                                    </form>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <ul className="nav-item m-0 d-flex justify-content-center align-items-center d-none d-md-none d-lg-block">
                        <li className="nav-link d-flex justify-content-center align-items-center">
                            <div>
                                {/* We need a img hear */}
                                <img src={PhoneImg} alt="phoneicon" />
                            </div>
                            <div className="d-flex flex-column ms-2">
                                <p className="m-0">
                                    Call us 24/7
                                </p>
                                <p className="m-0">
                                    <a href="tel:+08 9229 8228" className="text-black text-decoration-none m-0">+08 9229 8228</a>
                                </p>
                            </div>
                        </li>
                    </ul>
                    {/* <ul className="nav-item d-none d-md-none d-lg-block">
                        <div className="d-flex align-items-center m-0 justify-content-between ">
                            <li className="nav-link w-100">
                                <div className="dropdown w-100">
                                    <button type="button" className="btn custom-icon-hover w-100">
                                    <div className='w-100 d-blok'>
                                        We need a img hear
                                        <img src={CartImg} alt="phoneicon" className='w-100'/>
                                    </div>
                                    </button>
                                    <div className="dropdown-menu p-4 custom-form text-center">
                                        <span>Your cart is currently empty</span>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul> */}
                </div>
                <nav className="navbar navbar-expand-lg p-0 bg-white justify-content-start w-100" id="navBarThree">
                    <div className="container-fluid">
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button> */}
                        <div className="collapse navbar-collapse nav-mobile-screen" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <a className="nav-link text-black nav-text active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-black nav-text" aria-current="page" href="#">PAGES</a>
                                </li>
                                <li className="nav-link">
                                    <div className="dropdown" >
                                        <a className="text-black nav-text px-2  text-decoration-none custom-icon-hover" href="carPart.html">
                                            SERVICE PARTS
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-link">
                                    <div className="dropdown" >
                                        <a className="text-black nav-text px-2  text-decoration-none custom-icon-hover" href="carPart.html">
                                            BRAKE
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-link">
                                    <div className="dropdown" >
                                        <a className="text-black nav-text px-2  text-decoration-none custom-icon-hover" href="carPart.html">
                                            CAR BATTERIES
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-black nav-text " aria-current="page" href="carPart.html">TOOLS &amp; GARAGE</a>
                                </li>

                                {/* this 3 li for mobile scren */}
                                <li className="nav-item px-2">
                                    <a className="nav-link text-black nav-text d-block d-md-block d-lg-none" aria-current="page" href="ContactUs.html">Contact Us</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-black nav-text d-block d-md-block d-lg-none" aria-current="page" href="about.html">About Us</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-black nav-text d-block d-md-block d-lg-none" aria-current="page" href="wishlist.html">My tWishlis</a>
                                </li>
                                <li className="nav-item px-2 ">
                                    <div className="d-none nav-custom-mobile">
                                        <div className="d-flex  flex-column w-100">
                                            <div className="d-flex me-5 justify-content-between align-items-center bg-white w-100 border-1 border-dark">
                                                <a href="login.html" className="d-inline-block text-dark text-decoration-none nav-link"> <i className="fa-regular fa-user" />Login/Register</a>
                                                <div className="d-flex">
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item dropdown mob-li">
                                                            <a className="nav-link dropdown-toggle text-capitalize nav-custom-font" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                english
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-start w-auto">
                                                                <li><a className="dropdown-item text-capitalize nav-custom-font" href="#">Français</a></li>
                                                                <li><a className="dropdown-item text-capitalize nav-custom-font" href="#">Deutsch</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item dropdown mob-li">
                                                            <a className="nav-link dropdown-toggle text-uppercase nav-custom-font" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                usd
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-start w-25">
                                                                <li><a className="dropdown-item text-uppercase w-25 nav-custom-font" href="#">usd</a></li>
                                                                <li><a className="dropdown-item text-uppercase w-25 nav-custom-font" href="#">eur</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex me-5 justify-content-start">
                                                <ul className="nav-item m-0 d-flex justify-content-center align-items-center w-100">
                                                    <li className="nav-link d-flex justify-content-center align-items-center w-100">
                                                        <div>
                                                            <img src="assets/imgs/phone-icon.png" alt="phoneicon" />
                                                        </div>
                                                        <div className="d-flex flex-row justify-content-between align-items-center w-100 ms-2">
                                                            <p className="m-0">
                                                                Call us 24/7
                                                            </p>
                                                            <p className="m-0">
                                                                <a href="tel:+08 9229 8228" className="text-black text-decoration-none m-0">+08 9229 8228</a>
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}
