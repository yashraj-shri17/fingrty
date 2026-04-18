import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__brand" end onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Fingrity Advisors" className="site-header__logo" />
        </NavLink>
        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">Menu</span>
          <span className={`site-header__burger ${open ? 'is-open' : ''}`} aria-hidden />
        </button>
        <nav id="site-nav" className={`site-header__nav ${open ? 'is-open' : ''}`}>
          <ul className="site-header__list">
            {nav.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}
                  onClick={() => setOpen(false)}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <Link to="/coaching" className="nav-coaching-badge" onClick={() => setOpen(false)}>
            <span className="badge-glow"></span>
            <span className="badge-text">
              Coach
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
