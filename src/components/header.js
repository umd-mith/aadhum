import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={style.Header}>
    AADHUM
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
