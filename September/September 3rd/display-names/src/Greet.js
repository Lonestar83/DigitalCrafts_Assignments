import React, {Component} from 'react'

class Greet extends Component {
    render() {
        return <h1>Hello, {this.props.firstName} {this.props.lastName}!</h1>
    }
}

export default Greet 