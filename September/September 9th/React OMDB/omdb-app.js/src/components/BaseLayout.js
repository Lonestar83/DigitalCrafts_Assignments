import React from 'react';

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            keyword: ''
        }
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value 
        })
    }

    handleSubm

    render() {
        return <header>
                    <input type="text" placeholder="Enter a keyword"/>
                    <button onClick={this.search}>Search</button>
                </header>
    }
}

export class Footer extends Component {
    render() {
        return <footer>OMDB Search&copy; Robert McCutchen, 2019</footer>
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div className="body">
                <Menu />
                <div className="children">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        ) 
    }
}