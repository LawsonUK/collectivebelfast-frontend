import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"

import "./footer.scss"
import Social from "./social"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <Menu />
      </div>
      <div>
        <span>
          Collective is registered with the Charity Commission for Northern
          Ireland. Collective is registered as a charity for tax purposes with
          HMRC
        </span>
        <Social />
      </div>
    </footer>
  )
}

export default Footer
