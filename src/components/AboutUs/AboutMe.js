import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme">
          <div className="title">
            <h2>I<span className="sign">'</span>M</h2>
            <h2><span>ANKIT</span></h2>
            <h2><span>PAL</span><span className="sign">.</span></h2>
            <p className="designation">Web Developer</p>
          </div>
          <div className="about-part intro-text">
            <span className="about-first-part intro-text">I'M A CREATIVE WEB DEVELOPER</span>
            <span className="about-second-part intro-text">I STAND ON A SWEET SPOT WHERE</span>
            <div className="about-third-part intro-text">
              <strong>DESIGN &nbsp;</strong>
              &
              <strong> &nbsp;CODE</strong>
            </div>
            <span className="about-fourth-part intro-text">INTERSECTS.</span>
          </div>
          <p className="contactme bold ">Feel free to contact me : <a href="mailto:ankit.pal2011@gmail.com">ankit.pal2011@gmail.com</a> </p>
      </div>)
  }
}

export default AboutMe;