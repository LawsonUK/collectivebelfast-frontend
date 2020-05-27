import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./featured-banner.scss"
import Share from "./share"

const FeaturedArticle = ({ article }) => {
  return (
    <div className="row dark home-teaching">
      <BackgroundImage
        Tag="div"
        className="featured-teaching-bg"
        fluid={article.featured_image.childImageSharp.fluid}
      ></BackgroundImage>
      <div className="featured-teaching-content">
        <h2>
          <Link to={`/teachings/${article.slug}`}>{article.title}</Link>
        </h2>
        <span>{article.excerpt}</span>
        <div className="teacher">
          <Img fluid={article.user.avatar.childImageSharp.fluid} />
          <span>
            <Link to="/">{article.user.username}</Link>
          </span>
        </div>
        <Share />
      </div>
    </div>
  )
}

export default FeaturedArticle
