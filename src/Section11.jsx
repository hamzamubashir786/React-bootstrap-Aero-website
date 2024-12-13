import React from 'react'
import { FaStar } from "react-icons/fa";

import img1 from "./imgs/engine.png"
import img2 from "./imgs/gear.png"
import img3 from "./imgs/steering.png"
import img4 from "./imgs/tyres2.png"
const Section9 = () => {
    return (
        <>
            <div className='w-100 p-lg-5 '>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='clip1 text-white'>
                        <FaStar /> # AERO ON INSTAGRAM<FaStar />
                    </div>
                    <p className='ccc p-3'>How us how you are styling your Rare pieces on Instagram with the hashtag #Presiden.</p>
                </div>
                <div className='container mt-5'>
                    <div className='myimg row w-100 '>
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