import React from 'react';

class ExperienceDetails extends React.Component {
  render() {
    return (
      <div className={`experience-details-${this.props.index}`}>
        <div className="years">{this.props.year}</div>
        <div className="company-name">{this.props.company}</div>
        <div className="work-details">
          <span className="work-designation">{this.props.designation}</span>
          <span className="work-details">{this.props.description}</span>
        </div>
        <div className="technologies">
          <span className="technologies-details"><b>Tools/APIs Used:</b> {this.props.technologies}</span>
        </div>
      </div>
    )
  }
}

export default ExperienceDetails;