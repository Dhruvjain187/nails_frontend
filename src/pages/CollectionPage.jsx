import BreadCrumbs from "../components/BreadCrumbs"
import { CollectionPageContainer } from "../styles/CollectionPage"
import { CategoryBar } from "../styles/CategoryBar"
import { ProductContainer } from "../styles/Products"
import { useReducer } from "react"
import { UpperProductContainer } from "../styles/Products"
import { Card } from "../styles/Card"
import { CardContainer } from "../styles/CardContainer"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { useFetchAllProductQuery } from "../Redux/Api/productApi"
import PriceRange from "../components/PriceRange"
import Paginate from "../components/Paginate"
import { useSelector } from "react-redux"
import { PaginateProductBasedOnNumber } from "../styles/PaginateProductBasedOnNumber"

const initialState = {
    filter: false,
    product1: true,
    product3: false,
    product4: false,
    product5: false
}

function productReducer(state, action) {
    switch (action.type) {
        case "Filter": {
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }
        };
        case "Toggle_Product":
            return {
                ...state,
                product1: false,
                product2: false,
                product3: false,
                product4: false,
                product5: false,
                [action.payload]: !state[action.payload]
            };
        case "Close_All":
            return {
                ...state,
                product1: true,
                product2: false,
                product3: false,
                product4: false,
                product5: false
            }
        default:
            return state;
    }
}

export default function CollectionPage() {
    const [productState, dispatch] = useReducer(productReducer, initialState);
    // console.log(initialState)

    // const filterData = useSelector(state => state.filter);
    const { page } = useSelector(state => state.filter);

    const { data, error, isSuccess, isLoading } = useFetchAllProductQuery({ page })
    console.log(data)

    if (isLoading) {
        return <>
            <div>loading...</div>
        </>
    }
    return (
        <>
            <BreadCrumbs />

            <CollectionPageContainer>
                <CategoryBar className={productState.filter ? "block" : "none"}>
                    <div className="border">
                        <div className="exception">Shopping Options</div>

                        <div className="title" onClick={() => dispatch({ type: "Close_All" })}>
                            <div>Category</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>
                        <ul className={productState.product1 ? `content` : `content-none`}>
                            <li>
                                <input type="checkbox" />
                                <span>Glitter</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Jelly</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Light & Shadow Sheer</span>
                            </li>
                        </ul>

                        <div className="title" onClick={() => dispatch({ type: "Toggle_Product", payload: "product2" })}>
                            <div>Price</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>
                        <ul className={productState.product2 ? `content` : `content-none`}>
                            <PriceRange />
                        </ul>

                        <div className="title" onClick={() => dispatch({ type: "Toggle_Product", payload: "product3" })}>
                            <div>Brand</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>

                        <ul className={productState.product3 ? `content` : `content-none`}>
                            <li>
                                <input type="checkbox" />
                                <span>American Terry Mills</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Apres</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Aurelia Gloves</span>
                            </li>
                        </ul>

                        <div className="title">
                            <div>Color</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>

                        <div className="title" onClick={() => dispatch({ type: "Toggle_Product", payload: "product4" })}>
                            <div>Rating</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>

                        <ul className={productState.product4 ? `content` : `content-none`} >
                            <li>
                                <input type="checkbox" />
                                <span>5 Stars</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>3 Stars</span>
                            </li>
                        </ul>

                        <div className="title" onClick={() => dispatch({ type: "Toggle_Product", payload: "product5" })}>
                            <div>Stock</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>

                        <ul className={productState.product5 ? `content` : `content-none`}>
                            <li>
                                <input type="checkbox" />
                                <span>In Stock</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Out Of Stock</span>
                            </li>
                        </ul>
                    </div>


                </CategoryBar>

                <ProductContainer>
                    <UpperProductContainer>
                        <h1>Collections</h1>

                        <div className="total-products">Total Products <strong>{data.count}</strong></div>

                        <strong className="filter-strong"
                            onClick={() => dispatch({ type: "Filter", payload: "filter" })}>
                            FILTER
                        </strong>

                        <div className="sorter">
                            <label htmlFor="sort">Sort By&nbsp;</label>
                            <select name="sort" id="sort">
                                <option value="bestseller">Best Sellers</option>
                                <option value="position">Position</option>
                                <option value="pricehightolow">Price - High To Low</option>
                                <option value="pricelowtohigh">Price - Low To High</option>
                                <option value="saving">Biggest Saving</option>
                            </select>

                            <i className="fa-solid fa-arrow-down fa-lg"></i>
                        </div>
                    </UpperProductContainer>

                    {/* {isLoading ? console.log("not fetched") : console.log(data)} */}
                    <CardContainer>
                        {data.product.map((el, idx) => {
                            return <Card key={idx}>
                                <div className="list-img">
                                    <div className="inner-pad">
                                        <div className="abs-icon">
                                            <i className="fa-regular fa-heart fa-lg"></i>
                                        </div>
                                        <Link className="img-link">
                                            <img width="240px" height="240px" src={el.images[0].url} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="list-cont">
                                    <Link className="black-a">
                                        {el.name}
                                    </Link>
                                </div>
                                <div className="add-info">
                                    <div className="price">
                                        <span className="blacktxt">{el.price}</span>
                                        {/* <br />
                                    <span className="browntxt">$300</span> */}
                                    </div>
                                    <div>
                                        <Button padding="0px 15px" height="40px" content={"ADD TO CART"} />
                                        {/* <button>ADD TO CART</button> */}
                                    </div>
                                    <div className="eye-icon">
                                        <i className="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                            </Card>
                        })}
                    </CardContainer>

                    {/* productsPerPage */}
                    <PaginateProductBasedOnNumber>
                        <Paginate pages={data.pages} />
                        <div className="page-container">
                            <span>Show</span>
                            <select name="itemsperpage" id="">
                                <option value="24">24</option>
                                <option value="48">48</option>
                                <option value="72">72</option>
                                <option value="96">96</option>
                            </select>
                            <span>per page</span>
                        </div>
                    </PaginateProductBasedOnNumber>
                </ProductContainer>
            </CollectionPageContainer>
        </>
    )
}

{/* <PriceRange /> */ }
{/* <Card>
    <div className="list-img">
        <div className="inner-pad">
            <div className="abs-icon">
                <i className="fa-regular fa-heart fa-lg"></i>
            </div>
            <Link>
                <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol8.3.webp" alt="" />
            </Link>
        </div>
    </div>
    <div className="list-cont">
        <Link className="black-a">
            DND DC Pure Gel Polish Set Collection #8, 36pc Bundle
        </Link>
    </div>
    <div className="add-info">
        <div className="price">
            <span className="blacktxt">$229</span>
        </div>
        <div>
            <Button padding="0px 15px" height="40px" content={"ADD TO CART"} />
        </div>
        <div className="eye-icon">
            <i className="fa-solid fa-eye"></i>
        </div>
    </div>
</Card> */}