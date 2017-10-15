

const URL = 'http://localhost:4001/books';
class DataStore{
    constructor(){
        this._books=[];
        this.loadBooks = this.loadBooks.bind(this);
    }

    loadBooks(callback){
        fetch(URL, {method: 'GET'}).then(function(data){
            return data.json();
        }).then(function(data){
            callback(data);
        });
    }

    getAllBooks(){
        this._books;  
    }

    createBook(book, callback){
        fetch(URL,
            {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(book)
            }
        ).then(function(data){
            return data.json();
        }).then(()=>this.loadBooks(callback));
    }

    
}

export default DataStore;