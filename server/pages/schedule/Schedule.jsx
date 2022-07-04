import React from 'react'
import './schedule.css'
import Navbar from '../../componats/Navbar'
import background7 from "../../pages/images/flag2.jpg";
import background8 from "../../pages/images/horse6.jpg";


function Schedule() {
  return (
    <div> <img src= { background8 } alt="horse6" height={200} width={1270} />
  <header>
    <div className="header4">
      <div className="position">
        <h1>Schedule</h1>
      </div>
      <ul className="content3">
        <li className="login3" a href="url">Login out</li>
        <li className="home3" a href="url">Home</li>
      </ul>
    </div>
  </header>
  <div className="rest_body">
  <img src= { background7 } alt="horse6" id= "image" height={200} width={1270} />
    <label htmlFor="date" id="date">Date:</label>
    <input type="date" id="date" name="date" />
    <button type="add vet" id="vet">Add Vet Appointment</button><br />
    <label htmlFor="date" id="date">Date:</label>
    <input type="date" id="date" name="date" />
    <button type="add blacksmith" id="blacksmith">Add Blacksmith</button><br />
    <label htmlFor="date" id="date">Date:</label>
    <input type="date" id="date" name="date" />
    <button type="add show" id="show">Add Show</button><br />
  </div>
  </div>

  )
}

export default Schedule