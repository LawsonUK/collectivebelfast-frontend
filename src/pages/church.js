import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"

import "./church.scss"

const IndexPage = ({ data }) => {
  let count = 1

  const renderHtml = data.allStrapiChurch.nodes[0].ministry.map(ministry => {
    const html =
      count % 2 ? (
        <div className="row ministry ministry-left" key={ministry.id}>
          <div className="image">
            <Img fluid={ministry.image.childImageSharp.fluid} />
          </div>
          <div className="text">
            <h3>{ministry.title}</h3>
            <ReactMarkdown source={ministry.description} />
          </div>
        </div>
      ) : (
        <div className="row ministry ministry-right dark" key={ministry.id}>
          <div className="text">
            <h3>{ministry.title}</h3>
            <div className="description">
              <ReactMarkdown source={ministry.description} />
            </div>
          </div>
          <div className="image">
            <Img fluid={ministry.image.childImageSharp.fluid} />
          </div>
        </div>
      )
    count++
    return html
  })

  console.log(renderHtml)

  return (
    <Layout>
      <SEO title="Church" />
      <Banner
        imageData={
          data.allStrapiChurch.nodes[0].bannerimage.childImageSharp.fluid
        }
        text={data.allStrapiChurch.nodes[0].bannertext}
        markdown={true}
      />
      <div className="church">{renderHtml}</div>
    </Layout>
  )
}

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
        ministry {
          id
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 640, jpegQuality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
