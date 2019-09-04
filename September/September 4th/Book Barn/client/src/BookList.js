import React, {Component} from 'react';
import './App.css';

class BookList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let bookItems = this.props.books.map(book => {
      return <div>{book.title}</div>
    })

    return <div>
      <h1>List of Books</h1>
      {bookItems}
      </div>
  }
}

export default BookList;
