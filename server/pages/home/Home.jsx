import React from 'react'
import Navbar from '../../componats/Navbar'
import './home.css'
import background from "../../pages/images/horse1.webp";
import background11 from "../../pages/images/horse2.webp";

function Home() {
    return (
        
           <div><img src= { background } alt="horse2" height={200} width={1280} />
   <header>
   
   <div className="header4">
   
     <div className="position">
     
       <h1>Welcome To Sarah's</h1>
     </div>
     <ul className="content3">
       
       <li className="home3" a href="url">Home</li>
       <li className="about" a href="url">About</li>
       <li className="login" a href="url">Login</li>
     </ul>
   </div>
 </header>
            <div>
                <header className="header">
                    <div className="stable">
                       
                       </div>
                    
                </header>
                <div className="welcome">
                <div style={{ background: `url(${background11})` }}>
                
               
                    <div className="move">
                    
                   
                    
                        <p> Welcome to Sarah's Barn</p>
                    </div>
                    <div className="button">
                        <a href="default.asp" target="_blank">Sign In </a>
                    </div>
                    <div className="touch">
                        <p>"No hour of life is wasted that is spent in the saddle" - Winston Churchill</p>
                    </div>
                </div>
                </div>
                
                
                

                <footer>

                </footer>
            </div>





        </div>
    )
}

export default Home