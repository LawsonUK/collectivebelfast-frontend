import React from "react"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

import "./share.scss"

const Share = () => {
  return (
    <ul className="social-share">
      <li>
        <EmailShareButton url={"https://collectivebelfast.com"} quote={"Test"}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </li>
      <li>
        <FacebookShareButton
          url={"https://collectivebelfast.com"}
          quote={"Test"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={"https://collectivebelfast.com"}
          quote={"Test"}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </li>
      <li>
        <WhatsappShareButton
          url={"https://collectivebelfast.com"}
          quote={"Test"}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </li>
    </ul>
  )
}

export default Share
