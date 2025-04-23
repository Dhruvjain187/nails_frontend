import { useParams, useSearchParams } from "react-router"
import { useFetchProductByIdQuery } from "../Redux/Api/productApi";
import BreadCrumbs from "../components/BreadCrumbs";
import { ProductContent, ProductPageStyles } from "../styles/ProductPage";
import ProductPageSlider from "../components/ProductPageSlider";
import { Link } from "react-router-dom";
import MoreDetails from "../components/MoreDetails";
import ProductSlider from "../components/ProductSlider";
import UpdateProductPage from "../components/UpdateProductPage";
import RecentlyViewed from "../components/RecentlyViewed";



export default function ProductPage() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const update = searchParams.get('update')

    const { data, error, isSuccess, isFetching, isLoading } = useFetchProductByIdQuery({
        id
    })


    if (isLoading) return <div>Loading initial data...</div>;
    if (!data) return <div>No products found</div>;


    return (
        <>
            <BreadCrumbs text={data.name} />
            <ProductPageStyles>
                <div className="padding-container">
                    {data.images.length > 1 ?
                        <ProductPageSlider images={data.images} className="slider-component"></ProductPageSlider>
                        :
                        <div className="slider-component">
                            <div className="sticky">
                                <div>
                                    <img className="main-img" src={data.images[0].url} alt="" />
                                </div>
                            </div>
                        </div>
                    }

                    <ProductContent>
                        <div className="title">
                            <h1><span>{data.name}</span></h1>
                            <Link>    <i className="fa-regular fa-heart fa-lg"></i>
                            </Link>
                        </div>

                        <div className="availability">
                            <Link>Be the first to review this product</Link>
                            <span>IN STOCK</span>
                        </div>

                        <div className="info-stock">
                            <strong>SKU#:</strong>
                            <div>LNTN7</div>
                        </div>

                        <div className="purchasing-power">
                            <span className="bg">
                                <span className="default">Pay with</span>
                                <span className="exception"> affirm</span>
                                <span className="default"> on orders over $50. </span>
                                <Link>Check your purchasing power</Link>
                            </span>
                        </div>

                        <div className="store-pickup">
                            <div className="pickup">
                                <Link>
                                    <span>
                                        <img src="https://www.lanailsupplies.com/static/version1744972656/frontend/Commercepundit/breeze-lanails/en_US/images/store-icon.png" height={"30px"} width={"30px"} alt="" />
                                    </span>
                                    <span className="fullfillment">Pickup</span>
                                    <span className="msg">Ready within 2 hours</span>
                                </Link>
                            </div>
                            <div className="pickup">
                                <Link>
                                    <span>
                                        <img src="https://www.lanailsupplies.com/static/version1744972656/frontend/Commercepundit/breeze-lanails/en_US/images/fast-delivery.png" height={"31px"} width={"45px"} alt="" />
                                    </span>
                                    <span className="fullfillment">Shipping</span>
                                    <span className="msg">Shipping available</span>
                                </Link>
                            </div>
                        </div>

                        <div className="price-info">
                            <div className="info-price">
                                <span>${data.price}</span>
                            </div>
                            {/* <div className="field">
                                <div className="qty-container">
                                    <span className="qty">Qty</span>
                                    <div className="box">
                                        <span>-</span>
                                        <input type="text" defaultValue={1} />
                                        <span className="add">+</span>
                                    </div>
                                </div>
                                <div>
                                    {update ?
                                        <ProductBtn padding="0px 15px" height="40px" content={"UPDATE CART"} />
                                        :
                                        <ProductBtn padding="0px 15px" height="40px" content={"ADD TO CART"} />}

                                </div>
                            </div> */}
                            <UpdateProductPage update={update} data={data} />
                        </div>

                        <div className="share-info">
                            <div className="share">Share in</div>
                            <Link className="margin"><img src="https://media.lanailsupplies.com/mageplaza/socialshare/facebook/default/facebook_1__1.webp" height={"32px"} width={"32px"} alt="" /></Link>
                            <Link><img src="https://media.lanailsupplies.com/mageplaza/socialshare/twitter/default/x-twitter_1.webp" height={"32px"} width={"32px"} alt="" /></Link>
                        </div>

                        <MoreDetails />
                    </ProductContent>
                </div>
            </ProductPageStyles>

            <ProductSlider productPage={false} />
            <RecentlyViewed productPage={false} data={data} />
        </>
    )
}