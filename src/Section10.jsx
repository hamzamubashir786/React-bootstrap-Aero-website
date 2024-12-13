import React from 'react'
import { FaStar } from "react-icons/fa";

import img1 from "./imgs/br-02.png"
import img2 from "./imgs/br-03.png"
import img3 from "./imgs/br-04.png"
import img4 from "./imgs/br-06.png"
const Section9 = () => {
    return (
        <>
            <div className='w-100 p-lg-5 mb-4'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='clip1 text-white'>
                        <FaStar />  Logo Brands & Client <FaStar />
                    </div>
                </div>
                <div className='container my-4'>
                    <div className='row w-100 '>
                        <div className='col-lg-3 col-sm-6 col-md-4 text-center'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='col-lg-3 col-sm-6 col-md-4 d-none d-lg-inline text-center'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='col-lg-3 col-sm-6 col-md-4 d-none d-md-inline text-center'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='col-lg-3 col-sm-6 col-md-4 text-center  d-none d-sm-inline'>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section9;