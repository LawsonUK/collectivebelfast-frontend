import React from "react"
import { Link } from "gatsby"
import "./menu.scss"

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/church" activeClassName="active" partiallyActive="active">
            Church
          </Link>
        </li>
        <li>
          <Link
            to="/teachings"
            activeClassName="active"
            partiallyActive="active"
          >
            Teachings
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            activeClassName="active"
            partiallyActive="active"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link to="/visit" activeClassName="active" partiallyActive="active">
            Visit
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
