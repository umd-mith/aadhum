import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./navbar.css"

const NavBar = ({ menuLinks }) => {
  return (
    <nav>
      {menuLinks.map(cat => (
        <MenuList key={cat.name} name={cat.name} links={cat.links} />
      ))}
    </nav>
  )
}

const MenuList = ({ name, links }) => {
  const [display, setDisplay] = useState(false)
  const style = {
    display: display ? 'block' : 'none',
    transition: 'max-height 0.2s ease-out'
  }
  return (
    <div
      className="menu-list"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}>
      <span className="menu-name">{name}</span>
      <ul style={style} className="links">
        {links.map(link => (
          <li key={link.name}>
            <Link to={link.href} activeClassName="active">
              {link.name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

NavBar.propTypes = {
  menuLinks: PropTypes.array,
}

NavBar.defaultProps = {
  menuLinks: []
}

export default NavBar