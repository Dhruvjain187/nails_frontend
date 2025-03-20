import { FeatureCont } from "../styles/FeaturedCategories"
import ProductComponentHeader from "./ProductComponentHeader"

export default function FeaturedCategories() {
    return (
        <>
            <FeatureCont >
                {/* <header>
                    <h2>Featured Categories</h2>
                    <a href=""><span>VIEW MORE</span><i className="fa-solid fa-arrow-right-long"></i></a>
                </header> */}
                <ProductComponentHeader title={"Featured Categories"} btn={"VIEW MORE"} />

                <div className="scroll">
                    <div className="cards">
                        <div className="cards-pd">
                            <div className="cards-border">
                                <img height={376} width={500} src="https://media.lanailsupplies.com/catalog/category/Feature_Catagory.webp" alt="" />
                                <h3>Queen-Tessential Holiday 2024</h3>
                                <a href="" className="cards-a">DISCOVER NOW <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="cards-pd">
                            <div className="cards-border">
                                <img height={376} width={500} src="https://media.lanailsupplies.com/catalog/category/Featured_Category.webp" alt="" />
                                <h3>OPI'M Dreaming - Spring 2025</h3>
                                <a href="" className="cards-a">DISCOVER NOW <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="cards-pd">
                            <div className="cards-border">
                                <img height={376} width={500} src="https://media.lanailsupplies.com/catalog/category/Gelish_Spring_Fature_1.webp" alt="" />
                                <h3>Now & Zen Gelish Spring 2025</h3>
                                <a href="" className="cards-a">DISCOVER NOW <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </FeatureCont>
        </>
    )
}


// https://media.lanailsupplies.com/catalog/category/Feature_Catagory.webp
// https://media.lanailsupplies.com/catalog/category/Featured_Category.webp
// https://media.lanailsupplies.com/catalog/category/Gelish_Spring_Fature_1.webp