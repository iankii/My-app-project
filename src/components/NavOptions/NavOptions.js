import React from 'react';
import { Link } from 'react-router-dom';

export const NavOptions = (props) => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={'/'} className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to={'/create'} className="nav-link">Create</Link>
      </li>
      <li className="nav-item">
        <Link to={'/index'} className="nav-link">Index</Link>
      </li>
      <li className="nav-item">
        <Link to={'/edit/:id'} className="nav-link">Edit</Link>
      </li>
      <li className="nav-item">
        <Link to={'/aboutus'} className="nav-link">AboutUs</Link>
      </li>
    </ul>
  )
}

export default NavOptions