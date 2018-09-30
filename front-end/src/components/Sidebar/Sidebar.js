import sidebarStyle from './sidebar.css'
import NavOptions from '../NavOptions/NavOptions'

import React from 'react'

export const Sidebar = (props) => {
  return (
    <div className="sidebar-container hidden" style={sidebarStyle}>
      <div className="sidebar-content">
        <NavOptions />
      </div>
    </div>)
}

export default Sidebar;