import React, { useState } from "react";
import barnlogo from "../assets/barnlogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5b5b5b] text-gray-300">
            <div>
                <img src={barnlogo} alt="logo" style={{ width: "75px"}} />
            </div>


            <ul className="hidden md:flex">
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="about" smooth={true} duration={500}>
                        Sign In
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="md:hidden">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>



            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[rgb(16,20,26)]"
                }>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">Sign In</li>
            </ul>
        </div>
    );
};

export default Navbar;
