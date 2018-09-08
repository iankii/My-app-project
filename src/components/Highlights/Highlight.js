import React, { Component } from 'react'
import Slider from './../Slider/Slider'

import hightlightStyle from './highlights.css'

class Highlight extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return(
      <div className="highlight-container" style={hightlightStyle}>
        <Slider highlights={this.props.highlights}/>
      </div>
    )
  }
}

export default Highlight;