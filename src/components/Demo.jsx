// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteFromCart, totalProductCost, updateQuantity } from "../Redux/Slices/cartSlice";
// import { Link } from "react-router-dom";
// import { memo } from "react";


// // export default function Cart() {
// //     const { cartItems, totalCost } = useSelector((state) => state.cart);
// //     const dispatch = useDispatch();
// //     console.log("cart")

// //     return (
// //         <>
// //             {cartItems.length > 0 ?
// //                 <>
// //                     <div className="items-wrapper">
// //                         <ul className="wrapper-ul">
// //                             {cartItems.map((el, idx) => (
// //                                 <li className="product-item" key={idx}>

// //                                     <div className="product-item-container">
// //                                         <Link className="product-item-img">
// //                                             <img src={el.image} alt="" />
// //                                         </Link>
// //                                         <div className="product-item-details">
// //                                             <strong>
// //                                                 <Link>{el.name}</Link>
// //                                             </strong>
// //                                             <div className="price-container">
// //                                                 <span className="price">${el.price}</span>
// //                                             </div>
// //                                             <div className="qty-action">
// //                                                 <div className="qty">
// //                                                     <label htmlFor="qty" >Qty</label>
// //                                                     {/* <input type="number" id="qty" value={el.quantity} /> */}
// //                                                 </div>
// //                                                 <div className="deleteandediticons">
// //                                                     <div className="edit"
// //                                                     // to={`/collections`}
// //                                                     >
// //                                                         <i className="fa-solid fa-pen-to-square"></i>
// //                                                     </div>
// //                                                     <div className="delete" as={Link}
// //                                                         // to={`/collections`}
// //                                                         onClick={() => {
// //                                                             dispatch(deleteFromCart(el));
// //                                                             dispatch(totalProductCost())
// //                                                         }}>
// //                                                         <i className="fa-solid fa-trash fa-lg"></i>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>

// //                                     </div>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                 </>
// //                 :
// //                 <>
// //                     <strong className="empty-cart">You have no items in your shopping cart.</strong>
// //                 </>
// //             }
// //         </>
// //     )
// // }

// export const Cart = memo(function Cart() {
//     const { cartItems, totalCost } = useSelector((state) => state.cart);
//     const dispatch = useDispatch();
//     console.log("cart")

//     // const [localQuantity, setLocalQuantity] = useState(
//     //     [cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Number(el.quantity) }), {})]
//     // )

//     // const [hasChange, setHasChange] = useState(
//     //     [cartItems.reduce((acc, el) => ({ ...acc, [el.id]: Boolean(false) }), {})]
//     // )

//     const [localQuantity, setLocalQuantity] = useState([])
//     const [hasChange, setHasChange] = useState([])

//     console.log("localqty", localQuantity, "change", hasChange)

//     const handleQuantityChange = (id, event) => {
//         const newQuantity = parseInt(event.target.value)
//         console.log(newQuantity)
//         if (newQuantity > 0) {
//             const updatedItems = localQuantity.map((item) => {
//                 if (item.uid === id) {
//                     console.log(item)
//                     return { ...item, [id]: newQuantity }
//                 }
//                 return item
//             })
//             // console.log("updatedItems", updatedItems)
//             setLocalQuantity(updatedItems)


//             const changeItems = hasChange.map((item) => {
//                 if (item.uid === id) {
//                     return { ...item, [id]: newQuantity !== (cartItems.find((el) => el.id === id)?.quantity) }
//                 }
//                 return item
//             })
//             // console.log("changeItems", changeItems)
//             setHasChange(changeItems)
//         }
//     }

//     const handleUpdateQuantity = (id) => {
//         const data = localQuantity.find((el) => el.uid === id)
//         // console.log("data=", data[id])
//         const updates = cartItems.map((el) => ({
//             id: el.id,
//             // quantity: Number(localQuantity[el.id])
//             quantity: Number(data[id])
//         }))
//         console.log("updates=", updates)
//         // setHasChange((prev) => ({ ...prev, [uid]: false }))

//         const changeItems = hasChange.map((item) => {
//             if (item.uid === id) {
//                 return { ...item, [id]: false }
//             }
//             return item
//         })
//         setHasChange(changeItems)

//         dispatch(updateQuantity(updates))
//     }

//     useEffect(() => {
//         const initialQuantities = cartItems.map((el) => ({
//             [el.id]: Number(el.quantity),
//             uid: el.id
//         }))
//         setLocalQuantity(initialQuantities)
//     }, [cartItems])

//     useEffect(() => {
//         const initialHasChange = cartItems.map((el) => (
//             {
//                 [el.id]: false,
//                 uid: el.id
//             }))
//         setHasChange(initialHasChange)
//     }, [cartItems])

//     return (
//         <>
//             {cartItems.map((el, idx) => (
//                 <li className="product-item" key={idx}>

//                     <div className="product-item-container">
//                         <Link className="product-item-img">
//                             <img src={el.image} alt="" />
//                         </Link>
//                         <div className="product-item-details">
//                             <strong>
//                                 <Link>{el.name}</Link>
//                             </strong>
//                             <div className="price-container">
//                                 <span className="price">${el.price}</span>
//                             </div>
//                             <div className="qty-action">
//                                 <div className="qty">
//                                     <label htmlFor="qty" >Qty</label>
//                                     <input
//                                         name="quantity"
//                                         type="number" id="qty" defaultValue={el.quantity}
//                                         onChange={(e) => handleQuantityChange(el.id, e)} />
//                                     <button
//                                         onClick={() => handleUpdateQuantity(el.id)}
//                                         className={hasChange[el.id] ? "btn-visible" : "btn-invisible"}
//                                     >update</button>
//                                 </div>
//                                 <div className="deleteandediticons">
//                                     <div className="edit"
//                                     // to={`/collections`}

//                                     >
//                                         <i className="fa-solid fa-pen-to-square"></i>
//                                     </div>
//                                     <div className="delete"
//                                         // to={`/collections`}
//                                         onClick={() => {
//                                             dispatch(deleteFromCart(el));
//                                             dispatch(totalProductCost())
//                                         }}>
//                                         <i className="fa-solid fa-trash fa-lg"></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </li>
//             ))}
//         </>
//     )
// })