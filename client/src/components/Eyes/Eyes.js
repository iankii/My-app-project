import React, { Component } from 'react';

import eyeStyle from './eyeStyle.css'

class Eyes extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // eyeMove() {
  //   var eye1 = document.getElementsByClassName('eye')[0];
  //   var eye2 = document.getElementsByClassName('eye')[1];
  //   var x1 = (eye1.offsetLeft) + (eye1.offsetWidth / 2);
  //   var y1 = (eye1.offsetTop) + (eye1.offsetHeight / 2);
  //   var rad = Math.atan2(x - x1, y - y1);
  //   var rot = (rad * (180 / Math.PI) * -1) + 180;
  //   // console.log(eye, eye.offsetLeft)
  //   eye1.style.transform = 'rotate(' + rot + 'deg)';
  //   eye2.style.transform = 'rotate(' + rot + 'deg)';
  //   // eye.style = {
  //   //   '-webkit-transform': 'rotate(' + rot + 'deg)',
  //   //   '-moz-transform': 'rotate(' + rot + 'deg)',
  //   //   '-ms-transform': 'rotate(' + rot + 'deg)',
  //   //   'transform': 'rotate(' + rot + 'deg)'
  //   // };
  // }

  render() {
    return (
      <div className="eye-slide" style={eyeStyle}>
        <div className='eye'></div>
      </div>
    );
  }
}

export default Eyes;