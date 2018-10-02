import React from 'react';

class Divider extends React.Component {
  render() {
    const style = {
      "borderLeft": "3px solid green",
      "height": "375px",
      "width": "5px",
      "position": "absolute",
      "top": "50px",
      "left": "50%",
      "margin": "8px"
    }
    return (
      <div className="divider" style={style}></div>
    )
  }
}

export default Divider;