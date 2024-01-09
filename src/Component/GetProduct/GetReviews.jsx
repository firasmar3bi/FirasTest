import React from 'react'
import "./GetProduct.css"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GetReviews({ data }) {

    return (
        <>
            <section className="testimonials" id="testimonials">
                <div className="container mt-5">
                    <div className="d-flex justify-content-center py-5 custom-me">
                        <div className="pt-4 px-4 title">
                            <span className="text-uppercase border-bottom border-danger pe-3 pb-2 ">Reviews</span>
                            <h2 className="ms-3 mt-2">Our Happy Clients</h2>
                        </div>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            loop={true}
                            autoplay={{
                                delay: 5000
                            }}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            {data.reviews.map((review, index) =>
                                <SwiperSlide key={index} >
                                    <div key={index}>
                                        <div className="row py-5 justify-content-center">
                                            <div className="col-md-6 text-center testimonials-cust-p">
                                                <img src={review.createdBy.image.secure_url} alt="#" className='w-50' />
                                                <h3 className="pt-2 text-uppercase">
                                                    {review.createdBy.userName}
                                                </h3>
                                                <span className="testim-span">
                                                    {review.createdAt}
                                                </span>
                                                <div className="my-5 py-4 px-4 cust-hover">
                                                    <i className="fa-solid fa-quote-left" />
                                                    <span className='fw-bolder fs-1' >
                                                        {review.comment}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>


                        {/* <div className="carousel-inner">
                            {data.reviews.map((review, index) =>
                                <div className={`carousel-item  ${index == 0 ? 'active' : ''}`} key={index}>
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
                                </div> */}

                    </div>
                </div>
            </section>

        </>
    )
}
