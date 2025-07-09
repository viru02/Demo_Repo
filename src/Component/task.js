import React from 'react';
import img1 from '../Asset/images/14993.jpg';
import img2 from '../Asset/images/Butterfly-1.jpg';
import img3 from '../Asset/images/Vacation-1.jpg';


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

  const align={
    width:'300px',
    height:'250px'
  }

function Task(props) {
  const image1=document.getElementsByClassName("image");
  console.log(image1);
  let cindex=1;
    function changeimg(){
      if(cindex>=data.length){
        cindex=0;
      }
      image1.src=data[cindex].path;
      cindex++;
    }

  return (
    <div>
      <img className='image' style={align} src={img1} alt='14993'/>
      <button onClick={changeimg()}>Next</button>
      <div>
        <h4>Hello {props.name} as {props.heroname}</h4>
      </div>
    </div>
  )
}

export default Task
