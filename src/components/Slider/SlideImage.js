import React from 'react';

class SlideImage extends React.Component {
  render() {
    return (
      <div className="mySlides fade" key={this.props.imageDetails.name}>
        <img src={require(`../../assets/highlight-assets/${this.props.imageDetails.name}.jpg`)} alt={`image-${this.props.imageDetails.name}`}/>
        <div className="text">{this.props.imageDetails.title}</div>
      </div>
    )
  }
}

export default SlideImage;