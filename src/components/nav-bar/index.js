import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './nav-bar.scss'

export const NavBar = ({ links }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="NavBar">
      <button className="NavBar__MenuButton" onClick={() => setOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">{isOpen ? 'close menu' : 'open menu'}</span>
      </button>
      <div className={`NavBar__Links ${isOpen && 'NavBar__Links--active'}`}>
        {links.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
}
