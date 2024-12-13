import React from 'react'
import "./App.css"
import img1 from "./imgs/img1-top-aero1.jpg"
import img2 from "./imgs/img2-top-aero1.jpg"
import img3 from "./imgs/img3-top-aero1.jpg"
const Section3 = () => {
    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center mt-5 py-3' >
                <div className="container row gap-4 justify-content-center gap-md-0">
                    <div className='col-12 col-md-6  col-lg-4'>
                        <Hoverme bg={img1} type={"New collection"} title={"new trending"} sale={"20 "} />
                    </div>
                    <div className='col-12 col-md-6  col-lg-4'>
                        <Hoverme bg={img2} type={"Best Low price"} title={"Latest trending"} sale={"100"} />

                    </div>
                    <div className='col-12 col-lg-4  col-md-6 '>
                        <Hoverme bg={img3} type={"New collection"} title={"Older trending"} sale={"30.6"} />

                    </div>
                </div>

            </div>
        </>
    )
}


const Hoverme = ({ type, title, sale, btn, bg }) => {
    return (
        <div className='reuseable text-uppercase text-center h-100 w-100 overflow-hidden zindux p-5'>
            <img src={bg} className='zindexMinus w-100 h-100 ' alt="" />
            <p className='text-white'>{type}</p>
            <h1 className='text-warning fs-2'>{title}</h1>
            <p className='text-white'>sale Up to ${sale}% off</p>
            <button className=''>{btn}</button>
        </div>
    )
}
export default Section3;