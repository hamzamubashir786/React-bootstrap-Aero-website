import { FaBars } from "react-icons/fa6";
import React from 'react'
import logo from "./imgs/logo.png"
import { FaAngleDown } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { IoApps } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import "./App.css"

const Navbar = () => {
    return (
        <div>
            <nav className='w-100  d-flex justify-content-between text-white bg-dark align-items-center px-4 py-4 py-lg-0 '>
                <div className="logo d-flex  gap-3 align-items-center " >
                    <div className="d-lg-none ">
                        <FaBars className="text-white border fs-2 p-1" />
                    </div>
                    <img src={logo} alt="" />
                </div>
                <ul className=" d-lg-flex d-none navul" >
                    <li className="navli  p-4 position-relative zindex cursor-pointer">
                        Home <FaAngleDown />
                        <div className="rotatebox w-100 h-100 position-absolute zindexMinus rotate-show" ></div>
                    </li>
                    <li className="navli p-4 position-relative zindex cursor-pointer">
                        Shop <FaAngleDown />
                        <div className="rotatebox w-100 h-100 position-absolute zindexMinus" ></div>
                    </li>
                    <li className="navli h-100 p-4 position-relative zindex">
                        Featured <FaAngleDown />
                        <div className="rotatebox w-100 h-100 position-absolute zindexMinus" ></div>
                    </li>
                    <li className="navli  p-4 position-relative zindex">
                        Layout <FaAngleDown />
                        <div className="rotatebox w-100 h-100 position-absolute zindexMinus" ></div>
                    </li>
                    <li className="navli  p-4 position-relative zindex">
                        Pages <FaAngleDown />
                        <div className="rotatebox w-100 h-100 position-absolute zindexMinus" ></div>
                    </li>
                </ul>
                <div className="soical-link d-flex gap-3 fs-4 ">
                    <FaSearchengin />
                    <IoApps />
                    <GiWorld />
                    <FaBagShopping />
                </div>

            </nav>
        </div>
    )
}

export default Navbar;