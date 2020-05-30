import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Moment from "react-moment"

import "./featured-banner.scss"
import Share from "./share"

const FeaturedArticle = ({ article, pageView = false }) => {
  return (
    <div className="row dark home-teaching">
      <BackgroundImage
        Tag="div"
        className="featured-teaching-bg"
        fluid={article.featured_image.childImageSharp.fluid}
      ></BackgroundImage>
      <div className="featured-teaching-content">
        {pageView && <Link to={`/articles/`}>Back to Articles</Link>}
        <h2>
          {!pageView ? (
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          ) : (
            article.title
          )}
        </h2>
        <p className="date">
          <Moment format="MMM Do YYYY">{article.published_at}</Moment>
        </p>
        <span>{article.excerpt}</span>
        <div className="teacher">
          <Img fluid={article.user.avatar.childImageSharp.fluid} />
          <span>
            <Link to="/">{article.user.username}</Link>
          </span>
        </div>
        {pageView && <Share />}
      </div>
    </div>
  )
}

export default FeaturedArticle
