import { Btn } from "../styles/Button"
import { NavUpperCont } from "../styles/NavUpper"
export default function NavUpper() {
    return (
        <>
            <NavUpperCont>
                <div className="flex">
                    <h4><a href="">New Wicked Collections For Limited Time Up to 25% Off</a></h4>
                    <Btn size="12px" background="#eb4159" backgroundhover="#8e7069">Shop <span>Now</span></Btn>
                </div>
            </NavUpperCont>
        </>
    )
}