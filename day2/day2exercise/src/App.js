import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.images = [
      {
        path:"./pictures/image1.png",
        text:"yolo"
      },
      {
        path:"./pictures/image2.png",
        text:"yolo2"
    },
    {
      path:"./pictures/image3.png",
      text:"yolo3"
    }
  
  ];
    this.state={path:"./pictures/image1.png",text:"test"}
    this.imageStyle = {
      border : "2px solid red",
      padding:"2px",
      margin:"2px"
    };
  }
  
  updatePicture(){
    const currentpicture = this.createSrcElement(this.images);
    console.log(currentpicture);
    this.setState(currentpicture);
  }
  
  render() {
    return (
      <div>
      <button onClick={this.updatePicture.bind(this)}>
      Click me
    </button>
        <h1>hello</h1>
        <div>
        <img style={this.imageStyle} src={this.state.path} alt=""/>
        <a>{this.state.text}</a>
        </div>
      </div>
    )
  }

  createSrcElement(images){
    let randomIndex = Math.floor((Math.random() * images.length) + 0);
    console.log(randomIndex);
    return images[randomIndex];
  }
}



export default App;
