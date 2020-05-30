import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedArticle from "../components/featured-article"
import Card from "../components/card"

const IndexPage = ({ data }) => {
  const articles =
    data.allStrapiArticle.nodes.length > 0 ? data.allStrapiArticle.nodes : []
  const article = articles[0]

  return (
    <Layout>
      <SEO title="Articles" />
      <FeaturedArticle article={article} />
      <div className="row">
        <h2>
          <Link to="/articles">Latest Articles</Link>
        </h2>
        <ul className="list">
          {articles.map(article => (
            <li key={article.id}>
              <Card article={article} />
            </li>
          ))}
        </ul>
      </div>
      <div className="row dark"></div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiArticle(limit: 4, sort: { order: DESC, fields: published_on }) {
      nodes {
        content
        title
        slug
        published_on
        id
        excerpt
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
        featured_image {
          childImageSharp {
            fluid(maxWidth: 394, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
