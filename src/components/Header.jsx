import { useEffect, useReducer } from "react";
import { MainHeader, Header1, Header2, NavAnchor, ListAnchor, StickyHeader } from "../styles/Header"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { deleteFromCart, totalProductCost } from "../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const initialState = {
    cart: false,
    mainMenuOpen: false,
    subMenu1Open: false,
    subMenu2Open: false,
    subMenu3Open: false
}

function menuReducer(state, action) {
    switch (action.type) {
        case "Toggle_Main_Menu":
            return {
                ...state,
                cart: false,
                mainMenuOpen: !state.mainMenuOpen
            };
        case "Toggle_Submenu":
            return {
                ...state,
                [action.payload]: !state[action.payload]
            };
        case "Close_All":
            return initialState
        case "Toggle_Cart":
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }
        default:
            return state;
    }
}





export default function Header() {
    // function IconSize(props) {
    //     const { className } = props;
    //     return (
    //         <span className={`icons ${className}`} >
    //             <CiPhone />
    //         </span >
    //     )
    // }

    // function MenuIcon(props) {
    //     const { className } = props;
    //     return (
    //         <label htmlFor="menu">
    //             <div className={`menu ${className}`}><CiMenuBurger /></div>
    //         </label >
    //     )
    // }

    // function UserIcon(props) {
    //     const { className } = props;
    //     return (
    //         <span className={`icons ${className}`} >
    //             <FaRegUser />
    //         </span >
    //     )
    // }

    // function StoreIcon(props) {
    //     const { className } = props;
    //     return (
    //         <span className={`icons ${className}`} >
    //             <IoBagOutline />
    //         </span >
    //     )
    // }

    const [menuState, localdispatch] = useReducer(menuReducer, initialState);
    // console.log("hello")

    const { userData } = useSelector((state) => state.auth)
    // console.log("userdata=", userData)
    // const navRef = useRef(null);
    const { cartItems, totalCost } = useSelector((state) => state.cart);
    // console.log(cartItems)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("hi2")
        // const handleClickOutside = (event) => {
        //     if (navRef.current && !navRef.current.contains(event.target)) {
        //         localdispatch({ type: 'Close_All' });
        //     }
        // };

        // if (menuState.cart) {
        //     document.addEventListener('mousedown', handleClickOutside);
        // }

        if (menuState.mainMenuOpen) {
            document.body.style.overflowY = "hidden"
        }
        return () => {
            document.body.style.overflowY = "auto"
            // document.removeEventListener('mousedown', handleClickOutside);
        }
    }
        , [
            menuState.mainMenuOpen,
            // menuState.cart
        ]
    )

    return (
        <>
            <StickyHeader>
                <MainHeader
                // ref={navRef}
                >
                    {/* <input type="checkbox" id="menu" /> */}

                    <Header1 >
                        {/* <label htmlFor="menu"> */}
                        <div className="menu" onClick={() => localdispatch({ type: "Toggle_Main_Menu" })}><i className="fa-solid fa-bars fa-xl"></i></div>
                        {/* </label> */}
                        {/* <MenuIcon className="menu-icon" /> */}
                        <div className="image"><img src="https://www.lanailsupplies.com/static/version1740644501/frontend/Cp/lanails/en_US/images/logo_black.png" alt="" /></div>
                        <div className="input">
                            <input type="text" placeholder="search" />
                        </div>
                        <div className="styled-icons">
                            <i className="fa-solid fa-phone fa-xl"></i>
                            {/* <IconSize className={"phone"} /> */}

                            <span className="number">
                                &nbsp; &nbsp;
                                +1 770-220-0108
                            </span>
                        </div>
                        <div className="styled-icons">
                            <Link to={userData ? `/` : `/login`} className="login-a"><i className="fa-solid fa-user fa-xl"></i>
                            </Link>
                            {/* <i className="fa-solid fa-user fa-xl"></i> */}
                            {/* <UserIcon className={"user"} /> */}
                        </div>
                        <div className="styled-icons">
                            <i className="fa-solid fa-bag-shopping fa-xl"
                                onClick={() => localdispatch({ type: "Toggle_Cart", payload: "cart" })}
                            ></i>
                            <span className="store-circle">
                                <span>0</span>
                            </span>
                            <div className={menuState.cart ? `shopping-cart` : `display-none`}>
                                <div className="cart-title">
                                    <div className="relative-title">
                                        <div className="align-angle">
                                            <i className="fa-solid fa-angle-left fa-xl"
                                                onClick={() => localdispatch({ type: "Toggle_Cart", payload: "cart" })}
                                            ></i>
                                        </div>
                                        <strong>Minicart</strong>
                                    </div>
                                    {cartItems.length > 0 ?
                                        <>
                                            <div className="items-wrapper">
                                                <ul className="wrapper-ul">
                                                    {cartItems.map((el, idx) => (
                                                        <li className="product-item" key={idx}>
                                                            {/* {el.name} */}

                                                            <div className="product-item-container">
                                                                <Link className="product-item-img">
                                                                    <img src={el.image} alt="" />
                                                                </Link>
                                                                <div className="product-item-details">
                                                                    <strong>
                                                                        <Link>{el.name}</Link>
                                                                    </strong>
                                                                    <div className="price-container">
                                                                        <span className="price">${el.price}</span>
                                                                    </div>
                                                                    <div className="qty-action">
                                                                        <div className="qty">
                                                                            <label htmlFor="qty" >Qty</label>
                                                                            <input type="number" id="qty" value={el.quantity} />
                                                                        </div>
                                                                        <div className="deleteandediticons">
                                                                            <Link className="edit"
                                                                                to={`/collections`}>
                                                                                <i className="fa-solid fa-pen-to-square"></i>
                                                                            </Link>
                                                                            <Link className="delete"
                                                                                to={`/collections`}
                                                                                onClick={() => {
                                                                                    dispatch(deleteFromCart(el));
                                                                                    dispatch(totalProductCost())
                                                                                }}>
                                                                                <i className="fa-solid fa-trash fa-lg"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <strong className="empty-cart">You have no items in your shopping cart.</strong>
                                        </>
                                    }
                                </div>
                                {cartItems.length > 0 && <div className="subtotal">
                                    <span>Cart Subtotal:</span>
                                    <span>${totalCost.toFixed(2)}</span>
                                </div>}
                            </div>
                            {/* <StoreIcon className={"store"} /> */}
                        </div>
                    </Header1>

                    <Header2 id={menuState.mainMenuOpen ? `header-2` : ""} >
                        {/* <Header2 id="header-2"> */}
                        <nav>
                            {/* different */}
                            <div className="box mobile">
                                <NavAnchor className="exception-a">
                                    <div className="mobile-img"><img src="https://media.lanailsupplies.com/wysiwyg/logo.webp" alt="" /></div>
                                    <span className="close-btn" onClick={() => localdispatch({ type: "Close_All" })}><i className="fa-solid fa-xmark fa-xl"></i></span>
                                </NavAnchor>
                            </div>
                            {/* different */}

                            <div className="new-cont">
                                <div className="box shop-a">
                                    <NavAnchor id="shop" colors="#8e7069" onClick={() => localdispatch({ type: "Toggle_Submenu", payload: "subMenu1Open" })}><span>Shop</span>
                                        {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                        {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                    </NavAnchor>
                                    <ul className={menuState.subMenu1Open ? `shop block` : `shop`}>
                                        <li>
                                            <div className="exception-back-div">
                                                <ListAnchor className="Back" onClick={() => localdispatch({ type: "Toggle_Submenu", payload: "subMenu1Open" })}>
                                                    <i className="fa-solid fa-angle-left fa-lg"></i>
                                                    <span>Back</span>
                                                </ListAnchor>
                                            </div>
                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Acrylics</ListAnchor>
                                                <ListAnchor>Acrylics Brush</ListAnchor>
                                                <ListAnchor>Bonds & Primer</ListAnchor>
                                                <ListAnchor>Liquid Monomer</ListAnchor>
                                                <ListAnchor>Nail Glue</ListAnchor>
                                                <ListAnchor>Pink & White</ListAnchor>
                                                <ListAnchor>Powder Color</ListAnchor>
                                                <ListAnchor>Powder Glitter</ListAnchor>
                                            </div>

                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Dispsibles & Sanitation</ListAnchor>
                                                <ListAnchor>Anti-Bacterial Liquid</ListAnchor>
                                                <ListAnchor>Soap</ListAnchor>
                                                <ListAnchor>Disposibles</ListAnchor>
                                                <ListAnchor>Face Mask</ListAnchor>
                                                <ListAnchor>Hand Sanitation</ListAnchor>
                                                <ListAnchor>Latex Gloves</ListAnchor>
                                                <ListAnchor>Nitrile Gloves</ListAnchor>
                                                <ListAnchor>Predicure Kit</ListAnchor>
                                                <ListAnchor>Toe Separators</ListAnchor>
                                                <ListAnchor>Wipes</ListAnchor>
                                            </div>
                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Tips</ListAnchor>
                                                <ListAnchor>Nail Tips</ListAnchor>
                                                <ListAnchor>Tip Box</ListAnchor>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Manicure & Pedicure</ListAnchor>
                                                <ListAnchor>10 Step CBD</ListAnchor>
                                                <ListAnchor>3 Step</ListAnchor>
                                                <ListAnchor>5 Step</ListAnchor>
                                                <ListAnchor>6 Step</ListAnchor>
                                                <ListAnchor>Bath Flowers</ListAnchor>
                                                <ListAnchor>Callus Remover</ListAnchor>
                                                <ListAnchor>Collagen</ListAnchor>
                                                <ListAnchor>Cuticle Softener</ListAnchor>
                                                <ListAnchor>Jelly Spa</ListAnchor>
                                                <ListAnchor>Lotion</ListAnchor>
                                                <ListAnchor>Masque</ListAnchor>
                                                <ListAnchor>Massage Oil</ListAnchor>
                                                <ListAnchor>Spa Gloves & Socks</ListAnchor>
                                            </div>

                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Waxing</ListAnchor>
                                                <ListAnchor>Pot Wax</ListAnchor>
                                                <ListAnchor>Roll On Wax</ListAnchor>
                                                <ListAnchor>Wax Equipment</ListAnchor>
                                                <ListAnchor>Wax Skincare</ListAnchor>
                                                <ListAnchor>Soft Wax</ListAnchor>
                                                <ListAnchor>Creme Wax</ListAnchor>
                                                <ListAnchor>Flex Wax</ListAnchor>
                                                <ListAnchor>Hard Wex</ListAnchor>
                                                <ListAnchor>Wax Treatment</ListAnchor>
                                                <ListAnchor>Wax Applicators</ListAnchor>
                                                <ListAnchor>Disposables</ListAnchor>
                                                <ListAnchor>Cloths and Wipes</ListAnchor>
                                            </div>

                                        </li>

                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Nail Art</ListAnchor>
                                                <ListAnchor>3D Brush</ListAnchor>
                                                <ListAnchor>Blossom Gel</ListAnchor>
                                                <ListAnchor>Cat Eye</ListAnchor>
                                                <ListAnchor>Chrome</ListAnchor>
                                                <ListAnchor>Foil Transfer</ListAnchor>
                                                <ListAnchor>Glitter</ListAnchor>
                                                <ListAnchor>Hologram</ListAnchor>
                                                <ListAnchor>Kolinsky Brush</ListAnchor>
                                                <ListAnchor>Mermaid</ListAnchor>
                                                <ListAnchor>Molding Art</ListAnchor>
                                                <ListAnchor>Platinum</ListAnchor>
                                                <ListAnchor>Rhinestone Adhesive</ListAnchor>
                                                <ListAnchor>Striping Gel Polish</ListAnchor>
                                                <ListAnchor>Cream Gel</ListAnchor>
                                            </div>

                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Builder Gel</ListAnchor>
                                                <ListAnchor>Bonder</ListAnchor>
                                                <ListAnchor>Brush On</ListAnchor>
                                                <ListAnchor>Jar</ListAnchor>
                                                <ListAnchor>Solution</ListAnchor>
                                                <ListAnchor>The Gel Bottle</ListAnchor>
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Salon Essentials</ListAnchor>
                                                <ListAnchor>Aceton</ListAnchor>
                                                <ListAnchor>Cleanser</ListAnchor>
                                                <ListAnchor>Cotton Coils</ListAnchor>
                                                <ListAnchor>Cotton Guaze</ListAnchor>
                                                <ListAnchor>Cotton Pads</ListAnchor>
                                                <ListAnchor>Microfiber Towels</ListAnchor>
                                                <ListAnchor>Nail Buffers</ListAnchor>
                                                <ListAnchor>Nail Files</ListAnchor>
                                                <ListAnchor>Nail Prep</ListAnchor>
                                                <ListAnchor>Prep & Cleanse</ListAnchor>
                                                <ListAnchor>Primer</ListAnchor>
                                                <ListAnchor>Quick Dry Spray</ListAnchor>
                                                <ListAnchor>Thinner</ListAnchor>
                                                <ListAnchor>Towels</ListAnchor>
                                                <ListAnchor>Bonds & Primer</ListAnchor>
                                                <ListAnchor>Fragnence Oil</ListAnchor>
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Soft Gel</ListAnchor>
                                                <ListAnchor>Extend Gel</ListAnchor>
                                                <ListAnchor>Kits</ListAnchor>
                                                <ListAnchor>Natural Tips</ListAnchor>
                                                <ListAnchor>Sculpted</ListAnchor>
                                                <ListAnchor>Soft Gel</ListAnchor>
                                                <ListAnchor>Soft Gel Primer</ListAnchor>
                                                <ListAnchor>Soft Gel Tips</ListAnchor>
                                            </div>

                                            <div>
                                                <ListAnchor className={menuState.subMenu1Open ? `visible-li` : ``} padding="0 0 10px" colors="#8e7069" fontwt="700">Tools & Implements</ListAnchor>
                                                <ListAnchor>Acrylic Nipper</ListAnchor>
                                                <ListAnchor>Carbides</ListAnchor>
                                                <ListAnchor>Chrome Applicator</ListAnchor>
                                                <ListAnchor>Cuticle Nipper</ListAnchor>
                                                <ListAnchor>Cuticle Pusher</ListAnchor>
                                                <ListAnchor>Gel Pusher</ListAnchor>
                                                <ListAnchor>Scissor</ListAnchor>
                                                <ListAnchor>Tip Cutter</ListAnchor>
                                                <ListAnchor>Toe Nipper</ListAnchor>
                                                <ListAnchor>Tweezer</ListAnchor>
                                                <ListAnchor>Nail Files</ListAnchor>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="box best">
                                    <NavAnchor colors="#0db7af" onClick={() => localdispatch({ type: "Toggle_Submenu", payload: "subMenu2Open" })} ><span>Best Seller</span>
                                        {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                        {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                    </NavAnchor>
                                    <ul className={menuState.subMenu2Open ? `shop best-shop block` : `shop best-shop`}>
                                        <li>
                                            <div className="exception-back-div">
                                                <ListAnchor className="Back" onClick={() => localdispatch({ type: "Toggle_Submenu", payload: "subMenu2Open" })}>
                                                    <i className="fa-solid fa-angle-left fa-lg"></i>
                                                    <span>Back</span>
                                                </ListAnchor>
                                            </div>
                                            <div>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``} padding="0 0 10px" fontwt={menuState.subMenu2Open ? "400" : "700"}>Trending</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}> New Arrival</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}>Bonds & Primer</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}>Liquid Monomer</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}>Nail Glue</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}>Pink & White</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}>Powder Color</ListAnchor>
                                                <ListAnchor className={menuState.subMenu2Open ? `visible-li brown-hover` : ``}>Powder Glitter</ListAnchor>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="box collection">
                                    <NavAnchor as={Link} to={`/collections`} colors="#f26a10" onClick={() => localdispatch({ type: "Toggle_Submenu", payload: "subMenu3Open" })}><span>Collection</span>
                                        {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                        {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                    </NavAnchor>
                                    <ul className={menuState.subMenu3Open ? `shop collectionul block` : `shop collectionul`}>
                                        <li>
                                            <div className="exception-back-div">
                                                <ListAnchor className="Back" onClick={() => localdispatch({ type: "Toggle_Submenu", payload: "subMenu3Open" })}>
                                                    <i className="fa-solid fa-angle-left fa-lg"></i>
                                                    <span>Back</span>
                                                </ListAnchor>
                                            </div>
                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Acrylics</ListAnchor>
                                                <ListAnchor>Acrylics Brush</ListAnchor>
                                                <ListAnchor>Bonds & Primer</ListAnchor>
                                                <ListAnchor>Liquid Monomer</ListAnchor>
                                                <ListAnchor>Nail Glue</ListAnchor>
                                                <ListAnchor>Pink & White</ListAnchor>
                                                <ListAnchor>Powder Color</ListAnchor>
                                                <ListAnchor>Powder Glitter</ListAnchor>
                                            </div>

                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Dispsibles & Sanitation</ListAnchor>
                                                <ListAnchor>Anti-Bacterial Liquid</ListAnchor>
                                                <ListAnchor>Soap</ListAnchor>
                                                <ListAnchor>Disposibles</ListAnchor>
                                                <ListAnchor>Face Mask</ListAnchor>
                                                <ListAnchor>Hand Sanitation</ListAnchor>
                                                <ListAnchor>Latex Gloves</ListAnchor>
                                                <ListAnchor>Nitrile Gloves</ListAnchor>
                                                <ListAnchor>Predicure Kit</ListAnchor>
                                                <ListAnchor>Toe Separators</ListAnchor>
                                                <ListAnchor>Wipes</ListAnchor>
                                            </div>
                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Tips</ListAnchor>
                                                <ListAnchor>Nail Tips</ListAnchor>
                                                <ListAnchor>Tip Box</ListAnchor>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Manicure & Pedicure</ListAnchor>
                                                <ListAnchor>10 Step CBD</ListAnchor>
                                                <ListAnchor>3 Step</ListAnchor>
                                                <ListAnchor>5 Step</ListAnchor>
                                                <ListAnchor>6 Step</ListAnchor>
                                                <ListAnchor>Bath Flowers</ListAnchor>
                                                <ListAnchor>Callus Remover</ListAnchor>
                                                <ListAnchor>Collagen</ListAnchor>
                                                <ListAnchor>Cuticle Softener</ListAnchor>
                                                <ListAnchor>Jelly Spa</ListAnchor>
                                                <ListAnchor>Lotion</ListAnchor>
                                                <ListAnchor>Masque</ListAnchor>
                                                <ListAnchor>Massage Oil</ListAnchor>
                                                <ListAnchor>Spa Gloves & Socks</ListAnchor>
                                            </div>


                                        </li>

                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Nail Art</ListAnchor>
                                                <ListAnchor>3D Brush</ListAnchor>
                                                <ListAnchor>Blossom Gel</ListAnchor>
                                                <ListAnchor>Cat Eye</ListAnchor>
                                                <ListAnchor>Chrome</ListAnchor>
                                                <ListAnchor>Foil Transfer</ListAnchor>
                                                <ListAnchor>Glitter</ListAnchor>
                                                <ListAnchor>Hologram</ListAnchor>
                                                <ListAnchor>Kolinsky Brush</ListAnchor>
                                                <ListAnchor>Mermaid</ListAnchor>
                                                <ListAnchor>Molding Art</ListAnchor>
                                                <ListAnchor>Platinum</ListAnchor>
                                                <ListAnchor>Rhinestone Adhesive</ListAnchor>
                                                <ListAnchor>Striping Gel Polish</ListAnchor>
                                                <ListAnchor>Cream Gel</ListAnchor>
                                            </div>

                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Builder Gel</ListAnchor>
                                                <ListAnchor>Bonder</ListAnchor>
                                                <ListAnchor>Brush On</ListAnchor>
                                                <ListAnchor>Jar</ListAnchor>
                                                <ListAnchor>Solution</ListAnchor>
                                                <ListAnchor>The Gel Bottle</ListAnchor>
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <ListAnchor className={menuState.subMenu3Open ? `visible-li` : ``} padding="0 0 10px" colors="#f26a10" fontwt="700">Salon Essentials</ListAnchor>
                                                <ListAnchor>Aceton</ListAnchor>
                                                <ListAnchor>Cleanser</ListAnchor>
                                                <ListAnchor>Cotton Coils</ListAnchor>
                                                <ListAnchor>Cotton Guaze</ListAnchor>
                                                <ListAnchor>Cotton Pads</ListAnchor>
                                                <ListAnchor>Microfiber Towels</ListAnchor>
                                                <ListAnchor>Nail Buffers</ListAnchor>
                                                <ListAnchor>Nail Files</ListAnchor>
                                                <ListAnchor>Nail Prep</ListAnchor>
                                                <ListAnchor>Prep & Cleanse</ListAnchor>
                                                <ListAnchor>Primer</ListAnchor>
                                                <ListAnchor>Quick Dry Spray</ListAnchor>
                                                <ListAnchor>Thinner</ListAnchor>
                                                <ListAnchor>Towels</ListAnchor>
                                                <ListAnchor>Bonds & Primer</ListAnchor>
                                                <ListAnchor>Fragnence Oil</ListAnchor>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="box"><NavAnchor colors="#8549ac"><span>Matching Duo & Trio</span>
                                    {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                    {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                </NavAnchor></div>
                                <div className="box"><NavAnchor colors="#36454f"><span>Machines & Equipments</span>
                                    {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                    {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                </NavAnchor></div>
                                <div className="box"><NavAnchor colors="#fb56c1"><span>Dip & Gel Nail Polish</span>
                                    {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                    {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                </NavAnchor></div>
                                <div className="box"><NavAnchor colors="#8e7069"><span>Brands</span>
                                    {/* <i className="fa-solid fa-angle-down fa-sm"></i> */}
                                    {menuState.mainMenuOpen ? <i className="fa-solid fa-angle-right fa-xl"></i> : <i className="fa-solid fa-angle-down fa-sm"></i>}
                                </NavAnchor></div>
                                <div className="box"><NavAnchor className="exception" ><span>Store Pickup</span></NavAnchor></div>
                            </div>
                        </nav>

                        {/* here also change it when u are done changing other things */}
                        <div className="close" onClick={() => localdispatch({ type: "Close_All" })}></div>
                        {/* <label className="close" htmlFor="menu" onClick={() => localdispatch({ type: "Close_All" })}></label> */}
                    </Header2>



                </MainHeader>
            </StickyHeader>
        </>
    )
}