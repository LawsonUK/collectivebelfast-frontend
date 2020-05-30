import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Card from "../components/card"
import FeaturedArticle from "../components/featured-article"

import "./article.scss"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      excerpt
      featured_image {
        childImageSharp {
          fluid(maxWidth: 394, jpegQuality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      user {
        username
        avatar {
          childImageSharp {
            fluid(maxWidth: 42, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
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
  console.log("data", data)
  const content = data.strapiArticle
  return (
    <Layout>
      <FeaturedArticle article={content} pageView={true} />
      <div className="content article">
        <div>
          <div>
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
      <div className="prevNext">
        <div>
          <Card article={content} />
        </div>
        <div>
          <Card article={content} />
        </div>
      </div>
    </Layout>
  )
}

export default Article
