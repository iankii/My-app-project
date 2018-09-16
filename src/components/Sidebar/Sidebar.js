import React from 'react';

import sidebarStyle from './sidebar.css'
import NavOptions from '../NavOptions/NavOptions'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      toogleOpen: true
    }
  }

  toggleSidebar(e) {
    let addSlideType = (this.state.toggleOpen) ? 'slide-out' : 'slide-in';
    let removeClass = (this.state.toggleOpen) ? 'slide-in' : 'slide-out';
    document.getElementsByClassName('sidebar-content')[0].classList.add(addSlideType);
    document.getElementsByClassName('sidebar-content')[0].classList.remove(removeClass);
    document.getElementsByClassName('content-container')[0].setAttribute('slider', addSlideType);
    this.setState({
      toggleOpen: !this.state.toggleOpen
    })
  }

  render() {
    return (
      <div className="sidebar-container " style={sidebarStyle}>
        <button className="sidebar-toggle button" onClick={this.toggleSidebar.bind(this)}>☰</button>
        <div className="sidebar-content">
          <NavOptions />
        </div>
      </div>)
  }
}

export default Sidebar; 