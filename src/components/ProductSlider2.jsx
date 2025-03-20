import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSliderContainer } from "../styles/ProductSlider";
import ProductComponentHeader from "./ProductComponentHeader"


export default function ProductSlider2() {
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

    return (
        <>
            <ProductSliderContainer>
                <ProductComponentHeader title={"Best Sellers"} btn={"VIEW MORE"} />


                <div className="slider-container">
                    <Slider {...settings} >
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <div className="abs-icon">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </div>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/16d083c146b9f5660c2b24c79e3421e2/t/g/tg01.png" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND DC Pure Gel Polish Set Collection #3, 36pc Bundle</div>
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
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <div className="abs-icon">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </div>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/16d083c146b9f5660c2b24c79e3421e2/n/p/npg-ch01_1_1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">Gelish 18G Plus Led Light With Comfort Cure, Corded</div>
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
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <div className="abs-icon">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </div>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/16d083c146b9f5660c2b24c79e3421e2/v/b/vbh128grt.png" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND DC Pure Gel Polish Set Collection #1, 36pc Bundle</div>
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
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <div className="abs-icon">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </div>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/16d083c146b9f5660c2b24c79e3421e2/t/g/tgbduo9.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND Gel Polish Set Collection #7, 36pc Bundle</div>
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
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <div className="abs-icon">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </div>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/16d083c146b9f5660c2b24c79e3421e2/t/g/tgbduo9.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND Gel Polish Set Collection #7, 36pc Bundle</div>
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
                    </Slider>
                </div>
            </ProductSliderContainer>
        </>
    )
}