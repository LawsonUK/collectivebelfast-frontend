import React from "react"
import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

import "./social.scss"

const Social = () => {
  return (
    <ul className="social">
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
          style={{ fontSize: "25.851852416992188px" }}
        />
        {/* </a> */}
      </li>
    </ul>
  )
}

export default Social
