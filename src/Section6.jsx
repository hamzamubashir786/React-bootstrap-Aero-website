import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import img1 from "./imgs/1.jpg"
import img2 from "./imgs/2.jpg"
import img3 from "./imgs/3.jpg"
// import hoverimg1 from "./imgs"
import hoverimg2 from "./imgs/4.jpg"
import hoverimg3 from "./imgs/5.jpg"

const Section4 = () => {
    return (
        <>

            <div className='w-100 p-lg-5 mt-5'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='clip1 text-white'>
                        <FaStar />  Our Product <FaStar />
                    </div>
                    <p className='ccc'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                </div>
                <div className="container-fliud gridparent row justify-content-center m-0 ">
                    <div className='col-12  col-sm-5  col-xl-3'>
                        <Cart img={img3} hoverimg={hoverimg3} title={"Aopo design woolrich Klettersack"} />
                    </div>
                    <div className='col-12 col-sm-5 col-xl-3 '>
                        <Cart img={hoverimg2} hoverimg={hoverimg3} title={"bopo design woolrich Klettersack"} />
                    </div>
                    <div className='col-12 col-sm-5 col-xl-3 '>
                        <Cart img={hoverimg3} hoverimg={hoverimg2} title={"copo design woolrich Klettersack"} />
                    </div>
                    <div className='col-12 col-sm-5 col-xl-3 '>
                        <Cart img={hoverimg3} hoverimg={hoverimg2} title={"copo design woolrich Klettersack"} />
                    </div>

                </div>
            </div>

        </>
    )
}


const Cart = ({ img, hoverimg, title }) => {
    return (
        <div className='w-100 h-100'>
            <div className="w-100 imgparent">
                <img src={img} alt="" />
                <img className='imgab' src={hoverimg} alt="" />
            </div>
            <div className='p-3'>
                <div className="stars d-flex my-3 font-13">
                    <FaStar className='text-warning' />
                    <FaStar className='text-warning' />
                    <FaStar className='text-warning' />
                    <FaStar className='text-white' />
                    <FaStar className='text-white' />
                </div>
                <h6 className='ccc font-10 text-uppercase'>{title}</h6>
                    <p className='red'>$150.00</p>
                <div className="btnparent w-100 d-flex justify-content-center"  >
                    <button className='addcartbtn'>
                        <FaCartShopping className='ccc'/>
                        &nbsp;
                        &nbsp;
                        <span className=''>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section4;