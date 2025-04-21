import { theme } from "../styles/GlobalStyles"
import { Btn, ProductButton } from "../styles/Button"

export default function Button({ content, padding = "10px", height = "auto" }) {
    return (
        <>
            <Btn padding={padding} height={height}>
                {content}
            </Btn>
        </>
    )
}


export function ProductBtn({ content, padding = "10px", height = "auto" }) {
    return (
        <>
            <ProductButton padding={padding} height={height}>
                <span>{content}</span>
            </ProductButton>
        </>
    )
}