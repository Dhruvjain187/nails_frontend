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

export default function Home() {
    return (
        <>
            <MainHome>
                <Header />
                <HomeSlider />
                <br />
                <FeaturedCategories />
                <ProductList />
                <Brands />
                <NewProduct />
                <SliderComponent2 />
                <Comments />
                <Hero />
                <Welcome />
                <HeroSection2 />
                <Footer />
            </MainHome>
        </>
    )
}