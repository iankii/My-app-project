import React from 'react';
import AboutMe from './AboutMe';
import Professional from './Professional';
import Experience from './Experience';
import ContactUs from './ContactUs';

class AboutUs extends React.Component {
  render() {
    return (
    <div className="aboutus">
      <div className="aboutme-container aboutus-section" autofocus><AboutMe /></div>
      <div className="professional-container aboutus-section"><Professional /></div>
      <div className="experience-container"><Experience /></div>
     <div className="contactus-container"> <ContactUs /></div>
    </div>  
    )
  }
}

export default AboutUs;