import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Latest Articles</h2>
    <ul>
      {data.allStrapiArticle.nodes.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    allStrapiArticle {
      nodes {
        id
        slug
        title
        content
      }
    }
  }
`

export default IndexPage
