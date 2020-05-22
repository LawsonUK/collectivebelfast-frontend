import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

import "./featuredteaching.scss"

const FeaturedTeaching = ({ teaching }) => {
  return (
    <div className="row dark home-teaching">
      <div>
        <Link to="/teachings/">Teaching</Link>
        <h2>
          <Link to={`/teachings/${teaching.slug}`}>{teaching.title}</Link>
        </h2>
        <span>{teaching.excerpt}</span>
        <div className="teacher">
          <Img fluid={teaching.teacher.profile.childImageSharp.fluid} />
          <span>
            <Link to="/">{teaching.teacher.name}</Link>
          </span>
        </div>
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
      <div>
        <Link to={`/teachings/${teaching.slug}`}>
          <Img fluid={teaching.featured_image.childImageSharp.fluid} />
        </Link>
      </div>
    </div>
  )
}

export default FeaturedTeaching
