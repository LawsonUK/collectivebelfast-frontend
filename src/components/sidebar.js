import React from "react"
import { scaleDown as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import "./sidebar.scss"

const SideBar = props => {
  return (
    <Menu {...props}>
      <Link to="/" className="menu-item" activeClassName="active">
        Home
      </Link>
      <Link to="/church" className="menu-item" activeClassName="active">
        Church
      </Link>

      <Link to="/teachings" className="menu-item" activeClassName="active">
        Teachings
      </Link>

      <Link to="/articles" className="menu-item" activeClassName="active">
        Articles
      </Link>

      <Link to="/visit" className="menu-item" activeClassName="active">
        Visit
      </Link>
    </Menu>
  )
}

export default SideBar
