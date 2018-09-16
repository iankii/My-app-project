import React from 'react';

class ChartBar extends React.Component {

  render(props) {
    return (
      <div className={`${this.props.name} skill`}>
        <div className="skill-name">{this.props.name}</div>
        <div className="skill-percentage-wrapper"><div className="skill-percentage" style={{width: this.props.percentage}}></div>{this.props.percentage}</div>
      </div>
    )
  }
}

export default ChartBar;