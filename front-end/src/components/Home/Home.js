import React from 'react';

import LargeCardCreator from '../CardCreator/LargeCardCreator'

import homeStyle from  './home.css'

var articles = [
  {
    "title": "java script data types",
    "category": "technology",
    "date": "10/12/2012",
    "name": "high1",
    "description": "java script data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data types"
  },
  {
    "title": "java script data types2",
    "category": "Hello",
    "date": "10/12/2012",
    "name": "high2",
    "description": "java script data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data typesjava script data types"
  }
]

class Home extends React.Component {
  createCard() {
    return articles.map(function (value, i) {
      return (
        <LargeCardCreator properties={value} key={i}/>
      );
    });
  }

  render() {
    return(
      <div className="home-cards-container" style={homeStyle}>
        {this.createCard()}
      </div>
    )
  }
}

export default Home;