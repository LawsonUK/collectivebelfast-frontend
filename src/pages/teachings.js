import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedBanner from "../components/featured-banner"
import CardTeaching from "../components/card-teaching"

const IndexPage = ({ data }) => {
  console.log(data)
  const teachings =
    data.allStrapiTeaching.nodes.length > 0 ? data.allStrapiTeaching.nodes : []
  const latest_teaching = teachings[0]

  return (
    <Layout>
      <SEO title="Teachings" />
      <FeaturedBanner teaching={latest_teaching} />
      <div className="row">
        <h2>
          <Link to="/articles">Latest Teachings</Link>
        </h2>
        <ul className="list">
          {teachings.map(teaching => (
            <li key={teaching.id}>
              <CardTeaching teaching={teaching} />
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
    allStrapiTeaching(sort: { order: DESC, fields: publishedon }) {
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
