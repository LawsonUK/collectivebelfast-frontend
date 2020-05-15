import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      content
      published_on
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <h1>{article.title}</h1>
        <div>
          <div>
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
            <ReactMarkdown source={article.content} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
