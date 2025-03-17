import { theme } from "../styles/GlobalStyles"
import { MainFooter, Footer1, Footer2 } from "../styles/Footer"

export default function Footer() {
    return (
        <>
            <MainFooter theme={theme}>
                <Footer1 theme={theme}>
                    <input type="checkbox" id="inp-1" />
                    <input type="checkbox" id="inp-2" />
                    <input type="checkbox" id="inp-3" />
                    <input type="checkbox" id="inp-4" />

                    <div className="logo">
                        <div className="col-flex">
                            <div>
                                <img src="https://media.lanailsupplies.com/wysiwyg/Latest_200.webp" alt="" />
                            </div>
                            <span>Keep up with the latest nail and trends.</span>
                            <ul className="flex-i">
                                <li><i className="fa-brands fa-facebook-f fa-lg"></i></li>
                                <li><i className="fa-brands fa-square-x-twitter fa-lg"></i></li>
                                <li><i className="fa-brands fa-instagram fa-lg"></i></li>
                                <li><i className="fa-brands fa-square-pinterest fa-lg"></i></li>
                            </ul>
                        </div>

                        <div className="col-flex">
                            <div>
                                <div className="size-18">FIND US</div>
                                <p className="flex-para">
                                    <span><i className="fa-solid fa-location-dot fa-lg"></i></span>
                                    <a href="">4809 Buford Hwy Atlanta<br />a,<br />GA, US 30341</a>
                                </p>
                                <p className="flex-para">
                                    <span><i className="fa-solid fa-envelope fa-lg"></i></span>
                                    <a href="">[email protected]</a>
                                </p>
                                <p className="flex-para">
                                    <span><i className="fa-solid fa-phone fa-lg"></i></span>
                                    <a href="">+1 770-220-0108</a>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-flex col-flex-1">
                        <div className="cont-1">
                            <div className="size-18">
                                <div className="row-flex">
                                    <span>WORKING HOURS</span>
                                    <label htmlFor="inp-1"><i className="fa-solid fa-angle-down fa-sm"></i>
                                    </label>
                                </div>
                            </div>
                            <ul className="res-ul">
                                <li>Monday: 9:30AM - 6:00PM</li>
                                <li>Tuesday: 9:30AM - 6:00PM</li>
                                <li>Wednesday: 9:30AM - 6:00PM</li>
                                <li>Thursday: 9:30AM - 6:00PM</li>
                                <li>Friday: 9:30AM - 4:00PM</li>
                                <li>Saturday: Closed</li>
                                <li>Sunday: 9:00AM - 6:00PM</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-flex col-flex-2">
                        <div className="cont-1">
                            <div className="size-18">
                                <div className="row-flex">
                                    <span>CATEGORIES</span>
                                    <label htmlFor="inp-2"><i className="fa-solid fa-angle-down fa-sm"></i></label>
                                </div>
                            </div>
                            <ul className="res-ul">
                                <li>Gel</li>
                                <li>Machine & Equipment</li>
                                <li>Nail Art</li>
                                <li>Dip</li>
                                <li>Polish</li>
                                <li>View All</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-flex col-flex-3">
                        <div className="cont-1">
                            <div className="size-18">
                                <div className="row-flex">
                                    <span>INFORMATION</span>
                                    <label htmlFor="inp-3"><i className="fa-solid fa-angle-down fa-sm"></i></label>
                                </div>
                            </div>
                            <ul className="res-ul">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Terms & Conditions</li>
                                <li>Returns & Exchanges</li>
                                <li>Shipping & Delivery</li>
                                <li>Privacy Policy</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-flex col-flex-4">
                        <div className="cont-1">
                            <div className="size-18">
                                <div className="row-flex">
                                    <span>QUICK LINKS</span>
                                    <label htmlFor="inp-4"><i className="fa-solid fa-angle-down fa-sm"></i></label>
                                </div>
                            </div>
                            <ul className="res-ul">
                                <li>Bulk Order</li>
                                <li>Store Location</li>
                                <li>My Account</li>
                                <li>Orders Tracking</li>
                                <li>FAQs</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                    </div>
                </Footer1>

                <Footer2 theme={theme}>
                    <small>Copyright © 2025 LA Nail Supplies. All rights reserved. Design & Developed by <a href="">Commerce Pundit</a></small>
                    <div>
                        <img src="https://media.lanailsupplies.com/wysiwyg/discover.webp" alt="" />
                        <img src="https://media.lanailsupplies.com/wysiwyg/american-ex.webp" alt="" />
                        <img src="https://media.lanailsupplies.com/wysiwyg/paypal.webp" alt="" />
                        <img src="https://media.lanailsupplies.com/wysiwyg/mastercard.webp" alt="" />
                        <img src="https://media.lanailsupplies.com/wysiwyg/apple-pay.webp" alt="" />
                        <img src="https://media.lanailsupplies.com/wysiwyg/afferm-footer.webp" alt="" />
                    </div>
                </Footer2>
            </MainFooter>
        </>
    )
}