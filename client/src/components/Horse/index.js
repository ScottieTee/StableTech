import React from "react";
import horseImage from '../../assets/images/Horse.jpg'
import { QUERY_HORSES_OWNERNAME } from "../../utils/queries";

const Horses =()=>{
    return(

   
<div className="cards">
<header
    className="card-header">
        <h3 className="card-header--title">News</h3>
</header>

   <img src={horseImage} className="horse-img"></img>

<h5>Owner Name:</h5>
<h5>Owner Phone Number:</h5>
<h5>Feed:</h5>
<h5>Vaccination Date</h5>
<h5>Shoe Date</h5>
<h5>Barn Name</h5>



</div>
 )


}

export default Horses;