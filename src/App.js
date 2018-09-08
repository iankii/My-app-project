import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import Sidebar from './components/Sidebar/Sidebar';
import Blogs from './components/Blogs/Blogs';
import Highlight from './components/Highlights/Highlight';
import Eye from './components/Eyes/Eyes';

import appStyle from './app.css';



var highlights = [
  {
    name: 'high1',
    'title': 'title of first'  
  },
  {
    name: 'high2',
    'title': 'title of second'  
  },
  ,
  {
    name: 'high1',
    'title': 'title of third'  
  }
];

class App extends Component {

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

  // <div className="container" style={appStyle} onMouseMove={this.moveEye.bind(this)}>
  render() {
    return (
      <Router>
        <div className="container" style={appStyle} onMouseMove={this.moveEye.bind(this)} onTouchMove={this.moveEye.bind(this)}>
          <Sidebar />
          <a className="navbar-brand application-header">An<Eye />nym<Eye />usWalker</a>
          <div className="content-container" slider="slide-in">
            <Highlight highlights={highlights} />
            <span></span>
          </div>
          <Switch>
            <Route exact path='/create' component={CreateComponent} />
            <Route path='/edit/:id' component={EditComponent} />
            <Route path='/blogs/:id' component={Blogs} />
            <Route path='/index' component={IndexComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;