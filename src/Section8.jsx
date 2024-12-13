import React from 'react'
import "./App.css"

const Section8 = () => {
    return (
        <>

            <div className='container my-4'>
                <div className='row w-100'>
                    <div className='col-12 col-md-4 '>
                        <Reusable icon={"🚀"} title={"Free delivery"} />
                    </div>
                    <div className='col-12 col-md-4'>
                        <Reusable icon={"💳"} title={"Money guarantee"} />
                    </div>
                    <div className='col-12 col-md-4'>
                        <Reusable icon={"🎧"} title={"Online support"} />
                    </div>
                </div>
            </div>
        </>
    )
}

const Reusable = ({ icon, title }) => {
    return (
        <div className='row border1'>
            <div className='font-12 ccc col-12'>{title}</div>
            <div className='ccc col-10'>
                <p className='font-10'>Nam liber tempor cum soluta nobis eleifend option congue.</p>
            </div>
            <div className='col-2'>{icon}</div>
        </div>
    )
}

export default Section8