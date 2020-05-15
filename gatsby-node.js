/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              slug
            }
          }
        }
        teachings: allStrapiTeaching {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create articles pages.
  const articles = result.data.articles.edges
  articles.forEach((article, index) => {
    createPage({
      path: `/articles/${article.node.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: article.node.slug,
      },
    })
  })

  // Create teaching pages
  const teachings = result.data.teachings.edges
  teachings.forEach((teaching, index) => {
    createPage({
      path: `/teachings/${teaching.node.slug}`,
      component: require.resolve("./src/templates/teaching.js"),
      context: {
        slug: teaching.node.slug,
      },
    })
  })
}
