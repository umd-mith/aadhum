import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavBar = ({ current }) => (
  <nav>
    <Link
      to="/"
      activeClassName="active"
    >
      Home
    </Link>
    <Link
      to="/connect"
      activeClassName="active"
    >
      Connect
    </Link>
    <Link
      to="/learn"
      activeClassName="active"
    >
      Learn
    </Link>
  </nav>
)

export default NavBar
