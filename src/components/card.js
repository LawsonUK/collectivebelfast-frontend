import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import BackgroundImage from "gatsby-background-image"

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
        <h3>{article.title}</h3>
        <span className="date">
          {moment(article.published_on).format("Do MMM Y")}
        </span>
        <p>{article.excerpt}</p>
        <div className="teacher">
          <img src={article.user.avatar.publicURL} alt="teacher" />
          <span>
            <Link to="/">{article.user.username}</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
