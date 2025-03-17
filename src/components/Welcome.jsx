import { WelcomeCont } from "../styles/Welcome"

export default function Welcome() {
    return (
        <>
            <WelcomeCont>
                <li>
                    <article>
                        <picture>
                            <img src="https://media.lanailsupplies.com/wysiwyg/thumb-price_2.webp" alt="" />
                        </picture>
                        <h3>Best Prices & Offers</h3>
                        <p>Unbeatable deals that make your wallet smile!</p>
                    </article>
                </li>
                <li>
                    <article>
                        <picture>
                            <img src="https://media.lanailsupplies.com/wysiwyg/thumb-fast_2.webp" alt="" />
                        </picture>
                        <h3>Fast Delivery</h3>
                        <p>Nail your look in no time with our speedy delivery!</p>
                    </article>
                </li>
                <li>
                    <article>
                        <picture>
                            <img src="https://media.lanailsupplies.com/wysiwyg/thumb-quality_1.webp" alt="" />
                        </picture>
                        <h3>Best Quality</h3>
                        <p>Experience excellence with our best quality products.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <picture>
                            <img src="https://media.lanailsupplies.com/wysiwyg/thumb-pure_2.webp" alt="" />
                        </picture>
                        <h3>Pure & Hygienic</h3>
                        <p>Nail care products that prioritize purity and hygiene.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <picture>
                            <img src="https://media.lanailsupplies.com/wysiwyg/thumb-secure_2.webp" alt="" />
                        </picture>
                        <h3>Secure Transactions</h3>
                        <p>Protecting your data with reliable network security.</p>
                    </article>
                </li>
                <li>
                    <article className="exception">
                        <picture>
                            <img src="https://media.lanailsupplies.com/wysiwyg/store-pickup_1.webp" alt="" />
                        </picture>
                        <h3>In-Store Pickup</h3>
                        <p>Convenient store pickup for your orders</p>
                    </article>
                </li>
            </WelcomeCont>
        </>
    )
}