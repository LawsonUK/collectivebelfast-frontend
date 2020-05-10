import React from "react"
import { Link } from "gatsby"

import "./banner.scss"

const Banner = ({ url, text }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      {/* <span>{text}</span> */}
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
