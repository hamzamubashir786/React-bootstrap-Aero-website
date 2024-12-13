import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import "./App.css"
const Section9 = () => {
    return (
        <>
            <div className='w-100 p-lg-5 my-3 font-12'>
                <p className='red text-center'>OUR NEWS</p>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='clip1 text-white'>
                        <FaStar />  SIGN UP FOR LATEST NEWS <FaStar />
                    </div>
                    <p className='ccc p-3'>Subscribe to our email list and stay up-to-date with all our anwesome releases and latest updates.</p>
                </div>
                <div className='w-100 d-flex justify-content-center'>
                    <form action="" className='fromtag w-0'>
                        <input type="text" className='w-100 imput h-100' placeholder='Enter your Email Address'/>
                        <div className='submit'>
                            <input type="button" className='w-100 h-100' value=">" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Section9;