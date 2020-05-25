import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
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
    allStrapiHomepage {
      nodes {
        BannerImage {
          childImageSharp {
            fluid(maxWidth: 1310, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        BannerText
      }
    }
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
