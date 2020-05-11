import React from "react"
import { Link } from "gatsby"
import moment from "moment"

import "./card.scss"

const Card = ({ article }) => {
  return (
    <div className="card">
      <div
        className="card-bg"
        style={{
          backgroundImage: `url(${article.featured_image.publicURL})`,
        }}
      ></div>
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
