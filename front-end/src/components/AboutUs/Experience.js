import React from 'react';
import Circle from './../GlobalComponents/Circle';
import Divider from './../GlobalComponents/Divider';
import ExperienceDetails from './ExperienceDetails';

class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <div className="header">
          <h3><b>
            <span className="experience-index profile-index">02 </span>
            <span className="experience-title profile-title">EXPERIENCE</span>
          </b></h3>
        </div>
        <div className="experience-chart">
        <div className="experience-divider">
          <div className="circles">
            <Circle name="circle-1" color="green" size="20px"/>
            <Circle name="circle-2" color="green" size="20px"/>
            <Circle name="circle-3" color="green" size="20px"/>
          </div>
          <Divider />
        </div>
          <div className="experience-details">
            <ExperienceDetails index="1" year="2016-2017" company="Cognizant" designation="Full Stack Developer" description="I worked on a Banking Management Application as a full stack developer." technologies="Java, Spring MVC, Hibernate, HTML, CSS, JavaScript, jQuery, AngularJs, jUnit."/>
            <ExperienceDetails index="2" year="2017-..." company="Cognizant" designation="Web Developer" description="I am working for one of the top US banks as Web Developer." technologies="HTML5, Jade/Dust, CSS/LESS, JavaScript, jQuery, Redux, React Js, Node Js, Jasmine."/>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;