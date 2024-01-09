import React from 'react'
import Logo from "../assets/img/logo.png"
export default function Footer() {
    return (
        <>
            <footer>
                <div className="row py-5 my-5 w-100">
                    <div className="col-12 col-lg-3 ps-3 ps-lg-0">
                        <img src={Logo} alt="Logo" className="w-50 ms-3" />
                        <div className="ms-3 pt-5">
                            <p className="pb-2">Address: 1234 Heaven Stress, Beverly<br className="d-none d-lg-block" /> Hill OldYork- United State of Lorem</p>
                            <p className="pb-2">Phone: 1234 5678 5576 – 4657 4657 4656</p>
                            <p>Email: <span> Support1234@Orlife</span></p>
                        </div>
                        {/* <div className="icons ms-3">
                            <a href><i className="fa-brands fa-facebook-f mx-1 mt-4 p-2 rounded-circle icon-1" /></a>
                            <a href><i className="fa-brands fa-dribbble mx-1 mt-4 p-2 rounded-circle icon-2" /></a>
                            <a href><i className="fa-brands fa-behance mx-1 mt-4 p-2 rounded-circle icon-3" /></a>
                            <a href><i className="fa-brands fa-linkedin mx-1 mt-4 p-2 rounded-circle icon-4" /></a>
                            <a href><i className="fa-brands fa-google-plus-g mx-1 mt-4 p-2 rounded-circle icon-5" /></a>
                        </div> */}
                    </div>
                    <div className="col-6 col-lg-3 ps-3 ps-lg-0">
                        <h4 className="pb-4 text-uppercase">MY ACCOUNT</h4>
                        <p><a href="#" className="nav-link py-1"> About</a></p>
                        <p><a href="#" className="nav-link py-1"> Advertising</a></p>
                        <p><a href="#" className="nav-link py-1"> Business Development</a></p>
                        <p><a href="#" className="nav-link py-1"> Careers</a></p>
                        <p><a href="#" className="nav-link py-1"> Permissions</a></p>
                        <p><a href="#" className="nav-link py-1"> Contact</a></p>
                    </div>
                    <div className="col-6 col-lg-3 ps-3 ps-lg-0">
                        <h4 className="pb-4 text-uppercase">PRODUCT</h4>
                        <p><a href="#" className="nav-link py-1"> About</a></p>
                        <p><a href="#" className="nav-link py-1"> Advertising</a></p>
                        <p><a href="#" className="nav-link py-1"> Business Development</a></p>
                        <p><a href="#" className="nav-link py-1"> Careers</a></p>
                        <p><a href="#" className="nav-link py-1"> Permissions</a></p>
                        <p><a href="#" className="nav-link py-1"> Contact</a></p>
                    </div>
                    <div className="col-12 col-lg-3 ps-3 ps-lg-0">
                        <h4 className="pb-4 text-uppercase">READER SERVICES</h4>
                        <p><a href="#" className="nav-link py-1"> Advertising</a></p>
                        <p><a href="#" className="nav-link py-1"> Business Development</a></p>
                        <p><a href="#" className="nav-link py-1"> Careers</a></p>
                        <p><a href="#" className="nav-link py-1"> Permissions</a></p>
                        <p><a href="#" className="nav-link py-1"> Contact Us</a></p>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-center align-items-center flex-column links">
                    <div className="m-auto w-75 d-flex flex-column">
                        <div className="position-relative">
                            <ul>
                                <li><a href="#">Drum Brakes</a></li>
                                <li><a href="#">DShock Absorbers</a></li>
                                <li><a href="#">Springs Accessories</a></li>
                                <li><a href="#">Stabilization System</a></li>
                                <li><a href="#">Brake Pads</a></li>
                                <li><a href="#">Atturo Tires</a></li>
                                <li><a href="#">Moto Metals</a></li>
                                <li><a href="#">XD Wheels</a></li>
                                <li><a href="#">DrFuel</a></li>
                                <li><a href="#">Wheels &amp; Tires</a></li>
                                <li><a href="#">Electric Brakes</a></li>
                                <li><a href="#">Emergency Brakes</a></li>
                                <li><a href="#">Mechanical Brakes</a></li>
                                <li><a href="#">Parking Brakes</a></li>
                                <li><a href="#">Tweeters</a></li>
                                <li><a href="#">Subwoofers</a></li>
                                <li><a href="#">Sealed Enclosure</a></li>
                                <li><a href="#">Sound quality</a></li>
                                <li><a href="#">Affordability</a></li>
                            </ul>
                        </div>
                        <p className="text-center py-3 ">© <span> Druco.</span> All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}
