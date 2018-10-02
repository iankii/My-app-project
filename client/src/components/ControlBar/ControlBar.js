import React, { Component } from 'react';

import NavOptions from './../NavOptions/NavOptions'
import controlBarStyle from './controlbar.css'

class ControlBar extends Component {
  render() {
    return (
      <div className="control-bar-container" style={controlBarStyle}>
        <NavOptions />
      </div>
    )
  }
}

export default ControlBar;