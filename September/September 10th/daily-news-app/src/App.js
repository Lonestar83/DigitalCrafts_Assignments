import React, {useState} from 'react';
import './App.css';
import News from './News'

function App() {
  const [search, setSearch] = useState('')
  const [news, setNews] = useState([])
 
  const onSearchChange = (value) => {
    setSearch(value)
  }

  const onSearchClick = () => {
    fetchNews()
  }

  const fetchNews = () => {
    const url= `https://newsapi.org/v2/everything?q=${search}&apiKey=6a31f92e8a4b4d0185f5cc0571be3666`
    fetch(url).then(response => response.json())
    .then(json => {
      setNews(json.articles)
      console.log(json.articles)
    })
  }

  return (
    <div>
      <header className="header">
        React NewsApp!
        <br/>
        <input type="text" onChange={(e) => onSearchChange(e.target.value) } />
        <button onClick={() => onSearchClick()}>Search</button>
      </header>  
      <News news = {news} />
      <footer className="footer">React NewsApp &copy; Robert McCutchen, 2019</footer>
    </div>
  );
}

export default App;