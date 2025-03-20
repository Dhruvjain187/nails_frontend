import { theme } from "../styles/GlobalStyles"
import { BrandContainer } from "../styles/Brands"
import ProductComponentHeader from "./ProductComponentHeader"
import { ProductHeader } from "../styles/ProductComponentHeader"

export default function Brands() {
    return (
        <>
            <BrandContainer >
                {/* <ProductComponentHeader title={"Shop By Brands"} btn={"VIEW MORE"} /> */}
                <ProductHeader className="exception">
                    <h2>Shop By Brands</h2>
                    <a href=""><span>VIEW MORE</span><i className="fa-solid fa-arrow-right-long"></i></a>
                </ProductHeader>
                <ul className="brand">
                    <li className="exception-li">
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/DND-Logo-R-min.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/OPI-min.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/Apres.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/Nitro_Logo-min.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/NotPolish-min.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/kiarasky_2.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/LIKO.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/lechat-logo.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <img src="https://media.lanailsupplies.com/wysiwyg/NR_logo_Small_Caps.webp" alt="" />
                        </div>
                        <p>icons</p>
                    </li>
                </ul>

            </BrandContainer>
        </>
    )
}


// https://media.lanailsupplies.com/wysiwyg/DND-Logo-R-min.webp
// https://media.lanailsupplies.com/wysiwyg/OPI-min.webp
// https://media.lanailsupplies.com/wysiwyg/Apres.webp
// https://media.lanailsupplies.com/wysiwyg/Nitro_Logo-min.webp
// https://media.lanailsupplies.com/wysiwyg/NotPolish-min.webp
// https://media.lanailsupplies.com/wysiwyg/kiarasky_2.webp
// https://media.lanailsupplies.com/wysiwyg/LIKO.webp
// https://media.lanailsupplies.com/wysiwyg/lechat-logo.webp
// https://media.lanailsupplies.com/wysiwyg/NR_logo_Small_Caps.webp