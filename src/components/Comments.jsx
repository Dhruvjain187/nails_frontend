import Slider from "react-slick"
import { CommentContainer } from "../styles/Comments";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Comments() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplayspeed: 500,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    };

    return (
        <>
            <CommentContainer >
                <header>
                    <h2>Customer Success Stories</h2>
                    <p className="exception">Why customers love LA Nail Supplies, the one stop shop</p>
                </header>
                <div className="slider-container">
                    <Slider {...settings} >
                        <div className="comment">
                            <h3>Kinsey Vess</h3>
                            <p>I loved this store. Owner is very helpful. Lots of Goodies n Good Customer Skills</p>
                        </div>

                        <div className="comment">
                            <h3>piscesboy76</h3>
                            <p>I loved this store. Owner is very helpful. Lots of Goodies n Good Customer Skills</p>
                        </div>

                        <div className="comment">
                            <h3>Rosa Ivette Nieves</h3>
                            <p>I loved this store. Owner is very helpful. Lots of Goodies n Good Customer Skills</p>
                        </div>

                        <div className="comment">
                            <h3>Rosa Ivette Nieves</h3>
                            <p>I loved this store. Owner is very helpful. Lots of Goodies n Good Customer Skills</p>
                        </div>

                        <div className="comment">
                            <h3>Bella Bella</h3>
                            <p>I loved this store. Owner is very helpful. Lots of Goodies n Good Customer Skills</p>
                        </div>

                        <div className="comment">
                            <h3>Kinsey </h3>
                            <p>I loved this store. Owner is very helpful. Lots of Goodies n Good Customer Skills</p>
                        </div>
                    </Slider>
                </div>
            </CommentContainer>
        </>
    )
}