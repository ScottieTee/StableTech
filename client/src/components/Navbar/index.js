import React from 'react';
import barnlogo from '../../assets/images/barnlogo.png';
import { Link } from 'react-scroll';
import { useHistory } from 'react-router-dom';

const Home = () => {
    //const history = useHistory();
   // const backHome = () => {
       // history.push("/home");
   // }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5b5b5b] opacity-75 text-gray-300">
            <div>
                <img className="rounded-full" src={barnlogo} alt="logo" style={{ width: "75px" }} />
            </div>


            <ul className="hidden md:flex flex space-x-4">
                <li className="hover:text-[#3faec1] hover:scale-105">
                  
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="about" smooth={true} duration={500}>
                        Sign In
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Home;
