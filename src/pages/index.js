import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Card from "../components/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner
      imageData={
        data.allStrapiHomepage.nodes[0].BannerImage.childImageSharp.fluid
      }
      text={data.allStrapiHomepage.nodes[0].BannerText}
    />
    <div className="row">
      <h2>
        <Link to="/articles">Latest Articles</Link>
      </h2>
      <ul>
        {data.allStrapiArticle.nodes.map(article => (
          <li key={article.id}>
            <Card article={article} />
          </li>
        ))}
      </ul>
    </div>
    <div className="row dark"></div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
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
        excerpt
        user {
          username
          avatar {
            publicURL
          }
        }
        featured_image {
          childImageSharp {
            fluid(maxWidth: 394, jpegQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
    allStrapiHomepage {
      nodes {
        BannerImage {
          childImageSharp {
            fluid(maxWidth: 1310, jpegQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        BannerText
      }
    }
  }
`

export default IndexPage
