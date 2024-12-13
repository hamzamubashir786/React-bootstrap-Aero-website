import React from 'react'
import img1 from "./imgs/img1.png"
import "./App.css"
const Section2 = () => {
    return (
        <>

            <div className='Section2 w-100 bg-light bg-black pt-4'>
                <div className='w-100 d-flex text-uppercase justify-content-center flex-column line-height text-white text-center'>
                    <p className='fs-2'>Welcome To</p>
                    <h1><b>AERO car store</b></h1>
                </div>
                <div className='row w-100 justify-content-center p-md-3 mt-3 '>
                    <div className='col-12 col-md-6'>
                        <img src={img1} className='w-100'  alt="" />

                    </div>
                    <div className='col-12 col-md-5 px-sm-5 p-4'>
                        <div className='text-uppercase'>
                            <p className='ccc '> meet our</p>
                            <h3 className='red'>car club since 1892</h3>
                            <p className='ccc'>custome and club</p>
                        </div>
                        <p className='ccc'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.  </p>
                        <p className='ccc'>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section2;