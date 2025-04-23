import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSliderContainer } from "../styles/ProductSlider";
import ProductComponentHeader from "./ProductComponentHeader"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

export default function RecentlyViewed({ productPage = true, data }) {
    const { id } = useParams()
    const { name, images, price } = data
    const image = images[0].url
    const [recentlyViewed, setRecentlyViewed] = useState([])


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 3,
        initialSlide: 0,
        // autoplay: true,
        autoplayspeed: 500,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    // slidesToScroll: 0,
                    infinite: false,
                    dots: false
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 0,
                    infinite: false,
                    dots: false
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    };

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]")
        const updated = [
            { id, name, image },
            ...stored.filter((el) => el.id !== id)
        ].slice(0, 5)

        setRecentlyViewed(updated)
        localStorage.setItem("recentlyViewed", JSON.stringify(updated))
    }, [id])

    return (
        <>
            <ProductSliderContainer>
                <ProductComponentHeader title={"Recently Viewed"} btn={"VIEW MORE"} productPage={productPage} />


                <div className="slider-container">
                    <Slider {...settings} >
                        {recentlyViewed.map((el, idx) =>
                            <li key={idx}>
                                <div className="list-img">
                                    <div className="inner-pad">
                                        <div className="abs-icon">
                                            <i className="fa-regular fa-heart fa-lg"></i>
                                        </div>
                                        <img width="240px" height="240px" src={el.image} alt="" />
                                    </div>
                                </div>
                                <div className="list-cont">{el.name}</div>
                                <div className="add-info">
                                    <div className="price">
                                        <span className="blacktxt">$229</span>
                                        <br />
                                        <span className="browntxt">$300</span>
                                    </div>
                                    <div>
                                        <button>ADD TO CART</button>
                                    </div>
                                    <div className="eye-icon">
                                        <i className="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                            </li>

                        )}

                    </Slider>
                </div>
            </ProductSliderContainer>
        </>
    )
}