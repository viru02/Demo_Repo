import React, { Component } from 'react';
import cat from '../Asset/Multimedia/Video/cat.mp4';
import epic from '../Asset/Multimedia/Audio/epic-hybrid.mp3';
import img1 from '../Asset/images/14993.jpg';
import img2 from '../Asset/images/Butterfly-1.jpg';
import img3 from '../Asset/images/Vacation-1.jpg';
import '../Asset/CSS/Firstcomp.css';

const data=[
    {
      "id":1,
      "path":img1,
      "alt":'Flowers'
    },
    {
      "id":2,
      "path":img2,
      "alt":'Butterfly'
    },
    {
      "id":3,
      "path":img3,
      "alt":'Vacation'
    }
  ]

  
class Classcomp extends Component {
  clickhandler(){
    console.log("Button is Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Click Here</button>
        {data.map((item)=>{
        return (
          <div>
            {/* <h2>Hello first Component.</h2> */}
            <div>
              <img className='image' src={item.path} alt={item.alt}/>
            </div>
          </div>
        )
      })}
        <h2>Welcome to class component.</h2>
        <div><video className='image' src={cat} controls></video></div>
        <div><audio src={epic} controls></audio></div>
      </div>
    )
  }
}

export default Classcomp;