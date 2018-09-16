import React from 'react';

class Circle extends React.Component {
  render(props) {
    const self = this;
    const style = {
      "width": self.props.size,
      "height": self.props.size,
      "backgroundColor": self.props.color,
      "borderRadius": "50%",
    }
    return (
      <div className={`${this.props.name} circle`} style={style}></div>
    )
  }
}

export default Circle;