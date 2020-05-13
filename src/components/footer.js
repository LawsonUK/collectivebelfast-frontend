import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

import "./footer.scss"

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
        <ul>
          <li>
            {/* <a href="/" target="blank"> */}
            <Icon
              icon={twitterCircleFilled}
              style={{ fontSize: "27.259260177612305px" }}
            />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="/" target="blank"> */}
            <Icon
              icon={facebookIcon}
              style={{ fontSize: "24.851852416992188px" }}
            />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="/" target="blank"> */}
            <Icon
              icon={circleinstagramIcon}
              style={{ fontSize: "24.851852416992188px" }}
            />
            {/* </a> */}
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
