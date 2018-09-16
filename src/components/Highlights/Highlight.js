import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

// import Slider from './../Slider/Slider'

// import hightlightStyle from './highlights.css'

import HomeHighlights from './HomeHighlights'

class Highlight extends Component {
  // constructor(props) {
  //   super(props)
  // }

  // render() {
  //   return(
  //     <div className="highlight-container" style={hightlightStyle}>
  //       <Slider highlights={this.props.highlights}/>
  //     </div>
  //   )
  // }
  render() {
    return(
      <Switch>
        <Route exact path='/' component={HomeHighlights} />
      </Switch>
    )
  }
}

export default Highlight;