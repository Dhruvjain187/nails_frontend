import { HeroSection } from "../styles/HeroSection2"
import Button from "./Button"

export function HeroSection2() {
    return (
        <>
            <HeroSection >
                <article>
                    <header>
                        <h2>Latest Trends, Tips, and Help Guides in Nail Care</h2>
                        <p>Stay updated with what's trending in the nail care industry. Get expert tips, product recommendations, application guides, and more. Our blog has valuable insights to help you get beautiful, healthy nails.</p>
                    </header>
                    <footer>
                        <Button content={"View All Blog"} />
                    </footer>
                </article>

                <div className="blog-posts">
                    <div className="posts">
                        <div className="inner-post">
                            <picture>
                                <source srcSet="" />
                                <img src="https://media.lanailsupplies.com/mageplaza/blog/post/l/a/lanailsupplies-blog-new-update.webp" alt="" />
                            </picture>

                            <div className="post-info">
                                <header>March 6, 2025 |
                                    186</header>
                                <h2>Spring 2025 Nail Colors Top and Trending Shades You</h2>
                                <footer>
                                    <Button content={"View More"} />
                                </footer>
                            </div></div>
                    </div>

                    <div className="posts">
                        <div className="inner-post">
                            <picture>
                                <source srcSet="" />
                                <img src="https://media.lanailsupplies.com/mageplaza/blog/post/l/a/lanailsupplies_blog.webp" alt="" />
                            </picture>

                            <div className="post-info">
                                <header>February 19, 2025 |
                                    1101</header>
                                <h2>2025 Nail Color Guide with Shades for Every Month</h2>
                                <footer>
                                    <Button content={"View More"} />
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div className="posts">
                        <div className="inner-post">
                            <picture>
                                <source srcSet="" />
                                <img src="https://media.lanailsupplies.com/mageplaza/blog/post/b/l/blog_3_1.webp" alt="" />
                            </picture>

                            <div className="post-info">
                                <header>January 30, 2025 |
                                    284</header>
                                <h2>12 Valentine's Day Nail Ideas: Trendy February Nail Colors to</h2>
                                <footer>
                                    <Button content={"View More"} />
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroSection>
        </>
    )
}