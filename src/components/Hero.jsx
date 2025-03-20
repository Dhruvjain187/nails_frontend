import { HeroContainer } from "../styles/Hero"
import Button from "./Button"

export default function Hero() {
    return (
        <>
            <HeroContainer >
                <picture>
                    <source media="(max-width: 700px)" srcSet="https://media.lanailsupplies.com/wysiwyg/home-welcome.png" />
                    <img src="https://media.lanailsupplies.com/wysiwyg/home-welcome.png" width={700} height={522} alt="" />
                </picture>
                <div className="text">
                    <h1>Welcome to LA Nail Supply</h1>
                    <p>LA Nail Supply is a nail distributing company dedicated to providing the necessary tools for professionally licensed nail technicians. Our aim is to equip top-of-the-line nail salons with the best products available, along with the newest technological advances that are flourishing in the beauty industry.</p>
                    <Button content={"Read More Our Story"} />
                    {/* <a href="">Read More Our Story</a> */}
                </div>
            </HeroContainer>
        </>
    )
}