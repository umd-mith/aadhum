const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPosts(graphql, actions)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` && node.frontmatter.date) {

    const slug = createFilePath({ node, getNode })
    createNodeField({
      node: node,
      name: `slug`,
      value: slug
    })

    const url = dateUrl(node)
    createNodeField({
      node: node,
      name: `urlPath`,
      value: url
    })

  }
}

async function createBlogPosts(graphql, actions) {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                urlPath
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.urlPath,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

function dateUrl(node) {
  const date = new Date(node.frontmatter.date)
  const year = date.getFullYear().toString()
  let month = (date.getMonth() + 1).toString()
  if (month.length == 1) month = `0${month}`
  return `${year}/${month}${node.fields.slug}`
}