import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"

import "./header.css"

const Header = ({ title, menuLinks, siteTitle }) => (
  <header>
    <div className="">
      <h1>
        <Link to="/">{siteTitle}</Link>
        <span className="page-title">{title}</span>
      </h1>
    </div>
    <NavBar menuLinks={menuLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: []
}

export default Header
