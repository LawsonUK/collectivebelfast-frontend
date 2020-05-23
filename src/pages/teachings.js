import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedBanner from "../components/featured-banner"
import CardTeaching from "../components/card-teaching"

const IndexPage = ({ data }) => {
  const latest_teachings =
    data.allStrapiTeaching.nodes.length > 1
      ? data.allStrapiTeaching.nodes.shift()
      : []

  return (
    <Layout>
      <SEO title="Teachings" />
      <FeaturedBanner teaching={data.allStrapiTeaching.nodes[0]} />
      <div className="row">
        <h2>
          <Link to="/articles">Latest Teachings</Link>
        </h2>
        <ul className="list">
          {latest_teachings.map(teaching => (
            <li key={teaching.id}>
              <CardTeaching teaching={teaching} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiTeaching {
      nodes {
        slug
        title
        id
        excerpt
        teacher {
          name
          profile {
            childImageSharp {
              fluid(maxWidth: 42, jpegQuality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        featured_image {
          childImageSharp {
            fluid(maxWidth: 617, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
