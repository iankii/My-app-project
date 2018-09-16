import React from 'react';

class Error extends React.Component {
  
  render() {
    return (
      <div className="error-container">
        <span className="error-message hidden" >{this.props.errorMessage}</span>
      </div>
    )
  }
}

export default Error;