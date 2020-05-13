import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Card from "../components/card"

import "./index.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner
      imageData={
        data.allStrapiHomepage.nodes[0].BannerImage.childImageSharp.fluid
      }
      text={text}
      markdown={false}
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
    <div className="row dark home-teaching">
      <div>
        <Link to="/teachings">Teaching</Link>
        <h2>
          <Link to="/teachings">{data.allStrapiTeaching.nodes[0].title}</Link>
        </h2>
        <span>{data.allStrapiTeaching.nodes[0].excerpt}</span>
        <div className="teacher"></div>
        {/* <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul> */}
      </div>
      <div>
        <Link to="/teachings">
          <Img
            fluid={
              data.allStrapiTeaching.nodes[0].featured_image.childImageSharp
                .fluid
            }
          />
        </Link>
      </div>
    </div>
  </Layout>
)

const text = (
  <>
    <p>
      Collective is a network of Home Churches in and around Belfast, Northern
      Ireland. We meet in each other's houses every week to study the Bible, to
      pray, and to build and enjoy the kind of close Christian community
      described in the New Testament.
    </p>
    <p>
      We all meet together{" "}
      <Link to="/visit">once every two weeks on Sunday morning</Link> for a
      Central Bible Teaching (CT),{" "}
      <Link to="/church">in a building in the Cathedral Quarter</Link>.
    </p>
  </>
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
