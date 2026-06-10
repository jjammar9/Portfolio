import { NAV_ITEMS } from '../constants/site'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="global-header light">
      <div className="wrap">
        <div className="global-header__logo">
          <Logo />
        </div>
        <nav className="global-header__nav">
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
