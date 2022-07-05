import React from 'react'
import Navbar from '../../componats/Navbar'
import './dashboard.css'
import background4 from "../../pages/images/horse5.jpg";
import background1 from "../../pages/images/horse5.jpg";


function dashboard() {
  return (
    <div><img src= { background4 } alt="horse6" height={200} width={1280} />
    <header>
    
    <div className="header4">
    
      <div className="position">
      
        <h1>Welcome To Sarah's</h1>
      </div>
      <ul className="content3">
        
        <li className="home3" a href="url">Home</li>
        <li className="logout" a href="url">Logout</li>
      </ul>
    </div>
  </header>
   
     <div className="manage">
    <div className="manage">
      <button className= "manage_horse" type="manage horses" id="word">Manage Horses</button>
    </div>
    <div className="mmanage_schedule">
      <button className="mmanage_schedule" type="manage horses" id="word3">Manage Schedule</button>
    </div>
  </div>
  <div className="image3">
    <img src= { background1 } alt="horse6" height={400} width={350} />
  </div>
  <nav className=" fact">
    <h1>Secert</h1>
    <p>
      A good stable needs to be sturdy, spacious, comfortable, <br />
      and safe for both you and your horses. Planning the perfect<br />
      stable layout that is adequate for your horses and also makes<br />
      your day-to-day tasks easier requires a lot of trial and error.<br />
      catter hay or haylage in piles on the floor to mimic natural 'eating <br /> 
      on the move' behaviours. Scatter hard feed on top of roughage so it take<br /> 
      longer to eat. Hide carrots, swedes and apples in hay to encourage foraging.<br />
      Hang suitable fruit and veg at different levels from stable beams.<br /><br />
      Horses, like people, have a hierarchy of needs. This hierarchy takes<br />
      the form of a pyramid, with the most important need at the base of <br />
      the pyramid and higher-level needs at the top. Higher-level needs <br />
      cannot be fully addressed until the fundamental needs have been met.<br />
      The equine hierarchy of needs has safety at its base. As a prey animal,<br />
      safety is the horse’s most basic requirement and it’s the reason why <br />
      horses have such highly developed reactions to threat and such strong <br />
      affiliative needs – basically, there’s safety in numbers.Horses need to <br />
      live in a social group that is settled and constant, where they can see, <br />
      smell, hear and touch one another. Individual horses also need to have <br />
      a pair bond for mutual protection.
    </p>
  </nav>
</div>

  )
}

export default dashboard