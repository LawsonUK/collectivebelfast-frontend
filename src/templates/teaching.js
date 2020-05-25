import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import ReactAudioPlayer from "react-audio-player"

import Layout from "../components/layout"

export const query = graphql`
  query TeachingQuery($slug: String!) {
    strapiTeaching(slug: { eq: $slug }) {
      strapiId
      title
      description
      publishedon
    }
  }
`

const Teaching = ({ data }) => {
  const teaching = data.strapiTeaching
  return (
    <Layout>
      <div className="content">
        <h1>{teaching.title}</h1>
        <div>
          <div>
            <p>
              <Moment format="MMM Do YYYY">{teaching.publishedon}</Moment>
            </p>
            {teaching.audio && (
              <ReactAudioPlayer src={teaching.audio.publicURL} controls />
            )}
            <ReactMarkdown source={teaching.description} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Teaching
