import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="send-button" onClick={this.props.onclick}>Send</button>
    )
  }
}

export default Button;