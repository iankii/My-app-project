import React, { Component } from 'react';

import slideArrow from './slideArrow.css'

class SlideArrow extends Component {
  
  render(props) {
    if(this.props.arrow === "left-arrow") {
      return(
        <div className="arrow-container" style={slideArrow}>
          <a className="prev">&#10094;</a>
        </div>
      );
    } else {
      return(
        <div className="arrow-container" style={slideArrow}>
          <a className="next">&#10095;</a>
        </div>
      );
    }
  }
}

export { SlideArrow };