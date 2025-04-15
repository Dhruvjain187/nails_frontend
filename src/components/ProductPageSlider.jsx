import Slider from "react-slick";

export default function ProductPageSlider({ images }) {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
                    <img src={images[i].url} alt="" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="slider-component">
                <div className="sticky">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {images.map((el, idx) => (
                                <div key={idx}>
                                    <img className="main-img" src={el.url} />
                                </div>
                            ))}
                            {/* <div>
                        <img src={baseUrl + "/abstract01.jpg"} />
                    </div> */}
                            {/* <div>
                        <img src={baseUrl + "/abstract02.jpg"} />
                    </div>
                    <div>
                        <img src={baseUrl + "/abstract03.jpg"} />
                    </div>
                    <div>
                        <img src={baseUrl + "/abstract04.jpg"} />
                    </div> */}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}