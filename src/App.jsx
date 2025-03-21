import { GlobalStyle } from "./styles/GlobalStyles"
import Home from "./pages/Home"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/GlobalStyles"

// const theme = {
//   colors: {
//     primary: "#ebfbff",
//     secondary: "#fff",
//     tertiary: "#003333"
//   }
// }

function App() {



  return (
    // <GlobalStyle theme={theme}>
    //   <Home />
    // </GlobalStyle>
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
