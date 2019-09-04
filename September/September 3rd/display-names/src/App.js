import React,{Component} from 'react'
import Greet from './Greet'

class App extends Component {


  // html here is called JSX 
  // render defines what to put on the screen
  render() {
    return (
        <div>
          <Greet firstName = "Mary" lastName = "Quite Contrary" />
        </div>
    )
  }

} 

// making sure that App class is accessible from outside 
// making sure that other can import App  
export default App 

