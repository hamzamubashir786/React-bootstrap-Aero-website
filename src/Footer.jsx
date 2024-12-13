import React from 'react'
import logo from "./imgs/logo.png"
import payment from "./imgs/payment.png"

const Footer = () => {
    return (
        <>

            <footer className='row justify-content-center m-0'>
                <div className="footerbox1 col-12 col-lg-3 col-sm-6">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                    <div>
                        <i className="fa-solid fa-location-dot"></i> &nbsp; &nbsp;
                        <span>1734 Stonecoal Road </span>
                    </div>


                    <div>
                        <i className="fa-solid fa-phone"></i> &nbsp; &nbsp;
                        <span>+021-95-51-84 </span>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope"></i>   &nbsp; &nbsp;
                        <span>email@email.com</span>
                    </div>

                </div>
                <div className="footerbox1  col-12 col-lg-3 col-sm-6">
                    <h1>CATEGORIES</h1>
                    <div>
                        <span>Hot deals</span>
                    </div>
                    <div><span>Laptops</span></div>
                    <div><span>Smartphones</span></div>
                    <div><span>Cameras</span></div>
                    <div><span>Accessories</span></div>

                </div>
                <div className="footerbox1 col-12 col-lg-3 col-sm-6">
                    <h1>INFORMATION</h1>
                    <div><span>About Us</span></div>
                    <div><span>Contact Us</span></div>
                    <div><span>Privacy Policy</span></div>
                    <div><span>Orders and Returns</span></div>
                    <div><span>Terms & Conditions</span></div>

                </div>
                <div className="footerbox1 col-12 col-lg-3 col-sm-6">
                    <h1>SERVICE</h1>
                    <div><span>My Account</span></div>
                    <div><span>View Cart</span></div>
                    <div><span>Wishlist</span></div>
                    <div><span>Track My Order</span></div>
                    <div><span>Help</span></div>

                </div>
            </footer>
            <div className="last">
                <p>Copyright ©2024 All rights reserved</p>
                <img src={payment} alt="" />
            </div>
        </>
    )
}

export default Footer