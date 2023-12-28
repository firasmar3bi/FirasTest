import React from 'react'
import headetImg1 from '../../../assets/img/header1.jpeg'
import headetImg2 from '../../../assets/img/header2.jpeg'
import headetImg3 from '../../../assets/img/header3.jpeg'


export default function HomeHeader() {



    const headerImg = [
        {
            name: "Mobiles",
            categoryName : "Electronics",
            dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti illo aliquam, sint repellat at porro!",
            img: headetImg1
        },
        {
            name: "Men's Fashion",
            categoryName : "clothes",
            dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti illo aliquam, sint repellat at porro!",
            img: headetImg2
        },
        {
            name: "Appliances",
            categoryName : "furniture",
            dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti illo aliquam, sint repellat at porro!",
            img: headetImg3
        },
    ]



    return (
        <>
            <div className="header-conent position-relative">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner ">
                        {
                            headerImg.map((slide, index) => 
                                <div className="carousel-item active position-relative" key={index}>
                                    <div className="overlay">
                                    </div>
                                    <img src={slide.img} className="d-block w-100" alt={slide.name} />
                                    <div className="carousel-caption z-2 d-flex flex-column justify-content-center align-items-center">
                                        <span className="text-uppercase">{slide.categoryName}</span>
                                        <h2 className="text-capitalize">{slide.name}</h2>
                                        <p>{slide.dis}</p>
                                    </div>
                                </div>
                            )
                        }
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <div className="custom-control">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <div className="custom-control">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}
