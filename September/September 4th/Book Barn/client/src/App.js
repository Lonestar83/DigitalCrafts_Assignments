import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import AddBook from './AddBook';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    this.fetchBooks()

  }

  fetchBooks = () => {

    // http://localhost:3001/books 
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(json => {
        this.setState({
          books: json
        })
      })

  }


  render() {

    return <div>
      <AddBook />
      <BookList books={this.state.books} />
    </div>
  }
}

export default App;