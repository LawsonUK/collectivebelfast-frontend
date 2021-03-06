import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Moment from "react-moment"

import "./featured-banner.scss"
// import Share from "./share"

const FeaturedBanner = ({ teaching }) => {
  return (
    <div className="row dark home-teaching">
      <BackgroundImage
        Tag="div"
        className="featured-teaching-bg"
        fluid={teaching.featured_image.childImageSharp.fluid}
      ></BackgroundImage>
      <div className="featured-teaching-content">
        <h2>
          <Link to={`/teachings/${teaching.slug}`}>{teaching.title}</Link>
        </h2>
        <p className="date">
          <Moment format="MMM Do YYYY">{teaching.published_at}</Moment>
        </p>
        <span>{teaching.excerpt}</span>
        <div className="teacher">
          <Img fluid={teaching.teacher.profile.childImageSharp.fluid} />
          <span>
            <Link to={`/teachers/${teaching.teacher.slug}`}>
              {teaching.teacher.name}
            </Link>
          </span>
        </div>
        {/* <Share /> */}
      </div>
    </div>
  )
}

export default FeaturedBanner
