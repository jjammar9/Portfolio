import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../constants/site'
import { Logo } from './Logo'

interface HeaderProps {
  view: string
  onNavigate: (view: string) => void
}

export function Header({ view, onNavigate }: HeaderProps) {
  const [delayedDark, setDelayedDark] = useState(false)

  useEffect(() => {
    if (view === 'about') {
      const timer = setTimeout(() => setDelayedDark(true), 500)
      return () => clearTimeout(timer)
    } else {
      setDelayedDark(false)
    }
  }, [view])

  return (
    <header className="global-header light">
      <div className="wrap">
        <div className="global-header__logo">
          <Logo dark={delayedDark} onClick={() => onNavigate('home')} />
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
                    onNavigate(item.view)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
