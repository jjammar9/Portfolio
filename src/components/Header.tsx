import { useEffect, useState, useMemo } from 'react'
import { NAV_ITEMS } from '../constants/site'
import { Logo } from './Logo'

interface HeaderProps {
  view: string
  onNavigate: (view: string) => void
}

export function Header({ view, onNavigate }: HeaderProps) {
  const [delayedDark, setDelayedDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isDarkView = useMemo(() => view !== 'home', [view])

  useEffect(() => {
    if (view === 'about') {
      const timer = setTimeout(() => setDelayedDark(true), 500)
      return () => clearTimeout(timer)
    } else {
      setDelayedDark(false)
    }
  }, [view])

  const handleNav = (v: string) => {
    onNavigate(v)
    setMenuOpen(false)
  }

  return (
    <header className="global-header light">
      <div className="wrap">
        <div className="global-header__logo">
          <Logo dark={delayedDark} onClick={() => handleNav('home')} />
        </div>
        <nav className="global-header__nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={view === item.view ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(item.view)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className={`hamburger${isDarkView ? ' hamburger--dark' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={view === item.view ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(item.view)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
