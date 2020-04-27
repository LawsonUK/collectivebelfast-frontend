import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/church" activeClassName="active">
            Church
          </Link>
        </li>
        <li>
          <Link to="/teachings" activeClassName="active">
            Teachings
          </Link>
        </li>
        <li>
          <Link to="/articles" activeClassName="active">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/visit" activeClassName="active">
            Visit
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
