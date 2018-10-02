import React from 'react';

class InputBox extends React.Component {
  render() {
    return (
        <input type="text" className={`${this.props.name} input-box`} placeholder={this.props.placeholder} />
    )
  }
}

export default InputBox;