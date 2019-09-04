import React, {Component} from 'react';
import Header from './Header';
import BookList from './BookList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) // calling the parent class constructor 
    this.state = { 
      books: [] 
    }
    this.fetchBooks() 
  }
  
  fetchBooks = () => {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      this.setState({
        books: books 
      })
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <BookList books ={this.state.books}/>
      </div>
    )
  }
}
export default App;
