import { MainHeader, Header1, Header2, NavAnchor, ListAnchor, StickyHeader } from "../styles/Header"
import { CiPhone, CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
// import { CiMenuBurger } from "react-icons/ci";


export default function Header() {
    // function IconSize(props) {
    //     const { className } = props;
    //     return (
    //         <span className={`icons ${className}`} >
    //             <CiPhone />
    //         </span >
    //     )
    // }

    // function MenuIcon(props) {
    //     const { className } = props;
    //     return (
    //         <label htmlFor="menu">
    //             <div className={`menu ${className}`}><CiMenuBurger /></div>
    //         </label >
    //     )
    // }

    // function UserIcon(props) {
    //     const { className } = props;
    //     return (
    //         <span className={`icons ${className}`} >
    //             <FaRegUser />
    //         </span >
    //     )
    // }

    // function StoreIcon(props) {
    //     const { className } = props;
    //     return (
    //         <span className={`icons ${className}`} >
    //             <IoBagOutline />
    //         </span >
    //     )
    // }

    return (
        <>
            <StickyHeader>
                <MainHeader >
                    <input type="checkbox" id="menu" />

                    <Header1 >
                        <label htmlFor="menu">
                            <div className="menu"><i className="fa-solid fa-bars fa-2xl"></i></div>
                        </label>
                        {/* <MenuIcon className="menu-icon" /> */}
                        <div className="image"><img src="https://www.lanailsupplies.com/static/version1740644501/frontend/Cp/lanails/en_US/images/logo_black.png" alt="" /></div>
                        <div className="input">
                            <input type="text" placeholder="search" />
                        </div>
                        <div className="styled-icons">
                            <i className="fa-solid fa-phone fa-xl"></i>
                            {/* <IconSize className={"phone"} /> */}

                            <span className="number">
                                &nbsp; &nbsp;
                                +1 770-220-0108
                            </span>
                        </div>
                        <div className="styled-icons">
                            <i className="fa-solid fa-user fa-xl"></i>
                            {/* <UserIcon className={"user"} /> */}
                        </div>
                        <div className="styled-icons">
                            <i className="fa-solid fa-bag-shopping fa-xl"></i>
                            {/* <StoreIcon className={"store"} /> */}
                        </div>
                    </Header1>


                    <Header2 id="header-2">
                        <nav>
                            <div className="box shop-a">
                                <NavAnchor id="shop" colors="#8e7069"><span>Shop</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor>
                                <ul className="shop">
                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Acrylics</ListAnchor>
                                            <ListAnchor>Acrylics Brush</ListAnchor>
                                            <ListAnchor>Bonds & Primer</ListAnchor>
                                            <ListAnchor>Liquid Monomer</ListAnchor>
                                            <ListAnchor>Nail Glue</ListAnchor>
                                            <ListAnchor>Pink & White</ListAnchor>
                                            <ListAnchor>Powder Color</ListAnchor>
                                            <ListAnchor>Powder Glitter</ListAnchor>
                                        </div>

                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Dispsibles & Sanitation</ListAnchor>
                                            <ListAnchor>Anti-Bacterial Liquid</ListAnchor>
                                            <ListAnchor>Soap</ListAnchor>
                                            <ListAnchor>Disposibles</ListAnchor>
                                            <ListAnchor>Face Mask</ListAnchor>
                                            <ListAnchor>Hand Sanitation</ListAnchor>
                                            <ListAnchor>Latex Gloves</ListAnchor>
                                            <ListAnchor>Nitrile Gloves</ListAnchor>
                                            <ListAnchor>Predicure Kit</ListAnchor>
                                            <ListAnchor>Toe Separators</ListAnchor>
                                            <ListAnchor>Wipes</ListAnchor>
                                        </div>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Tips</ListAnchor>
                                            <ListAnchor>Nail Tips</ListAnchor>
                                            <ListAnchor>Tip Box</ListAnchor>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Manicure & Pedicure</ListAnchor>
                                            <ListAnchor>10 Step CBD</ListAnchor>
                                            <ListAnchor>3 Step</ListAnchor>
                                            <ListAnchor>5 Step</ListAnchor>
                                            <ListAnchor>6 Step</ListAnchor>
                                            <ListAnchor>Bath Flowers</ListAnchor>
                                            <ListAnchor>Callus Remover</ListAnchor>
                                            <ListAnchor>Collagen</ListAnchor>
                                            <ListAnchor>Cuticle Softener</ListAnchor>
                                            <ListAnchor>Jelly Spa</ListAnchor>
                                            <ListAnchor>Lotion</ListAnchor>
                                            <ListAnchor>Masque</ListAnchor>
                                            <ListAnchor>Massage Oil</ListAnchor>
                                            <ListAnchor>Spa Gloves & Socks</ListAnchor>
                                        </div>

                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Waxing</ListAnchor>
                                            <ListAnchor>Pot Wax</ListAnchor>
                                            <ListAnchor>Roll On Wax</ListAnchor>
                                            <ListAnchor>Wax Equipment</ListAnchor>
                                            <ListAnchor>Wax Skincare</ListAnchor>
                                            <ListAnchor>Soft Wax</ListAnchor>
                                            <ListAnchor>Creme Wax</ListAnchor>
                                            <ListAnchor>Flex Wax</ListAnchor>
                                            <ListAnchor>Hard Wex</ListAnchor>
                                            <ListAnchor>Wax Treatment</ListAnchor>
                                            <ListAnchor>Wax Applicators</ListAnchor>
                                            <ListAnchor>Disposables</ListAnchor>
                                            <ListAnchor>Cloths and Wipes</ListAnchor>
                                        </div>

                                    </li>

                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Nail Art</ListAnchor>
                                            <ListAnchor>3D Brush</ListAnchor>
                                            <ListAnchor>Blossom Gel</ListAnchor>
                                            <ListAnchor>Cat Eye</ListAnchor>
                                            <ListAnchor>Chrome</ListAnchor>
                                            <ListAnchor>Foil Transfer</ListAnchor>
                                            <ListAnchor>Glitter</ListAnchor>
                                            <ListAnchor>Hologram</ListAnchor>
                                            <ListAnchor>Kolinsky Brush</ListAnchor>
                                            <ListAnchor>Mermaid</ListAnchor>
                                            <ListAnchor>Molding Art</ListAnchor>
                                            <ListAnchor>Platinum</ListAnchor>
                                            <ListAnchor>Rhinestone Adhesive</ListAnchor>
                                            <ListAnchor>Striping Gel Polish</ListAnchor>
                                            <ListAnchor>Cream Gel</ListAnchor>
                                        </div>

                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Builder Gel</ListAnchor>
                                            <ListAnchor>Bonder</ListAnchor>
                                            <ListAnchor>Brush On</ListAnchor>
                                            <ListAnchor>Jar</ListAnchor>
                                            <ListAnchor>Solution</ListAnchor>
                                            <ListAnchor>The Gel Bottle</ListAnchor>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Salon Essentials</ListAnchor>
                                            <ListAnchor>Aceton</ListAnchor>
                                            <ListAnchor>Cleanser</ListAnchor>
                                            <ListAnchor>Cotton Coils</ListAnchor>
                                            <ListAnchor>Cotton Guaze</ListAnchor>
                                            <ListAnchor>Cotton Pads</ListAnchor>
                                            <ListAnchor>Microfiber Towels</ListAnchor>
                                            <ListAnchor>Nail Buffers</ListAnchor>
                                            <ListAnchor>Nail Files</ListAnchor>
                                            <ListAnchor>Nail Prep</ListAnchor>
                                            <ListAnchor>Prep & Cleanse</ListAnchor>
                                            <ListAnchor>Primer</ListAnchor>
                                            <ListAnchor>Quick Dry Spray</ListAnchor>
                                            <ListAnchor>Thinner</ListAnchor>
                                            <ListAnchor>Towels</ListAnchor>
                                            <ListAnchor>Bonds & Primer</ListAnchor>
                                            <ListAnchor>Fragnence Oil</ListAnchor>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Soft Gel</ListAnchor>
                                            <ListAnchor>Extend Gel</ListAnchor>
                                            <ListAnchor>Kits</ListAnchor>
                                            <ListAnchor>Natural Tips</ListAnchor>
                                            <ListAnchor>Sculpted</ListAnchor>
                                            <ListAnchor>Soft Gel</ListAnchor>
                                            <ListAnchor>Soft Gel Primer</ListAnchor>
                                            <ListAnchor>Soft Gel Tips</ListAnchor>
                                        </div>

                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#8e7069" fontwt="700">Tools & Implements</ListAnchor>
                                            <ListAnchor>Acrylic Nipper</ListAnchor>
                                            <ListAnchor>Carbides</ListAnchor>
                                            <ListAnchor>Chrome Applicator</ListAnchor>
                                            <ListAnchor>Cuticle Nipper</ListAnchor>
                                            <ListAnchor>Cuticle Pusher</ListAnchor>
                                            <ListAnchor>Gel Pusher</ListAnchor>
                                            <ListAnchor>Scissor</ListAnchor>
                                            <ListAnchor>Tip Cutter</ListAnchor>
                                            <ListAnchor>Toe Nipper</ListAnchor>
                                            <ListAnchor>Tweezer</ListAnchor>
                                            <ListAnchor>Nail Files</ListAnchor>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box best">
                                <NavAnchor colors="#0db7af" ><span>Best Seller</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor>
                                <ul className="shop best-shop">
                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" fontwt="700">Trending</ListAnchor>
                                            <ListAnchor>New Arrival</ListAnchor>
                                            <ListAnchor>Bonds & Primer</ListAnchor>
                                            <ListAnchor>Liquid Monomer</ListAnchor>
                                            <ListAnchor>Nail Glue</ListAnchor>
                                            <ListAnchor>Pink & White</ListAnchor>
                                            <ListAnchor>Powder Color</ListAnchor>
                                            <ListAnchor>Powder Glitter</ListAnchor>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box collection">
                                <NavAnchor colors="#f26a10"><span>Collection</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor>
                                <ul className="shop collectionul">
                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Acrylics</ListAnchor>
                                            <ListAnchor>Acrylics Brush</ListAnchor>
                                            <ListAnchor>Bonds & Primer</ListAnchor>
                                            <ListAnchor>Liquid Monomer</ListAnchor>
                                            <ListAnchor>Nail Glue</ListAnchor>
                                            <ListAnchor>Pink & White</ListAnchor>
                                            <ListAnchor>Powder Color</ListAnchor>
                                            <ListAnchor>Powder Glitter</ListAnchor>
                                        </div>

                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Dispsibles & Sanitation</ListAnchor>
                                            <ListAnchor>Anti-Bacterial Liquid</ListAnchor>
                                            <ListAnchor>Soap</ListAnchor>
                                            <ListAnchor>Disposibles</ListAnchor>
                                            <ListAnchor>Face Mask</ListAnchor>
                                            <ListAnchor>Hand Sanitation</ListAnchor>
                                            <ListAnchor>Latex Gloves</ListAnchor>
                                            <ListAnchor>Nitrile Gloves</ListAnchor>
                                            <ListAnchor>Predicure Kit</ListAnchor>
                                            <ListAnchor>Toe Separators</ListAnchor>
                                            <ListAnchor>Wipes</ListAnchor>
                                        </div>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Tips</ListAnchor>
                                            <ListAnchor>Nail Tips</ListAnchor>
                                            <ListAnchor>Tip Box</ListAnchor>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Manicure & Pedicure</ListAnchor>
                                            <ListAnchor>10 Step CBD</ListAnchor>
                                            <ListAnchor>3 Step</ListAnchor>
                                            <ListAnchor>5 Step</ListAnchor>
                                            <ListAnchor>6 Step</ListAnchor>
                                            <ListAnchor>Bath Flowers</ListAnchor>
                                            <ListAnchor>Callus Remover</ListAnchor>
                                            <ListAnchor>Collagen</ListAnchor>
                                            <ListAnchor>Cuticle Softener</ListAnchor>
                                            <ListAnchor>Jelly Spa</ListAnchor>
                                            <ListAnchor>Lotion</ListAnchor>
                                            <ListAnchor>Masque</ListAnchor>
                                            <ListAnchor>Massage Oil</ListAnchor>
                                            <ListAnchor>Spa Gloves & Socks</ListAnchor>
                                        </div>


                                    </li>

                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Nail Art</ListAnchor>
                                            <ListAnchor>3D Brush</ListAnchor>
                                            <ListAnchor>Blossom Gel</ListAnchor>
                                            <ListAnchor>Cat Eye</ListAnchor>
                                            <ListAnchor>Chrome</ListAnchor>
                                            <ListAnchor>Foil Transfer</ListAnchor>
                                            <ListAnchor>Glitter</ListAnchor>
                                            <ListAnchor>Hologram</ListAnchor>
                                            <ListAnchor>Kolinsky Brush</ListAnchor>
                                            <ListAnchor>Mermaid</ListAnchor>
                                            <ListAnchor>Molding Art</ListAnchor>
                                            <ListAnchor>Platinum</ListAnchor>
                                            <ListAnchor>Rhinestone Adhesive</ListAnchor>
                                            <ListAnchor>Striping Gel Polish</ListAnchor>
                                            <ListAnchor>Cream Gel</ListAnchor>
                                        </div>

                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Builder Gel</ListAnchor>
                                            <ListAnchor>Bonder</ListAnchor>
                                            <ListAnchor>Brush On</ListAnchor>
                                            <ListAnchor>Jar</ListAnchor>
                                            <ListAnchor>Solution</ListAnchor>
                                            <ListAnchor>The Gel Bottle</ListAnchor>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <ListAnchor padding="0 0 10px" colors="#f26a10" fontwt="700">Salon Essentials</ListAnchor>
                                            <ListAnchor>Aceton</ListAnchor>
                                            <ListAnchor>Cleanser</ListAnchor>
                                            <ListAnchor>Cotton Coils</ListAnchor>
                                            <ListAnchor>Cotton Guaze</ListAnchor>
                                            <ListAnchor>Cotton Pads</ListAnchor>
                                            <ListAnchor>Microfiber Towels</ListAnchor>
                                            <ListAnchor>Nail Buffers</ListAnchor>
                                            <ListAnchor>Nail Files</ListAnchor>
                                            <ListAnchor>Nail Prep</ListAnchor>
                                            <ListAnchor>Prep & Cleanse</ListAnchor>
                                            <ListAnchor>Primer</ListAnchor>
                                            <ListAnchor>Quick Dry Spray</ListAnchor>
                                            <ListAnchor>Thinner</ListAnchor>
                                            <ListAnchor>Towels</ListAnchor>
                                            <ListAnchor>Bonds & Primer</ListAnchor>
                                            <ListAnchor>Fragnence Oil</ListAnchor>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="box"><NavAnchor colors="#8549ac"><span>Matching Duo & Trio</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor></div>
                            <div className="box"><NavAnchor colors="#36454f"><span>Machines & Equipments</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor></div>
                            <div className="box"><NavAnchor colors="#fb56c1"><span>Dip & Gel Nail Polish</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor></div>
                            <div className="box"><NavAnchor colors="#8e7069"><span>Brands</span> <i className="fa-solid fa-angle-down fa-sm"></i></NavAnchor></div>
                            <div className="box"><NavAnchor className="exception" ><span>Store Pickup</span></NavAnchor></div>
                        </nav>
                        <label className="close" htmlFor="menu"><i className="fa-solid fa-xmark fa-xl"></i></label>
                    </Header2>

                </MainHeader>
            </StickyHeader>
        </>
    )
}