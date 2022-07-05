import React from 'react'
import './login.css'
import Navbar from '../../componats/Navbar'
import background3 from "../../pages/images/horse6.jpg";

function Login() {
  return (
    <div><img src= { background3 } alt="horse6" height={200} width={1280} />
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
    
    
    <div className="input3">
      <form>
        <h3>Log in</h3>
        <label htmlFor="name">Username:</label>
        <input type="text" placeholder="Username" name="name" id="name" className="form-input" /><br />
        <label htmlFor="create password">Password:</label>
        <input type="text" placeholder="Password" name="password" id="password" className="form-input1" /><br />
        <button type="create" id="formsubmit3">Submit</button>
      </form>
    </div>
    <div className="image_3">
    <img src= { background3 } alt="horse6" height={400} width={750} />
    </div>
  </div>

  )
}

export default Login