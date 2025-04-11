import BreadCrumbs from "../components/BreadCrumbs"
import { CollectionPageContainer } from "../styles/CollectionPage"
import { CategoryBar } from "../styles/CategoryBar"
import { ProductContainer } from "../styles/Products"
import { useEffect, useReducer } from "react"
import { UpperProductContainer } from "../styles/Products"
import { Card } from "../styles/Card"
import { CardContainer } from "../styles/CardContainer"
import Button from "../components/Button"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useFetchAllProductQuery } from "../Redux/Api/productApi"
import PriceRange from "../components/PriceRange"
import Paginate from "../components/Paginate"
import { useSelector, useDispatch } from "react-redux"
import { PaginateProductBasedOnNumber } from "../styles/PaginateProductBasedOnNumber"
import { useState } from "react"
import { addToCart, totalProductCost } from "../Redux/Slices/cartSlice"
// import { useDebounce } from "../Hooks/useDebounce"

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
    const [productState, localDispatch] = useReducer(productReducer, initialState);
    // console.log(initialState)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();


    const searchParams = new URLSearchParams(location.search)
    const [selectedFilters, setSelectedFilters] = useState({
        category: searchParams.get("category") || null,
        // priceRange: searchParams.get("price") || null,
        priceRange: [0, 4000],
        brand: searchParams.get("brand") || null,
        page: searchParams.get("page") || 1,
        pageSize: searchParams.get("pageSize") || 24,
        minPrice: searchParams.get("minPrice") || 0,
        maxPrice: searchParams.get("maxPrice") || 4000,
    });



    const { data, error, isSuccess, isFetching, isLoading } = useFetchAllProductQuery({
        pageSize: selectedFilters.pageSize,
        page: selectedFilters.page,
        category: selectedFilters.category,
        brand: selectedFilters.brand,
        minPrice: selectedFilters.minPrice,
        maxPrice: selectedFilters.maxPrice
    })
    console.log("data=", data)


    const updateFilter = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        const newParams = new URLSearchParams(searchParams);
        // const existingCategoryValue = searchParams.get("category")
        const existingCategoryValue = searchParams.get(name)
        newParams.delete("page")
        if (value === existingCategoryValue) {
            // newParams.set(filterName, value);
            newParams.delete(name);
            setSelectedFilters((prev) => {
                return { ...prev, [name]: null, page: 1 }
            })

        } else {
            newParams.set(name, value);
            console.log(newParams)
            // newParams.delete(filterName);
            console.log("1 render")
            setSelectedFilters((prev) => (
                { ...prev, [name]: value, page: 1 })
            )
        }

        // console.log(newParams.get("category"))
        console.log("2 render")
        navigate(`?${newParams.toString()}`, { replace: true }); // replaces instead of pushing new history entry
    };

    const updatePageSize = (e) => {
        const { name, value } = e.target;
        console.log("name& value", name, value)
        const newParams = new URLSearchParams(searchParams);
        newParams.set(name, value)
        newParams.delete("page")
        setSelectedFilters((prev) => {
            return { ...prev, pageSize: Number(value), page: 1 }
        })
        navigate(`?${newParams.toString()}`, { replace: true }); // replaces instead of pushing new history entry
    }

    const updatePriceFilter = (data) => {
        // console.log("data=", data)
        const newParams = new URLSearchParams(searchParams);
        if (data.minPrice !== 0) newParams.set("minPrice", Number(data.minPrice))
        if (data.maxPrice !== 4000) newParams.set("maxPrice", Number(data.maxPrice))
        const queryString = newParams.toString();
        navigate(queryString ? `?${queryString}` : ``, { replace: true })
    }


    if (isLoading) return <div>Loading initial data...</div>;
    if (isFetching) return <div>Updating with new filter...</div>;
    if (!data) return <div>No products found</div>;
    console.log(isLoading, "3 render")
    console.log(selectedFilters)
    console.log("rerender")
    return (
        <>
            <BreadCrumbs />

            <CollectionPageContainer>
                <CategoryBar className={productState.filter ? "block" : "none"}>
                    <div className="border">
                        <div className="exception">Shopping Options</div>

                        <div className="title" onClick={() => localDispatch({ type: "Close_All" })}>
                            <div>Category</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>
                        <ul className={productState.product1 ? `content` : `content-none`}>
                            <li>
                                <input type="checkbox" name="category"
                                    checked={searchParams.get("category") === "Glitter"}
                                    value="Glitter" onChange={(e) => updateFilter(e)} />

                                <span>Glitter</span>
                            </li>
                            <li>
                                <input type="checkbox" name="category"
                                    checked={searchParams.get("category") === "Jelly"}
                                    value="Jelly" onChange={(e) => updateFilter(e)} />
                                <span>Jelly</span>
                            </li>
                            <li>
                                <input type="checkbox" name="category"
                                    checked={searchParams.get("category") === "Light & Shadow Sheer"}
                                    value="Light & Shadow Sheer" onChange={(e) => updateFilter(e)} />
                                <span>Light & Shadow Sheer</span>
                            </li>
                        </ul>

                        <div className="title" onClick={() => localDispatch({ type: "Toggle_Product", payload: "product2" })}>
                            <div>Price</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>
                        <ul className={productState.product2 ? `content` : `content-none`}>
                            <PriceRange minPrice={selectedFilters.minPrice}
                                maxPrice={selectedFilters.maxPrice}
                                setSelectedFilters={setSelectedFilters}
                                priceRange={selectedFilters.priceRange}
                                updatePriceFilter={updatePriceFilter}
                            />
                        </ul>

                        <div className="title" onClick={() => localDispatch({ type: "Toggle_Product", payload: "product3" })}>
                            <div>Brand</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>

                        <ul className={productState.product3 ? `content` : `content-none`}>
                            <li>
                                <input type="checkbox" name="brand"
                                    checked={searchParams.get("brand") === "American Terry Mills"}
                                    value="American Terry Mills" onChange={(e) => updateFilter(e)} />
                                <span>American Terry Mills</span>
                            </li>
                            <li>
                                <input type="checkbox" name="brand"
                                    checked={searchParams.get("brand") === "Apres"}
                                    value="Apres" onChange={(e) => updateFilter(e)} />
                                <span>Apres</span>
                            </li>
                            <li>
                                <input type="checkbox" name="brand"
                                    checked={searchParams.get("brand") === "Aurelia Gloves"}
                                    value="Aurelia Gloves" onChange={(e) => updateFilter(e)} />

                                <span>Aurelia Gloves</span>
                            </li>
                        </ul>

                        <div className="title">
                            <div>Color</div>
                            <i className="fa-solid fa-angle-down fa-sm"></i>
                        </div>

                        <div className="title" onClick={() => localDispatch({ type: "Toggle_Product", payload: "product4" })}>
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

                        <div className="title" onClick={() => localDispatch({ type: "Toggle_Product", payload: "product5" })}>
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

                        <div className="total-products">Total Products <strong>{data?.count}</strong></div>

                        <strong className="filter-strong"
                            onClick={() => localDispatch({ type: "Filter", payload: "filter" })}>
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

                    <CardContainer>
                        {data?.product.map((el, idx) => {
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
                                    <div onClick={() => {
                                        dispatch(addToCart(el));
                                        dispatch(totalProductCost())
                                    }}>
                                        <Button padding="0px 15px" height="40px" content={"ADD TO CART"} />
                                        {/* onClick={() => dispatch(addToCart(el.id))} */}

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
                        <Paginate pages={data?.pages} page={selectedFilters.page} setSelectedFilters={setSelectedFilters} />
                        <div className="page-container">
                            <span>Show</span>
                            <select name="pageSize" id="" value={selectedFilters.pageSize} onChange={(e) => updatePageSize(e)}>
                                <option value="24" >24</option>
                                <option value="48" >48</option>
                                <option value="72" >72</option>
                                <option value="96" >96</option>
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