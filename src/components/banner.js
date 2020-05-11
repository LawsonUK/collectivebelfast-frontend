import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./banner.scss"

const Banner = ({ imageData, text }) => {
  return (
    <div className="banner">
      <BackgroundImage
        Tag="div"
        className="banner-bg"
        fluid={imageData}
      ></BackgroundImage>
      <span>
        <p>
          Collective is a network of Home Churches in and around Belfast,
          Northern Ireland. We meet in each other's houses every week to study
          the Bible, to pray, and to build and enjoy the kind of close Christian
          community described in the New Testament.
        </p>
        <p>
          We all meet together{" "}
          <Link to="/visit">once every two weeks on Sunday morning</Link> for a
          Central Bible Teaching (CT),{" "}
          <Link to="/church">in a building in the Cathedral Quarter</Link>.
        </p>
      </span>
    </div>
  )
}

export default Banner
