import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookComponent from './BookComponent'


class App extends Component {
  constructor(){
    super();
    this.state={id:"101"};
    this.findBookById = this.findBookById.bind(this)
  }

  findBookById(e){
    this.setState({id:e.target.value})
  }
  render() {
    return (
      <div>
      book id:<input onChange={this.findBookById} type="text" name="fname"/>
      <BookComponent id={this.state.id}/>
      </div>
    );
  }
}

export default App;
