import React, { Component } from 'react';

class Eventbinding extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     message:"Hello!"
        // }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        // this.setState({message:'Goodbye!'});
        console.log("Goodbye!");
    }
  render() {
    return (
      <div>
        {/* <div>{this.state.message}</div> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventbinding
