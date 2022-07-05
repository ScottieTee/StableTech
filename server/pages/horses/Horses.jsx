import React from 'react'
import './horses.css'
import Navbar from '../../componats/Navbar'
import background6 from "../../pages/images/horse1.webp";


function Horses() {
  return (
   <div> <img src= { background6 } alt="horse6" height={200} width={1280} />
    <div> 
    
  <header>
    
    <div className="header4">
    
      <div className="position">
      
        <h1>MY HORSES</h1>
      </div>
      <ul className="content3">
        <li className="login3" a href="url">Login out</li>
        <li className="home3" a href="url">Home</li>
      </ul>
    </div>
  </header>
  <div className="manage4">
    <button type="my horses" id="My">My Horses</button>
    <button type="edit" id="Add">Add New</button>
    <button type="edit" id="Edit">Edit</button>
    <button type="remove" id="Remove">Remove</button>
  </div>
  <table id="table1">
    <tbody><tr>
        <th>Ownername</th>
        <th>Horse Id</th>
        <th>vaccination date</th>
        <th>Feed</th>
        <th> <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" /></th>
      </tr>
      <tr className="row1">
        <th />
        <th />
        <th />
        <th />
        <th> <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" /></th>
      </tr>
      <tr className="row2">
        <th />
        <th />
        <th />
        <th />
        <th> <input type="radio" defaultChecked="checked" name="radio" />
          <span className="checkmark" /></th>
      </tr>
    </tbody></table>
  <button type="manage schedule" id="Schedule4">Manage Schedule</button>
</div>
</div>

  )
}

export default Horses