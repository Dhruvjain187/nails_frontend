import Footer from "../components/Footer"
import Header from "../components/Header"
import { MainHome } from "../styles/Home"
import HomeSlider from "../components/HomeSlider"
import FeaturedCategories from "../components/FeaturedCategories"
import ProductList from "../components/ProductList"
import NewProduct from "../components/NewProduct"
import Brands from "../components/Brands"
import SliderComponent2 from "../components/SliderComponent2"
import Comments from "../components/Comments"
import Hero from "../components/Hero"
import Welcome from "../components/Welcome"
import { HeroSection2 } from "../components/HeroSection2"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/GlobalStyles"
import NavUpper from "../components/NavUpper"
import ProductSlider from "../components/ProductSlider"
import ProductSlider2 from "../components/ProductSlider2"

export default function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <MainHome>
                    <NavUpper />
                    <Header />
                    <HomeSlider />
                    <br />
                    <FeaturedCategories />
                    {/* <ProductList /> */}
                    <ProductSlider />
                    <Brands />
                    {/* <NewProduct /> */}
                    <ProductSlider2 />
                    <SliderComponent2 />
                    <Comments />
                    <Hero />
                    <Welcome />
                    <HeroSection2 />
                    <Footer />
                </MainHome>
            </ThemeProvider>
        </>
    )
}