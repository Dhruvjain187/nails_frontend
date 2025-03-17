import Slider from "react-slick"
import { SliderComponentStyle } from "../styles/SliderComponent2"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent2() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 500
    };

    return (
        <>
            <SliderComponentStyle>
                <div className="slider-container">
                    <Slider {...settings} >
                        {/* <Slide> */}
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/wysiwyg/14th_March_Black_Mobile.webp" />
                                <img src="https://media.lanailsupplies.com/wysiwyg/14th_March_Black.webp" alt="" />
                            </picture>
                        </div>
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/wysiwyg/18th_March_Black_Mobile.webp" />
                                <img src="https://media.lanailsupplies.com/wysiwyg/18th_March_Black.webp" alt="" />
                            </picture>
                        </div>
                        {/* </Slide> */}
                    </Slider>
                </div>
            </SliderComponentStyle>
        </>
    )
}

// https://media.lanailsupplies.com/wysiwyg/14th_March_Black.webp