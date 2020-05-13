import React from "react"
import BackgroundImage from "gatsby-background-image"
import ReactMarkdown from "react-markdown"
import "./banner.scss"

const Banner = ({ imageData, text, markdown }) => {
  return (
    <div className="banner">
      <BackgroundImage
        Tag="div"
        className="banner-bg"
        fluid={imageData}
      ></BackgroundImage>
      <span>{markdown ? <ReactMarkdown source={text} /> : text}</span>
    </div>
  )
}

export default Banner
