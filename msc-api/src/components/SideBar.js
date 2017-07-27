import React from 'react'
import { Link } from 'react-router-dom'

let SideBar = function() {
  let styleSideBar = {
    width: '100%'
  }
  return (
    <div style={styleSideBar}>
      <aside className="menu">
        <p className="menu-label">
          API LIST
        </p>
        <ul className="menu-list">
          <li className="menu-list"><Link to="/">HOME</Link></li>
          <li><Link to="/star-wars">STAR WARS</Link></li>
          <li><Link to="/random-cat">RANDOM CAT</Link></li>
          <li><Link to="/password-manager">PASSWORD MANAGER</Link></li>
        </ul>
      </aside>
    </div>
  )
}

export default SideBar
