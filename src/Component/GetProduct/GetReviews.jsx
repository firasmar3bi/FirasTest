import React from 'react'
import "./GetProduct.css"
export default function GetReviews({ data }) {
    
    return (
        <>
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="d-flex justify-content-center py-5 custom-me">
                        <div className="pt-4 px-4 title">
                            <span className="text-uppercase border-bottom border-danger pe-3 pb-2 ">TESTIMONIALS</span>
                            <h2 className="ms-3 mt-2">Our Happy Clients</h2>
                        </div>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            {data.reviews.map((review, index) => <>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={review._id}
                                    className={`${index == 0 ? "active" : ''} bg-danger`}
                                    aria-current={`${index == 0 ? "true" :''}`}
                                    aria-label={`Slide ${review._id}`}
                                />
                            </>
                            )}
                        </div>
                        <div className="carousel-inner">
                            {data.reviews.map((review, index) =>
                                <div className={`carousel-item  ${index == 0 ? "active" : ''}`} key={index}>
                                    <div className="row py-5 justify-content-center">
                                        <div className="col-md-6 text-center testimonials-cust-p">
                                            <img src={review.createdBy.image.secure_url} alt="#" className='w-100' />
                                            <h3 className="pt-2 text-uppercase">
                                                {review.createdBy.userName}
                                            </h3>
                                            <span className="testim-span">
                                                {review.createdAt}
                                            </span>
                                            <div className="my-5 py-4 px-4 cust-hover">
                                                <i className="fa-solid fa-quote-left" />
                                                <span className>
                                                    {review.comment}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
