import Slider from "react-slick"
import { MainSlide } from "../styles/HomeSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
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
            <MainSlide>
                <div className="slider-container">
                    <Slider {...settings} >
                        {/* <Slide> */}
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/banner/mobile/images/1/s/1st_may_mobile_1.jpg" />
                                <img src="https://media.lanailsupplies.com/banner/images/w/o/womens_day_sale_hp.webp" alt="" />
                            </picture>
                        </div>
                        {/* https://media.lanailsupplies.com/banner/mobile/images/1/s/1st_may_mobile_1.jpg */}
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/banner/mobile/images/d/i/diva_hp_mobile.webp" />
                                <img src="https://media.lanailsupplies.com/banner/images/d/i/diva_hp.webp" alt="" />
                            </picture>
                        </div>
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/banner/mobile/images/o/p/opi_mobile.webp" />
                                <img src="https://media.lanailsupplies.com/banner/images/o/p/opi_hp.webp" alt="" />
                            </picture>

                        </div>
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/banner/mobile/images/k/u/kupa_hp_mobile.webp" />
                                <img src="https://media.lanailsupplies.com/banner/images/k/u/kupa_hp.webp" alt="" />
                            </picture>
                        </div>
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/banner/mobile/images/v/o/voesh_mobil.webp" />
                                <img src="https://media.lanailsupplies.com/banner/images/v/o/voesh_homepage_1.webp" alt="" />
                            </picture>

                        </div>
                        <div className="img-con">
                            <picture>
                                <source media="(max-width: 750px)" srcSet="https://media.lanailsupplies.com/banner/mobile/images/w/i/wicked_holiday_collection_mobile.webp" />
                                <img src="https://media.lanailsupplies.com/banner/images/1/s/1st_may_1.webp" alt="" />
                            </picture>
                        </div>
                        {/* </Slide> */}
                    </Slider>
                </div>
            </MainSlide>
        </>
    )
}


// https://media.lanailsupplies.com/banner/images/w/o/womens_day_sale_hp.webp
// https://media.lanailsupplies.com/banner/images/d/i/diva_hp.webp
// https://media.lanailsupplies.com/banner/images/o/p/opi_hp.webp
// https://media.lanailsupplies.com/banner/images/k/u/kupa_hp.webp
// https://media.lanailsupplies.com/banner/images/v/o/voesh_homepage_1.webp
// https://media.lanailsupplies.com/banner/images/1/s/1st_may_1.webp