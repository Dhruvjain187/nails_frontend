import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, totalProductCost, updateQuantity } from "../Redux/Slices/cartSlice";
import { Link } from "react-router-dom";
import { memo } from "react";


export const Cart = memo(function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    console.log("cartItems=", cartItems)

    const [localQuantity, setLocalQuantity] = useState(cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Number(el.quantity) }), {})
    )

    // const [localQuantity, setLocalQuantity] = useState(
    //     cartItems.reduce((acc, el) => {
    //         return ({ ...acc, [el.id]: Number(el.quantity) }, {})
    //     })
    // )

    // const localQuantityData = cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Number(el.quantity) }), {})


    const [hasChange, setHasChange] = useState(
        cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Boolean(false) }), {})
    )

    console.log("localqty", localQuantity, "change", hasChange)

    const handleQuantityChange = (id, event) => {
        const newQuantity = parseInt(event.target.value)
        console.log("newQuantity=", newQuantity);

        if (newQuantity === "" || isNaN(newQuantity)) {
            setLocalQuantity((prev) => ({ ...prev, [id]: "" }))
            setHasChange((prev) => ({ ...prev, [id]: false }))
        }
        else if (newQuantity > 0) {
            setLocalQuantity((prev) => ({
                ...prev,
                [id]: Number(newQuantity)
            }))

            setHasChange((prev) => ({
                ...prev,
                [id]: newQuantity !== (cartItems.find((el) => el.id === id)?.quantity)
            }))
        }
    }

    const handleUpdateQuantity = (id) => {
        const item = cartItems.find((el) => el.id === id)

        if (item) {
            const update = {
                id: item.id,
                quantity: localQuantity[item.id]
            }

            dispatch(updateQuantity([update]))
            setHasChange((prev) => ({ ...prev, [item.id]: false }))
        }
        // const updates = cartItems.map((el) => ({
        //     id: el.id,
        //     quantity: Number(localQuantity[el.id])
        // }))
        // console.log("updates=", updates)
        // setHasChange((prev) => ({ ...prev, [uid]: false }))
        // dispatch(updateQuantity(updates))
    }

    useEffect(() => {
        setLocalQuantity(
            cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Number(el.quantity) }), {})
        );

        setHasChange(
            cartItems.reduce((acc, el) => ({ ...acc, [el.id]: false }), {})
        );
    }, [cartItems]);

    return (
        <>{cartItems.length > 0 ?
            <>
                <div className="items-wrapper">
                    <ul className="wrapper-ul">

                        {cartItems.map((el, idx) => (
                            <li className="product-item" key={idx}>

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
                                                <input
                                                    name="quantity"
                                                    type="number" id="qty"
                                                    // defaultValue={el.quantity}
                                                    value={localQuantity[el.id] !== undefined ?
                                                        localQuantity[el.id] : el.quantity}
                                                    onChange={(e) => handleQuantityChange(el.id, e)} />
                                                <button
                                                    onClick={() => handleUpdateQuantity(el.id)}
                                                    className={hasChange[el.id] ? "btn-visible" : "btn-invisible"}
                                                >UPDATE</button>
                                            </div>
                                            <div className="deleteandediticons">
                                                <Link className="edit"
                                                    to={`/collections/${el.id}?update=true`}

                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </Link>
                                                <div className="delete"
                                                    // to={`/collections`}
                                                    onClick={() => {
                                                        dispatch(deleteFromCart(el));
                                                        dispatch(totalProductCost())
                                                    }}>
                                                    <i className="fa-solid fa-trash fa-lg"></i>
                                                </div>
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
        </>
    )
})

// export function Cart() {
//     const { cartItems } = useSelector((state) => state.cart);
//     const dispatch = useDispatch();
//     console.log("cartItems=", cartItems)
//     console.log(cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Number(el.quantity) }), {}))

//     const [localQuantity, setLocalQuantity] = useState(
//         cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Number(el.quantity) }), {})
//     )

//     const [hasChange, setHasChange] = useState(
//         cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Boolean(false) }), {})
//     )

//     console.log("localqty", localQuantity, "change", hasChange)

//     const handleQuantityChange = (id, event) => {
//         const newQuantity = parseInt(event.target.value)
//         console.log("newQuantity=", newQuantity);

//         if (newQuantity === "" || isNaN(newQuantity)) {
//             setLocalQuantity((prev) => ({ ...prev, [id]: "" }))
//             setHasChange((prev) => ({ ...prev, [id]: false }))
//         }
//         else if (newQuantity > 0) {
//             setLocalQuantity((prev) => ({
//                 ...prev,
//                 [id]: Number(newQuantity)
//             }))

//             setHasChange((prev) => ({
//                 ...prev,
//                 [id]: newQuantity !== (cartItems.find((el) => el.id === id)?.quantity)
//             }))
//         }
//     }

//     const handleUpdateQuantity = (id) => {
//         const item = cartItems.find((el) => el.id === id)

//         if (item) {
//             const update = {
//                 id: item.id,
//                 quantity: localQuantity[item.id]
//             }

//             dispatch(updateQuantity([update]))
//             setHasChange((prev) => ({ ...prev, [item.id]: false }))
//         }
//         // const updates = cartItems.map((el) => ({
//         //     id: el.id,
//         //     quantity: Number(localQuantity[el.id])
//         // }))
//         // console.log("updates=", updates)
//         // setHasChange((prev) => ({ ...prev, [uid]: false }))
//         // dispatch(updateQuantity(updates))
//     }

//     return (
//         <>{cartItems.length > 0 ?
//             <>
//                 <div className="items-wrapper">
//                     <ul className="wrapper-ul">

//                         {cartItems.map((el, idx) => (
//                             <li className="product-item" key={idx}>

//                                 <div className="product-item-container">
//                                     <Link className="product-item-img">
//                                         <img src={el.image} alt="" />
//                                     </Link>
//                                     <div className="product-item-details">
//                                         <strong>
//                                             <Link>{el.name}</Link>
//                                         </strong>
//                                         <div className="price-container">
//                                             <span className="price">${el.price}</span>
//                                         </div>
//                                         <div className="qty-action">
//                                             <div className="qty">
//                                                 <label htmlFor="qty" >Qty</label>
//                                                 <input
//                                                     name="quantity"
//                                                     type="number" id="qty"
//                                                     // defaultValue={el.quantity}
//                                                     value={localQuantity[el.id] !== undefined ?
//                                                         localQuantity[el.id] : el.quantity}
//                                                     onChange={(e) => handleQuantityChange(el.id, e)} />
//                                                 {console.log("ayw", localQuantity[el.id])}
//                                                 <button
//                                                     onClick={() => handleUpdateQuantity(el.id)}
//                                                     className={hasChange[el.id] ? "btn-visible" : "btn-invisible"}
//                                                 >UPDATE</button>
//                                             </div>
//                                             <div className="deleteandediticons">
//                                                 <div className="edit"
//                                                 // to={`/collections`}

//                                                 >
//                                                     <i className="fa-solid fa-pen-to-square"></i>
//                                                 </div>
//                                                 <div className="delete"
//                                                     // to={`/collections`}
//                                                     onClick={() => {
//                                                         dispatch(deleteFromCart(el));
//                                                         dispatch(totalProductCost())
//                                                     }}>
//                                                     <i className="fa-solid fa-trash fa-lg"></i>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </>
//             :
//             <>
//                 <strong className="empty-cart">You have no items in your shopping cart.</strong>
//             </>
//         }
//         </>
//     )
// }


export const CartItems = memo(function CartItems() {
    const { cartItems } = useSelector((state) => state.cart);

    const totalItems = cartItems.reduce((acc, el) => acc + el.quantity, 0)

    return (
        <span>{totalItems}</span>
    )
})


export const CartPriceContainer = memo(function CartContainer() {
    const { cartItems, totalCost } = useSelector((state) => state.cart);

    return (
        <>
            {cartItems.length > 0 &&
                (
                    <>
                        <div className="subtotal">
                            <span>Cart Subtotal:</span>
                            <span>${totalCost.toFixed(2)}</span>
                        </div>
                        <div className="additional-info">
                            <span className="info-span span-1">Your remaining amount for free shipping $46.00</span>
                            <span className="info-span span-2">Above $99 Surprise gift will be add.</span>
                        </div>
                        <div className="additional-info pd-15">
                            <Link className="info-a">VIEW CART <i className="fa-solid fa-arrow-right-long"></i></Link>
                            <button className="info-a">CHECKOUT <i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </>
                )
            }
        </>
    )
})