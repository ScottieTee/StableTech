import React from "react";
import horseImage from '../../assets/images/Horse.jpg'
import { Link } from 'react-scroll';
import { QUERY_HORSES_OWNERNAME } from "../../utils/queries";

const Horses = () => {
    return (

        <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700 p-6">
            <div class="flex flex-col justify-center gap-8 pt-4">
                <div class="flex flex-row justify-center gap-4 pt-6">
                    <Link to="projects" smooth={true} duration={700}>
                        <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
                            New horse
                            <span className="group-hover: duration-300">

                            </span>
                        </button>
                    </Link>
                    <Link to="projects" smooth={true} duration={700}>
                        <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
                            Edit horse
                            <span className="group-hover: duration-300">

                            </span>
                        </button>
                    </Link>
                    <Link to="projects" smooth={true} duration={700}>
                        <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
                            Remove horse
                            <span className="group-hover: duration-300">

                            </span>
                        </button>
                    </Link>
                </div>

                <div class="flex flex-wrap justify-center">

                    <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                        <img src={horseImage} alt="horse-img"></img>

                        <h2 class="text-center px-2 pd-5">Name:</h2>

                        <h5 class="p-3 text-center">Info:</h5>

                    </div>

                    <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                        <img src={horseImage} alt="horse-img"></img>

                        <h2 class="text-center px-2 pd-5">Name:</h2>

                        <h5 class="p-3 text-center">Info:</h5>

                    </div>

                    <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                        <img src={horseImage} alt="horse-img"></img>

                        <h2 class="text-center px-2 pd-5">Name:</h2>

                        <h5 class="p-3 text-center">Info:</h5>

                    </div>

                    <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                        <img src={horseImage} alt="horse-img"></img>

                        <h2 class="text-center px-2 pd-5">Name:</h2>

                        <h5 class="p-3 text-center">Info:</h5>

                    </div>
                </div>
            </div>
        </div>

    )


}

export default Horses;