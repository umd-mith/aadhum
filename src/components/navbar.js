import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./navbar.css"

const NavBar = ({ menuLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <button className="icon" href="#" onClick={() => setMenuOpen(!menuOpen)}> Menu &#9776;</button>
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

  let open = ''
  if (menuOpen || linksActive) {
    open = 'open'
  }

  return (
    <div
      role="menu"
      tabIndex="-1"
      className={`menu-list ${open}`}
      onMouseEnter={() => setLinksActive(true)}
      onMouseLeave={() => setLinksActive(false)}>
      <button onClick={() => setLinksActive(!linksActive)} className={`menu-name ${open}`}>{name}</button>
      <ul className={`links ${open}`}>
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