import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./navbar.css"

const NavBar = ({ menuLinks }) => {
  const [display, toggleDisplay] = useState(false)
  return (
    <nav>
      <a id="icon" href="#" onClick={() => toggleDisplay(!display)}> Menu &#9776;</a>
      {menuLinks.map(cat => {
        return (
          <MenuList key={cat.name} name={cat.name} links={cat.links} defaultDisplay={display} />
        )
      })}
    </nav>
  )
}

const MenuList = ({ name, links, defaultDisplay }) => {
  console.log(defaultDisplay)
  const [display, setDisplay] = useState(false)
  const style = {
    display: display || defaultDisplay ? 'block' : 'none',
    transition: 'max-height 0.2s ease-out'
  }
  return (
    <div
      className="menu-list"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}>
      <span style={style} className="menu-name">{name}</span>
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

const MobileMenuList = ({ name, links }) => {
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