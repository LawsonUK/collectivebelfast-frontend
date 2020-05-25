import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Share from "../components/share"

import "./card.scss"

const CardTeaching = ({ teaching }) => {
  return (
    <div className="card">
      <BackgroundImage
        Tag="div"
        className="card-bg"
        fluid={teaching.featured_image.childImageSharp.fluid}
      ></BackgroundImage>
      <div className="card-content">
        <h3>
          <Link to={`/teachings/${teaching.slug}`}>{teaching.title}</Link>
        </h3>
        <span className="date">
          {moment(teaching.published_on).format("Do MMM Y")}
        </span>
        <p>{teaching.excerpt}</p>
        <div className="teacher">
          <Img
            fluid={teaching.teacher.profile.childImageSharp.fluid}
            alt="teacher"
          />
          <span>
            <Link to="/">{teaching.teacher.name}</Link>
          </span>
        </div>
        <Share />
      </div>
    </div>
  )
}

export default CardTeaching
