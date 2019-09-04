import React, {Component} from 'react';
import './App.css';

class AddBook extends Component {

  constructor(props) {
    super(props)

    this.state = {
        title: ''
    }

  }

  handleSave = () => {

    // value is in the state 
    fetch('http://localhost:3001/books',{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            title: this.state.title 
        }) 
    })

  }

  handleTextBoxChange = (e) => {

    this.setState({
        [e.target.name]: e.target.value
    })

  }

  render() {
      return <div>
          <input type="text" name="title" onChange={this.handleTextBoxChange} />
          <button onClick={this.handleSave}>Save</button>
      </div>
  }
  
}

export default AddBook;
