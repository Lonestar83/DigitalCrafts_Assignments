import React, {Component} from 'react';
import News from './News';

class Menu extends Component {
    render() {
        return <header className="header">
                    React NewsApp!
                </header>
    }
}

class Footer extends Component {
    render() {
        return <footer className="footer">React NewsApp &copy; Robert McCutchen, 2019</footer>
    }
}

class BaseLayout extends Component {
    render() {
        return (
            <div className="body">
                <Menu />
                <News />
                <Footer />
            </div>
        ) 
    }
}

export default BaseLayout