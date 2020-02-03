/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            links {
              name
              href
            }
          }
        }
      }
    }
  `)

  // look for a page title in menu data
  if (!title && typeof window !== `undefined`) {
    for (const menuList of data.site.siteMetadata.menuLinks) {
      for (const menuItem of menuList.links) {
        if (window.location.pathname == menuItem.href) {
          title = ` // ${menuItem.name}`
        }
      }
    }
  }

  return (
    <>
      <Header
        title={title} 
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
