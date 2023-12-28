import React from 'react'
import { useContext } from 'react'
import { CatgoriesContext } from '../Context/CatgoriesContext'
import { Navigation, Pagination , Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './categories.css'
import { Link } from 'react-router-dom';

export default function Catrgories() {

    const data = useContext(CatgoriesContext)

    return (
        <>
            <div className="header-nav">
                <div className="container text-center pt-2">
                    <Swiper
                        modules={[Navigation, Pagination , Autoplay]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        autoplay={{
                            delay:5000
                        }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {
                             data?.categories.length ? data.categories.map((category , index)=>
                                <SwiperSlide key={index} >
                                    <Link to={`/products/category/${category._id}`}>
                                        <img src={category.image.secure_url} />
                                    </Link>
                                </SwiperSlide>
                            ):<h2>Ther's no data</h2>
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}
