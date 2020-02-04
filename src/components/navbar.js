import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./navbar.css"

const NavBar = ({ menuLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <a className="icon" href="#" onClick={() => setMenuOpen(!menuOpen)}> Menu &#9776;</a>
      {menuLinks.map(cat => {
        return (
          <MenuList key={cat.name} name={cat.name} links={cat.links} menuOpen={menuOpen} />
        )
      })}
    </nav>
  )
}

const MenuList = ({ name, links, menuOpen }) => {
  const [linksActive, setLinksActive] = useState(false)

  let nameOpen = ''
  let linksOpen = ''

  if (menuOpen) {
    nameOpen = 'active'
    linksOpen = 'active'
  }

  if (linksActive) {
    linksOpen = 'active'
  }

  return (
    <div
      className={`menu-list ${nameOpen}`}
      onMouseEnter={() => setLinksActive(true)}
      onMouseLeave={() => setLinksActive(false)}>
      <span className={`menu-name ${nameOpen}`}>{name}</span>
      <ul className={`links ${linksOpen}`}>
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