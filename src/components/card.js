import React from "react"
import moment from "moment"

import "./card.scss"

const Card = ({ article }) => {
  return (
    <div className="card">
      <div className="card-bg"></div>
      <h3>{article.title}</h3>
      <span>{moment(article.published_on).format("Do MMM Y")}</span>
      <p>{article.excerpt}</p>
      <div className="teacher">
        <img src={article.user.avatar.publicURL} alt="teacher" />
        <span>{article.user.username}</span>
      </div>
    </div>
  )
}

export default Card
