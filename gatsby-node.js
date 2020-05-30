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
        articles: allStrapiArticle(
          sort: { fields: published_on, order: DESC }
        ) {
          edges {
            node {
              slug
              title
              id
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
        teachers: allStrapiTeacher {
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
  if (articles) {
    articles.forEach((article, index) => {
      const prevArticle = articles[index - 1] ? articles[index - 1].node : false
      const nextArticle = articles[index + 1] ? articles[index + 1].node : false

      createPage({
        path: `/articles/${article.node.slug}`,
        component: require.resolve("./src/templates/article.js"),
        context: {
          slug: article.node.slug,
          prevArticle,
          nextArticle,
        },
      })
    })
  }

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

  // Create teacher pages
  const teachers = result.data.teachers.edges
  teachers.forEach((teacher, index) => {
    createPage({
      path: `/teachers/${teacher.node.slug}`,
      component: require.resolve("./src/templates/teacher.js"),
      context: {
        slug: teacher.node.slug,
      },
    })
  })
}
