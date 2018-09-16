import React from 'react';
import ChartBar from './../GlobalComponents/ChartBar';

class Professional extends React.Component {
  render() {
    return (
      <div className="professional">
        <div className="header">
          <h3><b>
            <span className="professional-index profile-index">01 </span>
            <span className="professional-title profile-title">PROFESSIONAL</span>
          </b></h3>
        </div>
        <div className="knowledge-title">
          <span>MY KNOWLEDGE LEVEL IN SOFTWARE</span>
        </div>
        <div className="knowledge">
          <ChartBar name="JavaScript" percentage="80%"/>
          <ChartBar name="jQuery" percentage="70%"/>
          <ChartBar name="React Js" percentage="50%"/>
          <ChartBar name="HTML5" percentage="70%"/>
          <ChartBar name="CSS/LESS" percentage="75%"/>
          <ChartBar name="Redux" percentage="80%"/>
          <ChartBar name="Java" percentage="40%"/>
          <ChartBar name="Angular JS" percentage="25%"/>
          <ChartBar name="JADE/PUG/DUST" percentage="75%"/>
          <ChartBar name="Node Js" percentage="70%"/>
          <ChartBar name="Others" percentage="50%"/>
        </div>
      </div>)
  }
}

export default Professional;