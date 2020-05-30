import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
// import Share from "../components/share"

import "./card.scss"

const Card = ({ article }) => {
  return (
    <div className="card">
      <BackgroundImage
        Tag="div"
        className="card-bg"
        fluid={article.featured_image.childImageSharp.fluid}
      ></BackgroundImage>
      <div className="card-content">
        <h3>
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <span className="date">
          {moment(article.published_on).format("Do MMM Y")}
        </span>
        <p>{article.excerpt}</p>
        <div className="teacher">
          <Img
            fluid={article.user.avatar.childImageSharp.fluid}
            alt="teacher"
          />
          <span>
            <Link to="/">{article.user.username}</Link>
          </span>
        </div>
        {/* <Share /> */}
      </div>
    </div>
  )
}

export default Card
