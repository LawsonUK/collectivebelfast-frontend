import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Card from "../components/card"
import FeaturedBanner from "../components/featured-banner"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Collective is a network of Home Churches in and around Belfast, Northern Ireland. We meet in each other's houses every week to study the Bible, to pray, and to build and enjoy the kind of close Christian community described in the New Testament."
    />
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
      <ul className="list">
        {data.allStrapiArticle.nodes.map(article => (
          <li key={article.id}>
            <Card article={article} />
          </li>
        ))}
      </ul>
    </div>
    <div className="row heading">
      <h2>
        <Link to="/teachings">Latest Teaching</Link>
      </h2>
    </div>
    <FeaturedBanner
      teaching={
        data.allStrapiTeaching.nodes[data.allStrapiTeaching.nodes.length - 1]
      }
    />
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
    allStrapiTeaching(limit: 1, sort: { fields: publishedon, order: DESC }) {
      nodes {
        slug
        title
        id
        excerpt
        teacher {
          name
          slug
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
