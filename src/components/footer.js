import React from "react"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </footer>
  )
}

export default Footer
