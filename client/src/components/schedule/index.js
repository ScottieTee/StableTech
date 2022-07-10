import React from "react";
import { Link } from "react-scroll";
import clockImage from "../../assets/images/clock.png"

const Schedule = (visitDay, visitMonth, visitYear, visitReason, horseName, ownerName, createdAt) => {
  return (

    <div class="w-screen h-screen flex justify-center items-center
      bg-gradient-to-br from-blue-700 to-white-700 p-6">
      <div class="flex flex-col justify-center gap-8 pt-4">
        <div className="flex justify-center pt-6">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            Barn Schedule</h1>
        </div>
        <div class="flex flex-row justify-center gap-4">
          <Link to="projects" smooth={true} duration={700}>
            <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
              Vet Appointment
              <span className="group-hover: duration-300">

              </span>
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={700}>
            <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
              Farrier Appointment
              <span className="group-hover: duration-300">

              </span>
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={700}>
            <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#5b5b5b] hover:border-[#3faec1] duration-300">
              Horse Show
              <span className="group-hover: duration-300">

              </span>
            </button>
          </Link>
        </div>

        <div class="flex flex-wrap justify-center">

          <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 p-4">

            <img src={clockImage} alt="horse-img"></img>

            <h3 class="text-center px-2 pd-5 p-1">Visit Day:</h3>

            <div class="p-1">
              <h5>Horse: </h5>
              <h5>Owner: </h5>
              <h5>Reason: </h5>
              <h5>Created At: </h5>
            </div>

          </div>
          <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 p-4">

            <img src={clockImage} alt="horse-img"></img>

            <h3 class="text-center px-2 pd-5 p-1">Visit Day:</h3>

            <div class="p-1">
              <h5>Horse: </h5>
              <h5>Owner: </h5>
              <h5>Reason: </h5>
              <h5>Created At: </h5>
            </div>

          </div> <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 p-4">

            <img src={clockImage} alt="horse-img"></img>

            <h3 class="text-center px-2 pd-5 p-1">Visit Day:</h3>

            <div class="p-1">
              <h5>Horse: </h5>
              <h5>Owner: </h5>
              <h5>Reason: </h5>
              <h5>Created At: </h5>
            </div>

          </div> <div class="flex flex-col bg-slate-300 rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 p-4">

            <img src={clockImage} alt="horse-img"></img>

            <h3 class="text-center px-2 pd-5 p-1">Visit Day:</h3>

            <div class="p-1">
              <h5>Horse: </h5>
              <h5>Owner: </h5>
              <h5>Reason: </h5>
              <h5>Created At: </h5>
            </div>

          </div>
        </div>
      </div>
    </div>

  )


}

export default Schedule;