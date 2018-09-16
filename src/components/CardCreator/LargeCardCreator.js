import React from 'react';

import cardStyle from './cardStyle.css' 

export const LargeCardCreator = (props) => {
  return(
    <div className="card-container" key={props.i} style={cardStyle}>
      <div className="card-content">
        <p className="card-category">{props.properties.category}</p>
        <p className="card-title">{props.properties.title}</p>
        <p className="card-description">{props.properties.description}</p>
      </div>
      <img src={require(`../../assets/highlight-assets/${props.properties.name}.jpg`)} alt={`image-${props.properties.name}`}/>      
    </div>
  )
}

export default LargeCardCreator;