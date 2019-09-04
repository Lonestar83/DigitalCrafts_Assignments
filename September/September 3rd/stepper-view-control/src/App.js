import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) // calling the parent class constructor 

    this.state = {
      counter: 0, 
    }
  }
    //The function increments the counter
    incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    } 

    //This function decrements the counter
    //The is function increments the counter
    decrementCounter = () => {
      this.setState({
        counter: this.state.counter - 1
      })
    }
    
    render() {

      return (
          <div className="incrementor">
            <button className="decrementButton" onClick={this.decrementCounter}>-</button>
            <h1>{this.state.counter}</h1>
            <button className="incrementButton" onClick={this.incrementCounter}>+</button>
          </div>
      )
    }

  }



export default App;
