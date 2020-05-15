import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

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
      <div>
        <h1>{teaching.title}</h1>
        <div>
          <div>
            <p>
              <Moment format="MMM Do YYYY">{teaching.publishedon}</Moment>
            </p>
            <ReactMarkdown source={teaching.description} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Teaching
