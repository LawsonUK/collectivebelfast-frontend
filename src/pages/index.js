import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Card from "../components/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner
      url={data.allStrapiHomepage.nodes[0].BannerImage.publicURL}
      text={data.allStrapiHomepage.nodes[0].BannerText}
    />
    <div className="row">
      <h2>Latest Articles</h2>
      <ul>
        {data.allStrapiArticle.nodes.map(article => (
          <li key={article.id}>
            <Card />
          </li>
        ))}
      </ul>
    </div>
    <div className="row dark"></div>
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
        content
        title
        slug
        published_on
        id
      }
    }
    allStrapiHomepage {
      nodes {
        BannerImage {
          publicURL
        }
        BannerText
      }
    }
  }
`

export default IndexPage
