let newslist = document.getElementById("newslist")
let BrianArray = Object.values(news)[2]

function populateNews() {

    let newsDiv = BrianArray.map(article => {

        let newsDiv = `<div class="newsItem">
                            <span><b>Author:</b> ${article.author ? article.author : "No author provided"}</span>
                            <span><b>Title:</b> ${article.title ? article.title : "No title provided"}</span>
                            <span><b>Description:</b> ${article.description ? article.description : "No description provided"}</span>
                            <span><b>URL:</b> ${article.url ? article.url : "No URL provided"}</span>
                            <img src='${article.urlToImage ? article.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"}'></img>
                            <span><b>Publisher:</b> ${article.publishedAt ? article.publishedAt : "No publisher provided"}</span>
                        </div>`

        return newsDiv
    })

    newslist.innerHTML = newsDiv.join('')

}

populateNews() 