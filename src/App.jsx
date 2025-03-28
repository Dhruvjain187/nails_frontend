import Home from "./pages/Home"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/GlobalStyles"
import HeaderFooterWrapper from "./pages/HeaderFooterWrapper";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CollectionPage from "./pages/CollectionPage";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HeaderFooterWrapper />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="collections" element={<CollectionPage />} />
    </Route>
  ))


  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
