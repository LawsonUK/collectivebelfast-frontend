import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Card from "../components/card"

import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import circleinstagramIcon from "@iconify/icons-whh/circleinstagram"

import "./index.scss"

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
    <div className="row dark home-teaching">
      <div>
        <Link to="/teachings/">Teaching</Link>
        <h2>
          <Link to={`/teachings/${data.allStrapiTeaching.nodes[0].slug}`}>
            {data.allStrapiTeaching.nodes[0].title}
          </Link>
        </h2>
        <span>{data.allStrapiTeaching.nodes[0].excerpt}</span>
        <div className="teacher">
          <Img
            fluid={
              data.allStrapiTeaching.nodes[0].teacher.profile.childImageSharp
                .fluid
            }
          />
          <span>
            <Link to="/">{data.allStrapiTeaching.nodes[0].teacher.name}</Link>
          </span>
        </div>
        <ul>
          <li>
            {/* <a href="/" target="blank"> */}
            <Icon
              icon={twitterCircleFilled}
              style={{ fontSize: "27.259260177612305px" }}
            />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="/" target="blank"> */}
            <Icon
              icon={facebookIcon}
              style={{ fontSize: "24.851852416992188px" }}
            />
            {/* </a> */}
          </li>
          <li>
            {/* <a href="/" target="blank"> */}
            <Icon
              icon={circleinstagramIcon}
              style={{ fontSize: "24.851852416992188px" }}
            />
            {/* </a> */}
          </li>
        </ul>
      </div>
      <div>
        <Link to={`/teachings/${data.allStrapiTeaching.nodes[0].slug}`}>
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
