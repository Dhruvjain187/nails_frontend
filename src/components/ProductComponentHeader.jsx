import { ProductHeader } from "../styles/ProductComponentHeader"
import { theme } from "../styles/GlobalStyles"

export default function ProductComponentHeader({ title, btn }) {
    return (
        <>
            <ProductHeader theme={theme}>
                <h2>{title}</h2>
                <a href=""><span>{btn}</span><i className="fa-solid fa-arrow-right-long"></i></a>
            </ProductHeader>
        </>
    )
}