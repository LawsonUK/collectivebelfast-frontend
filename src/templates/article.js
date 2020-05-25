import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Img from "gatsby-image"

import Layout from "../components/layout"
import "./article.scss"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      article {
        id
        text
        image {
          childImageSharp {
            fluid(maxWidth: 1310, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      published_on
    }
  }
`

const Article = ({ data }) => {
  const content = data.strapiArticle
  return (
    <Layout>
      <div className="content article">
        <h1>{content.title}</h1>
        <div>
          <div>
            <p className="date">
              <Moment format="MMM Do YYYY">{content.published_at}</Moment>
            </p>
            <div className="article-content">
              {content.article.map(content =>
                content.image ? (
                  <div key={content.id}>
                    <Img fluid={content.image.childImageSharp.fluid} />{" "}
                    <ReactMarkdown source={content.text} />
                  </div>
                ) : (
                  <ReactMarkdown source={content.text} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
