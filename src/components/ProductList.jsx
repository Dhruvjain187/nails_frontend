import { ProductsContainer } from "../styles/ProductList"
import { theme } from "../styles/GlobalStyles"
import ProductComponentHeader from "./ProductComponentHeader"

export default function ProductList() {
    return (
        <>
            <ProductsContainer theme={theme}>
                <ProductComponentHeader title={"Best Sellers"} btn={"VIEW MORE"} />

                <div className="list">
                    <ul>
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol8.3.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND DC Pure Gel Polish Set Collection #8, 36pc Bundle</div>
                            <div className="add-info">
                                <div className="price">
                                    <span className="blacktxt">$229</span>
                                    <br />
                                    <span className="browntxt">$300</span>
                                </div>
                                <button>ADD TO CART</button>
                                <div className="eye-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol3.3.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND DC Pure Gel Polish Set Collection #3, 36pc Bundle</div>
                            <div className="add-info">
                                <div className="price">
                                    <span className="blacktxt">$229</span>
                                    <br />
                                    <span className="browntxt">$300</span>
                                </div>
                                <button>ADD TO CART</button>
                                <div className="eye-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/1/1/1168000_1.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">Gelish 18G Plus Led Light With Comfort Cure, Corded</div>
                            <div className="add-info">
                                <div className="price">
                                    <span className="blacktxt">$229</span>
                                    <br />
                                    <span className="browntxt">$300</span>
                                </div>
                                <button>ADD TO CART</button>
                                <div className="eye-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol1.3.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND DC Pure Gel Polish Set Collection #1, 36pc Bundle</div>
                            <div className="add-info">
                                <div className="price">
                                    <span className="blacktxt">$229</span>
                                    <br />
                                    <span className="browntxt">$300</span>
                                </div>
                                <button>ADD TO CART</button>
                                <div className="eye-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-img">
                                <div className="inner-pad">
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                    <img width="240px" height="240px" src="https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/n/dndcol7.1.webp" alt="" />
                                </div>
                            </div>
                            <div className="list-cont">DND Gel Polish Set Collection #7, 36pc Bundle</div>
                            <div className="add-info">
                                <div className="price">
                                    <span className="blacktxt">$229</span>
                                    <br />
                                    <span className="browntxt">$300</span>
                                </div>
                                <button>ADD TO CART</button>
                                <div className="eye-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </ProductsContainer>
        </>
    )
}

// https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol8.3.webp
// https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol3.3.webp
// https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/1/1/1168000_1.webp
// https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/c/dccol1.3.webp
// https://media.lanailsupplies.com/catalog/product/cache/732117cbdeadcdd2e3e2ea8b59e64c68/d/n/dndcol7.1.webp