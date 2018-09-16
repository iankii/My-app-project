import React from 'react'

export const SmallCardCreator = (props) => {
  return(
    <div className="card-container" key={props.i}>
      <img src={require(`./../../assets/highlight-assets/${props.properties.name}.jpg`)} alt={`image-${props.properties.name}`}/>
      <span>{props.properties.title}</span>
    </div>
  )
}

export default SmallCardCreator