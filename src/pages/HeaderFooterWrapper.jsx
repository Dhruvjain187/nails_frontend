import Footer from "../components/Footer"
import Header from "../components/Header"
import { MainHome } from "../styles/Home"
import NavUpper from "../components/NavUpper"
import HeaderList from "../components/HeaderList"
import { Outlet } from "react-router-dom";


export default function HeaderFooterWrapper() {
    return (
        <>
            <MainHome>
                <NavUpper />
                <Header />
                <HeaderList />
                <Outlet />
                {/* <HomeSlider />
                <br />
                <FeaturedCategories />
                <ProductSlider />
                <Brands />
                <ProductSlider2 />
                <SliderComponent2 />
                <Comments />
                <Hero />
                <Welcome />
                <HeroSection2 /> */}
                <Footer />
            </MainHome>
        </>
    )
}


{/* <MainHome>
    <NavUpper />
    <Header />
    <HeaderList />
    <HomeSlider />
    <br />
    <FeaturedCategories />
    <ProductSlider />
    <Brands />
    <ProductSlider2 />
    <SliderComponent2 />
    <Comments />
    <Hero />
    <Welcome />
    <HeroSection2 />
    <Footer />
</MainHome> */}