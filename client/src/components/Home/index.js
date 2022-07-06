import React from 'react';
import barnlogo from '../../assets/images/barnlogo.png';
import { Link } from 'react-scroll';

const Home = () => {
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

<ul>
    <li> Home</li>
    <li > Sign In</li>
</ul>
</div>
);
};

export default Home;
