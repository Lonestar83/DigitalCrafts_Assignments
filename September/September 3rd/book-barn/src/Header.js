import React, {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <div className="headerWrapper">
                <h1>Book Barn</h1>
                <a>Home</a>
                <a>My Books</a>
                <a>Browse</a>
                <form className="searchBar">
                    <input type="search"/>
                    <button>Search</button>
                </form>
            </div>
            )
    }
}

export default Header;