import React from 'react'
import './signup.css'
import Navbar from '../../componats/Navbar'
import background4 from "../../pages/images/horse4.jpg";

function Signup() {
  return (
   <div><img src= { background4 } alt="horse6" height={200} width={1280} />
   <header>
   
   <div className="header4">
   
     <div className="position">
     
       <h1>Welcome To Sarah's</h1>
     </div>
     <ul className="content3">
       
       <li className="home3" a href="url">Home</li>
     </ul>
   </div>
 </header>
   
  <div className="hero-form">
    
    <div className="input">
      <form>
        <h3>Register</h3>
        <p>Create your Account:</p>
        <label htmlFor="name">First Name:</label>
        <input type="text" placeholder="First Name" name="name" id="name" className="form-input" />
        <br />
        <label htmlFor="name">Last Name:</label>
        <input type="text" placeholder="Last Name" name="name" id="name" className="form-input" /><br />
        <label htmlFor="email">Enter your email:</label>
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="name">Create Username:</label>
        <input type="text" placeholder="Create Username" name="name" id="name" className="form-input" /><br />
        <label htmlFor="create password"> Create Password:</label>
        <input type="text" placeholder="Create password" name="password" id="password" className="form-input" /><br />
        <button type="create" id="formsubmit">Create</button>
      </form>
    </div>
    <div className="image4">
    <img src= { background4 } alt="horse4" height={400} width={600} />
    </div>
  </div>
</div>

  )
}

export default Signup