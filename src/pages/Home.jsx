import HomeSlider from "../components/HomeSlider"
import FeaturedCategories from "../components/FeaturedCategories"
import Brands from "../components/Brands"
import SliderComponent2 from "../components/SliderComponent2"
import Comments from "../components/Comments"
import Hero from "../components/Hero"
import Welcome from "../components/Welcome"
import { HeroSection2 } from "../components/HeroSection2"
import ProductSlider from "../components/ProductSlider"
import ProductSlider2 from "../components/ProductSlider2"

export default function Home() {
    return (
        <>
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
        </>
    )
}