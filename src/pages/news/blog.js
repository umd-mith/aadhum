import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"

const BlogPage = ({data, location}) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      AADHUM Blog Content!
  
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      posuere justo a lectus sodales, vel elementum est gravida. Cras a eros ut
      nibh vestibulum varius. Pellentesque a elit lorem. Integer lobortis
      congue quam vel aliquam. Duis in eleifend ligula. In volutpat purus et
      varius tempus. Donec magna felis, fermentum eu nunc non, facilisis
      posuere risus. Sed facilisis libero velit, non sagittis velit congue ut.
      Morbi sed massa ut elit dapibus volutpat. Sed pulvinar sem malesuada
      tellus dapibus, id molestie ante pulvinar. Donec egestas id velit sit
      amet consequat. Nam maximus vel diam a sodales.
      </p>
      
      <h2>All posts</h2>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>{title}</h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <Link to={node.fields.urlPath}>Read more</Link>
          </article>
        )
      })}
      
    </Layout>
  )

}

export default BlogPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            urlPath
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
