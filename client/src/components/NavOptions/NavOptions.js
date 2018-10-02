import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authentication';

class NavOptions extends React.Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/aboutus'} className="nav-link">AboutUs</Link>
        </li>
        <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
          <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle" style={{ width: '25px', marginRight: '5px' }} />
          Logout
        </a>
      </ul>
    )
    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link to={'/aboutus'} className="nav-link">AboutUs</Link>
        </li>
      </ul>
    )

    return isAuthenticated ? authLinks : guestLinks
  }
}

NavOptions.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(NavOptions));