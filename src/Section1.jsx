import React from 'react';
import Form from 'react-bootstrap/Form';

const Section1 = () => {
    return (
        <>
            <div className='Sectionbox w-100 row justify-content-center align-items-center flex-column gy-4 gx-3'>
                <div className='Sectionbox1 w-sm-100 row justify-content-between text-white text-uppercase'>
                    <div className='col-12 col-sm-6 bg-red d-flex justify-content-center align-items-center pt-2'>
                        <p>Search By Year, Make, Model</p>
                    </div>
                    <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center pt-2'>
                        <p>Make, Model, Year, Type</p>
                    </div>
                </div>
                <div className='Sectionbox2 bg-29 row p-4 mt-4 g-1'>
                    <div className='col-6 col-md-3'>
                        <Form.Select className='font-13' aria-label="Default select example">
                            <option>Select Make</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='col-6 col-md-3'>
                        <Form.Select className='font-13' aria-label="Default select example">
                            <option>select Model</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='col-6 col-md-3'>
                        <Form.Select className='font-13' aria-label="Default select example">
                            <option>Select Year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='col-6 col-md-3'>
                        <button className='w-100 h-100 bg-red text-white fw-bold rounded'>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section1;