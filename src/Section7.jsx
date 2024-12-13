import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import img1 from "./imgs/img1-top-aero1.jpg"
import img2 from "./imgs/img2-top-aero1.jpg"

const Section7 = () => {
    return (
        <>
            <div className='d-flex flex-column flex-md-row gap-3 gap-md-0 mt-5'>
                <div className='col-md-6 col-12'>
                    <Imgwala img={img1} type={"New Arivals"} title={"Good help & gurad"} />
                </div>
                <div className='col-md-6 col-12'>
                    <Imgwala img={img2} type={"Defulter Driver"} title={"Always happy"} />

                </div>
            </div>
        </>
    )
}

const Imgwala = ({ img, title, type }) => {
    return (
        <div className='cadrt'>

            <img src={img} />
            <div className='w-100 h-100 content1 text-white d-flex justify-content-center align-items-center flex-column p-md-0'>
                <p className='text-uppercase fw-bold font-10'>{type}</p>
                <h5 className='text-uppercase text-warning  mt-0 fw-bold'>{title}</h5>
                <p className='w-100 w-lg-75 p-1 font-13 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque cum dolores saepe porro explicabo.</p>
                <button className='btn7 d-flex justify-content-center align-items-center'>
                    <span>VIEW COLLECTION</span>

                    <div className=' bg-dark'><FaAngleRight className="text-white" /> </div>

                </button>

            </div>
        </div>
    )
}
export default Section7