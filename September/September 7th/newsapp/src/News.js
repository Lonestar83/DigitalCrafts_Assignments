import React, {Component} from 'react';
import photo from './nophoto.jpeg'


export class NewsDetails extends Component {
    constructor() {
        super()
        this.state={
            news: [],
        }
    }

    getNews() {
        fetch("https://newsapi.org/v2/everything?q=dog&from=2019-08-07&sortBy=publishedAt&apiKey=6a31f92e8a4b4d0185f5cc0571be3666")
            .then(promise => promise.json())
            .then(json => {
                console.log('Success!')
                this.setState({
                    news: json.articles,
                })
            })

    }
     
    componentDidMount() {
        this.getNews()
    }

    render() {
      let newsToRender = this.state.news.map((newsItem, index) => {
        return (
            <div className="newsItem" key={index}>
                <img src={newsItem.urlToImage ? newsItem.urlToImage : photo} alt={newsItem.title}/>
                <h3>{newsItem.title}</h3>
                <span>Author: {newsItem.author}</span>
                <span>Description: {newsItem.description}</span>
            </div>
        )
      })
        return <div className="newsDisplay">{newsToRender}</div>
    }
}

export default NewsDetails