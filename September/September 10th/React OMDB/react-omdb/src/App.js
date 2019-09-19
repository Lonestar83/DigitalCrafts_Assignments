import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Movies from './components/Movies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Menu />
     <Movies />
     <Footer />
    </div>
  );
}

export default App;
