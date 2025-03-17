import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body{
    font-family: "Poppins","Roboto",sans-serif;
    margin: 0;
    font-size: 14px;
}
`

export const theme = {
    colors: {
        white: "white",
        black: "#232323",
        lightblack: "#293341",
        pinkish: "#eb4159",
        beige: "#f6f2f1",
        darkblack: "#333",
        brown: "#8e7069"
    }
}