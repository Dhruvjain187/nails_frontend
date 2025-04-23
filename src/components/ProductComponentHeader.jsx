import { ProductHeader } from "../styles/ProductComponentHeader"

export default function ProductComponentHeader({ title, btn, productPage = true }) {
    return (
        <>
            <ProductHeader >
                <h2>{title}</h2>
                {productPage && <a href=""><span>{btn}</span><i className="fa-solid fa-arrow-right-long"></i></a>}
            </ProductHeader>
        </>
    )
}