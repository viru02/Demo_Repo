import React from 'react';
import img1 from '../Asset/images/14993.jpg';
import '../Asset/CSS/Firstcomp.css';
 
function Firstcomp() {
  const butn=()=>{
    console.log("Button is Clicked");
  }
    return (
      <div>
        <button onClick={butn}>Click Here</button>
        <h2>Hello first Component.</h2>
        <div>
          <img className='image' src={img1} alt='Flower'/>
        </div>
      </div>
    ) 
}

export default Firstcomp;
