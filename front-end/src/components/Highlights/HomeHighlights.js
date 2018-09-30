import React from 'react';
import Slider from './../Slider/Slider'
import SmallCardCreator from '../CardCreator/SmallCardCreator'

import highlightStyle from './highlights.css'

var highlights = [
  {
    name: 'high1',
    'title': 'title of firsttitle of firsttitle of firsttitle of firsttitle of firsttitle of first'
  },
  {
    name: 'high2',
    'title': 'title of secondtitle of firsttitle of firsttitle of first'
  },
  {
    name: 'high1',
    'title': 'title of thirdtitle of thirdtitle of thirdtitle of thirdtitle of third'
  },
  {
    name: 'high1',
    'title': 'title otitle of secondtitletitle of secondtitletitle of secondtitletitle of secondtitlef third'
  }
];

class HomeHighlights extends React.Component {
  createCard() {
    return highlights.map(function (value, i) {
      return (
        <SmallCardCreator properties={value} key={i}/>
      );
    });
  }

  render() {
    return (
      <div className="rightside-content-container" style={highlightStyle}>
        <Slider highlights={highlights} />
        <div className="cards-container">
          {this.createCard()}
        </div>
      </div>
    )
  }
}

export default HomeHighlights