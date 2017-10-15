import React, { Component } from 'react';
import DataStore from "./DataStore"

class BookComponent extends Component {
    constructor(props){
        super();
        this.store = new DataStore();
        this.state={_data: []};
        this.store.loadBooks(function(data){
            //const _data = data;
            this.setState({_data:data});
        }.bind(this));
        this.findBookById = this.findBookById.bind(this);
        this.createBook = this.createBook.bind(this);
        
    }
  render() {
      console.log(this.state._data)
      
      return (
          
          <div>
          <form onSubmit={this.createBook}>
            <label>title:
            <input type="text" value={this.state.value}/>
            </label>
            <label>Autor:
            <input type="text" value={this.state.value}/>
            </label>
            <label>rating:
            <input type="text" value={this.state.value}/>
            </label>
            <label>published year:
            <input type="text" value={this.state.value}/>
            </label>
          <input type="submit" value="Create Book" />
            </form>
            {this.findBookById(this.props.id)}
          </div>
      );
  }

  createBook(e) {
    const book = {
        "title": "test",
        "author": "test",
        "rating": 5,
        "year_published": 2017
    };
    this.store.createBook(book, (data)=>{this.setState({_data: data})});
}

  findBookById(id){
      for(let i=0; i<this.state._data.length; i++){
          if(this.state._data[i].id == id){
            return(
                <div>
                <h1>id: {this.state._data[i].id}</h1>
                <h1>Title: {this.state._data[i].title}</h1>
                <h1>Author: {this.state._data[i].author}</h1>
                <h1>Rating: {this.state._data[i].rating}</h1>
                <h1>Year published: {this.state._data[i].year_published}</h1>
                </div>); 
          }
      }
      return (<h1>book with id: {id}, doesnt exist</h1>);
  }
}

export default BookComponent;