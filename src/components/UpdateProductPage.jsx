import { ProductBtn } from "./Button"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../Redux/Slices/cartSlice";

export default function UpdateProductPage({ update, id }) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const initialQty = update
        ? cartItems.find((item) => item.id === id)?.quantity || 1
        : 1;
    // console.log("initialQty=", initialQty)

    const [qty, setQty] = useState(initialQty)

    function handleIncreaseQuantity() {
        setQty((qty) => qty + 1)
    }

    function handleDecreaseQuantity() {
        setQty((qty) => Math.max(qty - 1, 1))
    }

    function handleQuantityInput(e) {
        const value = Number(e.target.value)
        setQty(value > 0 ? value : 1)
    }

    function updateProduct() {
        const updatedData = {
            id,
            quantity: qty
        }
        dispatch(updateQuantity([updatedData]))
    }

    return (
        <div className="field">
            <div className="qty-container">
                <span className="qty">Qty</span>
                <div className="box">
                    <span onClick={handleDecreaseQuantity}>-</span>
                    <input min={1} type="text" value={qty} onChange={(e) => handleQuantityInput(e)} />
                    <span className="add" onClick={handleIncreaseQuantity}>+</span>
                </div>
            </div>
            {/* <div >
                {update ?
                    <ProductBtn padding="0px 15px" height="40px" content={"UPDATE CART"} />
                    :
                    <ProductBtn padding="0px 15px" height="40px" content={"ADD TO CART"} />}

            </div> */}

            {update ?
                <div onClick={updateProduct}>
                    <ProductBtn padding="0px 15px" height="40px" content={"UPDATE CART"} />
                </div> :
                <div>
                    <ProductBtn padding="0px 15px" height="40px" content={"ADD TO CART"} />
                </div>
            }
        </div>
    )
}