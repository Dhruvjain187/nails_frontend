import { theme } from "../styles/GlobalStyles"
import { Btn } from "../styles/Button"

export default function Button({ content, padding = "10px", height = "auto" }) {
    return (
        <>
            <Btn padding={padding} height={height}>
                {content}
            </Btn>
        </>
    )
}