import React, {Component} from 'react'

class BookList extends Component {

    render() {
        let bookItems = this.props.books.map((book,index) => {
            return <div className="singleBook" key={index}>
                        <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
                        <div className="bookTitle"><h3>{book.title}</h3></div>
                        <button className="bookButton">Buy now!</button>
                    </div>
        })
        return <div className="booksContainer">{bookItems}</div>
    }

}

export default BookList