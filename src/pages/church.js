import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner
      imageData={
        data.allStrapiChurch.nodes[0].bannerimage.childImageSharp.fluid
      }
      text={data.allStrapiChurch.nodes[0].bannertext}
      markdown={true}
    />
    <div className="row"></div>
    <div className="row dark"></div>
    <div className="row"></div>
    <div className="row dark"></div>
    <div className="row"></div>
    <div className="row"></div>
  </Layout>
)

export const query = graphql`
  {
    allStrapiChurch {
      nodes {
        bannertext
        bannerimage {
          childImageSharp {
            fluid(maxWidth: 1310, jpegQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
