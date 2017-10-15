import React, { Component } from 'react';

class ConverterComponent extends Component{
    constructor(props){
        super();
        this.state={kilo:0,pound:0};
        this.convert = this.convert.bind(this)
    }
    const 
    convert(e){

        console.log(e.target.name);
        let inValue = e.target.value;
        //console.log(e.target.value);
        if(e.target.name === this.props.a){

        this.setState({kilo:inValue,pound:inValue*this.props.aValue})
        }
        else if(e.target.name === this.props.b){
            this.setState({kilo:inValue*this.props.bValue,pound:inValue})
        }
        
    }
    
    render(){
        return(
            <div>
            <h1>Hello, {this.props.name}</h1> 
            {this.props.a}<input onChange={this.convert} type="number" name={this.props.a} value={this.state.kilo}/><br/>
            {this.props.b}<input onChange={this.convert} type="number" name={this.props.b} value={this.state.pound} />
            </div>
        );
    }
}


export default ConverterComponent;