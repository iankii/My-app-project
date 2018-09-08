import React from 'react';
import { Link } from 'react-router-dom';

import sidebarStyle from './sidebar.css'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      toogleOpen: false
    }
  }

  toggleSidebar(e) {
    let addSlideType = (this.state.toggleOpen) ? 'slide-in' : 'slide-out';
    let removeClass = !(this.state.toggleOpen) ? 'slide-in' : 'slide-out';
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
              <Link to={'/blogs'} className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to={'/index'} className="nav-link">Index</Link>
            </li>
            <li className="nav-item">
              <Link to={'/edit/:id'} className="nav-link">Edit</Link>
            </li>
          </ul>
        </div>
      </div>)
  }
}

export default Sidebar; 