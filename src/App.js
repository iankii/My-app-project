import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import CreateComponent from './components/CreateComponent';
import ControlBar from './components/ControlBar/ControlBar';
import EditComponent from './components/EditComponent';
import Eye from './components/Eyes/Eyes';
import Highlight from './components/Highlights/Highlight';
import Home from './components/Home/Home';
import IndexComponent from './components/IndexComponent';
import Sidebar from './components/Sidebar/Sidebar';

import appStyle from './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      toogleOpen: true
    }
  }

  moveEye(event) {
    var x = event.clientX;
    var y = event.clientY;
    var eyes = document.getElementsByClassName('eye');
    [...eyes].forEach(eye => {
      var x1 = (eye.offsetLeft) + (eye.offsetWidth / 2);
      var y1 = (eye.offsetTop) + (eye.offsetHeight / 2);
      var rad = Math.atan2(x - x1, y - y1);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      // console.log(eye, eye.offsetLeft)
      eye.style.transform = 'rotate(' + rot + 'deg)';
      // eye.style = {
      //   '-webkit-transform': 'rotate(' + rot + 'deg)',
      //   '-moz-transform': 'rotate(' + rot + 'deg)',
      //   '-ms-transform': 'rotate(' + rot + 'deg)',
      //   'transform': 'rotate(' + rot + 'deg)'
      // };
    });
  }

  
  toggleSidebar(e) {
    // e.preventDefault(); // Let's stop this event.
    // e.stopPropagation();
    console.log('hello');
    let addSlideType = (this.state.toggleOpen) ? 'slide-out' : 'slide-in';
    let removeClass = (this.state.toggleOpen) ? 'slide-in' : 'slide-out';
    document.getElementsByClassName('sidebar-content')[0].classList.add(addSlideType);
    document.getElementsByClassName('sidebar-content')[0].classList.remove(removeClass);
    document.getElementsByClassName('home-highlight-container')[0].setAttribute('slider', addSlideType);
    setTimeout(() => {
      document.getElementsByClassName('sidebar-container')[0].classList.toggle('hidden', (addSlideType === 'slide-out'));
    }, 50);
    this.setState({
      toggleOpen: !this.state.toggleOpen
    })
  }

  // <div className="container" style={appStyle} onMouseMove={this.moveEye.bind(this)}>
  render() {
    return (
      <Router>
        <div className="container" style={appStyle} onMouseMove={this.moveEye.bind(this)} onTouchMove={this.moveEye.bind(this)}>
          <button className="sidebar-toggle button" onClick={this.toggleSidebar.bind(this)}>☰</button>
          <a className="navbar-brand application-header">An<Eye />nym<Eye />usWalker</a>
          <ControlBar />
          <Sidebar />
          <Highlight />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create' component={CreateComponent} />
            <Route path='/edit/:id' component={EditComponent} />
            <Route path='/index' component={IndexComponent} />
            <Route path='/aboutus' component={AboutUs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;