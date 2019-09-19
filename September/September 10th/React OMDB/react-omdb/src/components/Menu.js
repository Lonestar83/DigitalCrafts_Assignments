import React, {useState} from 'react';

function Menu() {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
 
  const onSearchChange = (value) => {
    setSearch(value)
  }

  const onSearchClick = () => {
    fetchMovies()
  }

  const fetchMovies = () => {

    const url = `http://www.omdbapi.com/?s=${search}&apikey=564727fa`
    fetch(url).then(response => response.json())
    .then(json => {
      setMovies(json.Search)
    })


  }

  return (
    <div>
      <input type="text" onChange={(e) => onSearchChange(e.target.value) } />
      <button onClick={() => onSearchClick()}>Search</button>
    </div>
  );
}

export default Menu;