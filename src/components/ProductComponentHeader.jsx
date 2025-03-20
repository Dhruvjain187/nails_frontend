import { ProductHeader } from "../styles/ProductComponentHeader"

export default function ProductComponentHeader({ title, btn }) {
    return (
        <>
            <ProductHeader >
                <h2>{title}</h2>
                <a href=""><span>{btn}</span><i className="fa-solid fa-arrow-right-long"></i></a>
            </ProductHeader>
        </>
    )
}