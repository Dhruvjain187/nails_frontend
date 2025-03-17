import { GlobalStyle } from "./styles/GlobalStyles"
import Home from "./pages/Home"

const theme = {
  colors: {
    primary: "#ebfbff",
    secondary: "#fff",
    tertiary: "#003333"
  }
}

function App() {



  return (
    // <GlobalStyle theme={theme}>
    //   <Home />
    // </GlobalStyle>
    <>
      <Home />
    </>
  )
}

export default App
