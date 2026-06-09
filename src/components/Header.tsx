import { NAV_ITEMS } from '../constants/site'
import { Logo } from './Logo'
import { MenuToggle } from './MenuToggle'

interface HeaderProps {
  menuOpen: boolean
  onToggleMenu: () => void
}

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="global-header light">
      <div className="wrap">
        <div className="global-header__logo">
          <Logo />
        </div>
        <MenuToggle isOpen={menuOpen} onClick={onToggleMenu} />
        <nav className="global-menu">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
