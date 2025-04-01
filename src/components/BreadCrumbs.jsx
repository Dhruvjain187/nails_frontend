import { Link } from "react-router-dom"
import { BreadCrumbsContainer } from "../styles/BreadCrumbs"
export default function BreadCrumbs() {
    return (
        <>
            <BreadCrumbsContainer>
                <ul>
                    <li className="icon">
                        <Link to={`/`}>
                            <i className="fa-solid fa-house fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <strong>Collections</strong>
                    </li>
                </ul>
            </BreadCrumbsContainer>
        </>
    )
}

