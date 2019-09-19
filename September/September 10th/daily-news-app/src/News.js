import React from 'react';
import photo from './nophoto.jpeg'

function News(props){
    let newsToRender = props.news.map((newsItem, index) => {
      return (
          <div className="newsItem" key={index}>
              <img src={newsItem.urlToImage ? newsItem.urlToImage : photo} alt={newsItem.title}/>
              <h3>{newsItem.title}</h3>
              <h5>Author: {newsItem.author ? newsItem.author : "Unknown"}</h5>
              <span>Description: {newsItem.description}</span>
          </div>
      )
    })
      return <div className="newsDisplay">{newsToRender}</div>
  }

  export default News;