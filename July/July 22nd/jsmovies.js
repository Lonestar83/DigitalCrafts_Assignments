let searchButton = document.getElementById("searchButton")
let textBox = document.getElementById("textBox")
let movieList = document.getElementById("movieList")

function clearTaskBar() {
    textBox.value= ""
}

searchButton.addEventListener('click', () => {

    keyword = textBox.value
    clearTaskBar()

    let moviesURL = `http://www.omdbapi.com/?s=${keyword}&page=2&apikey=3c846aa9`
    console.log(keyword)
    let req = new XMLHttpRequest()
    req.open('GET',moviesURL)
    req.addEventListener('load',() => {
    let movies = JSON.parse(event.currentTarget.responseText)
    
    let movieItems =  movies.Search.map(movie => {
        return `<div class="movie">
                    <img src='${movie.Poster ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"}'></img>
                    <a href="#" onclick='ShowDetails("${movie.imdbID}")'>${movie.Title}</a>
                </div>`
    })

    movieList.innerHTML = movieItems.join('')
    
    console.log(movies.Search)

   
}) 
req.send() 
})


function ShowDetails(imdbID) {
    console.log(imdbID)
    let movieDetails = document.getElementById("movieDetails")

    let URL2 = `http://www.omdbapi.com/?i=${imdbID}&page=2&apikey=3c846aa9`

    let req2 = new XMLHttpRequest()
    req2.open('GET', URL2)
    req2.addEventListener('load', () => {
        let selectedMovie = JSON.parse(event.currentTarget.responseText)
        console.log(selectedMovie)
      
        movieDetails.innerHTML = `<div id="selectedMovie">
                                    <img src='${selectedMovie.Poster}'/>
                                    <div id="infoBox">
                                        <span><b>Year:</b> ${selectedMovie.Year}</span>
                                        <span><b>Rated:</b> ${selectedMovie.Rated}</span>
                                        <span><b>Released:</b> ${selectedMovie.Released}</span>
                                        <span><b>Director:</b> ${selectedMovie.Director}</span>
                                    </div>
                                </div>`

        console.log(imdbID)
    })

    req2.send()  
}