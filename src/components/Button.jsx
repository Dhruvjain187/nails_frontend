import { theme } from "../styles/GlobalStyles"
import { Btn } from "../styles/Button"

export default function Button({ content }) {
    return (
        <>
            <Btn >
                {content}
            </Btn>
        </>
    )
}