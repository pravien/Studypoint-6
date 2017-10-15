import React, { Component } from 'react';
import ConverterComponent  from './ConverterComponent';

class App extends Component {

  constructor(){
    super();
    this.state={a:"kilo",b:"pound",aValue:2,bValue:0.5,default:0};
    this.change = this.change.bind(this)
  }

  change (e){
    console.log(e.target.value);
    if(e.target.value === "kilo/pound"){
      this.setState({a:"kilo",b:"pound",aValue:2,bValue:0.5,default:0});

    }
    else if(e.target.value === "kilo/ounce"){
      this.setState({a:"kilo",b:"ounce",aValue:35,bValue:0.028,default:0});
    }
  }
    
  
  render() {
    return (
      <div>
      <select id="mySelect" onChange={this.change}>
        <option value="kilo/pound">Kilo/pound</option>
        <option value="kilo/ounce">Kilo/ounce</option>
      </select>
      <ConverterComponent a={this.state.a} b={this.state.b} aValue={this.state.aValue} bValue={this.state.bValue} default={this.state.default}/>
      </div>
      
    );
  }
}

export default App;
